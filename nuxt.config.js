export default {
  mode: "spa",
  target: "static",
  rootDir: "./",
  srcDir: "src",
  head: {
    title: "Arda Soytürk",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content:
          "Check out my little portfolio and learn more about me before checking my other projects! This page will help you a lot about learning more about who's EGGSY."
      },
      {
        name: "og:description",
        content:
          "Check out my little portfolio and learn more about me before checking my other projects! This page will help you a lot about learning more about who's EGGSY."
      },
      {
        name: "og:site_name",
        content: "arda.js.org"
      }
    ],
    link: [
      { rel: "shortcut icon", href: "/favicon.png" },
      {
        rel: "stylesheet",
        href: "https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
      }
    ]
  },
  css: [],
  plugins: [],
  components: true,
  modules: ["nuxt-fullpage.js"],
  buildModules: ["@nuxtjs/color-mode"],
  build: {}
};
