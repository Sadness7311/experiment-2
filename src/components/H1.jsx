export default function H1({ text, styles, onClick, id = '' }) {
    const defaultStyles = {
        fontSize: '9.5vw',
        transform:'scale(1.2, .85)'
    }
    const textArr = text.split(' ')
    return (
        <div className='H1'> 
            <h1 style={styles ? {...defaultStyles, ...styles} : defaultStyles}
            onClick={onClick} className={textArr[0]} id={id}>{text}</h1>
        </div>
    )
}