export function Stats() {
  const stats = [
    { value: "5000+", label: "Estudiantes Impactados" },
    { value: "98%", label: "Satisfacción Docente" },
    { value: "100%", label: "Sustentable" },
    { value: "24hs", label: "Entrega Rápida" },
  ]

  return (
    <section className="border-b border-foreground bg-foreground text-background z-10 relative">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-mono text-4xl font-bold lg:text-5xl">{stat.value}</div>
              <div className="mt-2 text-sm uppercase tracking-wider opacity-80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
