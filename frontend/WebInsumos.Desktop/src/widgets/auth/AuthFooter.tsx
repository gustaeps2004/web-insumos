export function AuthFooter() {
  return (
    <footer className=" mt-8 flex flex-col gap-3 border-t border-zinc-100 pt-5 text-[10px] text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
      <p>© 2026 Web Insumos. Todos os direitos reservados</p>
      <nav className="flex gap-3">
        <a href="/"className="transition hover:text-zinc-700">Política de Privacidade</a>
        <a href="/"className="transition hover:text-zinc-700">Termos e Condições</a>
      </nav>
    </footer>
  )
}