interface AdminHeaderProps {
  title: string
  subtitle?: string
  breadcrumb?: string
  userName?: string
  userRole?: string
  onMenuClick: () => void
}

export function AdminHeader({
  title,
  subtitle,
  breadcrumb,
  userName = 'Usuário',
  userRole = 'Usuário',
  onMenuClick,
}: AdminHeaderProps) {
  const initials = userName
    .split(' ')
    .map((name) => name[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

  return (
    <header
      className="
        sticky
        top-0
        z-30
        border-b
        border-zinc-200
        bg-white/95
        backdrop-blur
      "
    >
      <div
        className="
          flex
          min-h-20
          items-center
          justify-between
          gap-4
          px-4
          sm:px-6
          lg:px-8
        "
      >
        <div className="flex min-w-0 items-center gap-4">
          <button
            type="button"
            onClick={onMenuClick}
            aria-label="Abrir menu"
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-md
              border
              border-zinc-200
              bg-white
              text-green-700
              transition
              hover:border-green-200
              hover:bg-green-50
              lg:hidden
            "
          >
            <i className="bi bi-list text-xl" />
          </button>

          <div className="min-w-0">
            {breadcrumb && (
              <p
                className="
                  mb-1
                  truncate
                  text-[10px]
                  font-medium
                  text-green-700
                "
              >
                {breadcrumb}
              </p>
            )}

            <h1
              className="
                truncate
                text-lg
                font-semibold
                text-zinc-800
                sm:text-xl
              "
            >
              {title}
            </h1>

            {subtitle && (
              <p className="truncate text-xs text-zinc-500">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <div
            className="
              hidden
              items-center
              gap-3
              rounded-lg
              border
              border-zinc-200
              bg-white
              px-3
              py-2
              shadow-sm
              sm:flex
            "
          >
            <div
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                bg-green-50
                text-xs
                font-semibold
                text-green-700
              "
            >
              {initials}
            </div>

            <div className="min-w-0">
              <strong
                className="
                  block
                  max-w-36
                  truncate
                  text-xs
                  font-semibold
                  text-zinc-800
                "
              >
                {userName}
              </strong>

              <span className="text-[10px] text-zinc-400">
                {userRole}
              </span>
            </div>
          </div>

          <button
            type="button"
            aria-label="Notificações"
            className="
              relative
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-zinc-200
              bg-white
              text-green-700
              shadow-sm
              transition
              hover:border-green-200
              hover:bg-green-50
            "
          >
            <i className="bi bi-bell text-base" />

            <span
              className="
                absolute
                right-2
                top-2
                h-1.5
                w-1.5
                rounded-full
                bg-green-600
              "
            />
          </button>
        </div>
      </div>
    </header>
  )
}