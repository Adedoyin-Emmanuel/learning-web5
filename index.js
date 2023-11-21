import { Web5 } from "@web5/api";
import { webcrypto } from "node:crypto";

if (!globalThis.crypto) globalThis.crypto = webcrypto;

const { web5, did: aliceDid } = await Web5.connect();

const { record } = await web5.dwn.records.create({
  data: "I love you jesus!",
  message: {
    dataFormat: "text/plain",
  },
});

const readResult = await record.data.text();

const updateResult = await record.update({
  data: "I love you jesus again!",
});

console.log(await updateResult);
console.log(readResult);
console.log(await record.data.text());
