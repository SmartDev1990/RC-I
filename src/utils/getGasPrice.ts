import { ChainId } from '@smartdev1990/core-sdk'
import { CHAIN_ID } from 'config/constants/networks'
import store from 'state'
import { GAS_PRICE_GWEI } from 'state/types'

/**
 * Function to return gasPrice outwith a react component
 */
const getGasPrice = (): string => {
  const chainId = CHAIN_ID
  const state = store.getState()
  const userGas = state.user.gasPrice || GAS_PRICE_GWEI.default
  return chainId === ChainId.CORE.toString() ? userGas : GAS_PRICE_GWEI.default
}

export default getGasPrice
