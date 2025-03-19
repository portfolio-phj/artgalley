import { useEffect, useState } from "react";
import axiosInstance from "../apis/axiosinstance";
import Getartimg from "./getartimg";
import "../css/gallery.css";

function Gallery() {
  const [landscapelist, setlandscapelist] = useState([]);
  async function fetchdata() {
    const response = await axiosInstance.get("/search", {
      params: { q: "Vincent van Gogh" },
    });
    setlandscapelist(response.data.objectIDs.slice(0, 10));
  }
  useEffect(
    function () {
      console.log(landscapelist);
    },
    [landscapelist]
  );

  useEffect(function () {
    fetchdata();
  }, []);

  return (
    <div id="gallery-background">
      <p id="gallery-title">ART GALLERY</p>
      <div>
        {landscapelist.map(function (ids) {
          return <Getartimg ids={ids} key={ids} />;
        })}
      </div>
    </div>
  );
}

export default Gallery;
