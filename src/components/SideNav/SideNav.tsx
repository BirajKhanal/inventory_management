import React from 'react'

import "assets/css/sidenav.css"
// import logo from "assets/image/logo.png"

interface props {
    setNavSelected:(arg: string) => void
}

export const SideNav:React.FC<props> = ({setNavSelected}) => {

    const navSelect = (input:number) => {
        let listItems = document.getElementsByClassName("nav_item")
        let listLength = listItems.length
        for(let i=0;i<listLength;i++) {
            listItems[i].className = i+1 === input ? "nav_item nav_item_active" : "nav_item"
        } 
    }

    return (
        <div className='nav_container'>
            <div className="nav_logo_container">
                {/* <img src={logo} className="nav_logo" /> */}
            </div>
            <div className="nav">
                <div className="nav_items">
                    <div className="nav_item nav_item_active" onClick={() => {
                        navSelect(1)
                        setNavSelected("1")
                    }}>
                        Dashboard
                    </div>
                    <div className="nav_item" onClick={() => {
                        navSelect(2)
                        setNavSelected("2")
                    }}>
                        In Stock
                    </div>
                    <div className="nav_item" onClick={() => {
                        navSelect(3)
                        setNavSelected("3")
                    }}>
                        Sales
                    </div>
                    <div className="nav_item" onClick={() => {
                        navSelect(4)
                        setNavSelected("4")
                    }}>
                        Purchase
                    </div>
                </div>
            </div>
            <div className="sign_out">
                Sign Out
            </div>
        </div>
    )
}