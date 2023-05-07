import { MongoClient } from "mongodb";
import { connectDB } from "@/util/database";

export const revalidate = 60; // 페이지 방문시 캐싱 -> 60초 동안은 캐싱 -> 지나면 다시 get요청

export default async function Home() {
  const client = await connectDB;
  const db = client.db("notice");

  let result = await db.collection("post").find().toArray(); //a특정 collection에 있는 모든 데이터 꺼내기!

  // await fetch("/", { cache: "force-cache" }); //get 요청 결과 캐싱가능
  // await fetch("/", { next: { revalidate: 60 } }); //60초마다 캐싱
  // await fetch("/", { cache: "no-store" }); // 실시간 기능 중요할떄!

  return <div>{result[0].title}</div>;
}
