export interface SidebarItem {
  label: string
  path?: string
  icon?: string
  children?: SidebarItem[]
}

export interface SidebarSection {
  label: string
  icon: string
  items: SidebarItem[]
}

export const sidebarMenu: SidebarSection[] = [
  {
    label: 'Menu',
    icon: 'bi-grid',
    items: [
      {
        label: 'Lembretes',
        path: '/lembretes',
        icon: 'bi-clock',
      },
      {
        label: 'Notificações',
        path: '/notificacoes',
        icon: 'bi-bell',
      },
      {
        label: 'Suporte',
        path: '/suporte',
        icon: 'bi-headset',
      },
    ],
  },

  {
    label: 'Produtos',
    icon: 'bi-box-seam',
    items: [
      {
        label: 'Bobinas',
        icon: 'bi-box',
        children: [
          {
            label: 'Movimentação',
            path: '/produtos/bobinas/movimentacao',
            icon: 'bi-arrow-left-right',
          },
          {
            label: 'Relatório',
            path: '/produtos/bobinas/relatorio',
            icon: 'bi-file-earmark-bar-graph',
          },
          {
            label: 'Cadastro',
            path: '/produtos',
            icon: 'bi-plus-square',
          },
          {
            label: 'Parâmetros',
            path: '/produtos/bobinas/parametros',
            icon: 'bi-sliders',
          },
        ],
      },

      {
        label: 'Cola/Tinta',
        icon: 'bi-droplet',
        children: [
          {
            label: 'Movimentação',
            path: '/produtos/cola-tinta/movimentacao',
            icon: 'bi-arrow-left-right',
          },
          {
            label: 'Relatório',
            path: '/produtos/cola-tinta/relatorio',
            icon: 'bi-file-earmark-bar-graph',
          },
          {
            label: 'Cadastro',
            path: '/produtos/cola-tinta/cadastro',
            icon: 'bi-plus-square',
          },
        ],
      },
    ],
  },

  {
    label: 'Fornecedor',
    icon: 'bi-truck',
    items: [
      {
        label: 'Cadastro',
        path: '/fornecedores',
        icon: 'bi-plus-square',
      },
      {
        label: 'Relatório',
        path: '/fornecedores/relatorio',
        icon: 'bi-file-earmark-bar-graph',
      },
    ],
  },

  {
    label: 'Empresa',
    icon: 'bi-building',
    items: [
      {
        label: 'Cadastro de Usuário',
        path: '/usuarios',
        icon: 'bi-person-plus',
      },
      {
        label: 'Perfil',
        path: '/perfil',
        icon: 'bi-person',
      },
      {
        label: 'Sair',
        path: '/logout',
        icon: 'bi-box-arrow-right',
      },
    ],
  },
]