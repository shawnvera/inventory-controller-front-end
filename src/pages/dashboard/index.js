import Navbar from '../../components/Navbar';
import Header from '../../components/Header'
import CustomerList from '../../components/CustomerList';
import Buttons from '../../components/Buttons';
// import AddProduct from '../add_product';

export default function Page() {
  return (
    <>
      <div className="container-fluid bg-light bg-darken-xl">
        <div className="row text-center">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            {/* <AddProduct /> */}
            <Header />
            <Navbar />
            <CustomerList />
            <Buttons />
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
    </>
  )
}