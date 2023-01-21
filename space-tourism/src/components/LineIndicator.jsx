export default function LineIndicator() {
    return (
        <div className="indicators underline-indicators tabs-indicators flex">
            <button aria-selected="false" aria-controls="moon-tab" className="upper-case f-c-light ff-barlow">Moon</button>
            <button aria-selected="false" aria-controls="mars-tab" className="upper-case f-c-light ff-barlow">Mars</button>
            <button aria-selected="true" aria-controls="europa-tab" className="upper-case f-c-light ff-barlow">Europa</button>
            <button aria-selected="false" aria-controls="titan-tab" className="upper-case f-c-light ff-barlow">Titan</button>
        </div>
    )
}