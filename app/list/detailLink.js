"use client";

import { useParams, usePathname, useRouter } from "next/navigation";

export default function DetailLink() {
  let router = useRouter();
  let a = usePathname();
  let params = useParams();

  return (
    <button
      onClick={() => {
        router.back();
      }}
    >
      버튼
    </button>
  ); //router.push -> 페이지 이동!
}
