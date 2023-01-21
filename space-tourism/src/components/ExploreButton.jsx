import { Link } from "react-router-dom";

export default function ExploreButton() {
    return (
        <Link to="/destination" 
            className="explore-button upper-case fs-600 
            ff-belle f-c-dark bg-c-white letter-spacing-270">
            Explore
        </Link>

    )
}