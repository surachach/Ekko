export const userInfo = [
  { id: 1, name: "Tim" },
  { id: 2, name: "Tar" },
  { id: 3, name: "Testo" },
  { id: 4, name: "Aom" },
  { id: 5, name: "Momie" },
  { id: 6, name: "Car" },
];

export default (req, res) => {
  res.status(200).json(userInfo);
};
