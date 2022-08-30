<template>
  <div class="intro-container">
    <div class="intro-day">
      <span @click="linkTo('DayView')">DAY</span>
    </div>
    <div class="intro-night">
      <span @click="linkTo('NightView')">NIGHT</span>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const linkTo = (name) => router.push({ name: name });
  
</script>

<style>  
</style>