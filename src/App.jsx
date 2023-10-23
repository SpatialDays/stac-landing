import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Landing from "./pages/Landing/Landing";
import About from "./pages/About/About";
import FormModal from "./components/FormModal/FormModal";
import FloatingActionButton from "./components/FloatingActionButton/FloatingActionButton";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing openModal={handleOpenModal} />} />
        <Route path="/about" element={<About openModal={handleOpenModal} />} />
      </Routes>

      <FormModal isOpen={isModalOpen} onClose={handleCloseModal} />

      <FloatingActionButton openModal={handleOpenModal} />
    </>
  );
};

export default App;
