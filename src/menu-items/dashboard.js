// assets
import { IconDashboard, IconTable } from '@tabler/icons'

// ==============|| DASHBOARD MENU ITEMS ||============== //

const dashboard = {
  id: 'dashboard',
  title: 'Dashboard',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard',
      icon: IconDashboard,
      breadcrumbs: false,
    },
    {
      id: 'keywords',
      title: 'Keywords',
      type: 'item',
      url: '/dashboard/keywords',
      icon: IconTable,
      breadcrumbs: false,
    },
  ],
}

export default dashboard
