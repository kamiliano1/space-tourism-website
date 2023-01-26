export default function DotIndicator(props) {
    return (
        <button
            onClick={props.toggle} 
            aria-selected={props.isClicked} 
            aria-controls={`${props.name}-tab`}
            ref={props.skipToContent}
            className="upper-case f-c-light ff-barlow ">
            <span className="sr-only">{props.name}</span>
        </button>
    )
}