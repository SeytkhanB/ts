import {
  Navigate,
  Outlet,
  useOutletContext,
  useParams,
} from "react-router-dom";
import { Note } from "../App";

type NoteLayoutProps = {
  notes: Note[];
};

export const NoteLayout = ({ notes }: NoteLayoutProps) => {
  const { noteId } = useParams();
  const note = notes.find((n) => n.id === noteId);

  if (note == null) return <Navigate to="/" replace />;

  return <Outlet context={note} />;
};

export const useNote = () => {
  return useOutletContext<Note>();
};
