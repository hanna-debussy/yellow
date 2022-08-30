<template>
  <div>
    <h-button></h-button>
    <div class="space">
      <SolarSystem/>
    </div>
  </div>
</template>

<script setup>
import HButton from '@/components/h-button'
import SolarSystem from "@/components/solarSystem/SolarSystem.vue"

customElements.define('h-button', HButton)
</script>

<style>
  
</style>