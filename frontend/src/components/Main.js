import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { BiPencil } from 'react-icons/bi'

export const Main = () => {

    const [regs, setRegs] = useState([])
    const [clock, setClock] = useState()
    const [message, setMessage] = useState()

    const getRegs = async () => {
        const data = await fetch(`${process.env.REACT_APP_URL_API}/bookmarks`)
        const regs = await data.json()
        setRegs(regs)
    }

    const getClock = () => {

        var today = new Date()
        var h = today.getHours()
        var m = today.getMinutes()
        var s = today.getSeconds()
        setClock(`${h}:${m}:${s}`)

        if (h >= 5 && h < 12) {
            setMessage('Hi, good morning')
        } else if (h < 20 && h >= 5) {
            setMessage('Hi, good afternoon')
        } else {
            setMessage('Hi, good night')
        }
    }


    useEffect(() => {
        document.title = "Home"
        getRegs()
        getClock()
        const interval = setInterval(() => getClock(), [1000])        
        return () => {
            clearInterval(interval);
          };
    }, [])

    return (
        <div className="Main">
            <h2 id="clock">{clock}</h2>
            <h1 id="welcome">{message}</h1>
            <ul id="visualBookmarks">
                {regs.map(item => (
                    <li key={item.id}><a href={item.url} target="_blank" rel="noreferrer">{item.name}</a></li>
                ))}
            </ul>
            <div className="text-center">
                <Link to="/crud" className="btn btn-secondary ruta">CRUD <BiPencil /></Link>
            </div>
        </div>
    )
}