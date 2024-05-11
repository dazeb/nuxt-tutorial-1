export default defineEventHandler(async (event) => {
  const response = await $fetch("https://pokeapi.co/api/v2/pokemon/scizor"); // Use $fetch for server components

  console.log(response);

  const idealResponse = {
    id: response.id,
    name: response.name,
    sprite: response.sprites.front_default,
  };

  return idealResponse;
})
