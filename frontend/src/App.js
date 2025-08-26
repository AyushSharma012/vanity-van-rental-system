import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import AgencyRegister from './pages/AgencyRegister';
import CustomerRegister from './pages/CustomerRegister';
import CustomerDashboard from './pages/CustomerDashboard';
import AgencyDashboard from './pages/AgencyDashboard';
import ViewProfile from './pages/ViewProfile';
import SearchVan from './pages/SearchVan';
import VanManagement from "./pages/VanManagement"
import DriverManagement from "./pages/DriverManagement"
import AdminLogin from "./pages/AdminLogin"
import AdminDashboard from "./pages/AdminDashboard"
import AdminCustomerManagement from './pages/AdminCustomerManagement';
import AdminAgencyManagement from './pages/AdminAgencyManagement';
import AdminVanManagement from './pages/AdminVanManagement';
import AgencyViewProfile from './pages/AgencyViewProfile';
import CustomerHome from './pages/CustomerHome';
import AgencyHome from './pages/AgencyHome';

function App() {
  return (
    <div>

      <Navbar />

      {/* Routes */}
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/customer-register" element={<CustomerRegister />} />
        <Route path="/agency-register" element={<AgencyRegister />} />
        <Route path="/admin-login" element={<AdminLogin />} />

        <Route path="/admin-dashboard" element={<AdminDashboard />}>
          <Route path="agency-management" element={<AdminAgencyManagement />} />
          <Route path="customer-management" element={<AdminCustomerManagement />} />
          <Route path="van-management" element={<AdminVanManagement />} />
        </Route>

        {/* Customer Dashboard with nested routes */}
        <Route path="/customer/:id/home" element={<CustomerDashboard />}>
          <Route index element={<CustomerHome />} />
          <Route path="view-profile" element={<ViewProfile />} />
          <Route path="search-van" element={<SearchVan />} />
        </Route>

        {/* Agency Dashboard */}
        {/* Agency Dashboard with nested routes */}
        <Route path="/agency/:id/home" element={<AgencyDashboard />}>
          <Route index element={<AgencyHome />} />
          <Route path="van-management" element={<VanManagement />} />
          <Route path="driver-management" element={<DriverManagement />} />
          <Route path='view-profile' element={<AgencyViewProfile/>} />
        </Route>

      </Routes>

    </div>
  );
}

export default App;
