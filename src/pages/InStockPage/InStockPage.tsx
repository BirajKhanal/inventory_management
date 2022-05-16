import React from 'react'

import { InStock, InStockForm } from 'components/InStock'

export const InStockPage = () => {
  const [showForm, setShowForm] = React.useState(false)

  return (
    <div>
      {!showForm ? (
        <InStock setShowForm={setShowForm}/>
      ):(
        <InStockForm setShowForm={setShowForm}/>
      )}
    </div>
  )
}