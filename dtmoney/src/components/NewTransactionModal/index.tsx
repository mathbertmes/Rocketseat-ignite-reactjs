import Modal from "react-modal";

interface NewTrasactionModal {
  isNewTransactionsModalOpen: boolean;
  onRequestCloseTransactionsModalOpen: () => void;
}

export function NewTrasactionModal({
  isNewTransactionsModalOpen,
  onRequestCloseTransactionsModalOpen,
}: NewTrasactionModal) {
  return (
    <Modal
      isOpen={isNewTransactionsModalOpen}
      onRequestClose={onRequestCloseTransactionsModalOpen}
    >
      <h1>Nova Transação</h1>
    </Modal>
  );
}
