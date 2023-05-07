export default function Hello(req, res) {
  console.log(req.query);
  return res.status(200);
}
