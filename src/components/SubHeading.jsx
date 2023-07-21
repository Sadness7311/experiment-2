export default function SubHeading({ heading, text }) {
    return (
        <div className="sub-heading">
            <h4>{ heading }: </h4>
            <p>{ text }</p>
        </div>
    )
}