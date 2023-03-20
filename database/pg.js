const pg = require("pg");
const { Pool } = pg;

const pool = new Pool({
  user: process.env.PG_USER,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  host: process.env.PG_HOST,
  password: process.env.PG_PASSWORD,
});

async function fetch(queryString, ...params) {
  const cleint = await pool.connect();
  try {
    const {
      rows,
    } = await cleint.query(queryString, params.length ? params : null);
  return rows
  } catch (err) {
    console.log(err.message);
  } finally {
  }
}
async function fetchVideo(queryString, ...params) {
  const cleint = await pool.connect()
  try {
    const { rows:[data] } = await cleint.query(
      queryString,
      params.length ? params : null
    )
    return data
  } catch (err) {
    console.log(err.message)
  } finally {
  }
}
async function fetchAll(queryString) {
  const cleint = await pool.connect();
  try {
    const { rows } = await cleint.query(queryString);
    return rows;
  } catch (err) {
    console.log(err.message);
  } finally {
  }
}

module.exports = { fetch, fetchAll, fetchVideo }
