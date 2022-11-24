import React from "react";

const Note = ({ note }) => {
  return (
    <div sx={{ variant: "containers.page" }}>
      <h1>{note.title} </h1>
    </div>
  );
};

export default Note;

export async function getServerSideProps({ params, req, res }) {
  const response = await fetch(`${process.env.API_URL}/api/note/${params.id}`);

  if (!response.ok) {
    res.writeHead(302, { Location: "/notes" });
    res.end();
    return { props: {} };
  }

  const { data } = await response.json();

  if (data) {
    console.log(data);
    return {
      props: { note: data },
    };
  }
}
