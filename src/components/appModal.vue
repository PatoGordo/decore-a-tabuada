<script setup lang="ts">
import { useModalStore } from "@/store/Modal.store";

const modalStore = useModalStore();

function handleCloseModal() {
  modalStore.closeModal();
}
</script>

<template>
  <transition name="modal">
    <div class="modal-mask" :class="modalStore.isOpened ? 'open' : 'closed'">
      <div class="modal-wrapper" @click.self="handleCloseModal">
        <div class="modal-container">
          <div class="modal-header">
            <h3 v-if="modalStore.headerTitle">{{ modalStore.headerTitle }}</h3>
          </div>
          <div class="modal-body">
            <h4 v-if="modalStore.body.title" class="body-title">
              {{ modalStore.body.title }}
            </h4>
            <p v-if="modalStore.body.description" class="body-description">
              {{ modalStore.body.description }}
            </p>

            <div v-if="modalStore.body.inputs?.length" class="body-inputs">
              <div
                v-for="(input, index) in modalStore.body.inputs"
                :key="index"
                class="input-container"
              >
                <label :for="input.id" :class="input.labelHtmlClass">
                  {{ input.labelText }}
                </label>

                <input
                  :id="input.id"
                  v-model="input.value"
                  :placeholder="input.placeholder"
                  :class="input.inputHtmlClass"
                  type="text"
                />
              </div>
            </div>

            <div v-if="modalStore.body.buttons?.length" class="body-buttons">
              <button
                v-for="(button, index) in modalStore.body.buttons"
                :key="index"
                :class="button.htmlClass"
                @click="button.action"
              >
                {{ button.text }}
              </button>
            </div>
          </div>
          <div class="modal-footer">
            <div v-if="modalStore.footer.buttons?.length" class="body-buttons">
              <button
                v-for="(button, index) in modalStore.footer.buttons"
                :key="index"
                :class="button.htmlClass"
                @click="button.action"
              >
                {{ button.text }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: table;
  transition: all 0.2s;
  &.closed {
    z-index: -9998;
    opacity: 0;
  }
  &.open {
    opacity: 1;
  }
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-container {
  width: min(360px, 100% - 32px);
  margin: 0px auto;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
  .modal-header {
    display: flex;
    text-align: start;
    padding: 16px;
    background: #ddd;
    border-radius: 6px 6px 0 0;
    width: 100%;
    h3 {
      font-weight: 500;
    }
  }
  .modal-body {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
    .body-inputs {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 8px;
      .input-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 6px;
        label {
          width: 100%;
          text-align: start;
          cursor: pointer;
        }
        input {
          width: 100%;
          padding: 10px 14px;
          border-radius: 8px;
          border: 0;
          background: #ededed;
        }
      }
    }
  }
  .modal-footer {
    padding: 16px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    .body-buttons {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 8px;
      justify-content: center;
    }
    button,
    .button {
      text-align: center;
      padding: 6px 8px;
      flex: 1;
      background: #ddd;
      color: #24242d;
      border: 0;
      border-radius: 6px;
      transition: filter 0.2s;
      font-size: 13px;
      font-weight: 500;
      text-decoration: none;
      box-shadow: 0px 2px 6px rgb(0 0 0 / 25%);
      cursor: pointer;
      &.close {
        background: tomato;
        color: #fff;
      }
      &.save {
        background: #2196f3;
        color: #fff;
      }
      &:hover {
        filter: brightness(0.8);
      }
    }
  }
  .modal-default-button {
    float: right;
  }
  .modal-enter {
    opacity: 0;
  }
  .modal-leave-active {
    opacity: 0;
  }
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
