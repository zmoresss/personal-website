<template>
  <component :is="AboutMe" />
  <component :is="BlogsPage" />
</template>

<script>
import { defineComponent } from "vue";
import AboutMe from "../components/AboutMe.vue";
import BlogsPage from "../pages/BlogsPage.vue";

export default defineComponent({
  name: "IndexPage",

  components: [AboutMe, BlogsPage],

  data() {
    return {
      AboutMe,
      BlogsPage,
    };
  },

  setup() {},
});
</script>
