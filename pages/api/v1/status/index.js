import database from "../../../../infra/database.js";

async function status(request, response) {
  const result = await database.query("SELECT 1 + 1 AS sum;");
  response.status(200).json(result.rows[0]);
}

export default status;
