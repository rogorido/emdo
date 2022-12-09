import { defineStore } from 'pinia';

export const useAuthorStore = defineStore('author', {
  state: () => ({
    author: null
  }),

  actions: {
    authorSelected(newvalue) {
      this.author = newvalue;
    }
  }
});
