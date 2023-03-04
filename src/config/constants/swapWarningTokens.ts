import { Token } from '@smartdev1990/core-sdk'
import tokens from 'config/constants/tokens'
import rugPullTokens from 'config/constants/rugPullTokens'

// /const { bondly, safemoon, itam, ccar, bttold } = tokens
// const { pokemoney } = rugPullTokens

interface WarningTokenList {
  [key: string]: Token
}

const SwapWarningTokens = <WarningTokenList>{
  // safemoon,
  // bondly,
  // itam,
  // ccar,
  // bttold,
  // pokemoney,
}

export default SwapWarningTokens
