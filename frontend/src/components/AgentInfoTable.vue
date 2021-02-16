<template>
  <div class="common-table">
    <table class="responstable">
      <tr>
        <th>Phone Number</th>

        <th>Call Date and time</th>
        <th>Resolution</th>
      </tr>

      <tr v-for="(info, idx) in infos" :key="'agss' + idx">
        <td>
          <router-link :to="{ name: 'call', params: { id: info.number } }">{{
            info.number
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
  components: {},
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
