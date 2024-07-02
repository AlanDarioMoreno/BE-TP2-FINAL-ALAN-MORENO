export const reqValidate = async (req, res, next) => {
  try {
    const { id, temperatura } = req.body;
    const idParam = parseInt(req.params.id, 10);


    if (!idParam) {
      if (!Number.isInteger(id) || id >= 6 || id <= 0) {
        throw new Error("El id ingresado es incorrecto");
      }
      if (temperatura) {
        if (
          !Number.isInteger(temperatura) ||
          temperatura > 100 ||
          temperatura < -20
        )
          throw new Error("la temperatura ingresada es incorrecta");
      }
    } else {
      if (!Number.isInteger(idParam) || id >= 6 || id <= 0)
        throw new Error("El id ingresado es incorrecto");
    }
    next();
  } catch (error) {
    res.status(422).send(error.message);
  }
};
