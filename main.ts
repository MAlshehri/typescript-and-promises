import Client from "./api-calls-simulation";

const client = new Client();

(async () => {
    const value = await client.get(1);
    console.log("Value = " + value);
})();
