<template>
  <div class="solar-system">
    <div class="sun"></div>
    <div class="mercury">
      <div class="orbit"></div>
      <div class="planet">
        <div class="orb"></div>
      </div>
    </div>
    <div class="venus">
      <div class="orbit"></div>
      <div class="planet">
        <div class="orb"></div>
      </div>
    </div>
    <div class="earth">
      <div class="orbit"></div>
      <div class="planet">
        <div class="orb"></div>
      </div>
    </div>
    <div class="mars">
      <div class="orbit"></div>
      <div class="planet">
        <div class="orb"></div>
      </div>
    </div>
    <div class="jupiter">
      <div class="orbit"></div>
      <div class="planet">
        <div class="orb"></div>
      </div>
    </div>
    <div class="saturn">
      <div class="orbit"></div>
      <div class="planet">
        <div class="orb"></div>
      </div>
    </div>
    <div class="uranos">
      <div class="orbit"></div>
      <div class="planet">
        <div class="orb"></div>
      </div>
    </div>
    <div class="neptune">
      <div class="orbit"></div>
      <div class="planet">
        <div class="orb"></div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
@keyframes spinPlanet {
  to {
    transform: rotate(360deg);
  }
}

.solar-system {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: rgb(42, 46, 65);
  /* border: 1px solid #000; */
}

.sun {
  width: 5%;
  height: 5%;
  position: absolute;
  top: 47.5%;
  left: 47.5%;
  background-color: rgb(223, 70, 23);
  border-radius: 100%;
  border: 0px solid #000;
}

.mercury .orbit,
.venus .orbit,
.earth .orbit,
.mars .orbit,
.jupiter .orbit,
.saturn .orbit,
.uranos .orbit,
.neptune .orbit {
  width: 100%;
  height: 100%;
  border-radius: 100%;
  border: 1px solid #aaa;
}

.mercury {
  width: 20%;
  height: 20%;
  position: absolute;
  top: 40%;
  left: 40%;
}

.mercury .planet {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  animation: spinPlanet 1s linear infinite;
  transform-origin: 50% 50%;
}

.mercury .orb {
  width: 10px;
  height: 10px;
  background-color: rgb(255, 221, 108);
  border-radius: 100%;
  position: absolute;
  left: calc(50% - 5px);
  top: -5px;
}

.venus {
  width: 30%;
  height: 30%;
  position: absolute;
  top: 35%;
  left: 35%;
}

.venus .planet {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  animation: spinPlanet 2.4s linear infinite;
  transform-origin: 50% 50%;
}

.venus .orb {
  width: 15px;
  height: 15px;
  background-color: rgb(255, 137, 91);
  border-radius: 100%;
  position: absolute;
  left: calc(50% - 7.5px);
  top: -7.5px;
}

.earth {
  width: 40%;
  height: 40%;
  position: absolute;
  top: 30%;
  left: 30%;
}

.earth .planet {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  animation: spinPlanet 4s linear infinite;
  transform-origin: 50% 50%;
}

.earth .orb {
  width: 17px;
  height: 17px;
  background-color: rgb(91, 162, 255);
  border-radius: 100%;
  position: absolute;
  left: calc(50% - 8.5px);
  top: -8.5px;
}

.mars {
  width: 50%;
  height: 50%;
  position: absolute;
  top: 25%;
  left: 25%;
}

.mars .planet {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  animation: spinPlanet 7.6s linear infinite;
  transform-origin: 50% 50%;
}

.mars .orb {
  width: 12px;
  height: 12px;
  background-color: rgb(255, 178, 91);
  border-radius: 100%;
  position: absolute;
  left: calc(50% - 6px);
  top: -6px;
}

.jupiter {
  width: 60%;
  height: 60%;
  position: absolute;
  top: 20%;
  left: 20%;
}

.jupiter .planet {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  animation: spinPlanet 11s linear infinite;
  transform-origin: 50% 50%;
}

.jupiter .orb {
  width: 25px;
  height: 25px;
  background-color: rgb(245, 212, 174);
  border-radius: 100%;
  position: absolute;
  left: calc(50% - 12.5px);
  top: -12.5px;
}

.saturn {
  width: 70%;
  height: 70%;
  position: absolute;
  top: 15%;
  left: 15%;
}

.saturn .planet {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  animation: spinPlanet 15s linear infinite;
  transform-origin: 50% 50%;
}

.saturn .orb {
  width: 22px;
  height: 22px;
  background-color: rgb(190, 184, 177);
  border-radius: 100%;
  position: absolute;
  left: calc(50% - 11px);
  top: -11px;
}

.uranos {
  width: 80%;
  height: 80%;
  position: absolute;
  top: 10%;
  left: 10%;
}

.uranos .planet {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  animation: spinPlanet 18s linear infinite;
  transform-origin: 50% 50%;
}

.uranos .orb {
  width: 18px;
  height: 18px;
  background-color: rgb(98, 205, 231);
  border-radius: 100%;
  position: absolute;
  left: calc(50% - 9px);
  top: -9px;
}

.neptune {
  width: 90%;
  height: 90%;
  position: absolute;
  top: 5%;
  left: 5%;
}

.neptune .planet {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  animation: spinPlanet 24s linear infinite;
  transform-origin: 50% 50%;
}

.neptune .orb {
  width: 18px;
  height: 18px;
  background-color: rgb(122, 98, 231);
  border-radius: 100%;
  position: absolute;
  left: calc(50% - 9px);
  top: -9px;
}


</style>