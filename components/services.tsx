import { Package, GraduationCap, Recycle, Wrench } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Package,
      title: "Venta y Alquiler",
      description:
        "Kits electrónicos educativos de última generación. Opciones flexibles de compra y alquiler para instituciones.",
    },
    {
      icon: GraduationCap,
      title: "Apoyo Docente",
      description: "Material educativo completo, capacitaciones y soporte técnico continuo para educadores.",
    },
    {
      icon: Recycle,
      title: "Reacondicionamiento",
      description:
        "Servicio de reacondicionamiento tecnológico sustentable. Extendemos la vida útil de equipos electrónicos.",
    },
    {
      icon: Wrench,
      title: "Mantenimiento",
      description:
        "Servicio técnico especializado y mantenimiento preventivo para garantizar el funcionamiento óptimo.",
    },
  ]

  return (
    <section id="servicios" className="border-b border-accent py-20 lg:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 border border-accent bg-secondary px-4 py-2">
            <span className="font-mono text-xs uppercase tracking-wider">// SERVICIOS</span>
          </div>
          <h2 className="text-balance font-sans text-4xl font-bold leading-tight tracking-tight lg:text-6xl">
            SOLUCIONES
            <br />
            <span className="text-accent">INTEGRALES</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="group border-2 border-accent bg-background p-8 transition-all hover:bg-accent hover:text-background"
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center border-2 border-accent bg-foreground group-hover:border-background group-hover:bg-background">
                <service.icon size={32} className="text-background group-hover:text-accent" />
              </div>
              <h3 className="mb-4 font-mono text-2xl font-bold uppercase tracking-tight">{service.title}</h3>
              <p className="text-pretty leading-relaxed opacity-80">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
