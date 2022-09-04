<template>
  <div class="night-template">
    <div class="night-intro section">
      <div class="neumorphism">
        <h-neu-button type="default">
          <!-- <span slot="buttonText"></span> -->
        </h-neu-button>
      </div>
      <div class="toggle">
        <h-neu-toggle width="200">

        </h-neu-toggle>
      </div>
      <div class="space-position">
        <SolarSystem/>
      </div>
    </div>
    <div class="night-neumorphism">
      hey
    </div>
  </div>
</template>

<script setup>
import {HNeuButton, HNeuToggle} from "@/components/night/components/neuButtons"
import SolarSystem from "@/components/night/components/SolarSystem.vue"
import { onMounted } from "vue"

customElements.define('h-neu-button', HNeuButton)
customElements.define('h-neu-toggle', HNeuToggle)


// onMounted(() => {
//   var viewportHeight = window.innerHeight;
//   var scrollY = window.scrollY;
//   var sectionNo = 1;
//   var currentSection = document.querySelector(`.night-template > div:nth-child(${sectionNo})`);
//   var relativePosition = currentSection.getBoundingClientRect().top;
//   console.log(viewportHeight, scrollY, sectionNo, relativePosition)
  
//   // const scrollEffect = () => {
//   //   if (scrollY > relativePosition) {
//   //     sectionNo += 1;
//   //     var absolutePosition = (sectionNo - 1) * viewportHeight;
//   //     window.scrollTo({ top: absolutePosition, behavior: "smooth" });
//   //   }
//   // }
// })

// var viewportHeight = window.innerHeight;
// var scrollY = window.scrollY
// var sectionNo = 1;
// var currentSection = document.querySelector(`.night-template > div:nth-child(${sectionNo})`);
// var absolutePosition = (sectionNo - 1) * viewportHeight;

// const scrollEffect = (event) => {
//   var delta = event.wheelDelta
//   console.log("g", scrollY, absolutePosition)

//   if (scrollY >= absolutePosition && sectionNo < 2) {
//     sectionNo += 1;
//     absolutePosition = (sectionNo - 1) * viewportHeight
//     scrollY = window.scrollY
//     window.scrollTo({ top: absolutePosition, behavior: "smooth" });
//     console.log("down", viewportHeight, scrollY, sectionNo, absolutePosition)
//   } else if (scrollY < absolutePosition && sectionNo > 1) {
//     sectionNo -= 1;
//     absolutePosition = (sectionNo - 1) * viewportHeight
//     scrollY = window.scrollY
//     window.scrollTo({ top: absolutePosition, behavior: "smooth" });
//     console.log("up", viewportHeight, scrollY, sectionNo, absolutePosition)
//   }
// }

// window.addEventListener("wheel", scrollEffect, false)

</script>

<style>
  
</style>