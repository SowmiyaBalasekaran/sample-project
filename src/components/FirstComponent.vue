<template>
  <div class="wrapper">
    <div class="reactivity">
      <div >
        reactivity:
        <span class="reactivity__counter" :class="{'reactivity__counter_limit': getCounterIfLmitiReached}">
          {{counter}}
        </span>
        <span v-if="counter > 0" @click="resetCounter()" class="reset">
          Reset
        </span>
      </div>
      <div class="info">please dont cross 10</div>
      <!-- move button to next line -->
      <Button class="button" @click="incrementCounter()" :disabled="getCounterIfLmitiReachedMehthod()">do + 1</Button>
    </div>
  </div>
</template>

<script type="text/javascript" src='./js/first-component.js'></script>

<style lang="scss" scoped>
.wrapper {
  .reactivity {
    border: 1px dashed grey;
    padding: 18px;
    margin: 18px;
    &__counter {
      color: green;
      &_limit {
        color: red;
      }
    }
  }
  .reset {
    color: blueviolet;
  }
  .info {
    color: grey;
    font-size: 14px;
  }
  .button {
    margin-top: 9px;
  }
}
</style>
