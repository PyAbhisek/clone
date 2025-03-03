import { useState } from "react"
import image3 from "../Assests/test3.jpeg"
import image4 from "../Assests/test4.jpeg"
import image5 from "../Assests/test5.jpeg"
import image6 from "../Assests/test6.jpeg"
import image1 from "../Assests/test1.jpeg"
import image2 from "../Assests/test2.jpg"

const Latest = () => {
    const [LatestData, setLatestData] = useState([image3, image4, image5, image6, image1, image2])
    return (
        <div className="parentContainer">  
        <div className="header">
            Latest Buzz
        </div>

            <div className="latestParent">

                {LatestData.map((item) => {
                    return (
                        <div>
                            <img className="latestCircle" src={item} />
                        </div>
                    )

                })}
            </div>


        </div>
    )
}
export default Latest