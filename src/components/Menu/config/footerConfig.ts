import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('RiceSwap Bitgert'),
        href: 'https://app.riceprotocol.org',
        isHighlighted: true,
      },
      {
        label: t('Whitepaper'),
        href: 'https://riceswap.gitbook.io/',
        isHighlighted: true,
      },
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Customer Support'),
        href: 'https://t.me/rice_pro',
      },
    ],
  },
]
