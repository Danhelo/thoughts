import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "danhelo's thoughts",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "thoughts.danhelo.com",
    ignorePatterns: [
      "private",
      "Templates",
      "Excalidraw",
      ".obsidian",
      "copilot",
      "THE Journal/Days",
      "THE Journal/People",
      "THE Journal/Self",
      "THE Journal/Weeks",
      "THE Journal/Months",
      "THE Journal/Happenings",
    ],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "DM Serif Display",
        body: "Instrument Sans",
        code: "SFMono-Regular",
      },
      colors: {
        lightMode: {
          light: "#e5dab9",
          lightgray: "#d4c799",
          gray: "#8a7360",
          darkgray: "#6b4c35",
          dark: "#4a3121",
          secondary: "#8c5e35",
          tertiary: "#a46f3e",
          highlight: "rgba(140, 94, 53, 0.12)",
          textHighlight: "#f0e8d888",
        },
        darkMode: {
          light: "#0d0a07",
          lightgray: "#25201a",
          gray: "#7a6b56",
          darkgray: "#bfab8a",
          dark: "#e8dcc4",
          secondary: "#d4a24e",
          tertiary: "#e6b85a",
          highlight: "rgba(212, 162, 78, 0.12)",
          textHighlight: "#f5e6c888",
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
      Plugin.Description({ descriptionLength: 150 }),
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
    ],
  },
}

export default config
