<template>
  <div class="side-line-topic">
    <span class="text-secondary text-h6">{{ en }}</span><br>
    <span class="text-h4">{{ ja }}</span><br>
    <v-img height="40" class="pt-1" src="@/assets/images/ttl_heart.png" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  en: string,
  ja: string
}>()
</script>

<style scoped>
.side-line-topic {
  text-align: center;
  position: relative;
  display: table;
  margin: 0 auto;
}
.side-line-topic::before {
  position: absolute;
  content: "";
  height: 120px;
  width: 1px;
  background: #2A9DDE;
  display: block;
  transform: rotate(25deg) translate(0, -50%);
  left: -120px;
  top: 50%;
}
.side-line-topic::after {
  position: absolute;
  content: "";
  height: 120px;
  width: 1px;
  background: #2A9DDE;
  display: block;
  transform: rotate(25deg) translate(0, -50%);
  right: -80px;
  top: 50%;
}
</style>