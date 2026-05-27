import { randomInt } from "node:crypto";

export default defineEventHandler((event) => {
  setResponseHeader(event, "Access-Control-Allow-Origin", "*");
  return {
    dice: randomInt(1, 7),
  };
});
