<template>
  <div id="app">
    <Header></Header>
    <router-view/>
  </div>
</template>

<script>
import Header from "@/components/header";
export default {
  name: 'app',
  components: {Header},
  data: function () {
    return {
      title: "Hello World"
    };
  }
}
</script>

