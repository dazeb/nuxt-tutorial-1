export default defineEventHandler(async (event) => {
  const { pokemon } = event.context.params
  const response = await $fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`); // Use $fetch for server components

  console.log(event.context);

  const idealResponse = {
    id: response.id,
    name: response.name,
    sprite: response.sprites.front_default,
  };

  return idealResponse;
})
