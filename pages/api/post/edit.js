import { ObjectId } from "mongodb";
import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  console.log(req);
  if (req.method == "POST") {
    let update = { title: req.body.title, content: req.body.content };

    const client = await connectDB;
    const db = client.db("notice");
    let result = await db
      .collection("post")
      .updateOne({ _id: new ObjectId(req.body._id) }, { $set: update });
  }
  res.redirect(302, "/list");
}
