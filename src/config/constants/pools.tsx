import { BigNumber } from '@ethersproject/bignumber'
import Trans from 'components/Trans'
import { VaultKey } from 'state/types'
import { serializeTokens } from 'utils/serializeTokens'
import { briseToken } from './tokens'
import { SerializedPoolConfig, PoolCategory } from './types'

const serializedTokens = serializeTokens(briseToken)

export const MAX_LOCK_DURATION = 31536000
export const UNLOCK_FREE_DURATION = 604800
export const ONE_WEEK_DEFAULT = 604800
export const BOOST_WEIGHT = BigNumber.from('1000000000000')
export const DURATION_FACTOR = BigNumber.from('31536000')

export const vaultPoolConfig = {
  [VaultKey.CakeVaultV1]: {
    name: <Trans>Auto RICE</Trans>,
    description: <Trans>Automatic restaking</Trans>,
    autoCompoundFrequency: 5000,
    gasLimit: 2000000,
    tokenImage: {
      primarySrc: `/images/tokens/${briseToken.rice.address}.png`,
      secondarySrc: '/images/tokens/autorenew.svg',
    },
  },
  [VaultKey.CakeVault]: {
    name: <Trans>Stake RICE</Trans>,
    description: <Trans>Stake, Earn – And more!</Trans>,
    autoCompoundFrequency: 5000,
    gasLimit: 2000000,
    tokenImage: {
      primarySrc: `/images/tokens/${briseToken.rice.address}.png`,
      secondarySrc: '/images/tokens/autorenew.svg',
    },
  },
  [VaultKey.IfoPool]: {
    name: 'IFO CAKE',
    description: <Trans>Stake CAKE to participate in IFOs</Trans>,
    autoCompoundFrequency: 1,
    gasLimit: 2000000,
    tokenImage: {
      primarySrc: `/images/tokens/${briseToken.rice.address}.png`,
      secondarySrc: `/images/tokens/ifo-pool-icon.svg`,
    },
  },
} as const

export const livePools: SerializedPoolConfig[] = [
  {
    sousId: 0,
    stakingToken: serializedTokens.rice,
    earningToken: serializedTokens.rice,
    contractAddress: {
      1116: '0x40f97e4C238CCEa7c25B78A2D56C350ED877c891',
      56: '',
      97: '',
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '10',
    isFinished: false,
  },
]

// known finished pools
const finishedPools = [
  /* {
    sousId: 285,
    stakingToken: serializedTokens.rice,
    earningToken: serializedTokens.sdao,
    contractAddress: {
      1116: '',
      56: '0x168eF2e470bfeAEB32BE52FB218A41483904851c',
      97: '',
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.405',
    version: 3,
  }, */
].map((p) => ({ ...p, isFinished: true }))

export default [...livePools, ...finishedPools]
