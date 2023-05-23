/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const defaultCars = [
  {
    vin: "1HGCM82633A004352",
    make: "Honda",
    model: "Accord",
    mileage: 1000,
    title: "clean",
    transmission: "automatic",
  },
  {
    vin: "1HGCM82633A004353",
    make: "Renault",
    model: "Clio",
    mileage: 2000,
    title: "clean",
    transmission: "automatic",
  },
  {
    vin: "1HGCM82633A004354",
    make: "Toyota",
    model: "Corolla",
    mileage: 3000,
    title: "clean",
    transmission: "automatic",
  },
  {
    vin: "1HGCM82633A004355",
    make: "Mercedes",
    model: "C180",
    mileage: 4000,
    title: "clean",
    transmission: "automatic",
  },
  {
    vin: "1HGCM82633A004356",
    make: "BMW",
    model: "320i",
    mileage: 5000,
    title: "clean",
    transmission: "automatic",
  },
  {
    vin: "1HGCM82633A004357",
    make: "Rolls Royce",
    model: "Phantom",
    mileage: 6000,
    title: "clean",
    transmission: "automatic",
  },
];

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("cars").truncate();
  await knex("cars").insert(defaultCars);
};
