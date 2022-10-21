<template>
  <div class="container">
    <img src="" alt="" />
    <p>{{name}}</p>
    <p>{{text}}</p>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    name: String,
    text: String
  },
  data () {
    return {}
  },
  watch: {},
  methods: {
    updateText () {
      console.log('')
    }
  }
}
</script>

<style scoped lang="scss">
.button-primary {
  height: 30px;
  width: 50px;
}
</style>
