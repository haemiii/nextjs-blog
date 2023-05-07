import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  let session = await getServerSession(req, res, authOptions);

  if (session) {
    req.body.author = session.user.email;
  }

  if (req.method == "POST") {
    const client = await connectDB;
    const db = client.db("notice");

    let result = await db.collection("post").insertOne(req.body);
    return res.redirect(302, "/list");
  }
}
