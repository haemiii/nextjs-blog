export default function Time() {
  const date = new Date();

  return (
    <div>
      <h1>시간</h1>
      {<h2>{date.toUTCString()}</h2>}
    </div>
  );
}
