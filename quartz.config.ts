import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "notes",
    pageTitleSuffix: " — kesh kesh",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "localhost:8080",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "local",
      cdnCaching: false,
      typography: {
        header: "DOS",
        body: "DOS",
        code: "DOS",
      },
      colors: {
        lightMode: {
          light: "#dce3e1",
          lightgray: "#e8eceb",
          gray: "lightgrey",
          darkgray: "darkslategrey",
          dark: "darkslategrey",
          secondary: "rgb(0, 109, 128)",
          tertiary: "rgb(100, 155, 165)",
          highlight: "rgba(240, 248, 255, 0.8)",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#1e2d35",
          lightgray: "#2a3f4a",
          gray: "#6a9ab0",
          darkgray: "#c5dce3",
          dark: "#c5dce3",
          secondary: "rgb(70, 170, 190)",
          tertiary: "rgb(50, 120, 140)",
          highlight: "rgba(35, 55, 68, 0.95)",
          textHighlight: "#fff23688",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.ExplicitPublish()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // CustomOgImages disabled — local font not compatible with OG image renderer
      // Plugin.CustomOgImages(),
    ],
  },
}

export default config
