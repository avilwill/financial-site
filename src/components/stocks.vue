<template>
  <div>
    <md-card class="md-card-33" v-for="symbol in symbols" :key="symbol.name">
      <md-card-header>
        <span class="stock-name">{{ symbol.name }}</span>
        <span class="date-time">- {{ date }}</span>
        <span style="margin-left: 10px;">{{ time }}</span>
      </md-card-header>
      <hr/>

      <md-card-content>
        <div class="md-layout" style="text-align:left">Current Price: <span
            class="dollar-style">${{ symbol.currentPrice }}</span></div>
        <br>
        <div class="md-layout" style="text-align:left">High Price: <span class="dollar-style">${{ symbol.high }}</span>
        </div>
        <br>
        <div class="md-layout" style="text-align:left">Low Price: <span class="dollar-style">${{ symbol.low }}</span>
        </div>

      </md-card-content>

    </md-card>

  </div>
</template>


<script>

import axios from 'axios';

export default {
  name: "stocks.vue",
  data() {
    return {
      apiKey: "c6nn8pqad3ibe15jcbo0",
      apiUrl: "https://finnhub.io/api/v1/quote?symbol=AAPL&token=",
      symbols: [{name: "MSFT"}, {name: "TSLA"}, {name: "AMZN"}, {name: "NFLX"}, {name: "NVDA"}, {name: "KIND"}, {name: "TEAM"}],
    }
  },
  async created() {
    await this.getData();
  },
  methods: {
    async getData() {
      for (let symbol of this.symbols) {
        const res = await axios.get(this.apiUrl.replace('AAPL', symbol.name) + this.apiKey);
        console.log(res.data);
        symbol.currentPrice = res.data.c;
        symbol.high = res.data.h;
        symbol.low = res.data.l;
        this.date = this.printDate();
        this.time = this.printTime();
      }
      this.$forceUpdate();
    },
    printDate: function () {
      return new Date().toLocaleDateString();
    },
    printTime: function () {
      return new Date().toLocaleTimeString();
    },
  }
}
</script>

<style>
.md-card-33 {
  width: 20%;
  margin: 5px;
  display: inline-block;
  vertical-align: top;
}

.dollar-style {
  color: green;
  padding-left: 10px;
}

.date-time {
  padding-left: 10px;
}

.stock-name {
  font-size: 20px;
  color: cornflowerblue;
  font-weight: bold;
}
</style>
