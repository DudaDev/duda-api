const fetchMock = require("fetch-mock-jest");
const sinon = require("sinon");
const createFetcher = require("../src/lib/fetcher");

describe("test fetcher", () => {
    const fetcher = createFetcher("https://duda.co");

    test("confirm fetcher returns four functions", async () => {
        // console.log(fetcher);
        expect(Object.values(fetcher).length).toBe(4);
    })

    test("test get endpoint", async () => {
        const stubFetcher = sinon.stub(fetcher, "get").resolves({ status: "200" });
        // console.log(stubFetcher);
        const createMockFetcher = await stubFetcher(
            "123",
            "https://jsonplaceholder.typicode.com/todos/1"
        );
        console.log(createMockFetcher);
    });
});
