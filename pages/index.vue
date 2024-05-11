<script setup>
const scizor = await fetch('https://pokeapi.co/api/v2/pokemon/scizor').then(res => res.json())
</script>

<template>
    <h1>Hello World - index.vue</h1>
    <pre>
        {{ scizor }}
    </pre>
</template>