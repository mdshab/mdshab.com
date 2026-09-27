"use client";

import { mergeClasses } from "@fluentui/react-components";
import { SearchRegular } from "@fluentui/react-icons";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { searchContent, type SearchItem } from "@/lib/search-index";

const kindLabels: Record<SearchItem["kind"], string> = {
  event: "Event",
  thinker: "Thinker",
  question: "Question",
  journey: "Journey",
  project: "Work",
  article: "Writing",
  thread: "Thread",
  page: "Page",
};

/**
 * Global command palette. Opens with ⌘K / Ctrl+K, works with keyboard
 * and with touch (tap the search button). Results come from the shared
 * search index built over the whole content graph.
 */
export function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const results = useMemo(() => searchContent(query), [query]);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActiveIndex(0);
  }, []);

  /* Global keyboard shortcut */
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((open) => !open);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  /* Focus input when opened */
  useEffect(() => {
    if (open) {
      // Wait a frame so the dialog exists
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  const go = useCallback(
    (item: SearchItem) => {
      close();
      router.push(item.href);
    },
    [close, router],
  );

  function onInputKeyDown(event: React.KeyboardEvent) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (event.key === "Enter") {
      event.preventDefault();
      const item = results[activeIndex];
      if (item) go(item);
    } else if (event.key === "Escape") {
      close();
    }
  }

  /* Keep active option in view */
  useEffect(() => {
    const list = listRef.current;
    const active = list?.children[activeIndex] as HTMLElement | undefined;
    active?.scrollIntoView({ block: "nearest" });
  }, [activeIndex]);

  return (
    <>
      <button
        type="button"
        className="palette-trigger"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        <SearchRegular aria-hidden="true" />
        <span className="palette-trigger-label">Search</span>
        <kbd className="palette-kbd" aria-hidden="true">
          ⌘K
        </kbd>
      </button>

      {open && (
        <div
          className="palette-overlay"
          onClick={(event) => {
            if (event.target === event.currentTarget) close();
          }}
        >
          <div
            className="palette-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Search the site"
          >
            <div className="palette-input-row">
              <SearchRegular aria-hidden="true" className="palette-input-icon" />
              <input
                ref={inputRef}
                type="text"
                role="combobox"
                aria-expanded={results.length > 0}
                aria-controls="palette-results"
                aria-activedescendant={
                  results[activeIndex]
                    ? `palette-option-${activeIndex}`
                    : undefined
                }
                aria-label="Search events, thinkers, questions, articles"
                placeholder="Search events, thinkers, questions…"
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setActiveIndex(0);
                }}
                onKeyDown={onInputKeyDown}
                autoComplete="off"
                spellCheck={false}
              />
              <kbd className="palette-kbd" aria-hidden="true">
                esc
              </kbd>
            </div>

            {query && results.length === 0 && (
              <p className="palette-empty">Nothing found for “{query}”.</p>
            )}

            {!query && (
              <p className="palette-hint">
                Try “paper”, “stoic”, “Kubernetes”, “Mansa Musa” — or a
                section name.
              </p>
            )}

            {results.length > 0 && (
              <ul id="palette-results" className="palette-results" ref={listRef} role="listbox" aria-label="Search results">
                {results.map((item, index) => (
                  <li key={item.id} role="none">
                    <button
                      type="button"
                      id={`palette-option-${index}`}
                      role="option"
                      aria-selected={index === activeIndex}
                      className={mergeClasses(
                        "palette-option",
                        index === activeIndex && "palette-option-active",
                      )}
                      onClick={() => go(item)}
                      onMouseEnter={() => setActiveIndex(index)}
                    >
                      <span className={`palette-kind palette-kind-${item.kind}`}>
                        {kindLabels[item.kind]}
                      </span>
                      <span className="palette-option-text">
                        <span className="palette-option-title">{item.title}</span>
                        {item.subtitle && (
                          <span className="palette-option-subtitle">
                            {item.subtitle}
                          </span>
                        )}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </>
  );
}
