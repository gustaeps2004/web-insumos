export function AlertsCard() {
  return (
    <section
      className="
        w-full
        max-w-sm
        overflow-hidden
        rounded-lg
        border
        border-zinc-200
        bg-white
        shadow-sm
      "
    >
      <header className="border-b border-zinc-100 px-4 py-3">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[10px] font-medium text-green-700">
              17/08/2026
            </p>

            <h2 className="mt-0.5 text-base font-semibold text-zinc-800">
              Alertas
            </h2>
          </div>

          <div
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-md
              bg-green-50
              text-green-700
            "
          >
            <i className="bi bi-bell" />
          </div>
        </div>
      </header>

      <div>
        <div
          className="
            grid
            grid-cols-3
            border-b
            border-zinc-200
            bg-zinc-100
            text-[10px]
            font-medium
            text-zinc-600
          "
        >
          <span className="px-3 py-2">
            Produtos
          </span>

          <span className="px-3 py-2">
            Categoria
          </span>

          <span className="px-3 py-2">
            Ação
          </span>
        </div>

        <div
          className="
            flex
            min-h-32
            flex-col
            items-center
            justify-center
            gap-2
            px-4
            py-6
            text-center
          "
        >
          <i className="bi bi-check-circle text-xl text-green-600" />

          <p className="text-xs text-zinc-500">
            Nenhum alerta disponível.
          </p>
        </div>
      </div>
    </section>
  )
}