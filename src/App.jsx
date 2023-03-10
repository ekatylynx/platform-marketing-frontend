import { useState } from "react";
import Modal from "./components/modal/Modal";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Services from "./components/services/Services";
import ListServices from "./components/listServices/ListServices";
import ProductStories from "./components/productStories/ProductStories";
import Clients from "./components/clients/Clients";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

import "./css/styles.css";

function App() {
  const [modal, setModal] = useState();

  return (
    <>
      <Modal>{modal}</Modal>
      <Header setModal={setModal} />
      <Main setModal={setModal} />
      <Services />
      <ListServices />
      <ProductStories />
      <Clients />
      <Contact setModal={setModal} />
      <Footer />
    </>
  );
}

export default App;
