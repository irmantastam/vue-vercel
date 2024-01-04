import svgLoader from "vite-svg-loader";

export default {
  nitro: {
    preset: "vercel-edge",
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Irmantas Tamašauskas",
      meta: [
        { ["http-equiv"]: "X-UA-Compatible", content: "IE=edge" },
        {
          name: "description",
          content:
            "I'm a Frontend developer with over 9 years of professional experience. I ❤️ crafting optimised, accessible and elegant web solutions.",
        },
      ],
      link: [
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        { rel: "manifest", href: "/site.webmanifest" },
      ],
    },
  },
  vite: {
    plugins: [
      svgLoader({
        // Your settings.
      }),
    ],
  },
  modules: ["nuxt-gtag"],
  gtag: {
    id: process.env.GOOGLE_ANALYTICS_ID,
  },
};
