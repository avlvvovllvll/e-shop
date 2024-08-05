import axios from "axios";
export const BASE_URL = "http://5.35.82.80:8000/";

export const GetData = async (url) => {
    const response = await axios.get(BASE_URL+url);
    return response.data;
};

// export const GetData = async (url) => {
//     const response = await axios.get(BASE_URL + url, {
//         headers: {
//             Authorization: `Bearer ${Token}`,
//         },
//     });
//     return response.data;
// };
