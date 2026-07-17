"use client";

import { motion } from "framer-motion";

const email = "khushipatil1377@gmail.com";

export default function Contact() {
  return (
    <section id="contact" className="flex w-full justify-center mt-20">
      <div className="w-full max-w-5xl px-8 py-10">
        <div className="flex items-center gap-6">
          <h2 className="whitespace-nowrap text-4xl font-extrabold text-foreground">
            / contact
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mt-5 flex flex-wrap items-baseline justify-between gap-4"
        >
          <p className="max-w-2xl text-lg leading-9 text-text-secondary">
            Have a project in mind or just want to say hi? My inbox is always
            open.
          </p>

          <a
            href={`mailto:${email}`}
            className="text-2xl font-extrabold text-primary transition hover:text-primary-hover"
          >
            {email}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
