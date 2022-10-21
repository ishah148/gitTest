<template>
  <div class="header__container">
    <h1>Star Wars Wiki</h1>
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HeaderMain',
  props: {
    msg: String
  }
})
</script>
<style scoped lang="scss"></style>
