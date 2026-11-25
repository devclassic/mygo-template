<template>
  <div class="bar">
    <div class="text">测试文字不能拖拽</div>
  </div>
  <h1>Hello World</h1>
  <input type="text" v-model="state.name" />
  <button @click="hello()">问候</button>
</template>

<script setup>
  import { reactive } from 'vue'
  import { Native } from './bindings'

  const state = reactive({
    name: '',
  })

  const hello = async () => {
    alert(await Native.hello(state.name))
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>

<style scoped>
  .bar {
    --app-region: drag;
    height: 100px;
    background-color: brown;
    display: flex;
    justify-content: center;
    align-items: center;
    .text {
      --app-region: no-drag;
      width: fit-content;
      height: fit-content;
      background-color: aqua;
      user-select: none;
    }
  }
</style>
