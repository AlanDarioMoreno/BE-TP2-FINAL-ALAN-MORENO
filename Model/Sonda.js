const now = new Date();
class Sonda {
  sondas = [];

  create = async (id, temperatura) => {
    try {
      const newSonda = {
        id,
        temperatura,
        fecha: now.toLocaleDateString(),
        hora: now.toLocaleTimeString(),
      };

      this.sondas.push(newSonda);
      return newSonda;
    } catch (error) {
      throw error;
    }
  };

  getAll = async () => {
    return this.sondas;
  };

  getById = async (id) => {
    try {
      const result = this.sondas.filter((x) => x.id === id);
      if (result.length > 0) {
        return result[0];
      } else {
        throw new Error("Número de sonda incorrecto");
      }
    } catch (error) {
      throw error;
    }
  };
}

export default Sonda;
