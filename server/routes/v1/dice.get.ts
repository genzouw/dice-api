export default defineEventHandler(() => {
  return {
    dice: Math.floor(Math.random() * 6) + 1,
  };
});
