import { Modal, Button } from "react-bootstrap";
import { useGlobalContext } from "../../stores/GlobalContext";

const DeleteModal = ({ removeUser }) => {
  const { show, deletedUser, closeDeleteModal } = useGlobalContext();

  return (
    <Modal show={show} onHide={closeDeleteModal}>
      <Modal.Header closeButton>
        <Modal.Title className="text-primary fs-3">
          Confirm Deletion
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-primary fs-5">
        Are you sure you want to delete
        <span className="text-danger fs-4 mx-1">
          {deletedUser && deletedUser.fullName}
        </span>
        ?
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-center align-items-center">
        <Button
          variant="danger"
          className="px-5 py-2"
          onClick={() => removeUser(deletedUser.id)}
        >
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteModal;