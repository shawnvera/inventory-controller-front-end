import axios from "axios";

export default async function GetCustomerProductFilteredInventoryData() {
    let response = await axios.get(`https://capstone-inventory-controller.ue.r.appspot.com/prod_filter/`);
    return response.data;
};
