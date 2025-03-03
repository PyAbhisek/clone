import Banner from "./Banner"
import Latest from "./Latest"
import Navbar from "./Navbar"
import Trending from "./Trending"

const Test = () => {
    return (
        <>
            <div className="struct">
                <Navbar />
                <div className="homepage">
                    <Banner />
                    <Latest />
                    <Trending />

                </div>

            </div>
        </>

    )
}
export default Test