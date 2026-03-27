import { definePlugin } from 'sanity'
import { RocketIcon } from '@sanity/icons'
import { WelcomeDashboard } from './WelcomeDashboard'

export const welcomeDashboardPlugin = definePlugin({
  name: 'welcome-dashboard',
  tools: [
    {
      name: 'welcome',
      title: 'Guide & Tutorials',
      icon: RocketIcon,
      component: WelcomeDashboard,
    },
  ],
})
