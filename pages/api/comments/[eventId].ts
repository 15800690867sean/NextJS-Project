function handler(req: Record<string, any>, res: Record<string, any>) {
  const { eventId } = req.query;

  switch (req.method) {
    case "POST":
      const { email, name, text } = req.body;
      if (
        !email.includes(
          "@" || !name || name.length === 0 || !text || text.length === 0
        )
      ) {
        res.status(422).json({ message: "Invalid input." });
        return;
      }
      const newComment = {
        id: new Date().toISOString(),
        email,
        name,
        text,
      };
      res.status(201).json({ message: "Added comment.", comment: newComment });
      break;
    case "GET":
      const dummyList = [
        { id: "c1", name: "111", comment: "11111" },
        { id: "c2", name: "222", comment: "22222" },
      ];
      res.status(200).json({ comments: dummyList });
      break;
    default:
      break;
  }
}

export default handler;
