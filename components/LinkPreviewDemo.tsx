"use client";
import React from "react";
import { LinkPreview } from "@/components/ui/LinkPreview";

export function LinkPreviewDemo() {
  return (
    <div className="flex flex-col gap-4 lg:gap-8 p-4">
      <p className="text-neutral-500 dark:text-neutral-400 text-lg md:text-2xl">
        Welcome to my portfolio, where innovation meets functionality. Explore
        my projects to see how I leverage a range of cutting-edge technologies
        and platforms:
      </p>

      <p className="text-neutral-500 dark:text-neutral-400 text-lg md:text-2xl">
        I specialize in Frontend Development using{" "}
        <LinkPreview
          url="https://github.com/Boody2004/learn-react.js"
          className="font-bold"
        >
          React.js
        </LinkPreview>
        ,{" "}
        <LinkPreview url="https://yrwo.org" className="font-bold">
          Vue.js
        </LinkPreview>
        ,{" "}
        <LinkPreview
          url="https://github.com/Boody2004/learn-next.js-13"
          className="font-bold"
        >
          Next.js
        </LinkPreview>
        ,{" "}
        <LinkPreview
          url="https://github.com/Boody2004/learn-nuxt3.js"
          className="font-bold"
        >
          Nuxt.js
        </LinkPreview>
        , and{" "}
        <LinkPreview
          url="https://github.com/Boody2004/learn-svelte"
          className="font-bold"
        >
          Svelte
        </LinkPreview>
        , complemented by CSS frameworks and UI libraries like{" "}
        <LinkPreview
          url="https://github.com/Boody2004/learn-tailwindcss"
          className="font-bold"
        >
          Tailwind CSS
        </LinkPreview>
        ,{" "}
        <LinkPreview
          url="https://test-dental-clinic.vercel.app"
          className="font-bold"
        >
          Bootstrap
        </LinkPreview>
        ,{" "}
        <LinkPreview
          url="https://github.com/Boody2004/learn-material-ui"
          className="font-bold"
        >
          Material UI
        </LinkPreview>
        ,{" "}
        <LinkPreview url="https://mnen.vercel.app" className="font-bold">
          Vuetifyjs
        </LinkPreview>
        ,{" "}
        <LinkPreview
          url="https://aaaportfolio.vercel.app"
          className="font-bold"
        >
          Aceternity UI
        </LinkPreview>
        , and{" "}
        <LinkPreview
          url="https://github.com/Boody2004/iphone"
          className="font-bold"
        >
          GSAP
        </LinkPreview>
        .
      </p>

      <p className="text-neutral-500 dark:text-neutral-400 text-lg md:text-2xl">
        On the Backend, I work with{" "}
        <LinkPreview
          url="https://github.com/Boody2004/test-node-express-vercel"
          className="font-bold"
        >
          Node.js
        </LinkPreview>
        ,{" "}
        <LinkPreview
          url="https://node-express-vercel-js.vercel.app"
          className="font-bold"
        >
          Express.js
        </LinkPreview>
        , and{" "}
        <LinkPreview
          url="https://github.com/Boody2004/MERN"
          className="font-bold"
        >
          MongoDB
        </LinkPreview>
        , ensuring robust and scalable solutions.
      </p>

      <p className="text-neutral-500 dark:text-neutral-400 text-lg md:text-2xl">
        For Version Control & Tools, I rely on{" "}
        <LinkPreview url="https://git-scm.com" className="font-bold">
          Git
        </LinkPreview>{" "}
        and{" "}
        <LinkPreview url="https://github.com/Boody2004" className="font-bold">
          GitHub
        </LinkPreview>
        .
      </p>

      <p className="text-neutral-500 dark:text-neutral-400 text-lg md:text-2xl">
        My projects are hosted on various Cloud Platforms including{" "}
        <LinkPreview url="https://heroku.com" className="font-bold">
          Heroku
        </LinkPreview>
        ,{" "}
        <LinkPreview url="https://www.netlify.com" className="font-bold">
          Netlify
        </LinkPreview>
        ,{" "}
        <LinkPreview url="https://vercel.com" className="font-bold">
          Vircel
        </LinkPreview>
        ,{" "}
        <LinkPreview url="https://www.hostinger.com" className="font-bold">
          Hostinger
        </LinkPreview>
        ,{" "}
        <LinkPreview url="https://www.hostgator.com" className="font-bold">
          Hostgator
        </LinkPreview>
        , and{" "}
        <LinkPreview url="https://ae.godaddy.com" className="font-bold">
          Godaddy
        </LinkPreview>
        . Additionally, I specialize in developing websites with CMS solutions
        like{" "}
        <LinkPreview url="http://echelonestate.ae" className="font-bold">
          WordPress
        </LinkPreview>
        .
      </p>

      <p className="text-neutral-500 dark:text-neutral-400 text-lg md:text-2xl">
        Explore my projects to see these technologies.
      </p>
    </div>
  );
}
