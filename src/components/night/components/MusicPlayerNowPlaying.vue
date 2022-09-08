<template>
  <div class="music-player">
    <div class="header">
      <div class="playing-list">
        <div class="circle"></div>
        <div class="circle-shadow"></div>
        <div class="inner-button"></div>
        <div class="button-icon">
          <i class="fas fa-arrow-left"></i>
        </div>
      </div>
      <div class="playing">
        <span>NOW PLAYING</span>
      </div>
      <div class="menu">
        <div class="circle"></div>
        <div class="circle-shadow"></div>
        <div class="inner-button"></div>
        <div class="button-icon">
          <i class="fas fa-bars"></i>
        </div>
      </div>
    </div>
    <div class="album-cover">
      <div class="circle"></div>
      <div class="circle-shadow"></div>
      <div class="inner-album">
        <img class="me" src="@/assets/images/sticker.jpg" alt="sticker">
      </div>     
    </div>
    <div class="music-content">
      <div class="title">
        Sticker
      </div>
      <div class="singer">
        NCT 127
      </div>
    </div>
    <div class="playing-bar">
      <div class="time">
        <span class="now-time">00:00</span>
        <span class="end-time">03:47</span>
      </div>
      <div class="bar">
        <div class="playing-length"></div>
      </div>
      <div class="now-playing">
        <div class="now"></div>
        <div class="now-shadow"></div>
        <div class="now-inner"></div>
      </div>
    </div>
    <div class="player-buttons">
      <div class="previous">
        <div class="circle"></div>
        <div class="circle-shadow"></div>
        <div class="button-icon">
          <i class="fas fa-backward"></i>
        </div>
      </div>
      <div class="play-pause">
        <div class="circle"></div>
        <div class="circle-shadow"></div>
        <div class="inner-button"></div>
        <div class="button-icon">
          <i class="fas fa-pause"></i>
        </div>
      </div>
      <div class="next">
        <div class="circle"></div>
        <div class="circle-shadow"></div>
        <div class="button-icon">
          <i class="fas fa-forward"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style>
  
</style>