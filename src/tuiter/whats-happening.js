import React, { useState } from "react";
import { AiOutlinePicture } from "react-icons/ai"; 
import {MdFormatListBulleted} from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
import { TiCalendarOutline } from "react-icons/ti";
import { BiBold, BiItalic } from "react-icons/bi";
import { HiOutlineLocationMarker, HiOutlineGift } from "react-icons/hi";
import {createTuit} from "./reducers/tuits-reducer";
import {useDispatch} from "react-redux";
import TuitStats from "./tuits/tuit-stats";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash
} from "@fortawesome/free-solid-svg-icons";

const WhatsHappening = () => {
  let [whatsHappening, setWhatsHappening] = useState('');
   const dispatch = useDispatch();
let [shouldShow, setShouldShow] = useState(false);


 let [post, setPost] = useState('');

const currentTime = new Date();
  const tuitClickHandler = () => {
       const newTuit = {
     tuit: whatsHappening
   }
   if (whatsHappening.trim() === "") {
      return; }
   dispatch(createTuit(newTuit));
   setPost(whatsHappening);
   setWhatsHappening("");
   setShouldShow(true);
  };

    const deleteClickHandler = () => {
    dispatch(createTuit(newTuit));
    setPost(whatsHappening);
    setWhatsHappening("");
    setShouldShow(false);
  };

    const newTuit = {
      tuit: whatsHappening,
      userName: "NASA", 
      handle: "@nasa",
      image: "nasa.png",
      topic: "Space",
      time: "2h",
      liked: false,
      replies: 0,
      retuits: 0,
      likes: 0,
      _id: new Date().getTime(),
    };


  return (
    <div className="row">
      <div className="col-auto">
        <img src={require(`./nasa.jpg`)} width={60} alt="NASA" />
      </div>
      <div className="col-10">
        <textarea
          value={whatsHappening}
          placeholder="What's happening?"
          className="form-control border-0"
          onChange={(event) => setWhatsHappening(event.target.value)}
        ></textarea>
        <div>
          <button
            className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
            onClick={tuitClickHandler}
          >
            Tuit
          </button>
          <div className="text-primary fs-2">
            <AiOutlinePicture className="me-3" />
            <HiOutlineGift className="me-3" />
            <MdFormatListBulleted className="me-3" />
            <BsEmojiSmile className="me-3" />
            <TiCalendarOutline className="me-3" />
            <HiOutlineLocationMarker className="me-3" />
            <BiBold className="me-3" />
            <BiItalic className="me-3" />
          </div>
        </div>
      </div>
      <div className="col-12">
        <hr />
      </div>
      
      
{shouldShow? (
      <div className="list-group" style={{width:"650px", position:"relative"}}>
  <li className="list-group-item">
   <div className="row">
     <div className="col-10">
       <div>Tesla . {currentTime.toLocaleString()}</div> 
       <div className="fw-bolder">CyperTruck</div>
       <div>{post}</div>
     </div>
     <div className="col-2">
     <FontAwesomeIcon onClick={deleteClickHandler} icon={faTrash} style={{float:"right", marginLeft:"4em"}}/>
       <img width={70} alt="" className="float-end rounded-3" src={require(`./nasa.jpg`)}/>
     </div>
   </div>
    <TuitStats likes={0} replies={0} retuits={0} ifIsLiked={0}/>
  </li>
  </div>
):<></>}



    </div>
  );
};

export default WhatsHappening;
