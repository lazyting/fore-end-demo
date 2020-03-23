/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout'

const chartsRouter = {
  path: '/charts',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Charts',
  meta: {
    title: 'Charts',
    icon: 'chart'
  }
}

export default chartsRouter
