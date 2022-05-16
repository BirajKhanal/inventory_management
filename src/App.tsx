import React, { useEffect, useState } from 'react';

import "assets/css/main.css"

import { SideNav } from "components/SideNav"
import { DashboardPage, InStockPage, PurchasePage, SalesPage } from 'pages';

function App() {
  const [navSelected, setNavSelected] = useState("1")
  const [pageLoad, setPageLoad] = useState(<DashboardPage />)

  useEffect(() => {
    const pageAll = {
      "1": <DashboardPage />,
      "2": <InStockPage />,
      "3": <SalesPage />,
      "4": <PurchasePage />
    }

    const pageLoader = () => {
      Object.entries(pageAll).map(([k,v]) => {
        if (navSelected === k) {
          setPageLoad(v)
        }
        return null
      })
    }

    pageLoader()
  },[navSelected])

  return (
    <div className="main_container">
      <SideNav setNavSelected={setNavSelected}/>
      <div className="main_pages">
        {pageLoad}
      </div>
    </div>
  );
}

export default App;