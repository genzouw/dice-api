import { randomInt } from "node:crypto";

export default defineEventHandler(() => {
  return {
    dice: randomInt(1, 7),
  };
});
