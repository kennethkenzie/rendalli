"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ArrowLeft } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export function PostLayout({
  title,
  date,
  readTime,
  category,
  cover,
  children,
}: {
  title: string;
  date: string;
  readTime: string;
  category: string;
  cover: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.1 });

  return (
    <article ref={ref}>
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-rendalli-green origin-left z-50"
        aria-hidden
      />

      {/* HERO */}
      <section className="relative pt-32 pb-16 bg-background">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <Link href="/journal" className="inline-flex items-center gap-2 text-sm text-deep-forest hover:text-rendalli-green transition mb-10">
              <ArrowLeft size={16} /> Back to journal
            </Link>
            <p className="text-[11px] tracking-[0.3em] uppercase text-rendalli-green mb-4">{category}</p>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE }}
            className="text-4xl md:text-6xl font-light tracking-tight text-night-leaf text-balance leading-[1.05]"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-6 text-sm text-deep-forest/70 tracking-wider"
          >
            {date} · {readTime}
          </motion.p>
        </div>
      </section>

      {/* COVER */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: EASE }}
        className="max-w-5xl mx-auto px-6 md:px-10"
      >
        <div className="relative aspect-[16/9] rounded-3xl overflow-hidden">
          <Image src={cover} alt={title} fill sizes="(min-width: 1024px) 1024px, 100vw" className="object-cover" priority />
        </div>
      </motion.div>

      {/* BODY */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            {children}
          </motion.div>
        </div>
      </section>
    </article>
  );
}
