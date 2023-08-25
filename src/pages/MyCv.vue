<template>
  <div class="section-blog-page justify-center row col full-width q-mt-xl">
    <component :is="WorkExperiences" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import WorkExperiences from "../components/WorkExperiences.vue";

export default defineComponent({
  name: "MyCvPage",

  components: [WorkExperiences],

  data() {
    return {
      WorkExperiences,
    };
  },

  setup() {},
});
</script>

<style lang="scss">
</style>
