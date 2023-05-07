import { connectDB } from "@/util/database";
import bcrypt from "bcrypt";
import { errorToJSON } from "next/dist/server/render";

export default async function handler(req, res) {
  if (req.method == "POST") {
    let db = (await connectDB).db("notice");
    let exist = await db
      .collection("user_cred")
      .findOne({ email: req.body.email });
    if (exist) {
      errorToJSON("이미 존재하는 이메일 입니다!");
    } else {
      let hash = await bcrypt.hash(req.body.password, 10);
      req.body.password = hash;

      await db.collection("user_cred").insertOne(req.body);
    }
  }
  return res.redirect(302, "/list");
}
