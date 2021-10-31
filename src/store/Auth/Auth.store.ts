import { defineStore } from "pinia";
import { auth } from "@/services/firebase";
import { googleProvider } from "@/services/auth-providers/google.provider";
import {
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  User,
} from "firebase/auth";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    currentUser: null as User | null,
  }),
  getters: {
    isLoggedIn: (state) => state.currentUser !== null,
  },
  actions: {
    async signIn() {
      try {
        const res = await signInWithPopup(auth, googleProvider);

        this.$patch({ currentUser: res.user });
      } catch (err) {
        throw new Error((err as Error).message);
      }
    },
    async signOut() {
      await signOut(auth);
      this.$reset();
    },
    async getAuthState() {
      return new Promise((resolve, reject) => {
        onAuthStateChanged(
          auth,
          (user) => {
            this.$patch({ currentUser: user });
            resolve(user);
          },
          (error) => {
            reject(error);
          }
        );
      });
    },
  },
});
