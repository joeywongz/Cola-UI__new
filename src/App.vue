<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <Doki />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Doki from './components/Doki.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Doki
  }
}
</script>
