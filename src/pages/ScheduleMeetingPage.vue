<template>
  <div class="section-blog-page justify-center row col full-width q-mt-xl">
    <div class="txt-intro text-secondary full-width text-center">
      <p class="q-ma-none bebasneue-font txt-talk">Schedule a meeting with me</p>
    </div>
    <component :is="BookMeeting" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import BookMeeting from "../components/BookMeeting.vue";

export default defineComponent({
  name: "ScheduleMeetingPage",

  components: [BookMeeting],

  data() {
    return {
      BookMeeting,
    };
  },

  setup() {},
});
</script>

<style lang="scss">
</style>
