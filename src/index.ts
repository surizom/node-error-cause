import fastify from "fastify";

const client = fastify({ logger: true });

client.get("/", async (request, reply) => {
  return { hello: "world" };
});

const startServer = async () => {
  try {
    await client.listen(3000);
  } catch (err) {
    client.log.error(err);
    process.exit(1);
  }
};

startServer();
