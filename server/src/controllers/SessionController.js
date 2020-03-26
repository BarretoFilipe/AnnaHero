const connection = require("../database/connection");

module.exports = {
  async create(request, response) {
    const { id } = request.body;

    const organization = await connection("organization")
      .where("id", id)
      .select("name")
      .first();

    if (!organization) {
      return response
        .status(100)
        .json({ error: "No Organization found with this ID" });
    }

    return response.json(organization);
  }
};
