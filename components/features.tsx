import { Cpu, Shield, Zap, Users } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Cpu,
      title: "Tecnología Avanzada",
      description: "Componentes de última generación para aprendizaje práctico",
    },
    {
      icon: Shield,
      title: "Certificación",
      description: "Kits certificados y seguros para uso educativo",
    },
    {
      icon: Zap,
      title: "Innovación",
      description: "Diseños modulares y actualizables constantemente",
    },
    {
      icon: Users,
      title: "Comunidad",
      description: "Red de educadores y estudiantes en toda Argentina",
    },
  ]

  return (
    <section id="tecnologia" className="border-b border-accent bg-secondary py-20 lg:py-32 z-10">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Features List */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 border border-accent bg-background px-4 py-2">
                <span className="font-mono text-xs uppercase tracking-wider">// CARACTERÍSTICAS</span>
              </div>
              <h2 className="text-balance font-sans text-4xl font-bold leading-tight tracking-tight lg:text-5xl">
                PRECISIÓN E
                <br />
                <span className="text-accent">INNOVACIÓN</span>
              </h2>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 border-l-4 border-accent bg-background p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border-2 border-accent bg-accent">
                    <feature.icon size={24} className="text-background" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-mono text-lg font-bold uppercase">{feature.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Visual Block */}
          <div className="relative">
            <div className="sticky top-24">
              <div className="border-4 border-accent bg-background p-8">
                <div className="space-y-6">
                  <div className="font-mono text-sm uppercase tracking-wider text-muted-foreground">
                    {"<SYSTEM_STATUS>"}
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-accent pb-2">
                      <span className="font-mono text-sm">KITS_DISPONIBLES</span>
                      <span className="font-mono text-sm text-accent">ONLINE</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-accent pb-2">
                      <span className="font-mono text-sm">STOCK_STATUS</span>
                      <span className="font-mono text-sm text-accent">100%</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-accent pb-2">
                      <span className="font-mono text-sm">ENVIOS_ACTIVOS</span>
                      <span className="font-mono text-sm text-accent">24/7</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-accent pb-2">
                      <span className="font-mono text-sm">SOPORTE_TECNICO</span>
                      <span className="font-mono text-sm text-accent">ACTIVO</span>
                    </div>
                  </div>

                  <div className="mt-8 border-2 border-accent bg-accent/10 p-6">
                    <div className="mb-4 font-mono text-xs uppercase tracking-wider">PRÓXIMO LANZAMIENTO</div>
                    <div className="font-mono text-2xl font-bold">
                      KIT ARDUINO
                      <br />
                      ADVANCED PRO
                    </div>
                    <div className="mt-4 font-mono text-sm text-muted-foreground">Q2 2025</div>
                  </div>

                  <div className="font-mono text-sm uppercase tracking-wider text-muted-foreground">
                    {"</SYSTEM_STATUS>"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
