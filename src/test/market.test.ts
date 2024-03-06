import app from "../index";
import { describe, expect, test } from "@jest/globals";
import request from "supertest"

describe("GET /market", () => {
  test("should return status 200 and market", async () => {
    const {body, statusCode} = await request(app).get("/market/market-parent")
    expect(statusCode).toBe(200)
    expect(body).toEqual(
      expect.arrayContaining(
        [
          expect.objectContaining({
            id: expect.any(Number),
            name: expect.any(String),
            quantity: expect.any(Number),
          })
        ]
      ))
  })
})

describe("POST /market", () => {
  test("should return status 200 and market", async () => {
    const {body, statusCode} = await request(app).post("/market/market-parent")
    .send({name: "suco", quantity: 1})
    expect(statusCode).toBe(200)
    expect(body).toEqual({ message: "Sucesso" })
  })
})

describe("DELETE /market", () => {
  test("should return status 200 and market", async () => {
    const {body, statusCode} = await request(app).delete("/market/market-parent")
    .send({ id: 2})
    expect(statusCode).toBe(200)
    expect(body).toEqual({ message: "Sucesso" })
  })
})