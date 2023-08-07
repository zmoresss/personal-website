<template>
  <component :is="AboutMe" />
  <component :is="BlogsPage" />
  <component :is="StartAProject" />
</template>

<script>
import { defineComponent } from "vue";
import AboutMe from "../components/AboutMe.vue";
import BlogsPage from "../pages/BlogsPage.vue";
import StartAProject from "components/StartAProject.vue";

export default defineComponent({
  name: "IndexPage",

  components: [
    AboutMe,
    BlogsPage,
    StartAProject,
  ],

  data() {
    return {
      AboutMe,
      BlogsPage,
      StartAProject,
    };
  },

  setup() {},
});
</script>
