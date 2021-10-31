<script setup lang="ts">
import { useAuthStore } from "@/store/Auth.store";
import { ModalBodyInput, useModalStore } from "@/store/Modal.store";
import { onBeforeMount, ref } from "vue";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const modalStore = useModalStore();
const router = useRouter();
const inputDescription = ref<ModalBodyInput>({
  placeholder: "Flashcard description",
  labelText: "Flashcard description",
  id: "flashcard-description",
  value: "",
});
const inputValue = ref<ModalBodyInput>({
  placeholder: "Flashcard value",
  labelText: "Flashcard value",
  id: "flashcard-value",
  value: "",
});

async function handleSignOut() {
  await authStore.signOut();
  router.push("/signin");
}

function handleAddFlashcard() {
  modalStore.$reset();

  function handleSaveFlashcard() {
    console.log("Saved!");
  }

  modalStore.headerTitle = "Add new flashcard";
  modalStore.body.inputs = [inputDescription.value, inputValue.value];
  modalStore.footer.buttons = [
    {
      text: "Close",
      htmlClass: "close",
      action() {
        modalStore.closeModal();
      },
    },
    {
      text: "Save",
      htmlClass: "save",
      action() {
        handleSaveFlashcard();
      },
    },
  ];
  modalStore.openModal();
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
    <button @click="handleAddFlashcard">Add flashcard</button>
  </div>
</template>

<style lang="scss" scoped></style>
