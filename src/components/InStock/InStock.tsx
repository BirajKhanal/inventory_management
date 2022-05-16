import React from 'react'
import {
    AddCircle as AddCircleIcon, 
} from '@mui/icons-material'
import { Datatable } from 'components/Datatable';

interface props {
    setShowForm:(args: boolean) => void
}

export const InStock:React.FC<props> = ({setShowForm}) => {
    const rows = [
        {id: 1, Name: 'Signature', Category: '750ml', Box: 2, Unit: 1, 'Current Price': 500},
        {id: 2, Name: 'Jack Daniels', Category: '750ml', Box: 2, Unit: 1, 'Current Price': 500},
        {id: 3, Name: 'Black Label', Category: '750ml', Box: 2, Unit: 1, 'Current Price': 500},
    ]

    const columns = [
        {field: 'Name', width: 400},
        {field: 'Category', width: 250},
        {field: 'Box', width: 180},
        {field: 'Unit', width: 180},
        {field: 'Current Price', width: 180},
    ]
    return (
        <>
            <div className="button"
                    onClick={() => {
                        setShowForm(true)
                    }}
                >
                    <AddCircleIcon style={{marginRight: 10}}/> Add Stock
            </div>
            <Datatable columns={columns} rowData={rows} />
        </>
    )
}