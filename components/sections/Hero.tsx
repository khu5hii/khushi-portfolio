"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto flex min-h-[calc(90vh-100px)] max-w-7xl items-center justify-between px-8"
    >
      <div></div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="max-w-3xl"
      >
        <h1 className="text-5xl leading-tight text-foreground">
          hi, <span className="text-primary font-extrabold">khushi</span> here.
        </h1>

        <p className="mt-5 max-w-xl text-lg leading-8 text-text-secondary">
          Student. Developer. Always building something.
          <br />
          Currently exploring full-stack development and AI.
        </p>

        <div className="mt-7 flex items-center gap-4">
          <a
            href="#projects"
            className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover"
          >
            View Work
          </a>

          <a
            href="mailto:khushipatil1377@gmail.com"
            className="rounded-xl border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
          >
            Say hi!
          </a>
        </div>
      </motion.div>
    </section>
  );
}
