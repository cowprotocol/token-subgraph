import express, { Router } from "express";
import { Counter, register } from "prom-client";

export const subgraphQueries = new Counter({
  name: "subgraph_queries",
  help: "Counter for requests by result to the token subgraph.",
  labelNames: ["result"],
});

export function serveMetrics(port: number) {
  express()
    .use(Router().get("/metrics", async (_, res) => {
      res.setHeader("content-type", "text/plain");
      return res.send(await register.metrics());
    }))
    .listen(port);
}
