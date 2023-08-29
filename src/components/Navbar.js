import { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import GetCustomerData from '../services/DataCustomers';
import Page from '../pages/login/index'


export default function NavBar() {
    return (
        <>
            <div className="Container-fluid d-flex justify-content-between align-items-start">
                <div className="row">
                    <div className="col">
                             Select which customer's inventory to view by clicking the button below the customer name.
                        <br />
                        <br />
                    </div>
                </div>
            </div>
        </>
    )
}