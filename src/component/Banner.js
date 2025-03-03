import { useState } from "react";
import image1 from "../Assests/test1.jpeg";
import image2 from "../Assests/test2.jpg";
import image5 from "../Assests/test5.jpeg"
import image6 from "../Assests/test6.jpeg"

const Banner = () => {
    let arr = [image1, image2,image5,image6];
    const [data, setData] = useState(0);

    const handleClick = (index) => {
        setData(index);
    };

    return (
        <div className="carousel">
            <img src={arr[data]} className="banner-image" alt="banner" />
            <div className="dots-container">
                {arr.map((_, i) => (
                    <span
                        key={i}
                        className={`dot ${i === data ? "active" : ""}`}
                        onClick={() => handleClick(i)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Banner;
