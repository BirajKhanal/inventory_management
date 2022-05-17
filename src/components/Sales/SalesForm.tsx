import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface Props {
    setShowForm:(args: boolean) => void
}

export const SalesForm:React.FC<Props> = ({setShowForm}) => {
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
