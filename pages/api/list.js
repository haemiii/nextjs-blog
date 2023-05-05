import { connectDB } from "@/util/database";

export default async function AllList(req, res) {
  const client = await connectDB;
  const db = client.db("notice");

  let result = await db.collection("post").find().toArray();

  return res.status(200).json(result);
}
