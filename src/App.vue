<template>
  <router-view></router-view>
</template>

<script setup>
import { RouterView } from 'vue-router';
import HButton from '@/components/h-button'

customElements.define('h-button', HButton)
</script>

<style>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
