<template>
  <div>hi!</div>
  <router-link to='/'>Doki1</router-link>
  <router-link to='/xxx'>Doki2</router-link>
  <router-view />
</template>

<script>
import Doki from './components/Doki.vue'

export default {
  name: 'App',
  components: {
    Doki
  }
}
</script>
