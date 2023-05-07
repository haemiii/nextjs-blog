import { connectDB } from "@/util/database";
import Link from "next/link";
import DetailLink from "./detailLink";
import ListItem from "./Listltem";

export const dynamic = "force-dynamic"; //렌더링 전략 : 다이나믹

export default async function List() {
  const client = await connectDB;
  const db = client.db("notice");

  let result = await db.collection("post").find().toArray(); //a특정 collection에 있는 모든 데이터 꺼내기!

  result = result.map((a) => {
    a._id = a._id.toString();
    return a;
  });
  return (
    <div className="list-bg">
      <ListItem result={result}> </ListItem>
    </div>
  );
}
