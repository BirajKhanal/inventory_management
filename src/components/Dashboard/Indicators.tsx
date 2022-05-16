import React from 'react'

import { IndicatorBox } from './IndicatorBox'
import { colors } from 'components/UI'

export const Indicators = () => {
  return (
    <div className="indicators">
      <IndicatorBox label={"Sales"} amount={5000} color={colors.primary} />
      <IndicatorBox label={"Net Profit"} amount={3000} color={colors.positive} />
      <IndicatorBox label={"Credit"} amount={2000} color={colors.negative} />
      <IndicatorBox label={"Stock"} amount={3000} color={colors.secondary} />
    </div>
  )
}
