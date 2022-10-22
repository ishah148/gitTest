<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <HeaderMain>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </nav>
    </HeaderMain>
    <ResourcesItemList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeaderMain from '@/components/HeaderMain.vue'
import SearchBar from '@/components/SearchBar.vue'
import ResourcesItemList from '@/components/ResourcesItemList.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    HeaderMain,
    ResourcesItemList
  },
  mounted () {
    console.log('Main is mounted')
  }
})
</script>
