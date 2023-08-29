import axios from "axios";

export default async function AddProductData(add) {
    let response = await axios.post(`http://127.0.0.1:8000/inventory/`)
    return response.data;
};