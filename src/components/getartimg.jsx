import axiosInstance from "../apis/axiosinstance";
import { useEffect, useState } from "react";
import "../css/getartimg.css";

function Getartimg({ ids }) {
  const [Landscapeurl, setLandscapeurl] = useState("");
  async function fetchdata() {
    const response = axiosInstance.get(`/objects/${ids}`);
    setLandscapeurl((await response).data.primaryImage);
  }

  useEffect(
    function () {
      fetchdata();
    },
    [Getartimg]
  );

  return <img src={Landscapeurl} alt="로딩실패" id="artimg" />;
}

export default Getartimg;
