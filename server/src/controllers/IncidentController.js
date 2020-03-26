const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    const { page = 1 } = request.query;

    const [count] = await connection("incident").count();

    const incidents = await connection("incident")
      .join("organization", "organization.id", "=", "incident.organization_id")
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        "incident.*",
        "organization.name",
        "organization.email",
        "organization.phone",
        "organization.city",
        "organization.district"
      ]);

    response.header("X-Total-Count", count["count(*)"]);

    return response.json(incidents);
  },

  async create(request, response) {
    const { title, description, value } = request.body;
    const organization_id = request.headers.authorization;

    const [id] = await connection("incident").insert({
      title,
      description,
      value,
      organization_id
    });

    return response.json({ id });
  },

  async delete(request, response) {
    const { id } = request.params;
    const organization_id = request.headers.authorization;

    const incident = await connection("incident")
      .where("id", id)
      .select("organization_id")
      .first();

    if (incident.organization_id != organization_id) {
      return response.status(401).json({ error: "Operation not permitted." });
    }

    await connection("incident")
      .where("id", id)
      .delete();

    return response.status(204).send();
  }
};
