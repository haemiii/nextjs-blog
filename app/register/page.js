export default function Join() {
  return (
    <div>
      <form method="POST" action="/api/auth/singup">
        <input required name="name" type="text" placeholder="이름" />
        <input required name="email" type="text" placeholder="이메일" />
        <input required name="password" type="text" placeholder="비번" />
        <button type="submit">id/pw 가입요청</button>
      </form>
    </div>
  );
}
