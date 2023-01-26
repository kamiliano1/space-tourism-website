export default function LineIndicator(props) {
    return (
            <button
                onClick={props.toggle} 
                aria-selected={props.isClicked}
                ref={props.skipToContent}
                aria-controls={`${props.name}-tab`}
                className="upper-case f-c-light ff-barlow fs-100">{props.name}
            </button>

    )
}
