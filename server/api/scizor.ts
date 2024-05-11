export default defineEventHandler(async event => {
  const response = await $fetch('https://pokeapi.co/api/v2/pokemon/scizor')

  return response
})