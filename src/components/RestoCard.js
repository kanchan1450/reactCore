import { CDN_URL } from "../utils/constants";

const RestoCard = (props) => {
    const{resData} = props;
    const{name,
        cuisines,
        avgRating,
        costForTwo,areaName,
        cloudinaryImageId
        
    } = resData?.info;
    return(
        <div className="m-4 p-4 w-[250px] bg-yellow-50 shadow-lg rounded-lg border-solid border-teal-900 border-2">
            <img className="rounded-lg w-[250] h-[200] border border-solid border-black"
            alt = "res-logo"
             src ={CDN_URL+cloudinaryImageId}></img>
            <h3 className="my-4 font-bold">{name}</h3>
            <h4 className="my-1"> {cuisines.join(", ")}</h4>
            <h3 className="my-1">{avgRating}  ⭐ </h3>
            <h3 className="my-1">{costForTwo}</h3>
            <h3 className="1">📍 {areaName}</h3>
        </div>
    );
};

export default RestoCard;