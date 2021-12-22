<template>
  <div>
    <md-table class="real-estate-table">
      <th class="md-title">Real Estate Calculator</th>

      <md-table-row>
        <md-table-head style="font-size: 4.5mm;">Purchase</md-table-head>
        <md-table-head style="font-size: 4.5mm;">Income</md-table-head>
        <md-table-head style="font-size: 4.5mm;">Recurring Operating Expenses</md-table-head>
        <md-table-head style="font-size: 4.5mm;">Sell</md-table-head>
      </md-table-row>

      <md-table-row>
        <md-table-cell>
          <div class="mb-15">
            <label class="display-block">Purchase Price</label>
            <md-input v-model="purchasePrice"></md-input>
          </div>
          <div class="mb-15">
            <label class="display-block">Use Loan?</label>
            <div>
              <md-radio v-model="useLoan" :value="true">Yes</md-radio>
              <md-radio v-model="useLoan" :value="false">No</md-radio>
            </div>
          </div>
          <div v-if="useLoan">
            <div class="mb-15">
              <label class="display-block">Down Payment(%)</label>
              <md-input v-model="downPayment"></md-input>
            </div>
            <div class="mb-15">
              <label class="display-block">Interest Rate (%)</label>
              <md-input v-model="interestRate"></md-input>
            </div>
            <div class="mb-15">
              <label class="display-block">Loan Term (Years)</label>
              <md-input v-model="loanTerm"></md-input>
            </div>
          </div>
        </md-table-cell>

        <md-table-cell>
          <div class="mb-15">
            <label class="display-block">Monthly Rent ($)</label>
            <md-input v-model="monthlyRent"></md-input>
          </div>
          <div class="mb-15">
            <label class="display-block">Vacancy Rate (%)</label>
            <md-input v-model="vacancyRate"></md-input>
          </div>
          <div class="mb-15">
            <label class="display-block">Maintanance ($)</label>
            <md-input v-model="maintanceFee"></md-input>
          </div>
        </md-table-cell>

        <md-table-cell>
          <div class="mb-15">
            <label class="display-block">Monthly Property Tax</label>
            <md-input v-model="propertyTax"></md-input>
          </div>
          <div class="mb-15">
            <label class="display-block">Monthly Insurance</label>
            <md-input v-model="monthlyInsurance"></md-input>
          </div>
        </md-table-cell>

        <md-table-cell>
          <div class="mb-15">
            <label class="display-block">Do You Know the Sell Price?</label>
            <div>
              <md-radio v-model="salePrice" :value="true">Yes</md-radio>
              <md-radio v-model="salePrice" :value="false">No</md-radio>
            </div>
          </div>
          <div v-if="salePrice">
            <div class="mb-15">
              <label class="display-block">Value Appreciation</label>
              <md-input v-model="valueApp"></md-input>
            </div>
            <div class="mb-15">
              <label class="display-block">Cost to Sell</label>
              <md-input v-model="sellCost"></md-input>
            </div>
          </div>
          <div>
            <md-button @click="calculateClick" type="submit" class="md-raised">CALCULATE</md-button>
            <md-button @click="resetData" class="md-raised" type="reset">RESET DATA</md-button>
          </div>
        </md-table-cell>
      </md-table-row>
    </md-table>

    <md-table class="real-estate-table">
      <th class="md-title">First Year Results:</th>

      <md-table-row>
        <md-table-head></md-table-head>
        <md-table-head>Monthly ($)</md-table-head>
        <md-table-head>Annual ($)</md-table-head>
      </md-table-row>

      <md-table-row>
        <md-table-cell>Income:</md-table-cell>
        <md-table-cell>${{ monthlyIncome }}</md-table-cell>
        <md-table-cell>${{ annualIncome }}</md-table-cell>
      </md-table-row>

      <md-table-row>
        <md-table-cell>Mortgage Pay:</md-table-cell>
        <md-table-cell>${{ monthlyMortgage }}</md-table-cell>
        <md-table-cell>${{ annualMortgage }}</md-table-cell>
      </md-table-row>

      <md-table-row>
        <md-table-cell>Vacancy:</md-table-cell>
        <md-table-cell>${{ monthlyVacancy }}</md-table-cell>
        <md-table-cell>${{ annualVacancy }}</md-table-cell>
      </md-table-row>


      <md-table-row>
        <md-table-cell>Property Tax:</md-table-cell>
        <md-table-cell></md-table-cell>
        <md-table-cell></md-table-cell>
      </md-table-row>

      <md-table-row>
        <md-table-cell>Maintanance Cost:</md-table-cell>
        <md-table-cell>${{monthlyMaintanance}}</md-table-cell>
        <md-table-cell>${{annualMaintanance}}</md-table-cell>
      </md-table-row>

      <md-table-row>
        <md-table-cell>Cash Flow:</md-table-cell>
        <md-table-cell></md-table-cell>
        <md-table-cell></md-table-cell>
      </md-table-row>

    </md-table>
  </div>
</template>

<script>
export default {
  name: "realEstate",
  data: () => ({
    yesKey: 'accent',
    noKey: 'accent',
    purchasePrice: 0,
    useLoan: true,
    interestRate: 0,
    downPayment: 0,
    loanTerm: 0,
    propertyTax: 0,
    monthlyInsurance: 0,
    hoaFee: 0,
    monthlyRent: 0,
    vacancyRate: 0,
    maintanceFee: 0,
    salePrice: true,
    valueApp: 0,
    sellCost: 0,
    monthlyIncome: 0,
    annualIncome: 0,
    monthlyVacancy: 0,
    annualVacancy: 0,
    annualMortgage: 0,
    paidOff: 0,
    loan: 0,
    monthlyMortgage: 0,
    annualMaintanance: 0,
    monthlyMaintanance: 0,
    priceWithInterest: 0,
    annualPropertyTax: 0,
    annualCashFlow: 0,
    monthlyCashFlow: 0,
  }),
  methods: {
    resetData() {
    },
    calculateClick() {
      //monthlyIncome = monthlyRent - monthlyMortgage
      // monthlyMortgage = (housePrice - (housePrice * down payment percent))
      // monthlyInterest =  interestRate / 12
      // total number of monthly payments :  loanTerm * 12

      // this.monthlyIncome = this.monthlyRent;
      // this.annualIncome = this.monthlyRent * 12;
      //
      // this.paidOff = (this.downPayment / 100) * (this.purchasePrice);
      // this.loan = (this.purchasePrice) - (this.paidOff);
      // this.priceWithInterest = (this.interestRate) * (this.loan);
      // this.annualMortgage = (this.priceWithInterest) / (this.loanTerm);
      // this.monthlyMortgage = this.annualMortgage / 12;
      //
      // this.monthlyVacancy = this.vacancyRate * 100;
      // this.annualVacancy = this.monthlyVacancy * 12;
      //
      // this.annualMaintanance = this.maintanceFee;
      // this.monthlyMaintanance = this.annualMaintanance / 12;
      //
      // this.monthlyCashFlow = this.annualCashFlow / 12
      // this.annualCashFlow = (this.annualIncome) (this.annualMortgage) - (this.annualVacancy) - (this.annualMaintanance) - (this.annualPropertyTax)
    }
  }
}
</script>

<style scoped>
.real-estate-table {
  margin-left: auto;
  width: 1200px;
  margin-right: auto;
  border: solid;
  border-width: 1px;
}

.display-block {
  display: block;
}

.mb-15 {
  margin-bottom: 15px;
}

</style>
