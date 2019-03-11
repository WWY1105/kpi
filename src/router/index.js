import Vue from 'vue'
import Router from 'vue-router'
import exportPerformanceReport from '@/pages/exportPerformanceReport'
import indicatorAllocation from '@/pages/indicatorAllocation'
import indicatorEntry from '@/pages/indicatorEntry'
import performanceQuery from '@/pages/performanceQuery'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/exportPerformanceReport',
      name: 'exportPerformanceReport',
      component: exportPerformanceReport
    },{
      path: '/indicatorAllocation',
      name: 'indicatorAllocation',
      component: indicatorAllocation
    },{
      path: '/indicatorEntry',
      name: 'indicatorEntry',
      component: indicatorEntry
    },{
      path: '/performanceQuery',
      name: 'performanceQuery',
      component: performanceQuery
    },
  ]
})
