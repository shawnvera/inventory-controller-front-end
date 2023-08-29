import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
import GetCustomerData from '../services/DataCustomers';
import { useRouter } from 'next/navigation';
import ProdList from '../pages/prod_list';

export default function CustomerList() {

    // setting state.
    const [state, setState] = useState([]);

    // router to push to others pages.
    const router = useRouter();

    // useEffect to call Axios to get customer data.
    useEffect(() => {
        const fetchData = async () => {
            const data = await GetCustomerData();
            setState(data);
        }
        fetchData();
        return () => { }
    }, [])

    // pushes to the product list page.
    function handleEvent(e) {
        router.push('/prod_list')
    }

    return (
        <>
            <div className="Container-fluid">
                <div className="row">
                    {state.length > 0 ?
                        state.map((item, index) => {
                            return (
                                <>
                                    <div key={item.id} className="col-md-3 m-3">
                                        <Card style={{ width: '12rem' }}>
                                            <Card.Body key={item.id}>
                                                <Card.Title>{item.name}</Card.Title>
                                                <Card.Text>{item.description}</Card.Text>
                                                <Button variant="primary" onClick={handleEvent}>View Inventory</Button>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </>
                            )
                        }
                        )
                        : <p>Please refresh page.</p>
                    }
                </div >
            </div>
        </>
    )
}