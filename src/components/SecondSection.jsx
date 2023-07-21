import { useEffect, useState } from 'react'
import H1 from './H1'
import SubHeading from './SubHeading'
export default function SecondSection() {
    const [libraries, setLibraries] = useState([{ name: 'GSAP', styles: { marginTop: '20px', color: '#82C800'},
data: { heading: 'GSAP: An Animation Library', description: 'GSAP is a very useful library which provides a number of tools to help make lovely animations.', 
creator: 'Jack Doyle, Cassie Evans and Rodrigo Hernando are the ones who made GSAP.', skills: 'GSAP ScrollTrigger, TextPlugin, Flip, SmoothScroll.', 
experience: '3 months', expertise: '90%', url: 'https://greensock.com/gsap/'} }, 
    { name: 'React', styles: { color: '#63DEF7'}, data:  { heading: 'React: A Framework for Painless UI', description: 'React is a Javascript Framework for dividing the UI into several reusable components.', 
        creator: 'React was created by Jordan Walke, a software engineer at Facebook.', skills: 'React Router, Redux, React Spring, Axios.', 
        experience: '4-5 months', expertise: '80%', url: 'https://react.dev/'
    }}, { name: 'Three', styles: { color: '#757575'} ,data: {
        heading: 'Three JS: Best 3D Library Ever', description: 'Three JS is a library that uses WebGL and helps me make great 3D websites.',
        creator: 'Three. js was first released by Ricardo Cabello on GitHub in April 2010.', 
        skills: 'dat.gui, Cannon JS, OrbitControls, postprocessing.', experience: '4-5 months', expertise: '60%', url: 'https://threejs.org/'
    } },
    { name: 'Next', styles: { color: 'black' }, data: {
        heading: 'Next JS: A React Framework', description: 'Next JS is a framework on top of react giving many more features.',
        creator: 'Guillermo Rauch is the creator of Next JS.', skills: 'None', experience: '2 months', expertise: '50%',
        url: 'https://nextjs.org/'
    } }])


    //////////////////////////////////////////////////////////////////////////


    const [handling, setHandling] = useState({ name: '', data: { heading: '', description: '', 
    creator: '', skills: '', experience: '', expertise: ''} })



    useEffect(() => {
        gsap.to('.scroll', { y: 30, scrollTrigger: { trigger: '.home', start: 'top top', 
        scrub: true, }})
        const elems = ['.scroll p', '.second-section h1:not(.scroll h1)']
        elems.forEach((elem) => gsap.to(elem, {
            opacity: 1, y: 0, scrollTrigger: {
                trigger: '.second-section', start: `top-=60%`
            }
        }))


        // gsap.to('.third-section', {
        //     yPercent: -10,
        //     scrollTrigger: {
        //         trigger: '.second-section',
        //         start: 'top-=70%',
        //         scrub: true,
        //         pin: '.second-section',
        //         pinSpacing: false,
        //     }
        // })

        gsap.to('.third-section', {
            height: '100%',
            scrollTrigger: {
                trigger: '.second-section',
                pin: '.second-section',
                start: 'top-=30%',
                end: 'bottom bottom',
                pinSpacing: false,
                scrub: true
            }
        })

    }, [])


    const handleClick = e => {
        const targetText = e.target.innerText.toLowerCase()
        setHandling({ name: targetText, data: libraries[e.target.id].data })
        gsap.to('.the-handler *:not(button)', { color: targetText === 'next' ||
        targetText === 'three'  ? 'white': 'black' })
        gsap.to('.the-handler', { width: '100%', backgroundColor:e.target.style.color,
        onComplete: () => {
        gsap.to('.background-image', { width: '50%' })
        gsap.to('.the-handler *', { opacity: 1 }) 
    }
    })
}


    const renderLibraries = () => libraries.map((lib, index) => <H1 text={lib.name}
     key={index} id={index}styles={{...lib.styles, letterSpacing: '5vw' }} onClick={handleClick} />)


    const handleBack = () => {
        gsap.to('.background-image', { width: 0, delay: .5 })
        gsap.to('.the-handler *', {opacity: 0, onComplete: () => 
        gsap.to('.the-handler', { width: 0 }) })
    }
    


    return (
        <div className="second-section">
            <div className="scroll">
                <H1 text="Skills" styles={{ margin: '20px', letterSpacing: '5vw' }}/>
                <p>Hello! I'm Sadness7311, an experienced web developer with a passion for creating dynamic and interactive websites. </p>
                <p>Over the past 5 months, I have dedicated my time to learning and mastering various libraries.</p>
                <p style={{ fontWeight: 1000, margin: '10px' }}>I have learned these libraries: </p>
            </div>
            {renderLibraries()}
            <div className="the-handler">
                <div className="background-image" style={{ backgroundImage: `
                url('/${handling.name.toLowerCase()}-logo.svg')`}}></div>
                <div className="desc">
                    <h2>{ handling.data.heading }</h2>
                    <SubHeading heading="Description" text={handling.data.description}/>
                    <SubHeading heading="Creator" text={handling.data.creator}/>
                    <SubHeading heading={`${handling.name} Skills`} text={handling.data.skills}/>
                    <SubHeading heading="My Experience" text={handling.data.experience}/>
                    <SubHeading heading="Expertise" text={handling.data.expertise}/>
                    <div style={{ display: 'flex' }}>
                    <button onClick={() => open(handling.data.url)}>Go to Site</button>
                    <button onClick={handleBack}>Back</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}