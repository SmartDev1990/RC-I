import { Svg, SvgProps } from '@pancakeswap/uikit'

const GradientLogo: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 198 198" {...props}>
      <image width="198" height="198" href="/images/home/lunar-bunny/rice.png" />
    </Svg>
  )
}

export default GradientLogo
