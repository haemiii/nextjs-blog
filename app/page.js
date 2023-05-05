import { MongoClient } from "mongodb";
import { connectDB } from "@/util/database";

export default async function Home() {
  const client = await connectDB;
  const db = client.db("notice");

  let result = await db.collection("post").find().toArray(); //a특정 collection에 있는 모든 데이터 꺼내기!
  console.log(result);

  return <div>{result[0].title}</div>;
}
