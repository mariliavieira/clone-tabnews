import { Client } from "pg";

async function query(queryObject) {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
  });
  await client.connect(); //Esse é um comando assíncrono, por isso o uso do await, comando assíncrono significa que roda em segundo plano permitindo que o restante do código continue sendo executado
  const result = await client.query(queryObject);
  await client.end();
  return result;
}

export default {
  query: query,
};
