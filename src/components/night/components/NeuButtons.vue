<template>
  <div class="button-container">
    <div class="neu-btn-inset">
    <div class="neu-btn">
      CLICK
    </div>
      
    </div>
  </div>
</template>

<script>

</script>

<style>
  .button-container {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .neu-btn {
    width: 100px;
    height: 100px;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgb(47, 52, 65);
    border-radius: 20px;
    text-align: center;
    line-height: 100px;
    color: #6a6c75;
    font-weight: 800;
    box-shadow: 5px 5px 12px rgb(21, 22, 26);
    cursor: pointer;
  }

  .neu-btn-inset {
    width: 100px;
    height: 100px;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 20px;
    box-shadow: -5px -5px 7px rgb(73, 78, 92);
  }

  .neu-btn-inset:active,
  .neu-btn:active {
    box-shadow: none;
  }
</style>