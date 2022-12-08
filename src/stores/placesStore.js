import { defineStore } from 'pinia';

export const usePlaceStore = defineStore('place', {
  state: () => ({
    place: null
  }),

  actions: {
    placeSelected(newvalue) {
      this.place = newvalue;
    }
  }
});
