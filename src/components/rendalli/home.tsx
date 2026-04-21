"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ArrowRight, Leaf, Fish, Sun, ArrowUpRight } from "lucide-react";
import { BRAND, IMAGES } from "@/lib/rendalli";
import { AvailableNow } from "@/components/rendalli/available-now";
import { Newsletter } from "@/components/rendalli/newsletter";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

import type { JournalMeta } from "@/lib/journal";

export function Home({ posts }: { posts: JournalMeta[] }) {
  const POSTS = posts;
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const tagWords = "Fresh from the lake,\nstraight to your table.".split(" ");

  return (
    <>
      {/* HERO — parallax with staggered word reveal + water ripples */}
      <section ref={heroRef} className="relative h-[100dvh] overflow-hidden bg-night-leaf text-white">
        <motion.div style={{ y, scale }} className="absolute inset-0">
          <Image
            src={IMAGES.heroBg}
            alt="Lake at sunrise"
            fill
            priority
            sizes="100vw"
            className="object-cover brightness-[0.55]"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-night-leaf/40 via-transparent to-night-leaf" />

        {/* water ripples */}
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          {[0, 1.1, 2.2].map((d, i) => (
            <span
              key={i}
              className="absolute left-[12%] bottom-[22%] block w-24 h-24 rounded-full border border-rendalli-green/50 animate-ripple"
              style={{ animationDelay: `${d}s` }}
            />
          ))}
        </div>

        <motion.div style={{ opacity }} className="relative z-10 h-full flex flex-col justify-end max-w-7xl mx-auto px-6 md:px-10 pb-20 md:pb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="text-[11px] md:text-xs tracking-[0.3em] uppercase text-rendalli-green mb-6 flex items-center gap-3"
          >
            <span className="inline-block w-8 h-px bg-rendalli-green" /> Rendalli · Uganda · East Africa
          </motion.p>

          <h1 className="font-light text-4xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight max-w-5xl text-balance">
            {tagWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.15 + i * 0.08, ease: EASE }}
                className="inline-block mr-[0.25em]"
              >
                {word.includes("\n") ? (
                  <>
                    {word.replace("\n", "")}
                    <br />
                  </>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8, ease: EASE }}
            className="mt-10 flex flex-wrap gap-4 items-center"
          >
            <Link
              href="/products"
              className="group inline-flex items-center gap-3 bg-fresh-lemon text-night-leaf px-7 py-4 rounded-full font-medium hover:bg-white transition-colors"
            >
              Explore our fish
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/story" className="text-white/80 hover:text-white text-sm tracking-wide underline-offset-4 hover:underline">
              Our story →
            </Link>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-8 right-8 text-white/60 text-[10px] tracking-[0.3em] uppercase">Scroll</div>
      </section>

      <AvailableNow />

      {/* INTRO STRIP */}
      <section className="bg-leaf-mist py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
            className="text-2xl md:text-4xl font-light text-night-leaf leading-snug text-balance"
          >
            Good food starts with good fish.
            <span className="text-deep-forest"> That&apos;s our promise to every family.</span>
          </motion.p>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-rendalli-green mb-3">01 — Brand Essence</p>
              <h2 className="text-4xl md:text-6xl font-light text-night-leaf tracking-tight max-w-2xl text-balance">
                Natural. Organic. Tasty. <em className="not-italic text-rendalli-green">Together.</em>
              </h2>
            </div>
            <Link href="/brand" className="text-sm text-deep-forest hover:text-rendalli-green underline-offset-4 hover:underline">
              Read the full brand essence →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {BRAND.essence.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
                className="group relative p-8 rounded-3xl bg-muted border border-border hover:border-rendalli-green/40 hover:bg-white transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-rendalli-green/10 text-rendalli-green flex items-center justify-center mb-5 group-hover:bg-rendalli-green group-hover:text-white transition-colors">
                  {i % 3 === 0 ? <Leaf size={18} /> : i % 3 === 1 ? <Fish size={18} /> : <Sun size={18} />}
                </div>
                <h3 className="text-xl font-medium text-night-leaf mb-2">{item.title}</h3>
                <p className="text-sm text-deep-forest/80 leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE DUO */}
      <section className="bg-night-leaf text-leaf-mist py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: EASE }}
            className="relative aspect-[4/5] rounded-3xl overflow-hidden"
          >
            <Image src="https://res.cloudinary.com/dcnbho9c9/image/upload/v1776757888/Image_20260421_105008_aysdxv.jpg" alt="Farm-raised Nile Perch and Tilapia" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
          </motion.div>
          <div className="space-y-6">
            <p className="text-[11px] tracking-[0.3em] uppercase text-rendalli-green">From our farm</p>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white text-balance">
              Farm-raised Nile Perch &amp; Tilapia — delivered within 24 hours.
            </h2>
            <p className="text-leaf-mist/80 leading-relaxed max-w-lg">
              We raise our fish with care in clean, monitored waters. No hormones, no shortcuts. Just honest food, grown the right way.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center gap-3 bg-rendalli-green text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-white hover:text-night-leaf transition-colors"
            >
              Shop products <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* AUDIENCES */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="text-[11px] tracking-[0.3em] uppercase text-rendalli-green mb-3">02 — Audiences</p>
          <h2 className="text-4xl md:text-5xl font-light text-night-leaf tracking-tight max-w-3xl text-balance mb-12">
            One brand. <em className="not-italic text-rendalli-green">Three audiences.</em>
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {BRAND.audiences.map((a, i) => (
              <motion.div
                key={a.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }}
                className="p-8 rounded-3xl bg-gradient-to-br from-rendalli-green to-deep-forest text-white"
              >
                <p className="text-[10px] tracking-[0.3em] uppercase text-fresh-lemon mb-6">{a.tag}</p>
                <h3 className="text-3xl font-light mb-3">{a.label}</h3>
                <p className="text-sm text-white/80 leading-relaxed">{a.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* TESTIMONIAL BAND */}
      <section className="bg-leaf-mist py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <motion.figure
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <p className="text-[11px] tracking-[0.3em] uppercase text-deep-forest mb-6">How we speak</p>
            <blockquote className="text-3xl md:text-5xl font-light text-night-leaf leading-tight tracking-tight text-balance">
              &ldquo;Fresh Nile Tilapia, farmed with care. <em className="not-italic text-rendalli-green">Pick yours up today.</em>&rdquo;
            </blockquote>
            <figcaption className="mt-8 text-sm tracking-[0.2em] uppercase text-deep-forest/70">
              Rendalli voice · Short sentences · Sensory language · Local pride
            </figcaption>
          </motion.figure>
        </div>
      </section>

      {/* JOURNAL PREVIEW */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-rendalli-green mb-3">Journal</p>
              <h2 className="text-4xl md:text-6xl font-light text-night-leaf tracking-tight max-w-2xl text-balance">
                Notes from the water.
              </h2>
            </div>
            <Link href="/journal" className="text-sm text-deep-forest hover:text-rendalli-green underline-offset-4 hover:underline">
              Read all entries →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {POSTS.map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
              >
                <Link href={`/journal/${p.slug}`} className="group block">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
                    <Image src={p.cover} alt={p.title} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 text-[10px] tracking-[0.2em] uppercase text-night-leaf">{p.category}</span>
                  </div>
                  <p className="text-xs text-deep-forest/60 tracking-wider mt-4">{p.date}</p>
                  <h3 className="text-xl font-medium text-night-leaf mt-1 group-hover:text-rendalli-green transition-colors flex items-start gap-2">
                    {p.title}
                    <ArrowUpRight size={16} className="shrink-0 mt-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />

      {/* CTA */}
      <section className="py-24 md:py-32 bg-fresh-lemon relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: EASE }}
            className="text-4xl md:text-7xl font-light text-night-leaf tracking-tight text-balance"
          >
            Nva za Nnyinimu — <em className="not-italic">come taste what&apos;s yours.</em>
          </motion.h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 mt-10 bg-night-leaf text-white px-8 py-4 rounded-full font-medium hover:bg-rendalli-green transition-colors"
          >
            Find your nearest shop <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
