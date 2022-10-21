<template>
  <div class="about">
    <h1>About project</h1>
    <h2>Using technoligy:</h2>
    <ul>
      <li>vue</li>
    </ul>
    <router-link to="/">Return to home</router-link>
  </div>
</template>
<style lang="scss">
a {
  font-weight: bold;
  color: #2c3e50;

  &.router-link-exact-active {
    color: #42b983;
  }
}
</style>
