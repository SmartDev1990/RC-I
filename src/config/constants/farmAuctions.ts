import { ChainId } from '@smartdev1990/core-sdk'
import getLpAddress from 'utils/getLpAddress'
import { CHAIN_ID } from './networks'
import tokens from './tokens'
import { FarmAuctionBidderConfig } from './types'

export const whitelistedBidders: FarmAuctionBidderConfig[] =
  Number(CHAIN_ID) === ChainId.CORE
    ? [
        // Those farms changed their project wallet address.
        {
          account: '', // Auction #19
          farmName: 'HAPPY-BNB',
          tokenAddress: '',
          quoteToken: tokens.wbnb,
          tokenName: 'HappyFans',
          projectSite: 'https://happyfans.club/',
        },
        {
          account: '0xB8614FABf4bbA416b9dB620e12272AD63b14387E', // Auction #20
          farmName: '8PAY-BUSD',
          tokenAddress: '0xfeea0bdd3d07eb6fe305938878c0cadbfa169042',
          quoteToken: tokens.rice,
          tokenName: '8PAY',
          projectSite: 'https://8pay.network/',
        },
        // Below farms was the latest.
        {
          account: '0x9Ed5a62535A5Dd2dB2d9bB21bAc42035Af47F630',
          farmName: 'NAV-BNB',
          tokenAddress: '0xBFEf6cCFC830D3BaCA4F6766a0d4AaA242Ca9F3D',
          quoteToken: tokens.wbnb,
          tokenName: 'Navcoin',
          projectSite: 'https://navcoin.org/en',
        },
      ].map((bidderConfig) => ({
        ...bidderConfig,
        lpAddress: getLpAddress(bidderConfig.tokenAddress, bidderConfig.quoteToken),
      }))
    : []

const UNKNOWN_BIDDER: FarmAuctionBidderConfig = {
  account: '',
  tokenAddress: '',
  quoteToken: tokens.wbnb,
  farmName: 'Unknown',
  tokenName: 'Unknown',
}

export const getBidderInfo = (account: string): FarmAuctionBidderConfig => {
  const matchingBidder = whitelistedBidders.find((bidder) => bidder.account.toLowerCase() === account.toLowerCase())
  if (matchingBidder) {
    return matchingBidder
  }
  return { ...UNKNOWN_BIDDER, account }
}
