"use client";

import { motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const DURATIONS = [
  { minutes: 1, label: "1 min" },
  { minutes: 3, label: "3 min" },
  { minutes: 5, label: "5 min" },
  { minutes: 10, label: "10 min" },
] as const;

const PATTERNS = [
  {
    id: "natural",
    label: "Natural",
    /** phase lengths in seconds: [inhale, hold, exhale] (no hold) */
    phases: [4, 0, 4],
    note: "Breathe as you normally would — the circle sets an easy pace.",
  },
  {
    id: "box",
    label: "Box",
    phases: [4, 4, 4],
    note: "Inhale 4 · hold 4 · exhale 4. Four equal sides, like the name.",
  },
  {
    id: "46",
    label: "4–6",
    phases: [4, 0, 6],
    note: "Inhale 4 · exhale 6. The longer exhale leans toward calm.",
  },
] as const;

type Phase = "inhale" | "hold" | "exhale";

/**
 * The breathing circle. Respects prefers-reduced-motion by replacing the
 * animated scale with a text phase indicator only. No claims, no gamification.
 */
export function BreathingExercise() {
  const prefersReducedMotion = useReducedMotion();

  const [running, setRunning] = useState(false);
  const [duration, setDuration] = useState<number>(1);
  const [patternId, setPatternId] = useState<string>("natural");
  const [phase, setPhase] = useState<Phase>("inhale");
  const [remaining, setRemaining] = useState<number>(0);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const phaseEndRef = useRef<number>(0);

  const pattern =
    PATTERNS.find((p) => p.id === patternId) ?? PATTERNS[0];
  const patternPhases = useMemo(
    () => [...pattern.phases] as [number, number, number],
    [pattern],
  );

  const stop = useCallback(() => {
    setRunning(false);
    setPhase("inhale");
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  /* total-session countdown */
  useEffect(() => {
    if (!running) return;
    const interval = setInterval(() => {
      setRemaining((seconds) => {
        if (seconds <= 1) {
          stop();
          return 0;
        }
        return seconds - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [running, stop]);

  /* phase machine */
  useEffect(() => {
    if (!running || prefersReducedMotion) return;

    const [inhale, hold, exhale] = patternPhases;
    const phases = (
      [
        ["inhale", inhale] as [Phase, number],
        ["hold", hold] as [Phase, number],
        ["exhale", exhale] as [Phase, number],
      ] as Array<[Phase, number]>
    ).filter((pair) => pair[1] > 0);

    let index = 0;
    /* The first phase is always "inhale", which is also the resting
       state — so no synchronous setState is needed here. */

    function advance() {
      index = (index + 1) % phases.length;
      const [nextPhase, secs] = phases[index];
      setPhase(nextPhase);
      phaseEndRef.current = Date.now() + secs * 1000;
    }
    phaseEndRef.current = Date.now() + phases[0][1] * 1000;

    const interval = setInterval(() => {
      if (Date.now() >= phaseEndRef.current) advance();
    }, 100);

    return () => clearInterval(interval);
  }, [running, patternPhases, prefersReducedMotion]);

  function start() {
    setRemaining(duration * 60);
    setRunning(true);
  }

  const minutesLeft = Math.floor(remaining / 60);
  const secondsLeft = remaining % 60;

  const circleScale = phase === "inhale" ? 1 : phase === "hold" ? 1 : 0.62;
  const phaseInstruction =
    phase === "inhale" ? "Breathe in" : phase === "hold" ? "Hold" : "Breathe out";

  const transitionSeconds =
    phase === "inhale" ? patternPhases[0] : patternPhases[2];

  return (
    <section
      aria-labelledby="breathe-h"
      className="breathe"
      aria-describedby="breathe-note"
    >
      <h2 id="breathe-h" className="mono-meta breathe-label">
        Breathe
      </h2>

      <div className="breathe-controls">
        <fieldset className="breathe-fieldset">
          <legend className="mono-meta">Duration</legend>
          <div className="breathe-options" role="group">
            {DURATIONS.map((option) => (
              <button
                key={option.minutes}
                type="button"
                className={`chip${duration === option.minutes ? " chip-active" : ""}`}
                aria-pressed={duration === option.minutes}
                onClick={() => {
                  setDuration(option.minutes);
                  if (running) stop();
                }}
              >
                {option.label}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset className="breathe-fieldset">
          <legend className="mono-meta">Pattern</legend>
          <div className="breathe-options" role="group">
            {PATTERNS.map((option) => (
              <button
                key={option.id}
                type="button"
                className={`chip${patternId === option.id ? " chip-active" : ""}`}
                aria-pressed={patternId === option.id}
                onClick={() => {
                  setPatternId(option.id);
                  if (running) stop();
                }}
              >
                {option.label}
              </button>
            ))}
          </div>
        </fieldset>

        <p id="breathe-note" className="breathe-note">
          {pattern.note}
        </p>
      </div>

      <div className="breathe-stage">
        {running ? (
          <>
            <div className="breathe-circle-wrap" aria-hidden="true">
              {prefersReducedMotion ? (
                <div className="breathe-circle breathe-circle-still" />
              ) : (
                <motion.div
                  className="breathe-circle"
                  animate={{ scale: circleScale }}
                  transition={{
                    duration: transitionSeconds,
                    ease: "easeInOut",
                  }}
                />
              )}
            </div>
            <p className="breathe-phase" role="status" aria-live="polite">
              {prefersReducedMotion ? (
                <>Breathe naturally · {phaseInstruction === "Hold" ? "hold" : "follow your own pace"}</>
              ) : (
                phaseInstruction
              )}
            </p>
            <p className="breathe-remaining mono-meta" aria-hidden="true">
              {minutesLeft}:{String(secondsLeft).padStart(2, "0")}
            </p>
            <button type="button" className="btn btn-ghost" onClick={stop}>
              End session
            </button>
            <p className="mono-meta breathe-sr-only" aria-live="assertive">
              {remaining === 0
                ? "Session complete"
                : `${minutesLeft} minutes ${secondsLeft} seconds remaining`}
            </p>
          </>
        ) : (
          <>
            <div className="breathe-circle-wrap" aria-hidden="true">
              <div className="breathe-circle breathe-circle-idle" />
            </div>
            <button type="button" className="btn btn-mind breathe-start" onClick={start}>
              Begin {duration} minute{duration > 1 ? "s" : ""} · {pattern.label}
            </button>
          </>
        )}
      </div>

      <p className="breathe-disclaimer">
        A pause, not a treatment. If breathing exercises feel wrong for you,
        skip them — this page also works as a place to read and think.
      </p>
    </section>
  );
}
