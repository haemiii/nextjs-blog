import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Delete(req, res) {
  if (req.method == "DELETE") {
    const db = (await connectDB).db("notice");
    let result = await db
      .collection("post")
      .deleteOne({ _id: new ObjectId(req.body) });
  }
  return res.status(200).json("삭제완료");
}
