import { connectDB } from "@/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

//기본적으로 jst 사용됨!

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "ab9bf5f04e1ac661cf0f",
      clientSecret: "60ff10ecf82e467a023544d00165776fabe7f3cf",
    }),
  ],
  secret: "asiefkdmvlj5k46", //jwt생성시 쓰는 암호
  adapter: MongoDBAdapter(connectDB), // session 기능 사용하기 위함!
  //redisdb도 사용할 수 있음! => ram에다가 저장
};
export default NextAuth(authOptions);
