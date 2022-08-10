export default (req, res) => {
  //   res.statusCode = 200;
  //   res.json({ data: [1, 2, 3, 4] });
  //   res.json({ name: "Hello Tar" });
  //   res.end("I Love You");
  //   res.end();

  res.json({ method: req.method });
};
