import { Heading, Flex, Text, Skeleton, ChartIcon, CommunityIcon, SwapIcon } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import { formatLocalisedCompactNumber } from 'utils/formatBalance'
import useSWRImmutable from 'swr/immutable'
import IconCard, { IconCardData } from '../IconCard'
import StatCardContent from './StatCardContent'
import GradientLogo from '../GradientLogoSvg'

const Stats = () => {
  const { t } = useTranslation()
  const { theme } = useTheme()

  const { data: tvl } = useSWRImmutable('tvl')
  const { data: txCount } = useSWRImmutable('totalTx30Days')
  const { data: addressCount } = useSWRImmutable('addressCount30Days')
  const trades = formatLocalisedCompactNumber(txCount)
  const users = formatLocalisedCompactNumber(addressCount)
  const tvlString = tvl ? formatLocalisedCompactNumber(tvl) : '-'

  const tvlText = t('And those users are now entrusting the platform with over $%tvl% in funds.', { tvl: tvlString })
  const [entrusting, inFunds] = tvlText.split(tvlString)

  const UsersCardData: IconCardData = {
    icon: <CommunityIcon color="secondary" width="36px" />,
  }

  const TradesCardData: IconCardData = {
    icon: <SwapIcon color="primary" width="36px" />,
  }

  const StakedCardData: IconCardData = {
    icon: <ChartIcon color="failure" width="36px" />,
  }

  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      <Heading textAlign="center" scale="xl" mb="32px">
        {t('Rice Token.')}
      </Heading>
      <GradientLogo height="48px" width="48px" mb="24px" />
      <Heading textAlign="center" scale="xl" mb="32px">
        {t('The utility token on RIceswap.')}
      </Heading>

      <Flex flexDirection={['column', null, null, 'row']}>
        <IconCard mr={[null, null, null, '16px']} mb={['16px', null, null, '16px']}>
          <StatCardContent headingText={t('Name')} bodyText={t('Rice Token')} highlightColor={theme.colors.secondary} />
        </IconCard>
        <IconCard mr={[null, null, null, '16px']} mb={['16px', null, null, '0']}>
          <StatCardContent headingText={t('Symbol')} bodyText={t('RICE')} highlightColor={theme.colors.primary} />
        </IconCard>
        <IconCard>
          <StatCardContent
            headingText={t('Supply')}
            bodyText={t('5M on Bitgert & 5M on Core')}
            highlightColor={theme.colors.failure}
          />
        </IconCard>

        <Text textAlign="center" color="textSubtle" bold mb="32px">
          {t('')}
        </Text>
      </Flex>
      <Flex flexDirection={['column', null, null, 'row']}>
        <IconCard mr={[null, null, null, '16px']} mb={['16px', null, null, '0']}>
          <StatCardContent headingText={t('Decimal')} bodyText={t('18')} highlightColor={theme.colors.secondary} />
        </IconCard>
        <IconCard mr={[null, null, null, '16px']} mb={['16px', null, null, '0']}>
          <StatCardContent
            headingText={t('Chain')}
            bodyText={t('CORE & BITGERT')}
            highlightColor={theme.colors.primary}
          />
        </IconCard>
        <IconCard>
          <StatCardContent
            headingText={t('Function')}
            bodyText={t('Utility Token')}
            highlightColor={theme.colors.failure}
          />
        </IconCard>
      </Flex>
    </Flex>
  )
}

export default Stats
