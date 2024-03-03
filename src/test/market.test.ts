import app from "../index";
import { describe, expect, test } from "@jest/globals";
import request from "supertest"

describe("GET /market", () => {
  test("should return status 200", async () => {
    const {body, statusCode} = await request(app).get("/api/market-parent")
    expect(statusCode).toBe(200)
  })
})