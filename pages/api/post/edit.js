import { ObjectId } from "mongodb";
import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  let session = await getServerSession(authOptions);
  if (req.method == "POST") {
    if (req.body.email === session.user.email || req.body.role == "admin") {
      let update = { title: req.body.title, content: req.body.content };

      const client = await connectDB;
      const db = client.db("notice");
      let result = await db
        .collection("post")
        .updateOne({ _id: new ObjectId(req.body._id) }, { $set: update });
    }
  }
  res.redirect(302, "/list");
}
