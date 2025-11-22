"use client"

import { useState } from "react"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

const products = [
  {
    id: 1,
    name: "Arduino UNO R3",
    category: "Microcontrolador",
    price: "$25.000",
    specs: "ATmega328P • 14 I/O • 6 PWM",
    stock: "En stock",
    image: "/arduino-uno-board-electronic.jpg",
  },
  {
    id: 2,
    name: "ESP32 DevKit",
    category: "WiFi + Bluetooth",
    price: "$18.000",
    specs: "Dual-core • WiFi • Bluetooth 4.2",
    stock: "En stock",
    image: "/esp32-development-board.jpg",
  },
  {
    id: 3,
    name: "Raspberry Pi 4",
    category: "Computadora",
    price: "$85.000",
    specs: "4GB RAM • Quad-core • USB 3.0",
    stock: "Limitado",
    image: "/raspberry-pi-4-board.jpg",
  },
  {
    id: 4,
    name: "Kit Sensores",
    category: "Módulos",
    price: "$32.000",
    specs: "37 sensores • Compatible Arduino",
    stock: "En stock",
    image: "/electronic-sensor-kit-modules.jpg",
  },
  {
    id: 5,
    name: "STM32 Blue Pill",
    category: "ARM Cortex",
    price: "$12.000",
    specs: "72MHz • 64KB Flash • 20KB RAM",
    stock: "En stock",
    image: "/stm32-blue-pill-board.jpg",
  },
  {
    id: 6,
    name: "Kit Robótica",
    category: "Educativo",
    price: "$45.000",
    specs: "Chasis • Motores • Sensores",
    stock: "En stock",
    image: "/robot-car-kit-arduino.jpg",
  },
]

export function Products() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [openId, setOpenId] = useState<number | null>(null)

  return (
    <section className="py-24 px-6 border-t-2 border-[#F3701E]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block border-2 border-[#F3701E] px-4 py-2 mb-6">
            <span className="text-sm font-bold tracking-wider text-[#F3701E]">[PRODUCTOS]</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-none">
            KITS Y<br />
            COMPONENTES
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl border-l-4 border-[#F3701E] pl-6">
            Tecnología educativa de calidad. Desde microcontroladores hasta kits completos para aprendizaje y
            desarrollo.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border-2 border-foreground bg-background transition-all duration-300 hover:border-[#F3701E] hover:shadow-[8px_8px_0px_0px_#F3701E]"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Product Image */}
              <div className="aspect-square border-b-2 border-foreground bg-[#E5E5E5] overflow-hidden relative">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <div
                    className={`px-3 py-1 text-xs font-bold border-2 transition-colors ${
                      product.stock === "En stock"
                        ? "bg-[#F3701E] border-[#F3701E] text-white"
                        : "bg-background border-foreground"
                    }`}
                  >
                    {product.stock}
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="mb-4">
                  <span className="text-xs font-bold tracking-wider text-[#F3701E] mb-2 block">
                    [{product.category.toUpperCase()}]
                  </span>
                  <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground font-mono">{product.specs}</p>
                </div>

                <div className="flex items-end justify-between pt-4 border-t-2 border-foreground">
                  <div>
                    <span className="text-xs text-muted-foreground block mb-1">PRECIO</span>
                    <span className="text-2xl font-bold text-[#F3701E]">{product.price}</span>
                  </div>
                  <Dialog open={openId === product.id} onOpenChange={(val) => setOpenId(val ? product.id : null)}>
                    <DialogTrigger asChild>
                      <button
                        className={`px-6 py-3 font-bold text-sm border-2 transition-all ${
                          hoveredId === product.id
                            ? "bg-[#F3701E] border-[#F3701E] text-white translate-x-1 translate-y-1"
                            : "bg-background border-foreground hover:bg-[#F3701E] hover:border-[#F3701E] hover:text-white"
                        }`}
                        aria-label={`Ver más ${product.name}`}
                      >
                        VER MÁS
                      </button>
                    </DialogTrigger>

                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>{product.name}</DialogTitle>
                        <DialogDescription>{product.category} • {product.specs}</DialogDescription>
                      </DialogHeader>

                      <div className="grid gap-4">
                        <div className="w-full aspect-video overflow-hidden rounded-md bg-[#E5E5E5]">
                          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm text-muted-foreground">PRECIO</div>
                            <div className="text-2xl font-bold text-[#F3701E]">{product.price}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-muted-foreground">STOCK</div>
                            <div className="font-mono">{product.stock}</div>
                          </div>
                        </div>

                        <div className="text-sm text-muted-foreground">Descripción breve del producto y usos educativos. Puedes personalizar kits, pedir cotización o solicitar demo.</div>

                        <DialogFooter>
                          <DialogClose asChild>
                            <Button variant="outline">Cerrar</Button>
                          </DialogClose>

                          <a
                            href="#contacto"
                            onClick={(e) => {
                              e.preventDefault()
                              e.stopPropagation()
                              setOpenId(null)
                              const el = document.getElementById("contacto")
                              if (el) el.scrollIntoView({ behavior: "smooth" })
                            }}
                            className="px-6 py-3 font-bold text-sm border-2 bg-[#F3701E] border-[#F3701E] text-white inline-block text-center"
                          >
                            Contactar
                          </a>
                        </DialogFooter>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>

              {/* Product ID Badge */}
              <div className="px-6 pb-4">
                <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                  <div className="w-2 h-2 bg-[#F3701E]" />
                  <span>ID: SQTR-{String(product.id).padStart(3, "0")}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Footer */}
        <div className="mt-16 border-2 border-[#F3701E] p-8 bg-[#F3701E]/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">¿Necesitás un kit personalizado?</h3>
              <p className="text-muted-foreground">Armamos soluciones a medida para instituciones educativas</p>
            </div>
            <button className="px-8 py-4 bg-[#F3701E] text-white font-bold border-2 border-[#F3701E] hover:bg-transparent hover:text-[#F3701E] transition-all whitespace-nowrap">
              <a href="#contacto" onClick={(e) => {
                e.preventDefault()
                const el = document.getElementById("contacto")
                if (el) el.scrollIntoView({ behavior: "smooth" })
              }}>
                CONTACTAR AHORA →
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
