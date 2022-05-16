import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface props {
    setShowForm:(args: boolean) => void
}

export const InStockForm:React.FC<props> = ({setShowForm}) => {
  return (
    <div>
        <div className="back_button"
            onClick={() => {
                setShowForm(false)
            }}
        >
            <ArrowBackIcon fontSize='large' />            
        </div>
    </div>
  )
}
