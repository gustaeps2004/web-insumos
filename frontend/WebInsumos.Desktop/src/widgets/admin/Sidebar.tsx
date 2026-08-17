import { Link } from 'react-router-dom'

import { sidebarMenu } from '@/shared/constants/sidebarMenu'

import { SidebarSection } from './SidebarSection'

interface SidebarProps {
  open: boolean
  onClose: () => void
  companyName?: string
  companyDocument?: string
}

export function Sidebar({
  open,
  onClose,
  companyName = 'Fifth Harmony',
  companyDocument = '00.000.000/0001-00',
}: SidebarProps) {
  const companyInitials = companyName
    .split(' ')
    .map((word) => word[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

  return (
    <>
      {open && (
        <button
          type="button"
          aria-label="Fechar menu"
          onClick={onClose}
          className="
            fixed
            inset-0
            z-40
            bg-black/30
            backdrop-blur-[1px]
            lg:hidden
          "
        />
      )}

      <aside
        className={`
          fixed
          inset-y-0
          left-0
          z-50
          flex
          w-72
          flex-col
          border-r
          border-zinc-200
          bg-white
          shadow-sm
          transition-transform
          duration-200
          lg:translate-x-0
          lg:shadow-none
          ${
            open
              ? 'translate-x-0'
              : '-translate-x-full'
          }
        `}
      >
        <div className="border-b border-zinc-100 p-5">
          <div className="mb-3 flex items-center justify-between lg:hidden">
            <span className="text-xs font-semibold text-zinc-500">
              Menu
            </span>

            <button
              type="button"
              onClick={onClose}
              aria-label="Fechar menu"
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-md
                text-zinc-500
                transition
                hover:bg-zinc-100
                hover:text-zinc-800
              "
            >
              <i className="bi bi-x-lg text-sm" />
            </button>
          </div>

          <div
            className="
              flex
              items-center
              gap-3
              rounded-lg
              border
              border-zinc-200
              bg-white
              p-3
              shadow-sm
            "
          >
            <div
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#258640]
                text-xs
                font-semibold
                text-white
              "
            >
              {companyInitials}
            </div>

            <div className="min-w-0 flex-1">
              <strong
                className="
                  block
                  truncate
                  text-xs
                  font-semibold
                  uppercase
                  text-zinc-800
                "
              >
                {companyName}
              </strong>

              <span className="block truncate text-[10px] text-zinc-400">
                {companyDocument}
              </span>
            </div>

            <button
              type="button"
              aria-label="Configurações da empresa"
              className="
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-md
                border
                border-zinc-200
                bg-white
                text-[#258640]
                transition
                hover:border-[#258640]/30
                hover:bg-[#258640]/10
              "
            >
              <i className="bi bi-gear text-sm" />
            </button>
          </div>
        </div>

        <div
          className="
            sidebar-scroll
            flex-1
            overflow-y-auto
            px-5
            py-6
          "
        >
          {sidebarMenu.map((section) => (
            <SidebarSection
              key={section.label}
              section={section}
            />
          ))}
        </div>

        <div className="border-t border-zinc-100 p-4">
          <Link
            to="/home"
            className="
              flex
              items-center
              gap-3
              rounded-lg
              px-2
              py-2
              transition
              hover:bg-[#258640]/10
            "
          >
            <div
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-lg
                bg-[#258640]/10
                text-[#258640]
              "
            >
              <i className="bi bi-boxes text-lg" />
            </div>

            <div className="min-w-0">
              <strong
                className="
                  block
                  truncate
                  text-xs
                  font-semibold
                  text-[#258640]
                "
              >
                Web Insumos
              </strong>

              <span className="text-[9px] text-zinc-400">
                Versão 0.0.0
              </span>
            </div>
          </Link>
        </div>
      </aside>
    </>
  )
}