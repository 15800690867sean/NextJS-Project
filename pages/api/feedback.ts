import fs from "fs";
import path from "path";

export default function handler(
  req: Record<string, any>,
  res: Record<string, any>
) {
  const filePath = path.join(process.cwd(), "data", "feedback.json");

  if (req.method === "POST") {
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData as unknown as string);
    const content = req.body.content;
    data.push(content);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({
      message: "feedback saved",
      data,
    });
  } else {
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData as unknown as string);
    res.status(200).json({
      message: "this works",
      data,
    });
  }
}
