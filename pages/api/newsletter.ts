import { MongoClient } from "mongodb";

export async function connectToMongoDB(database: string) {
  const client = await MongoClient.connect(
    `mongodb+srv://testuser:64490405Sean@cluster0.ka9jk5l.mongodb.net/${database}?retryWrites=true&w=majority&appName=Cluster0`
  );
  return client;
}

async function handler(req: Record<string, any>, res: Record<string, any>) {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid email address." });
      return;
    }

    let client;

    try {
      client = await connectToMongoDB("events");
    } catch (error) {
      res.status(500).json({ message: "Connecting to the database failed!" });
      return;
    }

    try {
      const db = client.db();

      await db.collection("newsletter").insertOne({
        email: userEmail,
      });
    } catch (error) {
      res.status(500).json({ message: "Inserting data failed!" });
      return;
    }

    client.close();

    res.status(201).json({ message: "Signed up!" });
  }
}

export default handler;
