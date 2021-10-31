<script setup lang="ts">
import { useAuthStore } from "@/store/Auth.store";
import { onBeforeMount } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import { Icon } from "@iconify/vue";

const authStore = useAuthStore();
const router = useRouter();
const { t } = useI18n();

async function handleSignInWithGoogle() {
  try {
    await authStore.signIn();
  } catch (err) {
    alert((err as Error).message);
  }
  router.push("/dashboard");
}

onBeforeMount(async () => {
  await authStore.getAuthState();
  if (authStore.isLoggedIn) {
    router.push("/dashboard");
    return;
  }
});
</script>

<template>
  <div class="app-page">
    <h2>{{ t("sign-in.sign-in") }}</h2>

    <div class="sign-in-with-providers">
      <div
        class="sign-in-with-prividers-item google-provider"
        @click="handleSignInWithGoogle"
      >
        <icon icon="flat-color-icons:google" />
        <h3>{{ t("sign-in.sign-in-with-google") }}</h3>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
