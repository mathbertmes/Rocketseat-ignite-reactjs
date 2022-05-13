import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTrasactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionsModalOpen, setIsNewTransactionsModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionsModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionsModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTrasactionModal
        isNewTransactionsModalOpen={isNewTransactionsModalOpen}
        onRequestCloseTransactionsModalOpen={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </>
  );
}
