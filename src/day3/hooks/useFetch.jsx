import { useEffect, useState } from "react";
import api from "../../day1/services/api";

const useFetch = (url) => {
  const [data, setData] = useState([]);

  const getData = () => {
    api
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  };

  useEffect(() => {
    getData();
  }, [url]);

  return data;
};

export default useFetch;
