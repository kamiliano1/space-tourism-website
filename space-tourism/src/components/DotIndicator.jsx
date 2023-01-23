export default function DotIndicator() {
    return (
        <div className="indicators dots-indicators flex">
            <button aria-selected="true" aria-controls="moon-tab" className="upper-case f-c-light ff-barlow "><span class="sr-only">Moon</span></button>
            <button aria-selected="false" aria-controls="mars-tab" className="upper-case f-c-light ff-barlow "><span class="sr-only">Mars</span></button>
            <button aria-selected="false" aria-controls="europa-tab" className="upper-case f-c-light ff-barlow"  ><span class="sr-only">Europa</span></button>
            <button aria-selected="false" aria-controls="europa-tab" className="upper-case f-c-light ff-barlow"  ><span class="sr-only">Europa</span></button>
        </div>
    )
}