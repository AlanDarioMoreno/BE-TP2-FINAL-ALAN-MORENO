import SondaServices from "../service/SondaServices.js";

class SondasController {
  sondaServices = new SondaServices();

  createSonda = async (req, res) => {
    try {
      const { id, temperatura } = req.body;
      const newSonda = await this.sondaServices.createSonda(id, temperatura);
      if (!newSonda) throw new Error("Error en la creacion");
      res.status(200).send(newSonda);
    } catch (error) {
      res.status(422).send("Datos no validos");
    }
  };

  getAllSondas = async (req, res) => {
    try {
      const sondas = await this.sondaServices.getAllSondas();
      if (!sondas) throw error;
      res.status(200).send(sondas);
    } catch (error) {
      res.status(422).send("Error al obtener las sondas");
    }
  };

  getSondaById = async (req, res) => {
    try {
      const id = parseInt(req.params.id, 10);
      if (!id) throw error;
      const data = await this.sondaServices.getSondaById(id);
      if(!data) throw error
      res.status(200).send(data);
    } catch (error) {
      res.status(422).send("Número de sonda incorrecto");
    }
  };
}

export default SondasController;
