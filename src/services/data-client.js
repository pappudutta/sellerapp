import axios from "axios";

const fetchJsonData = async () => {
  try {
    const { data } = await axios.get("/data.json");
    return data;
  } catch (error) {
    console.log("Error from json data: ", error);
    return error;
  }
};

export default fetchJsonData;
