<template>
  <input type="search" v-model="searchQuery" />
  <button class="button-primary" @click="updateText">123</button>
  <p>{{ text }}</p>
  <p>{{ searchQuery }}</p>
  <p>{{ test2.fname }}</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data () {
    return {
      text: '',
      searchQuery: '',
      test2: {
        name: '2',
        fname: 2
      }
    }
  },
  watch: {},
  methods: {
    updateText () {
      this.test2.fname = 3
    }
  }
})
</script>

<style scoped>
.button-primary {
  height: 30px;
  width: 50px;
}
</style>
