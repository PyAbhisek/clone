import { useState } from "react"
import image1 from "../Assests/test1.jpeg"
import image2 from "../Assests/test2.jpg"
const Trending = () => {
    const [trendingData, setTrendingData] = useState([image1, image2, image1, image2])
    return (
        <div className="parentContainer">
            <div className="header">
                Trending
            </div>
            <div className="trendingParent">
                {trendingData.map((item) => {
                    return (
                        <div>
                            <img src={item} className="trendingBox" />
                        </div>
                    )

                })}
            </div>


        </div>
    )
}
export default Trending