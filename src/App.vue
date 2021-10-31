<script setup lang="ts">
import AppModal from "./components/appModal.vue";
import "@/services/firebase";
</script>

<template>
  <router-view />
  <app-modal />
</template>

<style>
#app {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
