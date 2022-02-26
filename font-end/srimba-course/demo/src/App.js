import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContext from "./components/MainContext";

const App = () => {
    return (
        <div>
            <Header />
            <MainContext />
            <Footer />
        </div>
    )
}

export default App; 