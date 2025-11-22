"use client"

import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  return (
    <section id="contacto" className="border-b border-foreground py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 border border-foreground bg-secondary px-4 py-2">
                <span className="font-mono text-xs uppercase tracking-wider">// CONTACTO</span>
              </div>
              <h2 className="text-balance font-sans text-4xl font-bold leading-tight tracking-tight lg:text-5xl">
                CONECTEMOS
                <br />
                <span className="text-accent">TU PROYECTO</span>
              </h2>
              <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
                Estamos listos para ayudarte a transformar la educación tecnológica en tu institución.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 border-l-4 border-accent bg-secondary p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border-2 border-foreground bg-background">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="mb-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                  <div className="font-mono text-lg">squaretrify@gmail.com</div>
                </div>
              </div>

              <div className="flex gap-4 border-l-4 border-accent bg-secondary p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border-2 border-foreground bg-background">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="mb-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">Teléfono</div>
                  <div className="font-mono text-lg">+54 11 12345-245612</div>
                </div>
              </div>

              <div className="flex gap-4 border-l-4 border-accent bg-secondary p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border-2 border-foreground bg-background">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="mb-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">Ubicación</div>
                  <div className="font-mono text-lg">Buenos Aires, Argentina</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="border-4 border-foreground bg-secondary p-8">
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="font-mono text-xs uppercase tracking-wider">Nombre Completo</label>
                <Input className="border-2 border-foreground bg-background" placeholder="Juan Pérez" />
              </div>

              <div className="space-y-2">
                <label className="font-mono text-xs uppercase tracking-wider">Email</label>
                <Input
                  type="email"
                  className="border-2 border-foreground bg-background"
                  placeholder="juan@institucion.edu.ar"
                />
              </div>

              <div className="space-y-2">
                <label className="font-mono text-xs uppercase tracking-wider">Institución</label>
                <Input className="border-2 border-foreground bg-background" placeholder="Escuela Técnica N°1" />
              </div>

              <div className="space-y-2">
                <label className="font-mono text-xs uppercase tracking-wider">Mensaje</label>
                <Textarea
                  className="min-h-[120px] border-2 border-foreground bg-background"
                  placeholder="Cuéntanos sobre tu proyecto educativo..."
                />
              </div>

              <Button
                type="submit"
                className="w-full border-2 border-foreground bg-foreground text-background hover:bg-accent hover:border-accent hover:text-foreground"
                size="lg"
              >
                ENVIAR CONSULTA
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
