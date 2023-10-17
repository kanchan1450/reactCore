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
        <div className="res-card">
            <img className="res-logo"
            alt = "res-logo"
             src ={CDN_URL+cloudinaryImageId}></img>
            <h3 className="resto-name">{resData.info.name}</h3>
            <h4> {cuisines.join(",")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{areaName}</h4>
        </div>
    );
};

export default RestoCard;