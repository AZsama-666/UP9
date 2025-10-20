// Site Configuration
export const SITE_CONFIG = {
  name: 'UP9',
  description: 'Web3 研究、构建和资本对接的建设者社群',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://up9.community',
  ogImage: '/og-image.png',
  links: {
    twitter: process.env.NEXT_PUBLIC_TWITTER_URL || 'https://twitter.com/up9community',
    telegram: process.env.NEXT_PUBLIC_TELEGRAM_URL || 'https://t.me/up9community',
    discord: process.env.NEXT_PUBLIC_DISCORD_URL || 'https://discord.gg/up9',
  },
}

// Navigation Links
export const NAV_LINKS = [
  { label: 'About', href: '/about', zhLabel: '关于' },
  { label: 'Method', href: '/method', zhLabel: '方法论' },
  { label: 'Outcomes', href: '/outcomes', zhLabel: '成果' },
  { label: 'Events', href: '/events', zhLabel: '活动' },
  { label: 'Resources', href: '/resources', zhLabel: '资源' },
  { label: 'Partners', href: '/partners', zhLabel: '合作' },
  { label: 'Legal', href: '/legal', zhLabel: '法律' },
]

// Social Media Links
export const SOCIAL_LINKS = [
  { name: 'Twitter', url: SITE_CONFIG.links.twitter },
  { name: 'Telegram', url: SITE_CONFIG.links.telegram },
  { name: 'Discord', url: SITE_CONFIG.links.discord },
]

