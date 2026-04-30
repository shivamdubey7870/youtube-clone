import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addHamburger } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_API_KEY } from "../utils/constant";
import CommentContainer from "./CommentContainer";

const WatchPage = () => {
   
  const dispatch = useDispatch();
  const [searchParam] = useSearchParams();
  const video = searchParam.get("v");



  

  useEffect(() => {
    dispatch(addHamburger());
   
  }, [dispatch]);

  return (
    <div className="p-5 pl-8">
      <div
        style={{
          width: "900px",
          height: "450px",
          borderRadius: "16px",
          overflow: "hidden",
        }}
      >
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${video}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <CommentContainer/>
    </div>
  );
};

export default WatchPage;
