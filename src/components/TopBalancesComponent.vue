<template>
    <v-content>
        <h2>Top Balances</h2>
        <div class="v-data-table elevation-1 theme--light">
            <div class="v-data-table__wrapper">
                <table>
                    <thead class="v-data-table-header">
                    <td>Address</td>
                    <td>WEI</td>
                    <td>Eth</td>
                    </thead>
                    <tbody>
                    <tr v-for="wallet in wallets" :key="wallet.address">
                        <td>{{ wallet.address }}</td>
                        <td>{{ wallet.balance }}</td>
                        <td>{{ wallet.formattedBalance }}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </v-content>
</template>

<script>
  import axios from "axios";

  export default {
    name: 'TopBalancesComponent',

    data: () => ({
      wallets: [],
    }),

    mounted() {
      axios
        .get('http://localhost:5000/top/balances')
        .then(response => {
          this.wallets = JSON.parse(response.data)
        })
    }

  };
</script>
