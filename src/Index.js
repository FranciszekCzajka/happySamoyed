import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Contact from "./components/Contact";
import MobileNavbar from "./components/MobileNavbar";
import Routing from "./components/Routing";
import ScrollToTop from "./components/ScrollToTop";

const Index = () => {
    return (
        <StrictMode>
            <BrowserRouter>
                <ScrollToTop />
                <Header />
                <Routing />
                <Contact />
                <MobileNavbar />
            </BrowserRouter>
        </StrictMode>
    );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Index />);
