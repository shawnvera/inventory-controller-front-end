import axios from "axios";
import ProductInfo from "../components/ProductInfo";

export default async function DeleteProduct(deleteID) {
    let response = await axios.delete(`https://capstone-inventory-controller.ue.r.appspot.com/prod_destroy/${deleteID}/`);
    return response.data;
};
