import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "ab9bf5f04e1ac661cf0f",
      clientSecret: "60ff10ecf82e467a023544d00165776fabe7f3cf",
    }),
  ],
  secret: "asiefkdmvlj5k46", //jwt생성시 쓰는 암호
};
export default NextAuth(authOptions);
