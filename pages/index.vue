<script setup>
const { data: scizor } = await useFetch('https://pokeapi.co/api/v2/pokemon/scizor')

</script>

<template>
    <h1>Hello World - index.vue</h1>
    <pre>
        {{ scizor }}
    </pre>
</template>