const crypto = require("crypto");
const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    const organizations = await connection("organization").select("*");

    return response.json(organizations);
  },

  async create(request, response) {
    const { name, email, phone, city, district } = request.body;

    const id = crypto.randomBytes(4).toString("HEX");

    await connection("organization").insert({
      id,
      name,
      email,
      phone,
      city,
      district
    });

    return response.json({ id });
  }
};
