import axios from "axios";

export default async function GetCustomerData() {
    let response = await axios.get(`https://capstone-inventory-controller.ue.r.appspot.com/customer/`);
    return response.data;
};
