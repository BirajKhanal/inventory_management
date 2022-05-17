import React from 'react'

interface Props {
  label:string,
  amount:number,
  color:string
}

export const IndicatorBox:React.FC<Props> = ({label, amount, color}) => {
  return (
    <div className="indicator_box" style={{ backgroundColor: color}}>
        <p className="label">{label}</p>
        <p className="amount">Rs. {amount}</p>
    </div>
  )
}
