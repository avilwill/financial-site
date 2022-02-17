<template>
  <div>
<!--    <router-link to="/savings">Savingssss </router-link>-->
<!--    <router-link to="/investing">Investing </router-link>-->
<!--    <router-link to="/calculating">Calculating </router-link>-->
<!--    <router-link to="/realEstate">Real Estate </router-link>-->
<!--    <router-link to="/business">Business</router-link>-->

    <md-menu md-direction="bottom-start">
      <router-link to="/savings">
      <md-button md-menu-trigger>Saving</md-button>
      </router-link>
    </md-menu>

    <md-menu md-direction="bottom-end">
      <router-link to="/investing">
      <md-button md-menu-trigger>Investing</md-button>
      </router-link>
    </md-menu>

    <md-menu md-direction="top-start">
      <router-link to="/college">
      <md-button md-menu-trigger>College</md-button>
      </router-link>
    </md-menu>

    <md-menu md-direction="top-end">
      <router-link to="/realEstate">
      <md-button md-menu-trigger>Real Estate</md-button>
      </router-link>
    </md-menu>

    <md-menu md-direction="top-end">
      <router-link to="/business">
      <md-button md-menu-trigger>Business</md-button>
      </router-link>
    </md-menu>

    <md-menu md-direction="top-end">
      <router-link to="/stocks">
        <md-button md-menu-trigger>Stocks</md-button>
      </router-link>
    </md-menu>

    <md-menu md-direction="top-end">
      <router-link to="/social">
        <md-button md-menu-trigger>Social</md-button>
      </router-link>
    </md-menu>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>

</style>
