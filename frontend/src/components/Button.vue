<template>
  <div class="button-wrap">
      <router-link class="btn" to="/">Go to home</router-link>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Button',
  components: {},
}
</script>

<style scoped>
    .button-wrap {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .btn {
        background: #167f92;
        padding: 1rem;
        text-decoration: none;
        color: #fff;
    }
</style>