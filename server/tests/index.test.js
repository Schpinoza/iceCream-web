const supertest = require("supertest");
const app = require("../index");

const request = supertest.agent(app);

describe("Ice-Cream-Api - crud actions", function () {
  jest.setTimeout(15000);
  it("should get all ice-creams", async (done) => {
    const allIceCreams = await request
      .get("/v1/iceCream")
    console.log("allIceCreams", allIceCreams.body);
  });
});
