export default function Animate(elem) {
    const arr = gsap.utils.toArray(elem)
        let i = 0
        const interval = setInterval(() => {
            gsap.to(arr[i], { y: 0, opacity: 1,
            onComplete: () => {
                i += 1; i === arr.length &&  clearInterval(interval)
            } })
    }, 150)
}