"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-8 py-10">
      <div className="flex items-center gap-6">
        <h2 className="whitespace-nowrap text-4xl font-extrabold text-foreground">
          / about me
        </h2>
        <div className="h-px flex-1 bg-border" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex mt-5 justify-between gap-20"
      >
        <div className="max-w-3xl">
          <p className="text-lg leading-9 text-text-secondary">
            I enjoy building modern web applications, exploring AI, and
            continuously learning new technologies.
          </p>

          <p className="mt-5 text-lg leading-9 text-text-secondary">
            Outside of coding, I enjoy exploring new technologies, refining UI
            designs, and turning ideas into reality.
          </p>

          <p className="mt-5 text-lg leading-9 text-text-secondary">
            I'm always looking for opportunities to learn, collaborate, and
            create experiences that leave a lasting impact.
          </p>
        </div>

        <div className="shrink-0">
          <img
            src="/profile.jpeg"
            alt="Profile"
            className="h-[300px] w-[380px] rounded-2xl object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}
