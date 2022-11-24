import Link from "next/link";
import React from "react";

const Notes = ({ notes }) => {
  return (
    <div sx={{ variant: "containers.page" }}>
      <h1>My Notes</h1>

      <div
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {notes.map((note) => (
          <div key={note.id} sx={{ width: "33%", p: 2 }}>
            <Link href="/notes/[id]" as={`/notes/${note.id}`}>
              <div sx={{ textDecoration: "none", cursor: "pointer" }}>
                <div sx={{ variant: "containers.card" }}>
                  <strong>{note.title}</strong>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;

export async function getServerSideProps() {
  const res = await fetch(`${process.env.API_URL}/api/note/`);
  const { data } = await res.json();
  console.log(data);
  return {
    props: { notes: data },
  };
}
