<template>
  <div class="q-pa-xl">
    <q-list>
      <q-item-label header>Houses' Database</q-item-label>

      <q-item
        clickable
        tag="a"
        v-for="link in houseslinks"
        :key="link.title"
        v-bind="link"
        :to="link.link"
      >
        <q-item-section>
          <q-item-label>{{ link.title }}</q-item-label>
          <q-item-label caption>{{ link.caption }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script setup>
import { houseslinks } from '../assets/links';
</script>
