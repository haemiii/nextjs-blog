import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Edit(props) {
  const client = await connectDB;
  const db = client.db("notice");
  let id = props.params.id;

  let result = await db.collection("post").findOne({ _id: new ObjectId(id) });
  console.log(result);

  return (
    <div>
      <h4>수정페이지</h4>
      <form action="/api/post/edit" method="POST">
        <input
          type="text"
          name="title"
          placeholder="Title"
          required
          defaultValue={result.title}
        ></input>
        <br />
        <input
          type="text"
          name="content"
          placeholder="Content"
          required
          defaultValue={result.content}
        ></input>
        <br />
        <input
          style={{ display: "none" }}
          name="_id"
          defaultValue={result._id.toString()}
        ></input>
        <br />
        <button type="submit">수정</button>
      </form>
    </div>
  );
}
