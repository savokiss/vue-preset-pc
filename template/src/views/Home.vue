<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/icons/logo.png"
    >
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    onEmit () {
      this.$emit('click', 3)
    }
  }
}
</script>
