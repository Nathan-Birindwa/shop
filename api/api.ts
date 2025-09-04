import axios from "axios"

const API = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true
})


// Create account 

export const signUp = async (fullName: string, email: string, password: string) => {
  const res = await API.post("/api/signup", { fullName, email, password });
  return res.data;
};