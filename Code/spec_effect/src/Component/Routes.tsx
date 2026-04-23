 import React from "react";
 import { Routes, Route} from "react-router-dom";
 import Home from "../pages/Home";
 import About from "../pages/About";
 import Glossary from "../pages/Glossary";
 import AdminLogin from "../pages/AdminLogin";
 import ChooseEditor from "../pages/ChooseEditor";
 import GlossaryDatabase from "../pages/GlossaryEditor";
 import LaptopDatabase from "../pages/LaptopEditor";
 import LaptopPage from "../pages/LaptopPage";
 import AddToGlossaryDatabase from "../pages/AddToGlossaryEditor";
 import AddToLaptopDatabase from "../pages/AddToLaptopEditor";
 import Layout from "./Layout";

const RoutesComponent: React.FC = () => {
    return (
    <Routes>
        <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/glossary" element={<Glossary />} />
            <Route path="/adminlogin" element={<AdminLogin />} />
            <Route path="/choose-editor" element={<ChooseEditor />} />
            <Route path="/glossary-database" element={<GlossaryDatabase />} />
            <Route path="/laptop-database" element={<LaptopDatabase />} />
            <Route path="/LaptopPage" element={<LaptopPage />} />
            <Route path="/AddToGlossaryDatabase" element={<AddToGlossaryDatabase />} />
            <Route path="/AddToLaptopDatabase" element={<AddToLaptopDatabase />} />
        </Route>
    </Routes>
    );
 };

 export default RoutesComponent;