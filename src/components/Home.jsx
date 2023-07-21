import { useEffect } from 'react'
import Animate from '../functions/Animate'
import H1 from './H1'
export default function Home() {
    useEffect(() => { Animate('.home h1') }, [])
    useEffect(() => {
        gsap.to('.second-section', {
            yPercent: -100,
            scrollTrigger: {
                trigger: '.home',
                start: 'top top',
                scrub: true
            }
        })
        gsap.to('.home h1', {
            x: -20,
            scrollTrigger: {
                trigger: '.home',
                start: 'top top',
                scrub: true
            }
        })
    }, [])
    return (
        <>
            <div className="home">
                <H1 text="Spark Your" />
                <H1 text="Creativity Within" styles={{
                letterSpacing: '1vw', fontSize: 'calc(5vw + 1vh)'}}/>
            </div>
        </>
    )
}