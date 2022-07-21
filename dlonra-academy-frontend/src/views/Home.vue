<template>
  <div class="home">
    <form @submit="registerUser" class="register">
      <input type="text" placeholder="name" v-model="name">
      <input type="text" placeholder="surname" v-model="surname">
      <input type="text" placeholder="email" v-model="email">
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import userServices from '../../services/user.services'

export default {
  name: 'Home',
  data() {
    return {
      name: '',
      surname: '',
      email: '',
      loading: false,
      successful: false,
      message: ''
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    registerUser(){
      const user = {
        name: this.name,
        surname: this.surname,
        email: this.email
      }

      this.message = "";
      this.successful = false;
      this.loading = true;

      userServices.create(user).then(
        (data) => {
          this.message = data.message;
          this.successful = true;
          this.loading = false;
        },
        (error) => {
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          this.successful = false;
          this.loading = false;
        })
    }
  },
}
</script>

<style>
  .register{
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }

  .register input{
    width: 100%;
  }
</style>
