import React from 'react'

import "assets/css/dashboard.css"

import { Indicators } from 'components/Dashboard'

export const DashboardPage = () => {
  return (
    <div className='dashboard_container'>
      <div className="welcome_text">
        Welcome Back, Bijaya Baidhaya
      </div>
        <Indicators />
    </div>
  )
}