import {React, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faRetweet,
  faHeart,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";

const TuitStats = ({ replies, retuits, likes, ifIsLiked, onReplyClick, onRetuitsClick, onUploadClick}) => {
    const [isLiked, setIsLiked] = useState(ifIsLiked);
    const [Countlikes, setCountLikes] = useState(likes);
    const handleLikeClick = () => {
        setIsLiked(!isLiked);
        setCountLikes(Countlikes => (isLiked ? Countlikes - 1 : Countlikes + 1));
    };
 return (    
        <div className="row">
        <div className="col"></div>
            <div className="col">
                <FontAwesomeIcon onClick={onReplyClick} icon={faComment} /> {replies}
            </div>
            <div className="col">
                <FontAwesomeIcon onClick={onRetuitsClick} icon={faRetweet} /> {retuits}
            </div>
            <div className="col">
                <FontAwesomeIcon
                onClick={handleLikeClick}
                icon={faHeart}
                style={{ color: isLiked ? "red" : "black" }}
                />{" "}
                {Countlikes}
            </div>
            <div className="col">
                <FontAwesomeIcon onClick={onUploadClick} icon={faUpload} />
            </div>
        </div>
 );
}
export default TuitStats;