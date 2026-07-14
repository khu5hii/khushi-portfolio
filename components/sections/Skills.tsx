"use client";

import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  SiJavascript,
  SiPhp,
  SiHtml5,
  SiCss,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiFigma,
  SiPostman,
  SiAndroidstudio,
  SiVercel,
  SiRender,
  SiXampp,
  SiFilezilla,
  SiPhpmyadmin,
  SiPostgresql,
} from "react-icons/si";
import { TbSql, TbApi } from "react-icons/tb";

type SkillItem = { name: string; icon: IconType };
type SkillGroup = { label: string; items: SkillItem[]; wide?: boolean };

const groups: SkillGroup[] = [
  {
    label: "Language",
    items: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "SQL", icon: TbSql },
      { name: "PHP", icon: SiPhp },
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss },
      { name: "React", icon: SiReact },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "REST APIs", icon: TbApi },
    ],
  },
  {
    label: "Database",
    items: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
  },
  {
    label: "Tooling",
    wide: true,
    items: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Figma", icon: SiFigma },
      { name: "Postman", icon: SiPostman },
      { name: "Android Studio", icon: SiAndroidstudio },
      { name: "Vercel", icon: SiVercel },
      { name: "Render", icon: SiRender },
      { name: "XAMPP", icon: SiXampp },
      { name: "FileZilla", icon: SiFilezilla },
      { name: "phpMyAdmin", icon: SiPhpmyadmin },
    ],
  },
];

function SkillRow({ item }: { item: SkillItem }) {
  const Icon = item.icon;
  return (
    <li className="group flex items-center gap-2.5 py-1.5 text-sm text-text-secondary transition-colors duration-200 hover:text-foreground">
      <Icon className="h-4 w-4 shrink-0 transition-colors duration-200 group-hover:text-primary" />
      {item.name}
    </li>
  );
}

function GroupColumn({ group }: { group: SkillGroup }) {
  return (
    <div className={group.wide ? "lg:col-span-2" : undefined}>
      <p className="mb-2 text-sm font-semibold text-primary">{group.label}</p>
      <ul className={group.wide ? "grid grid-cols-2 gap-x-6" : undefined}>
        {group.items.map((item) => (
          <SkillRow key={item.name} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="flex w-full justify-center mt-20">
      <div className="w-full max-w-5xl px-8 py-10">
        <div className="flex items-center gap-6">
          <h2 className="whitespace-nowrap text-4xl font-extrabold text-foreground">
            / skills
          </h2>
          <div className="h-px max-w-80 flex-1 bg-border" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mt-8 grid grid-cols-2 gap-x-8 gap-y-8 rounded-2xl border border-border px-6 py-6 sm:grid-cols-3 lg:grid-cols-6"
        >
          {groups.map((group) => (
            <GroupColumn key={group.label} group={group} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}