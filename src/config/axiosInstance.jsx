import axios from "axios";

export const axiosInstance = axios.create({
      baseURL:"https://fakestoreapi.com"
});

axiosInstance.interceptors.response.use(
    (response)=>{
        console.log("Product Api response in interceptors:", response)
        return response; // if not return response will not reach at product page.
    },
    (error)=>{
        console.log("Product Api error in interceptors:", error)
    }
);
//we can use multiple Instance here for different apis