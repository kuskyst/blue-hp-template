<template>
  <v-app class="bg-secondary">
    <v-app-bar color="transparent" flat class="position-relative pt-4 pb-4">

      <v-app-bar-title>○○××</v-app-bar-title>

      <template v-slot:append>
        <v-app-bar-nav-icon v-if="!drawer" @click="drawer = !drawer" color="secondary" class="menu" />
        <v-btn v-else icon="mdi-close" @click="drawer = !drawer" />
      </template>
    </v-app-bar>
    <v-navigation-drawer
      temporary
      location="right"
      app
      :mini-variant="!miniVariant"
      :clipped="clipped"
      v-model="drawer"
      class="bg-secondary fill-height top-0 right-0 position-fixed"
    >
      <v-list class="mt-16">
        <v-list-item>
          <v-btn variant="plain" width="100%" class="font-weight-bold">○○××</v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn variant="plain" width="100%" class="font-weight-bold">○○××</v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn variant="plain" width="100%" class="font-weight-bold">○○××</v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn variant="plain" width="100%" class="font-weight-bold">○○××</v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn variant="plain" width="100%" class="font-weight-bold">○○××</v-btn>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script setup lang="ts">
const miniVariant = ref(false)
const clipped = ref(true)
const drawer = ref(false)
</script>

<style scoped>
.menu {
  background-color: white;
  box-shadow: 0 0 12px #3E4B8F;
}
</style>