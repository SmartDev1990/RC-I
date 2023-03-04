import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'
import { CHAIN_ID } from './networks'

const serializedTokens = serializeTokens()
export const CAKE_BNB_LP_MAINNET = '0xd611F8869A282CfD79723836e061bC118eB40A9b'

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 2, 3) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'RICE',
    lpAddresses: {
      1116: '0x1eb697Cb6F457F6a65C682F7f7c65F9f2E622A34',
      56: '0x1eb697Cb6F457F6a65C682F7f7c65F9f2E622A34',
      97: '0x1eb697Cb6F457F6a65C682F7f7c65F9f2E622A34',
    },
    token: serializedTokens.rice,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'RICE-CORE LP',
    lpAddresses: {
      1116: '0x1eb697Cb6F457F6a65C682F7f7c65F9f2E622A34',
      56: '0x1eb697Cb6F457F6a65C682F7f7c65F9f2E622A34',
      97: '0x1eb697Cb6F457F6a65C682F7f7c65F9f2E622A34',
    },
    token: serializedTokens.rice,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'RICE-BUSD LP',
    lpAddresses: {
      1116: '0x1eb697Cb6F457F6a65C682F7f7c65F9f2E622A34',
      56: '0x1eb697Cb6F457F6a65C682F7f7c65F9f2E622A34',
      97: '0x1eb697Cb6F457F6a65C682F7f7c65F9f2E622A34',
    },
    token: serializedTokens.rice,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 2,
    lpSymbol: 'BUSD-CORE LP',
    lpAddresses: {
      1116: '0x1eb697Cb6F457F6a65C682F7f7c65F9f2E622A34',
      56: '0x1eb697Cb6F457F6a65C682F7f7c65F9f2E622A34',
      97: '0x1eb697Cb6F457F6a65C682F7f7c65F9f2E622A34',
    },
    token: serializedTokens.busd,
    quoteToken: serializedTokens.wbnb,
  },
].filter((f) => !!f.lpAddresses[CHAIN_ID])

export default farms
