<template>
  <div>
    <input type="email" v-model="email" name="email" placeholder="email">
    <input type="password" v-model="password" name="password" placeholder="password">
    <button @click="register">Submit</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
