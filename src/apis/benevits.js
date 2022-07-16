import { urlApi } from "../config/index";
import axios from "axios";

export async function getBenevits() {
  const url = `${urlApi}v1/member/landing_benevits`;
  const token = localStorage.getItem("token");

  const headers = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `${token}`,
    },
  };

  try {
    const response = await axios.get(url, headers);
    console.log(response.data);
    return response;
  } catch (error) {
    console.log(error);
  }
}
