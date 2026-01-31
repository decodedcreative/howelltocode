import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../../../packages/design-system/src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  framework: "@storybook/react-vite",
  viteFinal: async (viteConfig) => {
    const repoRoot = path.resolve(__dirname, "../../..");
    return {
      ...viteConfig,
      server: {
        ...viteConfig.server,
        fs: {
          ...viteConfig.server?.fs,
          allow: [repoRoot, ...(viteConfig.server?.fs?.allow ?? [])],
        },
      },
    };
  },
};

export default config;
