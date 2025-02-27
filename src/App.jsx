import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom"; // Importing React Router
import ThankYouPage from "./pages/ThankYouPage";
import CateringOrderForm from "./pages/CateringOrderForm";
import Rricura from "./pages/Rricura";
import BulkOrderForm from "./pages/BulkOrderForm";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Rricura />} />
          <Route path="/CateringOrderForm" element={<CateringOrderForm />} />
          <Route path="/BulkOrderForm" element={<BulkOrderForm />} />
          <Route path="/CheckoutPage" element={<CheckoutPage />} />
          <Route path="/ThankYouPage" element={<ThankYouPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
