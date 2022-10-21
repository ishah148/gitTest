<template>
  <input type="search" v-model="searchQuery" />
  <button class="button-primary" @click="updateText">123</button>
  <p>{{ text }}</p>
  <p>{{ searchQuery }}</p>
  <p>{{test2.fname}}</p>
</template>

<script lang="ts">
export default {
  data () {
    return {
      text: '',
      searchQuery: '',
      test2: {
        name: '2',
        fname: '2'
      }
    }
  },
  watch: {},
  methods: {
    updateText () {
      this.text = '123'
    }
  }
}
</script>

<style scoped>
.button-primary {
  height: 30px;
  width: 50px;
}
</style>
