<template>
  <div class="common-table">
    <table class="responstable">
      <tr>
        <th><span>Phone Number</span></th>

        <th>Number Of Calls</th>
        <th>Last Call Details</th>
      </tr>

      <tr v-for="(info, idx) in infos" :key="'inf' + idx">
        <td>
          <router-link :to="{ name: 'call', params: { id: info.number } }">{{
            info.number
          }}</router-link>
        </td>
        <td>{{ info.numberOfCall }}</td>
        <td>
          <router-link :to="{ name: 'agent', params: { id: info.agentId } }">{{
            info.name
          }}</router-link>
          / {{ time_convert(info.duration) }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'InfoTable',
  components: {},
  props: ['infos'],

  methods: {
    time_convert(num) {
      let hours = Math.floor(num / 60);  
      let minutes = num % 60;
      return hours + ":" + minutes;
    }
  }
};
</script>

<style scoped>

</style>
