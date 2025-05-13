import { Client } from "pg";

async function query(queryObject) {
  const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    database: "postgres",
    password: "local_password",
  });
  await client.connect(); //Esse é um comando assíncrono, por isso o uso do await, comando assíncrono significa que roda em segundo plano permitindo que o restante do código continue sendo executado
  const result = await client.query(queryObject);
  await client.end();
  return result;
}

export default {
  query: query,
};
