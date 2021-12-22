<template>
  <div>
    <table style="margin-left: 500px; width:520px; height:320px;" border="1px">
      <th>Compound Interest Calculator</th>

      <tr>
        <md-field>
          <label>Starting Balance</label>
          <span className="md-prefix">$</span>
          <md-input v-model="startingBalance"></md-input>
        </md-field>
      </tr>

      <tr>
        <md-field>
          <label>Annual Rate Return(%)</label>
          <span className="md-suffix">%</span>
          <md-input v-model="annualRateReturn"></md-input>
        </md-field>
      </tr>

      <tr>
        <md-field>
          <label>Duration(years)</label>
          <md-input v-model="duration"></md-input>
        </md-field>
      </tr>

      <tr>
        <md-field>
          <label>Periodic Addition (monthly)</label>
          <span className="md-prefix">$</span>
          <md-input v-model="periodicAddition"></md-input>
        </md-field>
      </tr>

      <md-card-actions>
        <md-button @click="calculateClick" type="submit" class="md-primary" :disabled="sending">Calculate(Monthly)</md-button>
      </md-card-actions>

      <tr>
        <th>Result of Calculation</th>
      </tr>

      <tr>
        <md-card>
          <md-card-header>
            <div class="md-title">Investment Value</div>
          </md-card-header>

          <md-card-content>
            {{ toCurrency(investmentValue) }}
          </md-card-content>
        </md-card>

      </tr>

      <tr>
        <md-card>
          <md-card-header>
            <div class="md-title">Profit</div>
          </md-card-header>

          <md-card-content>
            {{ toCurrency(profit) }}
          </md-card-content>
        </md-card>
      </tr>

      <tr>
        <md-card>
          <md-card-header>
            <div class="md-title">Contribution</div>
          </md-card-header>

          <md-card-content>
            {{ toCurrency(contribution) }}
          </md-card-content>
        </md-card>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Investment',
  data: () => ({
    contribution: 0,
    startingBalance: 0,
    annualRateReturn: 0,
    duration: 0,
    periodicAddition: 0,
    investmentValue: 0,
    empty: '',
    profit: 0
  }),
  methods: {
    toCurrency(value) {
      // Create our number formatter.
      var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',

        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
      });

      return formatter.format(value); /* $2,500.00 */

    },
    calculateClick() {
      this.contribution = this.startingBalance;
      this.investmentValue = this.startingBalance;
      var durationYear = 0;
      while(durationYear < this.duration) {
          this.investmentValue = Number(this.investmentValue) + (this.periodicAddition * 12);
          var yearlyReturn = this.investmentValue * (this.annualRateReturn / 100);
          this.investmentValue += yearlyReturn;

          this.contribution = Number(this.contribution) + (this.periodicAddition * 12);

        durationYear = durationYear + 1;
      }
      this.profit = this.investmentValue - this.contribution;
    }
  }
}
</script>

