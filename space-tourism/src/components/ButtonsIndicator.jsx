export default function ButtonIndicator(props) {
    return (
        <button 
            onClick={props.toggle} 
            aria-selected={props.isClicked}
            ref={props.skipToContent} 
            aria-controls={`${props.name}-tab`}
            className="fs-500 bg-c-dark f-c-white ff-belle">
            <span className="sr-only">{props.name}</span>{props.number+1}
        </button>
        
    
    )
}