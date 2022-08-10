export default (req, res) => {
  //   res.json({ pid: "555" });
  const {
    query: { pid },
  } = req;
  //   res.json({ pid });
  if (pid == "1") {
    res.end("One");
  } else if (pid == "2") {
    res.end("Two");
  } else {
    res.end("Something Else");
  }
};
