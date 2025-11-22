export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 border-2 border-background bg-accent" />
              <span className="font-mono text-xl font-bold">SQUARETRIFY</span>
            </div>
            <p className="text-sm leading-relaxed opacity-80">Transformando la educación tecnológica en Argentina.</p>
          </div>
      </div>
        <div className="mt-12 border-t border-background/20 pt-8 text-center">
          <p className="font-mono text-xs uppercase tracking-wider opacity-60">
            © 2025 Squaretrify. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
