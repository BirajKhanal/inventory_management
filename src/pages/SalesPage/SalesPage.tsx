import React from 'react'

import { Sales, SalesForm } from 'components/Sales'

export const SalesPage = () => {
  const [showForm, setShowForm] = React.useState(false)

  return (
    <div>
      {!showForm ? (
        <Sales setShowForm={setShowForm}/>
      ):(
        <SalesForm setShowForm={setShowForm}/>
      )}
    </div>
  )
}
