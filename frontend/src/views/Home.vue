<template>
  <div class="home">
    <InfoTable :infos="infos" />
  </div>
</template>

<script>
// @ is an alias to /src
import InfoTable from '../components/InfoTable.vue';
import axios from 'axios';

export default {
  name: 'Home',
  components: {
    InfoTable,
  },

  data() {
    return {
      infos: null,
    };
  },

  mounted() {
    axios
      .get('http://localhost:8000/api/')
      .then((response) => (this.infos = response.data))
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
