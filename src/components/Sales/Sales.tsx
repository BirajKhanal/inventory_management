import React from 'react'
import {
    AddCircle as AddCircleIcon, 
} from '@mui/icons-material'
import { Datatable } from 'components/Datatable';

interface Props {
    setShowForm:(args: boolean) => void
}

export const Sales:React.FC<Props> = ({setShowForm}) => {
  const rows = [
    {id: 1, Name: 'Signature', Category: '750ml', Box: 2, Unit: 1, Total: 5000, Customer:'User Name', 'Transcation Type':'Credit', 'Credit Amount': 2000, 'Debit Amount': 0, Date:'2022/05/12', 'Resolve Date':''}
  ]

  const columns = [
    {field: 'Name', width: 400},
    {field: 'Category', width: 250},
    {field: 'Box', width: 180},
    {field: 'Unit', width: 180},
    {field: 'Total', width: 180},
    {field: 'Customer', width: 180},
    {field: 'Transcation Type', width: 180},
    {field: 'Credit Amount', width: 180},
    {field: 'Debit Amount', width: 180},
    {field: 'Date', width: 180},
    {field: 'Resolve Date', width: 180},
  ]

  return (
    <>
        <div className="button"
                onClick={() => {
                    setShowForm(true)
                }}
            >
                <AddCircleIcon style={{marginRight: 10}}/> Add Sales
        </div>
        <Datatable columns={columns} rowData={rows} />
    </>
  )
}