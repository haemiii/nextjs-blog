import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  let session = await getServerSession(req, res, authOptions);
  let comment;
  if (req.method == "POST") {
    if (session) {
      console.log(req.body);
      req.body = JSON.parse(req.body);
      comment = {
        content: req.body.comment,
        parent: new ObjectId(req.body._id),
        author: session.user.email,
      };
    } else {
      return res.redirect("/list");
    }
    const client = await connectDB;
    const db = client.db("notice");

    let result = await db.collection("comment").insertOne(comment);

    let list = await db
      .collection("comment")
      .find({ parent: new ObjectId(req.body._id) })
      .toArray();

    return res.status(200).json(list);
  }
}
