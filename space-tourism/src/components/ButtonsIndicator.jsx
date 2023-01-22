export default function ButtonIndicator() {
    return (
        <div className="indicators buttons-indicators grid">
            <h2 aria-selected="true" aria-controls="moon-tab" className="fs-600 bg-c-dark f-c-white ff-belle"><span className="sr-only">Moon</span>1</h2>
            <h2 aria-selected="false" aria-controls="mars-tab" className="fs-600 bg-c-dark f-c-white ff-belle"><span className="sr-only">Mars</span>2</h2>
            <h2 aria-selected="false" aria-controls="europa-tab" className="fs-600 bg-c-dark f-c-white ff-belle"  ><span className="sr-only">Europa</span>3</h2>
        </div>
    )
}