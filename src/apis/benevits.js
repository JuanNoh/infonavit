import { urlApi } from "../config/index";
import axios from "axios";
import qs from "qs";

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

export async function searchBenevits(search) {
  const url = `${urlApi}v1/member/member_benevits/search`;
  const token = localStorage.getItem("token");

  const headers = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `${token}`,
    },
  };

  const data = { query: search };

  try {
    const response = await axios.post(url, qs.stringify(data), headers);
    console.log(response.data);
    return response;
  } catch (error) {
    console.log(error);
  }
}
