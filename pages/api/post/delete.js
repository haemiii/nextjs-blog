import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function Delete(req, res) {
  let session = getServerSession(authOptions);

  if (req.method == "DELETE") {
    if (session.user.email === req.body.email || req.body.role == "admin") {
      const db = (await connectDB).db("notice");
      let result = await db
        .collection("post")
        .deleteOne({ _id: new ObjectId(req.body) });
    }
  }
  return res.status(200).json("삭제완료");
}
