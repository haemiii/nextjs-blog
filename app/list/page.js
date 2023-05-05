import { connectDB } from "@/util/database";
import Link from "next/link";
import DetailLink from "./detailLink";

export default async function List() {
  const client = await connectDB;
  const db = client.db("notice");

  let result = await db.collection("post").find().toArray(); //a특정 collection에 있는 모든 데이터 꺼내기!
  console.log(result[0]);

  return (
    <div className="list-bg">
      {result.map((a, i) => {
        return (
          <div className="list-item" key={i}>
            <Link href={`/detail/${result[i]._id}`}>
              <h4>{result[i].title} </h4>
            </Link>

            <DetailLink></DetailLink>
            <p>{result[i].content}</p>
          </div>
        );
      })}
    </div>
  );
}
