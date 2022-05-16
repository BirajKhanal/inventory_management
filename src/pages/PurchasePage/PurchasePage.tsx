import React from 'react'

import { Purchase, PurchaseForm } from 'components/Purchase'

export const PurchasePage = () => {
  const [showForm, setShowForm] = React.useState(false)

  return (
    <div>
      {!showForm ? (
        <Purchase setShowForm={setShowForm}/>
      ):(
        <PurchaseForm setShowForm={setShowForm}/>
      )}
    </div>
  )
}
