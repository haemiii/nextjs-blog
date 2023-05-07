import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function Write() {
  let session = await getServerSession(authOptions);
  if (session) {
    return (
      <div>
        <h4>글작성</h4>
        <form action="/api/post/new" method="POST">
          <input type="text" name="title" placeholder="Title" required></input>
          <br />
          <input
            type="text"
            name="content"
            placeholder="Content"
            required
          ></input>
          <br />
          <button type="submit">등록</button>
        </form>
      </div>
    );
  }
  return (
    <div>
      <h2>Login 후에 이용해주세요!</h2>
    </div>
  );
}
