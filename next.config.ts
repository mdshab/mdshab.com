import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // Articles render inside React Server Components. @next/mdx defaults
    // this to a provider shim backed by @mdx-js/react, whose
    // createContext does not exist in the react-server build — disable it
    // (we use no MDXProvider).
    providerImportSource: null,
  },
});

export default withMDX(nextConfig);
