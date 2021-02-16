<template>
  <div class="call-info">
    <CallInfoTable :infos="infos" />
  </div>
</template>

<script>
// @ is an alias to /src
import CallInfoTable from '../components/CallInfoTable.vue';
import axios from 'axios';

export default {
  name: 'CallInfoPage',
  components: {
    CallInfoTable,
  },
  // props: ['infos'],
  data() {
    return {
      infos: null,
    };
  },

  mounted() {
    axios
      .get(`http://localhost:8000/api/call/${this.$route.params.id}`)
      .then((response) => (this.infos = response.data))
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
