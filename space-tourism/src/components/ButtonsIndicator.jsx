export default function ButtonIndicator(props) {
    return (
        <h2 
            onClick={props.toggle} 
            aria-selected={props.isClicked} 
            aria-controls={`${props.name}-tab`}
            className="fs-600 bg-c-dark f-c-white ff-belle">
            <span className="sr-only">{props.name}</span>{props.number+1}
        </h2>
        
    
    )
}