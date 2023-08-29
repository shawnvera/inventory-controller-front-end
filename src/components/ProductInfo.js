import { useState, useEffect } from 'react';
import GetInventoryData from "../services/DataInventory";
import ListGroup from 'react-bootstrap/ListGroup';
import CloseButton from 'react-bootstrap/CloseButton';
import axios from 'axios';
import DeleteProduct from "../services/DeleteProduct";
import Form from 'react-bootstrap/Form';
import authHeader from "../services/auth.headers";

export default function ProductInfo() {
  // state to remember products.
  const [state, setState] = useState([]);

  // set state for quantity.
  const [quantity, setQuantity] = useState(null);

  // set state for item object.
  const [item, setItem] = useState({});

  // state to remember the item id to be used for deletion axios call.
  const [deleteID, setDeleteID] = useState(null);

  // useEffect to GET filtered customer data for products.
  useEffect(() => {
    const fetchData = async () => {
      const data = await GetInventoryData();
      setState(data);
    }
    fetchData();
    return () => { }
  }, [])

  // useEffect to run the delete of a product if the value of deleteID has been changed from null.
  useEffect(() => {
    if (deleteID !== null) {
      DeleteProduct(deleteID);
      alert("Are you sure?")
      window.location.reload();
    }
  }, [deleteID])

  // function to handle the click of the delete button for product.
  const handleDeleteClick = (e) => {
    setDeleteID(e.target.value);
  }

  // async function to handle the PUT request when a quantity is updated.
  const handleUpdate = async (e) => {
    const headers = authHeader()
    let formField = new FormData()

    formField.append('quantity', quantity)

    await axios({
      method: 'put',
      url: `https://capstone-inventory-controller.ue.r.appspot.com/prod_update/`,
      data: item,
      headers: headers
    }).then((response) => {
    })
  }

  // function to handle the "ENTER" button press when quantity is updated.
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleUpdate();
    }
  }

  // generic function to set the item object in state when quantity is updated.
  const newFunc = (id, qty) => {
    setItem({
      id: id,
      quantity: qty
    })
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className='col-md-2'></div>
          {state.length > 0 ?
            state.map((item, index) => {
              return (
                <>
                  <div className="col-md-8 m-3" data-spy="scroll">
                    <ListGroup as="ul">
                      <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                          <div className="fw-bold">{item.name}</div>
                          {item.description}
                        </div>
                        <br />

                        <Form.Control className="w-50 text-center" size="sm" type="number" placeholder={item.quantity}
                          onKeyDown={(e) => handleKeyDown(e)} onChange={(e) => newFunc(item.id, e.target.value)} />

                        <CloseButton type="button" onClick={(e) => handleDeleteClick(e)} value={item.id} />

                      </ListGroup.Item>
                    </ListGroup>
                  </div>
                  <div className='col-md-2'></div>
                </>
              )
            })
            : <p>There are no products for this customer.</p>
          }
        </div>
      </div>
    </>
  )
}