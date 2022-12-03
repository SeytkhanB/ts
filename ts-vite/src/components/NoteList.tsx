import { useMemo, useState } from "react";
import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactSelect from "react-select";
import { Note, Tag } from "../App";
import { EditTagsModal } from "./EditTagsModal";
import { NoteCard } from "./NoteCard";

type NoteListProps = {
  availableTags: Tag[];
  notes: Note[];
  updateTag: (id: string, label: string) => void;
  deleteTag: (id: string) => void;
};

export const NoteList = ({
  availableTags,
  notes,
  updateTag,
  deleteTag,
}: NoteListProps) => {
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [title, setTitle] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const filtredNotes = useMemo(() => {
    return notes.filter((note) => {
      return (
        (title === "" ||
          note.title.toLowerCase().includes(title.toLowerCase())) &&
        (selectedTags.length === 0 ||
          selectedTags.every((tag) =>
            note.tags.some((noteTag) => noteTag.id === tag.id)
          ))
      );
    });
  }, [title, selectedTags, notes]);

  return (
    <>
      <Row className="align-items-center mb-4">
        <Col>
          <h2>Notes</h2>
        </Col>
        <Col xs="auto">
          <Stack gap={2} direction="horizontal">
            <Link to="/new">
              <Button variant="outline-primary">Create</Button>
            </Link>

            <Button variant="outline-warning" onClick={() => setShow(true)}>
              Edit tags
            </Button>
          </Stack>
        </Col>
      </Row>
      <Form>
        <Row className="mb-4">
          <Col>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="title">
              <Form.Label>Tags</Form.Label>
              <ReactSelect
                isMulti
                value={selectedTags.map((tag) => ({
                  label: tag.label,
                  value: tag.id,
                }))}
                onChange={(tags) => {
                  setSelectedTags(
                    tags.map((tag: any) => ({
                      label: tag.label,
                      id: tag.value,
                    }))
                  );
                }}
                options={availableTags.map((tag) => ({
                  label: tag.label,
                  value: tag.id,
                }))}
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>
      <Row xs={1} sm={2} lg={3} xl={4} className="g-3">
        {filtredNotes.map((note) => (
          <Col key={note.id}>
            <NoteCard {...note} />
          </Col>
        ))}
      </Row>
      <EditTagsModal
        updateTag={updateTag}
        deleteTag={deleteTag}
        availableTags={availableTags}
        handleClose={handleClose}
        show={show}
      />
    </>
  );
};
