import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  if (req.method == "POST") {
    const client = await connectDB;
    const db = client.db("notice");

    let result = await db.collection("post").insertOne(req.body);
    return res.redirect(302, "/list");
  }
}
