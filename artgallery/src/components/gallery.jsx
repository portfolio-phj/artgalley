import { useEffect, useState } from "react";
import axiosInstance from "../apis/axiosinstance";

function Gallery() {
  const [landscapelist, setlandscapelist] = useState([]);
  async function fetchdata() {
    const response = await axiosInstance.get("/search", {
      params: { q: "landscape" },
    });
    console.log(response.data);
    setlandscapelist(response.data.objectIDs);
  }
  console.log(landscapelist);

  useEffect(function () {
    fetchdata();
  }, []);

  return <p></p>;
}

export default Gallery;
