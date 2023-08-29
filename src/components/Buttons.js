import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import axios from "axios";

export default function Buttons() {
    // setting useStates
    const [show, setShow] = useState(false);
    const [name, setName] = useState(null);
    const [description, setDescription] = useState(null);
    const [quantity, setQuantity] = useState(null);
    const [customer, setCustomer] = useState(null);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // function to handle the click on add. Setting formField variable with user input, and making the Axios call.
    const handleAddClick = async (e) => {
        let formField = new FormData()

        formField.append('name', name)
        formField.append('description', description)
        formField.append('quantity', quantity)
        formField.append('customer', customer)

        await axios({
            method: 'post',
            url: 'https://capstone-inventory-controller.ue.r.appspot.com/inventory/',
            data: formField
        }).then((response) => {
            window.location.reload();
        })
    }

    return (
        <>
        <div className='container-fluid text-center'>
            <Button variant="primary" onClick={handleShow}>
                Add a product.
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Product Name"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Description"
                                name="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input
                                type="number"
                                className="form-control form-control-lg"
                                placeholder="Enter Quantity"
                                name="quantity"
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input
                                type="number"
                                className="form-control form-control-lg"
                                placeholder="Customer"
                                name="customer"
                                value={customer}
                                onChange={(e) => setCustomer(e.target.value)} />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleAddClick}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            </div>
            <br />
            <br />
        </>
    )
};