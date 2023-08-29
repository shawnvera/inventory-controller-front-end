import Navbar from '../../components/Navbar';
import Header from '../../components/Header'
import CustomerList from '../../components/CustomerList';

export default function Page() {
  return (
  <>
  <div className="container-fluid bg-light bg-darken-xl">
    <div className="row text-center">
      <div className="col-md-3"></div>
    <div className="col-md-6">
    <Header />
    <Navbar />
    <CustomerList />
    <div className="col-md-3"></div>
    </div>
    </div>
  </div>
  </>
  )
}