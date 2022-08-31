<template>
  <div class="sketchbook">
    <img class="house" src="@/assets/images/house.png" alt="house">
    <img class="rainbow" src="@/assets/images/rainbow.png" alt="rainbow">
    <img class="fence" src="@/assets/images/fence.png" alt="fence">
    <img class="me" src="@/assets/images/me.png" alt="me">
  </div>
  <div>
    <h-button></h-button>
  </div>
</template>

<script setup>
import HButton from '@/components/h-button'

customElements.define('h-button', HButton)


</script>

<style>
  
</style>