<script setup>
const { data: scizor } = await useFetch('https://pokeapi.co/api/v2/pokemon/scizor')

const { data } = await useFetch('/api/scizor')

</script>

<template>
    <h1>Hello World - index.vue</h1>
    <pre>
        {{ data }}
    </pre>
    <pre>
        {{ scizor }}
    </pre>
</template>