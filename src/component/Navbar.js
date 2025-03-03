import { useState } from "react"

const Navbar = () => {
    const [menuItem, setMenuItem] = useState([
        {
            name: "home",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path d="M12 2L2 9.5V22h20V9.5L12 2z" fill="white" stroke="white" strokeWidth="1"/>
                    <path d="M9 15h6v7h-6z" fill="none" stroke="white" strokeWidth="1"/>
                </svg>
            )
        },
        {
            name: "search",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <circle cx="11" cy="11" r="8" fill="none" stroke="white" strokeWidth="2"/>
                    <path d="M21 21L16.65 16.65" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            )
        }
    ])

    return (
        <>
            <div className="sideBar">
                {menuItem.map((item, index) => {
                    return (
                        <div key={index} className="sideBar-item">
                            <div className="icon">{item.icon}</div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Navbar