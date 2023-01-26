import ExploreButton from "../components/ExploreButton"
export default function Home(props) {
    console.log(props)
    return (
        <main className="container ff-barlow">
            <div className="f-c-light grid grid--home flow">
                <h1 className="upper-case fs-400 letter-spacing-475">So, you want to travel to <span className="fs-900 ff-belle f-c-white letter-spacing-475 d-block">Space</span></h1>
                <p className="fs-100 ff-barlow-reg">Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
                <ExploreButton skipToContent ={props.focusRef}
                />
            </div>
        </main>
    )
}