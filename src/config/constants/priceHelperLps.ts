import tokens from './tokens'
import { SerializedFarmConfig } from './types'

const priceHelperLps: SerializedFarmConfig[] = [
  /**
   * These LPs are just used to help with price calculation for MasterChef LPs (farms.ts).
   * This list is added to the MasterChefLps and passed to fetchFarm. The calls to get contract information about the token/quoteToken in the LP are still made.
   * The absence of a PID means the masterchef contract calls are skipped for this farm.
   * Prices are then fetched for all farms (masterchef + priceHelperLps).
   * Before storing to redux, farms without a PID are filtered out.
   */
  {
    pid: 2,
    lpSymbol: 'RICE-BRISE lp',
    lpAddresses: {
      1116: '0xd611F8869A282CfD79723836e061bC118eB40A9b',
      97: '0xd611F8869A282CfD79723836e061bC118eB40A9b',
      56: '0xd611F8869A282CfD79723836e061bC118eB40A9b',
    },
    token: tokens.rice,
    quoteToken: tokens.wbnb,
  },
]

export default priceHelperLps
