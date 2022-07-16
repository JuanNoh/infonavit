import JSEncrypt from "jsencrypt";
import axios from "axios";
import qs from "qs";
import { urlApi, publicKey } from "../config/index";

export async function loginApi({ email, password }) {
  const url = `${urlApi}v2/member/authentication`;
  const user = `${email}:${password}`;

  var encrypt = new JSEncrypt();
  encrypt.setPublicKey(publicKey);
  var encrypted = encrypt.encrypt(user);

  const headers = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };
  const data = { credentials: encrypted };

  try {
    const response = await axios.post(url, qs.stringify(data), headers);
    console.log(response.data);
    return response;
  } catch (error) {
    console.log(error);
  }
}
