<template>
  <div class="night-template">
    <div class="night-intro">
      <div class="neumorphism">
        <h-neu-button>
          <span slot="buttonText">멈춰!</span>
        </h-neu-button>
      </div>
      <div class="space-position">
        <SolarSystem/>
      </div>
    </div>
  </div>
</template>

<script setup>
import NeuButtons from "@/components/night/components/NeuButtons.vue"
import HNeuButton from "@/components/night/components/neuButtons"
import SolarSystem from "@/components/night/components/SolarSystem.vue"

customElements.define('h-neu-button', HNeuButton)

</script>

<style>
  
</style>