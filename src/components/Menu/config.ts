import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://floofyswap.finance/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://floofyswap.finance/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://floofyswap.finance/pools',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: 'https://floofyswap.finance/lottery',
  },
  {
    label: 'Collectibles',
    icon: 'NftIcon',
    href: 'https://floofyswap.finance/nft',
  },
  {
    label: 'Team Battle',
    icon: 'TeamBattleIcon',
    href: 'https://floofyswap.finance/competition',
    status: {
      text: 'CLAIM',
      color: 'warning',
    },
  },
  {
    label: 'Teams & Profile',
    icon: 'GroupsIcon',
    items: [
      {
        label: 'Leaderboard',
        href: 'https://floofyswap.finance/teams',
      },
      {
        label: 'Task Center',
        href: 'https://floofyswap.finance/profile/tasks',
      },
      {
        label: 'Your Profile',
        href: 'https://floofyswap.finance/profile',
      },
    ],
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://floofyswap.info',
      },
      {
        label: 'Tokens',
        href: 'https://floofyswap.info/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://floofyswap.info/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://floofyswap.info/accounts',
      },
    ],
  },
  {
    label: 'IFO',
    icon: 'IfoIcon',
    href: 'https://floofyswap.finance/ifo',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Contact',
        href: 'https://docs.floofyswap.finance/contact-us',
      },
      {
        label: 'Voting',
        href: 'https://voting.floofyswap.finance',
      },
      {
        label: 'Github',
        href: 'https://github.com/pancakeswap',
      },
      {
        label: 'Docs',
        href: 'https://docs.pancakeswap.finance',
      },
      {
        label: 'Blog',
        href: 'https://pancakeswap.medium.com',
      },
      {
        label: 'Merch',
        href: 'https://pancakeswap.creator-spring.com/',
      },
    ],
  },
]

export default config
