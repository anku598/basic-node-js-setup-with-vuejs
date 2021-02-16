<template>
  <div class="agent-info">
    <AgentInfoTable :infos="infos" />
    <Button/>
  </div>
</template>

<script>
// @ is an alias to /src
import AgentInfoTable from '../components/AgentInfoTable.vue';
import  Button  from '../components/Button.vue';
import axios from 'axios';

export default {
  name: 'AgentInfoPage',
  components: {
    AgentInfoTable,
    Button
  },

  data() {
    return {
      infos: null,
    };
  },

  mounted() {
    axios
      .get(`http://localhost:8000/api/agent/${this.$route.params.id}`)
      .then((response) => (this.infos = response.data))
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
