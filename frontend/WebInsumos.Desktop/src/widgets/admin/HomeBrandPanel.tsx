import logo from '@/shared/assets/logos/logo.svg'

export function HomeBrandPanel() {
  return (
    <div
      className="
        pointer-events-none
        absolute
        inset-0
        flex
        items-center
        justify-center
      "
    >
      <img
        src={logo}
        alt=""
        aria-hidden="true"
        className="
          w-[280px]
          select-none
          opacity-30
          sm:w-[360px]
          lg:w-[440px]
        "
      />
    </div>
  )
}