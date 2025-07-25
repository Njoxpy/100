const createTask = async (req, res) => {
  // get request body
  const { title, description } = req.body;

  //   validate fields
  if (!title || !description) {
    return res.status(400).json({ mesage: "Enter all fields" });
  }

  try {
  } catch (error) {
    res.status(500).json({ message: "server error!" });
  }
};
