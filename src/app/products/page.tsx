"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { IMAGES } from "@/lib/rendalli";
import { PRODUCTS } from "@/lib/products";
import Link from "next/link";
import { Check } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];


export default function ProductsPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const yImg = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <>
      {/* HERO — rotating big headline + floating product image */}
      <section ref={heroRef} className="relative min-h-[100dvh] bg-rendalli-green text-white overflow-hidden flex items-center pt-28">
        <div className="absolute inset-0 opacity-30">
          <Image src={IMAGES.heroBg} alt="" fill sizes="100vw" className="object-cover mix-blend-overlay" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[11px] tracking-[0.3em] uppercase text-fresh-lemon mb-6"
            >
              Our fish · Our pride
            </motion.p>
            <h1 className="text-5xl md:text-8xl font-light leading-[0.95] tracking-tight text-balance">
              <motion.span
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, ease: EASE }}
                className="inline-block"
              >
                Good food
              </motion.span>
              <br />
              <motion.span
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
                className="inline-block italic text-night-leaf"
              >
                starts with
              </motion.span>
              <br />
              <motion.span
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
                className="inline-block"
              >
                good fish.
              </motion.span>
            </h1>
          </div>
          <motion.div style={{ rotate, y: yImg }} className="relative aspect-square max-w-md mx-auto w-full">
            <div className="absolute inset-0 rounded-full overflow-hidden border-8 border-fresh-lemon shadow-2xl">
              <Image src={IMAGES.fishDish} alt="Fresh fish" fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* PRODUCT LIST — sticky scroll cards */}
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-14">
            <p className="text-[11px] tracking-[0.3em] uppercase text-rendalli-green mb-3">The range</p>
            <h2 className="text-4xl md:text-6xl font-light text-night-leaf tracking-tight max-w-2xl text-balance">
              Three signatures. <em className="not-italic text-rendalli-green">One promise.</em>
            </h2>
          </div>

          <div className="space-y-24 md:space-y-40">
            {PRODUCTS.map((p, i) => (
              <motion.article
                key={p.slug}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, ease: EASE }}
                className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}
              >
                <Link href={`/products/${p.slug}`} className="block"><motion.div whileHover={{ scale: 1.02, rotate: -1 }} transition={{ type: "spring", stiffness: 200 }} className="relative aspect-[4/5] rounded-3xl overflow-hidden group">
                  <Image src={p.img} alt={p.name} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-full bg-white/90 backdrop-blur text-[10px] tracking-[0.2em] uppercase text-night-leaf">{t}</span>
                    ))}
                  </div>
                </motion.div></Link>
                <div>
                  <p className="font-mono text-sm text-rendalli-green mb-2">0{i + 1} / 0{PRODUCTS.length}</p>
                  <h3 className="text-4xl md:text-6xl font-light text-night-leaf tracking-tight mb-2">{p.name}</h3>
                  <p className="italic text-deep-forest/70 mb-6">{p.latin}</p>
                  <p className="text-lg text-deep-forest/85 leading-relaxed max-w-md mb-6">{p.copy}</p>
                  <ul className="space-y-2 text-sm text-night-leaf">
                    {p.features.slice(0, 3).map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <Check size={14} className="text-rendalli-green" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/products/${p.slug}`} className="inline-flex items-center gap-2 mt-6 text-rendalli-green font-medium hover:gap-3 transition-all text-sm">
                    View {p.name} details →
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* QUALITY BAND */}
      <section className="bg-night-leaf text-leaf-mist py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-4 gap-10">
          {[
            { k: "24h", v: "Farm to shop" },
            { k: "0", v: "Hormones used" },
            { k: "100%", v: "Traceable" },
            { k: "3+", v: "Regions served" },
          ].map((s, i) => (
            <motion.div
              key={s.k}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
            >
              <p className="text-5xl md:text-7xl font-light text-fresh-lemon mb-2">{s.k}</p>
              <p className="text-sm tracking-[0.2em] uppercase text-leaf-mist/70">{s.v}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
