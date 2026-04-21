"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { BRAND, IMAGES } from "@/lib/rendalli";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function BrandPage() {
  return (
    <>
      {/* HERO — animated marquee of values + split heading */}
      <section className="relative min-h-[100dvh] bg-leaf-mist overflow-hidden flex flex-col justify-center pt-28 pb-20">
        <Image src={IMAGES.heroBg} alt="" fill sizes="100vw" priority className="object-cover opacity-30 mix-blend-multiply" />
        <div className="absolute inset-0 grain" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 w-full">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[11px] tracking-[0.3em] uppercase text-deep-forest mb-8"
          >
            01 — Brand Essence
          </motion.p>

          <h1 className="text-5xl md:text-8xl lg:text-[10rem] leading-[0.9] font-light text-night-leaf tracking-tighter">
            {["Who", "we", "are."].map((w, i) => (
              <motion.span
                key={i}
                initial={{ y: 120, opacity: 0, rotate: 4 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                transition={{ duration: 0.9, delay: i * 0.1, ease: EASE }}
                className="inline-block mr-6"
              >
                {w === "are." ? (
                  <em className="not-italic text-rendalli-green">{w}</em>
                ) : (
                  w
                )}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-10 max-w-xl text-lg md:text-xl text-deep-forest/85 leading-relaxed"
          >
            Before we talk about colours, logos or layouts — understand the feeling we want every Rendalli touchpoint to leave behind.
          </motion.p>
        </div>

        {/* marquee */}
        <div className="relative mt-20 overflow-hidden border-y border-night-leaf/10">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            className="flex gap-12 py-6 whitespace-nowrap text-4xl md:text-6xl font-light text-night-leaf/80"
          >
            {[...BRAND.essence, ...BRAND.essence].map((v, i) => (
              <span key={i} className="inline-flex items-center gap-12">
                {v.title}
                <span className="w-2 h-2 rounded-full bg-rendalli-green" />
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* VALUES — stagger reveal */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-2 md:gap-px bg-border rounded-3xl overflow-hidden">
            {BRAND.essence.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease: EASE }}
                className="p-10 md:p-14 bg-background hover:bg-muted transition-colors"
              >
                <div className="flex items-start gap-6">
                  <span className="text-rendalli-green font-mono text-sm mt-2">0{i + 1}</span>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-light text-night-leaf mb-3 tracking-tight">{v.title}</h3>
                    <p className="text-deep-forest/80 leading-relaxed max-w-md">{v.body}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PALETTE */}
      <section className="py-24 md:py-32 bg-muted">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="text-[11px] tracking-[0.3em] uppercase text-rendalli-green mb-3">03 — Colour</p>
          <h2 className="text-4xl md:text-6xl font-light text-night-leaf tracking-tight max-w-3xl text-balance mb-12">
            A palette grown from the <em className="not-italic text-rendalli-green">land</em>.
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {BRAND.palette.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: EASE }}
                className="rounded-2xl overflow-hidden border border-border bg-background"
              >
                <div className="aspect-[4/5]" style={{ background: c.hex }} />
                <div className="p-4">
                  <p className="font-medium text-night-leaf text-sm">{c.name}</p>
                  <p className="text-xs text-deep-forest/70 font-mono">{c.hex}</p>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-deep-forest/50 mt-1">{c.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TYPE */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="text-[11px] tracking-[0.3em] uppercase text-rendalli-green mb-3">05 — Typography</p>
          <h2 className="text-4xl md:text-6xl font-light text-night-leaf tracking-tight text-balance mb-12">
            Poppins — clean, warm, contemporary.
          </h2>
          <div className="space-y-6 border-t border-border">
            {[
              { label: "Display — Bold 48px", text: "Fresh from the lake, straight to your table.", cls: "text-4xl md:text-6xl font-bold" },
              { label: "Heading — Medium 28px", text: "Bulenga Fish Shop — Opening Now", cls: "text-2xl md:text-3xl font-medium" },
              { label: "Subheading — Medium 16px", text: "Farm-raised Nile Perch & Tilapia", cls: "text-base md:text-lg font-medium" },
              { label: "Body — Regular 14px", text: BRAND.summary, cls: "text-sm md:text-base font-normal max-w-2xl" },
              { label: "Caption — Regular 11px", text: "Farm-to-shop within 24 hours · Kampala, Uganda · Est. 2024", cls: "text-xs uppercase tracking-[0.2em]" },
            ].map((row, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
                className="grid md:grid-cols-[180px_1fr] gap-4 md:gap-10 py-8 border-b border-border"
              >
                <p className="text-[10px] tracking-[0.25em] uppercase text-deep-forest/60">{row.label}</p>
                <p className={`${row.cls} text-night-leaf`}>{row.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING IMAGE */}
      <section className="relative h-[70vh] overflow-hidden">
        <Image src={IMAGES.leaves} alt="Green leaves" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-night-leaf/50" />
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: EASE }}
            className="text-3xl md:text-6xl font-light text-white text-center max-w-3xl text-balance"
          >
            Rooted in tradition. <em className="not-italic text-fresh-lemon">Unmistakably contemporary.</em>
          </motion.p>
        </div>
      </section>
    </>
  );
}
