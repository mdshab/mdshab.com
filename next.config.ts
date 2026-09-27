import createMDX from "@next/mdx";

/** @type {import('next').NextConfig } */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  async redirects() {
    /* /lab was superseded by /work; old links keep working. */
    return [
      { source: "/lab", destination: "/work", permanent: true },
      { source: "/lab/mdshab-com", destination: "/work/this-website", permanent: true },
      { source: "/lab/communication-timeline-engine", destination: "/work/this-website", permanent: true },
      { source: "/lab/abstraction-ladder", destination: "/thinking#abstraction-ladder", permanent: true },
      { source: "/lab/telecom-evolution-map", destination: "/thinking#telecom-cloud-map", permanent: true },
    ];
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // Articles render inside React Server Components. @next/mdx defaults
    // this to a provider shim backed by @mdx-js/react, whose createContext
    // does not exist in the react-server build — disable it
    // (we use no MDXProvider).
    providerImportSource: null,
  },
});

export default withMDX(nextConfig);
