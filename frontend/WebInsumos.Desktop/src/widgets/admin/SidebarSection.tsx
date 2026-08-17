import { NavLink } from 'react-router-dom'

import type {
  SidebarSection as SidebarSectionData,
} from '@/shared/constants/sidebarMenu'

interface SidebarSectionProps {
  section: SidebarSectionData
}

export function SidebarSection({
  section,
}: SidebarSectionProps) {
  return (
    <section className="mb-6">
      <div className="mb-2 flex items-center gap-2">
        <i
          className={`bi ${section.icon} text-sm text-[#258640]`}
        />

        <h2 className="text-sm font-semibold text-zinc-800">
          {section.label}
        </h2>
      </div>

      <div className="ml-1 border-l border-zinc-200 pl-5">
        <nav className="space-y-1">
          {section.items.map((item) => (
            <div key={item.label}>
              {item.path ? (
                <NavLink
                  to={item.path}
                  end
                  className={({ isActive }) =>
                    `
                      group
                      flex
                      items-center
                      gap-2
                      rounded-md
                      px-3
                      py-2
                      text-xs
                      transition-colors
                      duration-150
                      ${
                        isActive
                          ? 'bg-[#258640] font-medium text-white'
                          : 'text-zinc-600 hover:bg-[#258640]/10 hover:text-[#258640]'
                      }
                    `
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.icon && (
                        <i
                          className={`
                            bi
                            ${item.icon}
                            text-xs
                            transition-colors
                            ${
                              isActive
                                ? 'text-white'
                                : 'text-zinc-500 group-hover:text-[#258640]'
                            }
                          `}
                        />
                      )}

                      <span>
                        {item.label}
                      </span>
                    </>
                  )}
                </NavLink>
              ) : (
                <div
                  className="
                    flex
                    items-center
                    gap-2
                    px-3
                    py-1.5
                    text-xs
                    font-medium
                    text-zinc-700
                  "
                >
                  {item.icon && (
                    <i
                      className={`bi ${item.icon} text-xs text-[#258640]`}
                    />
                  )}

                  <span>
                    {item.label}
                  </span>
                </div>
              )}

              {item.children && (
                <div className="ml-4 border-l border-zinc-200 pl-2">
                  {item.children.map((child) => (
                    <NavLink
                      key={child.label}
                      to={child.path ?? '#'}
                      end
                      className={({ isActive }) =>
                        `
                          group
                          flex
                          items-center
                          gap-2
                          rounded-md
                          px-3
                          py-2
                          text-xs
                          transition-colors
                          duration-150
                          ${
                            isActive
                              ? 'bg-[#258640] font-medium text-white'
                              : 'text-zinc-600 hover:bg-[#258640]/10 hover:text-[#258640]'
                          }
                        `
                      }
                    >
                      {({ isActive }) => (
                        <>
                          {child.icon && (
                            <i
                              className={`
                                bi
                                ${child.icon}
                                text-[11px]
                                transition-colors
                                ${
                                  isActive
                                    ? 'text-white'
                                    : 'text-zinc-500 group-hover:text-[#258640]'
                                }
                              `}
                            />
                          )}

                          <span>
                            {child.label}
                          </span>
                        </>
                      )}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </section>
  )
}