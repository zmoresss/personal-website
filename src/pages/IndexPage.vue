<template>
  <component :is="AboutMe" />
</template>

<script>
import { defineComponent } from "vue";
import AboutMe from "../components/AboutMe.vue";

export default defineComponent({
  name: "IndexPage",

  components: [AboutMe],

  data() {
    return {
      AboutMe,
    };
  },

  setup() {},
});
</script>
