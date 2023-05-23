const db = require("../../data/db-config");

const getAll = () => {
  // HOKUS POKUS
  return db("cars");
};

const getById = (id) => {
  // HOKUS POKUS
  return db("cars").where("id", id).first();
};

const getByVin = (vin) => {
  return db("cars").where("vin", vin).first();
};

const create = async (cars) => {
  // HOKUS POKUS
  let [id] = await db("cars").insert(cars);
  //let id = await db("cars").insert(cars);
  return getById(id);
};

module.exports = {
  getAll,
  getById,
  create,
  getByVin,
};
