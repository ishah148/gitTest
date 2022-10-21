<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <HeaderMain>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </nav>
    </HeaderMain>
    <SearchBar />
    <CardItem />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeaderMain from '@/components/HeaderMain.vue'
import SearchBar from '@/components/SearchBar.vue'
import CardItem from '@/components/CardItem.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    HeaderMain,
    SearchBar,
    CardItem
  }
})
</script>
