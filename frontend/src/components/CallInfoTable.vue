<template>
  <div class="common-table">
    <table class="responstable">
      <tr>
        <th>Agent Name</th>

        <th>Call date and time</th>
        <th>Resolution</th>
      </tr>

      <tr v-for="(info, idx) in infos" :key="'calls' + idx">
        <td>
          <router-link :to="{ name: 'agent', params: { id: info.agentId } }">{{
            info.name
          }}</router-link>
        </td>
        <td>{{ formatDate(info.dateTime) }}</td>
        <td>{{ info.resolution }}</td>
      </tr>
    </table>
   

  </div>
</template>

<script>
export default {
  name: 'CommonTable',
  components: {
 
  },
  props: ['infos'],

  methods: {
    formatDate(date) {
      var d = new Date(date);
      return `${d.getDate()}/${d.getMonth()}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
    },
  },
};
</script>

<style scoped>

</style>
