import { defineStore } from "pinia";

export type ModalBodyInput = {
  placeholder: string;
  labelText: string;
  value: string;
  id: string;
  inputHtmlClass?: string;
  labelHtmlClass?: string;
};

export type ModalButtons = {
  text?: string;
  htmlClass?: string;
  action(): void;
};

type ModalStates = {
  isOpened: boolean;
  headerTitle: string;
  body: {
    title?: string;
    description?: string;
    inputs?: ModalBodyInput[];
    buttons?: ModalButtons[];
  };
  footer: {
    buttons?: ModalButtons[];
  };
};

export const useModalStore = defineStore("modal", {
  state(): ModalStates {
    return {
      isOpened: false,
      headerTitle: "",
      body: {},
      footer: {},
    };
  },
  actions: {
    toogleModal() {
      this.isOpened = !this.isOpened;
    },
    openModal() {
      this.isOpened = true;
    },
    closeModal() {
      this.$reset();
      this.isOpened = false;
    },
  },
});
