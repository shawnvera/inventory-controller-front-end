import axios from "axios";

export default async function GetInventoryData() {
    let response = await axios.get(`https://capstone-inventory-controller.ue.r.appspot.com/inventory/`);
    return response.data;
};
