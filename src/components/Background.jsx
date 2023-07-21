import { useEffect } from 'react'
import Animate from '../functions/Animate'
export default function Background() {
    useEffect(() => { gsap.to('.background', { width: '50%' })}, [])

    useEffect(() => { Animate('.background h3') }, [])
    return (
        <div className="background">
            <h3>30:20:67</h3>
            <h3>89.33</h3>
        </div>
    )//FFB400
}