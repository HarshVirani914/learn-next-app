import nc from "next-connect";

const handler = nc()
  .get((req, res) => {
    res.json({ message: "Hello World!" });
  })
  .post((req, res) => {
    res.json({ message: req.body });
  });

export default handler;
