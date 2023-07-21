import { useEffect } from 'react'
import Animate from '../functions/Animate'
export default function Navbar() {
    useEffect(() => { Animate('.navbar h3') }, [])
    return (
        <div className="navbar">
            <h3>Work</h3>
            <h3 onClick={() => window.scrollTo(0, 200)}>Skills</h3>
        </div>
    )
}