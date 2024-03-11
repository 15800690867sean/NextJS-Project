import { connectToMongoDB } from "../newsletter";

async function handler(req: Record<string, any>, res: Record<string, any>) {
  const { eventId } = req.query;

  const client = await connectToMongoDB("events");

  const db = client.db();

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
      const newComment: {
        email: string;
        name: string;
        text: string;
        eventId: string;
        id?: string;
      } = {
        email,
        name,
        text,
        eventId,
      };

      const resp = await db.collection("comments").insertOne(newComment);

      newComment.id = resp.insertedId.toString();

      res.status(201).json({ message: "Added comment.", comment: newComment });
      break;
    case "GET":
      // const dummyList = [
      //   { id: "c1", name: "111", comment: "11111" },
      //   { id: "c2", name: "222", comment: "22222" },
      // ];

      const documents = await db.collection('comments').find().sort({_id: -1}).toArray();

      res.status(200).json({ comments: documents });
      break;
    default:
      break;
  }

  client.close();
}

export default handler;
