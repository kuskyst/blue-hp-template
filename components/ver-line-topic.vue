<template>
  <div class="ver-line-topic">
    <span class="text-h4">{{ ja }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  ja: string
}>()
</script>

<style scoped>
.ver-line-topic {
  text-align: center;
  position: relative;
  display: table;
  margin: 120px auto 110px;
}
.ver-line-topic::before {
  position: absolute;
    content: "";
    height: 50px;
    width: 1px;
    background: #2A9DDE;
    display: block;
    transform: rotate(25deg) translate(0, 0);
    left: 60%;
    top: -60px;
}
.ver-line-topic::after {
  position: absolute;
    content: "";
    height: 50px;
    width: 1px;
    background: #2A9DDE;
    display: block;
    transform: rotate(25deg) translate(0, 0);
    left: 40%;
    bottom: -60px;
}
</style>