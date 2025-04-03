import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/HomePage"; // Import the Homepage component
import PhoneNumberInput from "./pages/PhoneNumberInput"; // Import the PhoneNumberInput component

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} /> {/* Update the route to use Homepage */}
          <Route path="/PhoneNumberInput" element={<PhoneNumberInput/>} /> 
          <Route path="/features" element={<Features />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/teacher-login" element={<TeacherLogin />} />
          <Route path="/job-portal" element={<JobPortal />} />
          <Route path="/download" element={<Download />} />
        </Routes>
      </div>
    </Router>
  );
}

function Features() {
  return <h2>Features Page</h2>;
}

function Gallery() {
  return <h2>Gallery Page</h2>;
}

function Pricing() {
  return <h2>Pricing Page</h2>;
}

function Contact() {
  return <h2>Contact Page</h2>;
}

function TeacherLogin() {
  return <h2>Teacher Login Page</h2>;
}

function JobPortal() {
  return <h2>Job Portal Page</h2>;
}

function Download() {
  return <h2>Download Page</h2>;
}


export default App;