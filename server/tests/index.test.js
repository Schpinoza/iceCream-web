const supertest = require("supertest");
const app = require("../index");

const request = supertest.agent(app);

describe("Ice-Cream-Api - crud actions", function () {
  beforeAll((done) => {
    done();
  });
  it("should get all ice-creams", async () => {
    const allIceCreams = await request.get("/v1/iceCream");
  });
  it("should create a new ice cream", async () => {
    const createIceCream = await request
      .post("/v1")
      .send({
        name: test,
        price: 1,
        supplyAmount: 1,
      })
      console.log(createIceCream);
  });
  afterAll((done) => {
    // Closing the DB connection allows Jest to exit successfully.
    done();
  });
});
