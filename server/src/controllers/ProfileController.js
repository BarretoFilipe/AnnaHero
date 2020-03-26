const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    const organization_id = request.headers.authorization;

    const incidents = await connection("incident")
      .where("organization_id", organization_id)
      .select("*");

    return response.json(incidents);
  }
};
