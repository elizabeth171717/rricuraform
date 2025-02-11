import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom"; // Importing React Router
import ThankYouPage from "./pages/ThankYouPage";
import CateringOrderForm from "./pages/CateringOrderForm";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<CateringOrderForm />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
