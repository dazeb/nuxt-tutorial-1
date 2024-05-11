<script setup>
const { data: scizor } = await useFetch('/api/charizard')


</script>

<template>
  <h1>Hello World - index.vue</h1>
  <ul>
    <li>
        <img :src="scizor.sprite" alt="scizor" />
    </li>
    <li>{{  scizor.id  }}: {{  scizor.name }}</li>
  </ul>
</template>
