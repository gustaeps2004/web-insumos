import { AdminLayout } from '@/app/layouts/AdminLayout'

import { AlertsCard } from '@/widgets/admin/AlertsCard'
import { HomeBrandPanel } from '@/widgets/admin/HomeBrandPanel'

export function HomePage() {
  return (
    <AdminLayout
      title="Menu - Início"
      subtitle="Empresa Nickname"
    >
      <section
        className="
          relative
          min-h-[calc(100vh-9rem)]
          overflow-hidden
        "
      >
        <div className="relative z-10">
          <AlertsCard />
        </div>

        <HomeBrandPanel />
      </section>
    </AdminLayout>
  )
}