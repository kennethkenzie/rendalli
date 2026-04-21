"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Check, Phone, ArrowLeft, ArrowRight } from "lucide-react";
import type { Product } from "@/lib/products";
import { PRODUCTS } from "@/lib/products";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export function ProductDetail({ product }: { product: Product }) {
  const [active, setActive] = useState(0);
  const others = PRODUCTS.filter((p) => p.slug !== product.slug);

  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-16 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Link href="/products" className="inline-flex items-center gap-2 text-sm text-deep-forest hover:text-rendalli-green transition mb-8">
            <ArrowLeft size={16} /> All products
          </Link>

          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* GALLERY */}
            <div>
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: EASE }}
                className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-muted"
              >
                <Image
                  src={product.gallery[active]}
                  alt={product.name}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {product.tags.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full bg-white/90 backdrop-blur text-[10px] tracking-[0.2em] uppercase text-night-leaf">{t}</span>
                  ))}
                </div>
              </motion.div>

              <div className="mt-4 grid grid-cols-3 gap-3">
                {product.gallery.map((g, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`relative aspect-square rounded-2xl overflow-hidden border-2 transition-colors ${i === active ? "border-rendalli-green" : "border-transparent opacity-70 hover:opacity-100"}`}
                  >
                    <Image src={g} alt="" fill sizes="20vw" className="object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* INFO */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE }}
            >
              <p className="text-[11px] tracking-[0.3em] uppercase text-rendalli-green mb-3">The range · Signature</p>
              <h1 className="text-5xl md:text-7xl font-light text-night-leaf tracking-tight leading-[0.95] text-balance">{product.name}</h1>
              <p className="italic text-deep-forest/70 mt-2">{product.latin}</p>
              <div className="mt-6 space-y-4 text-lg text-deep-forest/85 leading-relaxed">
                {product.longCopy.map((para, i) => <p key={i}>{para}</p>)}
              </div>

              <ul className="mt-8 space-y-2 text-sm text-night-leaf">
                {product.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Check size={16} className="text-rendalli-green" /> {f}
                  </li>
                ))}
              </ul>

              {/* PRICES */}
              <div className="mt-10 rounded-3xl border border-border bg-muted p-6 md:p-8">
                <p className="text-[11px] tracking-[0.3em] uppercase text-rendalli-green mb-5">Pricing · Daily</p>
                <div className="grid grid-cols-3 gap-4">
                  {product.prices.map((pr) => (
                    <div key={pr.size} className="text-center">
                      <p className="text-xs text-deep-forest/70 mb-1">{pr.note}</p>
                      <p className="text-2xl md:text-3xl font-light text-night-leaf tracking-tight"><span className="text-rendalli-green">UGX</span> {pr.price}</p>
                      <p className="text-[10px] tracking-[0.25em] uppercase text-deep-forest/60 mt-1">{pr.size}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="tel:+256706609808" className="inline-flex items-center gap-2 bg-night-leaf text-white px-5 py-3 rounded-full text-sm font-medium hover:bg-rendalli-green transition-colors">
                    <Phone size={16} /> 0706 609 808
                  </a>
                  <Link href="/contact" className="inline-flex items-center gap-2 bg-fresh-lemon text-night-leaf px-5 py-3 rounded-full text-sm font-medium hover:bg-night-leaf hover:text-white transition-colors">
                    Visit our shop <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="bg-leaf-mist py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-3xl md:text-5xl font-light text-night-leaf tracking-tight">Also from the farm</h2>
            <Link href="/products" className="text-sm text-deep-forest hover:text-rendalli-green">See all →</Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {others.map((o) => (
              <Link key={o.slug} href={`/products/${o.slug}`} className="group block">
                <div className="relative aspect-[16/10] rounded-3xl overflow-hidden bg-white">
                  <Image src={o.img} alt={o.name} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-light text-night-leaf tracking-tight group-hover:text-rendalli-green transition-colors">{o.name}</h3>
                    <p className="text-sm text-deep-forest/70 italic">{o.latin}</p>
                  </div>
                  <span className="w-11 h-11 rounded-full bg-night-leaf text-white flex items-center justify-center group-hover:bg-rendalli-green transition-colors">
                    <ArrowRight size={18} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
