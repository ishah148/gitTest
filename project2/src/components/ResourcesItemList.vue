<template>
  <SearchBar />
  <!-- <transition appear :duration="100" name="animate"> -->
  <!-- ... -->
  <div class="container">
    <div class="item">
      <div class="image-container">
        <img src="./img/characters/20.jpg" alt="" />
      </div>
      <p class="link">Peoples</p>
    </div>
    <div class="item">
      <div class="image-container">
        <img src="./img/planets/9.jpg" alt="" />
      </div>
      <p class="link">Planets</p>
    </div>
    <div class="item">
      <div class="image-container">
        <img src="./img/films/1.jpg" alt="" />
      </div>
      <p class="link">Films</p>
    </div>
    <div class="item">
      <div class="image-container">
        <img src="./img/vehicles/20.jpg" alt="" />
      </div>
      <p class="link">Vehicles</p>
    </div>
    <div class="item">
      <div class="image-container">
        <img src="./img/starships/40.jpg" alt="" />
      </div>
      <p class="link">Starships</p>
    </div>
    <div class="item">
      <div class="image-container">
        <img src="./img/species/79.jpg" alt="" />
      </div>
      <p class="link">Species</p>
    </div>
  </div>
  <!-- </transition> -->
</template>

<script lang="ts">
import SearchBar from '@/components/SearchBar.vue'
import { SwapiApi } from '@/services/api'
import { defineComponent } from 'vue'
export default defineComponent({
  // props: {
  //   name: String,
  //   text: String
  // },
  data () {
    return {}
  },
  watch: {},
  methods: {
    updateText () {
      console.log('')
    }
  },
  components: {
    SearchBar
  },
  mounted () {
    console.log('Resources is mounted')
  }
})
</script>

<style scoped lang="scss">
.button-primary {
  height: 30px;
  width: 50px;
}
.container {
  max-width: 1200px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
}
.item {
  width: 300px;
  height: 370px;
  padding: 10px;
  border: 3px solid green;
  display: flex;
  flex-direction: column;
  .image-container {
    display: block;
    width: 280px;
    height: 280px;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
    // aspect-ratio: 1/1;
  }
}
.link {
  border: 2px solid green;
  width: 70px;
  align-self: center;
}
.animate-enter-active {
  animation: bounce-in 0.5s ease-out both;
}

.animate-leave-active {
  animation: bounce-in 0.5s reverse ease-in both;
}

@keyframes bounce-in {
  0% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>
