<template>
  <q-page class="flex">
    <div class="mobile-only">
      <q-card dark>
        <q-card-section class="text-caption text-center">
          Hi! This is a test that I would like to try.
          This page has been designed with<br/>sensory stimulation in mind, ensuring that every user feels
          comfortable <br/>and keeps them focused while exploring our content.
          <br/><br/>
          Kindly hit the play button to start the video and explore the rest of the page contents.<br/>
        </q-card-section>
      </q-card>
      <iframe
        src="https://www.youtube.com/embed/n_Dv4JMiwK8?start=20&autoplay=1&loop=1&rel=0&cc_load_policy=1&iv_load_policy=3&fs=0&color=white&controls=0&disablekb=1&playlist=n_Dv4JMiwK8"
        width="295"
        height="215"
        title="1 hour 20 minutes of relaxing Minecraft Parkour (Nostalgia, Scenery, No Ads)"
        frameborder="0">
      </iframe>
    </div>
    <div class="section-about-me self-start row col full-width q-py-lg q-mt-lg">
      <div class="txt-intro col-7 col-md-7 col-xs-12 self-center">
        <component :is="WorkExperiences" />
      </div>
    </div>

    <q-page-sticky class="desktop-only" position="top-right" :offset="[90, 70]">
      <q-card dark>
        <q-card-section class="text-caption text-center">
          Hi! This is a test that I would like to try.
          This page has been designed with<br/>sensory stimulation in mind, ensuring that every user feels
          comfortable <br/>and keeps them focused while exploring our content.
          <br/><br/>
          Kindly hit the play button to start the video and explore the rest of the page contents.
        </q-card-section>
      </q-card>
      <iframe src="https://www.youtube.com/embed/n_Dv4JMiwK8?start=20&autoplay=1&loop=1&rel=0&cc_load_policy=1&iv_load_policy=3&fs=0&color=white&controls=0&disablekb=1&playlist=n_Dv4JMiwK8" width="560" height="315" title="1 hour 20 minutes of relaxing Minecraft Parkour (Nostalgia, Scenery, No Ads)" frameborder="0"></iframe>
    </q-page-sticky>
  </q-page>
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
