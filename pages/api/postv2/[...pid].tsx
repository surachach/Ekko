export default (req: any, res: any) => {
  //   res.json({ pid: "555" });
  const {
    query: { pid },
  } = req;
  res.json(pid);
};
