import { useEffect, useState } from "react";
import axiosInstance from "../apis/axiosinstance";

function Gallery() {
  const [landscapelist, setlandscapelist] = useState([]);
  async function fetchdata() {
    const response = await axiosInstance.get("/search", {
      params: { q: "landscape" },
    });
    setlandscapelist(response.data.objectIDs.slice(0, 10));
  }
  useEffect(
    function () {
      console.log(landscapelist);
    },
    [landscapelist]
  );
  1;

  useEffect(function () {
    fetchdata();
  }, []);

  return;
}

export default Gallery;
