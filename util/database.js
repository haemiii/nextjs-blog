import { MongoClient } from "mongodb";
const url =
  "mongodb+srv://haemi:siasua@cluster0.bmbs9sd.mongodb.net/notice?retryWrites=true&w=majority";
// notice 이름을 넣으면 notice collection에 session 정보를 넣어줌!
const options = { useNewUrlParser: true };
let connectDB;

if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url, options).connect();
}
export { connectDB };
