<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        Blockchain Dashboard
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <MainComponent/>
    </v-content>
  </v-app>
</template>

<script>
import MainComponent from './components/MainComponent';

export default {
  name: 'App',

  components: {
    MainComponent,
  },

  data: () => ({
    //
  }),
};
</script>
