"use client"

import { ArrowRight, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen border-b border-accent pt-16 overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 grid-pattern pointer-events-none select-none z-0" aria-hidden="true" />

      <div className="container relative mx-auto px-4 py-20 lg:py-32">
        
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 z-10">
          {/* Left Column - Text Content */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Badge */}
            <div className="inline-flex w-fit items-center gap-2 border border-accent bg-secondary px-4 py-2 z-10">
              <Zap size={16} className="text-accent" />
              <span className="font-mono text-xs uppercase tracking-wider">Tecnología Educativa Argentina</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-balance font-sans text-5xl font-bold leading-[1.1] tracking-tight lg:text-7xl z-10">
              KITS ELECTRÓNICOS
              <br />
              <span className="text-accent">EDUCATIVOS</span>
              <br />
              DEL FUTURO
            </h1>

            {/* Description */}
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground lg:text-xl">
              Venta, distribución y alquiler de kits electrónicos educativos y sustentables. Transformamos la educación
              tecnológica con precisión e innovación.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="group border-2 border-accent bg-accent text-background hover:bg-foreground hover:border-foreground hover:text-background"
              >
                VER CATÁLOGO
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-accent bg-transparent hover:bg-accent hover:text-background"
              >
                SOLICITAR DEMO
              </Button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 border-t border-accent pt-8">
              <div>
                <div className="font-mono text-3xl font-bold text-accent">100+</div>
                <div className="text-sm uppercase tracking-wider text-muted-foreground">Instituciones</div>
              </div>
              <div>
                <div className="font-mono text-3xl font-bold text-accent">50+</div>
                <div className="text-sm uppercase tracking-wider text-muted-foreground">Kits Únicos</div>
              </div>
              <div>
                <div className="font-mono text-3xl font-bold text-accent">24/7</div>
                <div className="text-sm uppercase tracking-wider text-muted-foreground">Soporte</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="relative flex items-center justify-center">
            <div className="relative h-[500px] w-full lg:h-[600px]">
              {/* Main Box */}
              <div className="absolute inset-0 border-4 border-accent bg-secondary">
                {/* Inner Grid */}
                <div className="grid h-full grid-cols-3 grid-rows-3 gap-4 p-8">
                  {/* Accent Blocks */}
                  <div className="border-2 border-accent bg-accent" />
                  <div className="border-2 border-accent" />
                  <div className="border-2 border-foreground" />
                  <div className="border-2 border-accent" />
                  <div className="border-2 border-accent bg-foreground" />
                  <div className="border-2 border-accent" />
                  <div className="border-2 border-foreground" />
                  <div className="border-2 border-accent" />
                  <div className="border-2 border-accent bg-accent" />
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -right-4 -top-4 h-24 w-24 border-4 border-accent bg-background" />
              <div className="absolute -bottom-4 -left-4 h-32 w-32 border-4 border-accent bg-background" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
