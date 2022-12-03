import { Button, Col, Form, Modal, Row, Stack } from "react-bootstrap";
import { Tag } from "../App";

type EditTagsModalProps = {
  availableTags: Tag[];
  handleClose: () => void;
  show: boolean;
  updateTag: (id: string, label: string) => void;
  deleteTag: (id: string) => void;
};

export const EditTagsModal = ({
  availableTags,
  handleClose,
  show,
  deleteTag,
  updateTag,
}: EditTagsModalProps) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit tags</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Stack gap={2}>
            {availableTags.map((tag) => (
              <Row key={tag.id}>
                <Col>
                  <Form.Control
                    type="text"
                    onChange={(e) => updateTag(tag.id, e.target.value)}
                    value={tag.label}
                  />
                </Col>
                <Col xs="auto">
                  <Button
                    onClick={() => deleteTag(tag.id)}
                    variant="outline-danger"
                  >
                    &times;
                  </Button>
                </Col>
              </Row>
            ))}
          </Stack>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
