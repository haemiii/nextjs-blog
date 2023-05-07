"use client"; //db에게 직접 요청 불가!

import { useEffect, useState } from "react";

export default function Comment(props) {
  //Ajax를 사용!
  //form 사용시 새로고침됨!
  let [comment, setComment] = useState("");
  let [data, setData] = useState([]);
  //서버에 데이터 요청 Ajax
  useEffect(() => {
    //코드 보관함, ajax나 타이머 등 넣음
    fetch(`/api/comment/list?id=${props.id}`) //1. html로드/재렌더링될때 마다 실행  2. html보여준 후에 렌더링됨!
      .then((r) => r.json())
      .then((result) => {
        setData(result);
      });
  }, []); // [] => 1회 실행!
  return (
    <div>
      <hr></hr>
      {data.length > 0
        ? data.map((a, i) => {
            return <p key={i}>{a.content}</p>;
          })
        : "로딩중"}
      <input
        onChange={(e) => {
          setComment(e.target.value); //comment의 값을 바꾸어 주세요!
        }}
        defaultValue={""}
      />
      <button
        onClick={() => {
          fetch("/api/comment/new", {
            method: "POST",
            body: JSON.stringify({ comment: comment, _id: props.id }),
          })
            .then((r) => r.json())
            .then((result) => {
              setData(result);
            });
        }}
      >
        댓글전송
      </button>
    </div>
  );
}
