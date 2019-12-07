<template>
    <v-container fluid>
        <TopBalancesComponent></TopBalancesComponent>
    </v-container>
</template>

<script>
  import TopBalancesComponent from "./TopBalancesComponent";
  export default {
    name: 'MainComponent',
    components: {TopBalancesComponent},
    data: () => ({
      blocks: []
    }),

    sockets: {
      serverChannel(data) {
        this.blocks.push(data);
        if (this.blocks.length > 10)
          this.blocks.pop();
        // from socket io we have to forceUpdate on vue otherwise the ui is not refreshed
        this.$forceUpdate();
      }
    },
  };
</script>
