import "bootstrap/dist/css/bootstrap.min.css";
import { useMemo } from "react";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import { NewNote } from "./components/NewNote";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { v4 as uuidv4 } from "uuid";
import { NoteList } from "./components/NoteList";
import { NoteLayout } from "./components/NoteLayout";
import { Note } from "./components/Note";
import { EditNote } from "./components/EditNote";

export type RawNote = {
  id: string;
} & RawNoteData;

export type RawNoteData = {
  title: string;
  markdown: string;
  tagIds: string[];
};

export type Note = {
  id: string;
} & NoteData;

export type Tag = {
  id: string;
  label: string;
};

export type NoteData = {
  title: string;
  markdown: string;
  tags: Tag[];
};

function App() {
  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", []);
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", []);

  const notesWithTags = useMemo(() => {
    return notes.map((note) => {
      return {
        ...note,
        tags: tags.filter((tag) => note.tagIds.includes(tag.id)),
      };
    });
  }, [notes, tags]);

  const onCreateNote = ({ tags, ...data }: NoteData) => {
    setNotes((prevNotes) => {
      return [
        ...prevNotes,
        { ...data, id: uuidv4(), tagIds: tags.map((tag) => tag.id) },
      ];
    });
  };

  const onUpdateNote = (id: string, { tags, ...data }: NoteData) => {
    setNotes((prevNotes) => {
      return prevNotes.map((note) => {
        if (note.id === id) {
          return {
            ...note,
            ...data,
            tagIds: tags.map((tag) => tag.id),
          };
        } else {
          return note;
        }
      });
    });
  };

  const onDeleteNote = (id: string) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const addTag = (tag: Tag) => {
    setTags((prev) => [...prev, tag]);
  };

  const updateTag = (id: string, label: string) => {
    setTags((prev) =>
      prev.map((tag) => {
        if (tag.id === id) {
          return {
            ...tag,
            label,
          };
        } else {
          return tag;
        }
      })
    );
  };

  const deleteTag = (id: string) => {
    setTags((prev) => prev.filter((tag) => tag.id !== id));
  };

  return (
    <Container className="my-4">
      <Routes>
        <Route
          path="/"
          element={
            <NoteList
              updateTag={updateTag}
              deleteTag={deleteTag}
              availableTags={tags}
              notes={notesWithTags}
            />
          }
        />
        <Route
          path="/new"
          element={
            <NewNote
              onSubmit={onCreateNote}
              availableTags={tags}
              onAddTag={addTag}
            />
          }
        />
        <Route path="/:noteId" element={<NoteLayout notes={notesWithTags} />}>
          <Route index element={<Note onDelete={onDeleteNote} />} />
          <Route
            path="edit"
            element={
              <EditNote
                onSubmit={onUpdateNote}
                availableTags={tags}
                onAddTag={addTag}
              />
            }
          />
        </Route>
        <Route path="*" element={<h2>Error page</h2>} />
      </Routes>
    </Container>
  );
}

export default App;
