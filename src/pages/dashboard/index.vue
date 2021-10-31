<script setup lang="ts">
import { useAuthStore } from "@/store/Auth/Auth.store";
import { onBeforeMount } from "vue";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();

async function handleSignOut() {
  await authStore.signOut();
  router.push('/signin')
}

onBeforeMount(async () => {
  await authStore.getAuthState();

  if (!authStore.isLoggedIn) {
    router.push("/signin");
    return;
  }
});
</script>

<template>
  <div class="app-page">
    <h2>Dashboard</h2>
    <button @click="handleSignOut">Sign Out</button>
  </div>
</template>

<style lang="scss" scoped></style>
