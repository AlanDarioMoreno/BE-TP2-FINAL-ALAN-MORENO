export const notNullDataValidate = async (req, res, next) => {
  try {
    const { palabra } = req.body;
    if (!palabra) throw error;
    next();
  } catch (error) {
    res.status(422).send("no valida no puede ser null");
  }
};
