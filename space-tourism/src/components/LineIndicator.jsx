export default function LineIndicator(props) {
    return (
            <button
                onClick={props.toggle} 
                aria-selected={props.isClicked}
                aria-controls={`${props.name}-tab`}
                className="upper-case f-c-light ff-barlow">{props.name}
            </button>

    )
}
