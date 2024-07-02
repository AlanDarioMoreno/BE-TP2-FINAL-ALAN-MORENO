import Sonda from "../Model/Sonda.js";

class SondaServices {
  sonda = new Sonda();

  createSonda = async (id, temperatura) => {
    try {
      const newSonda = await this.sonda.create(id, temperatura);
      return newSonda;
    } catch (error) {
      throw error;
    }
  };

  getAllSondas = async () => {
    try {
      const sondas = await this.sonda.getAll();
      if (!sondas) throw error;

      return sondas;
    } catch (error) {
      throw error;
    }
  };

  getSondaById = async (id) => {
    try {
      const data = await this.sonda.getById(id);

      if (!data) throw error;

      return data;
    } catch (error) {
      throw error;
    }
  };
}

export default SondaServices;
