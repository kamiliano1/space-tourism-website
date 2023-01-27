export default function SkipToContent(props) {
    return (
        <button 
            onClick={props.focusContent} 
            className="skip-to-content ff-barlow-reg">Skip to content
        </button>
    )
}