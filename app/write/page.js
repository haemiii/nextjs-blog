export default function Write() {
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
