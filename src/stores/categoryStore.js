import { defineStore } from 'pinia';

export const useCategoryStore = defineStore('category', {
  state: () => ({
    category: null
  }),

  actions: {
    categorySelected(newvalue) {
      this.category = newvalue;
    }
  }
});
