import React from 'react'
import {
    TextField,
    InputAdornment
} from '@mui/material';
import {
    AddCircle as AddCircleIcon, 
    Search as SearchIcon
} from '@mui/icons-material'
import { DataGrid } from '@mui/x-data-grid'

interface Filter {
    id: number,
    Name: string,
    Category: string,
    Box: number,
    Unit: number,
    'Current Price'?: number,
    Total?: number,
    Customer?: string,
    'Transcation Type'?: string,
    'Credit Amount'?: number,
    'Debit Amount'?: number,
    Date?: string,
    'Resolve Date'?:string
}

interface Props {
    columns: {
        field: string
    }[]
    rowData: Filter[]
}

export const Datatable:React.FC<Props> = ({columns, rowData}) => {
    const [data, setData] = React.useState(rowData)

    const [rows, setRows] = React.useState<{}[]>()
    const [pageSize, setPageSize] = React.useState(5)

    const search = (searchVal:string) => {
        let filtered:Filter[] = data.filter((items) => {
            return Object.values(items.Name).join('').toLowerCase().includes(searchVal.toLowerCase())
        })
        setRows(filtered)
    }

    return (
        <>
            <div className="search_container">
                <TextField
                    id="input-with-icon-textfield"
                    placeholder='Search Name'
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                    }}
                    variant="standard"
                    onChange={(val:any) => {
                        search(val.target.value);
                    }}
                />
            </div>
            <div className='datatable_container' style={{ height: 500, width: '100%' }}>
                <DataGrid
                    columns={columns}
                    rows={rows ? rows : data}
                    pageSize={pageSize}
                    onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                    rowsPerPageOptions={[5, 10, 20]}
                />
            </div>
        </>
    )
}
