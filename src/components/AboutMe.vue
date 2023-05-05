<template>
  <q-page class="flex">
    <div class="section-about-me self-start row col full-width q-py-lg q-mt-lg">
      <!-- Introduction -->
      <div class="col-6 col-md-6 self-center">
        <!-- Text intro -->
        <div class="txt-intro text-secondary">
          <p class="typed-out q-ma-none bebasneue-font">
            Hi, I'm Zsannen Mariano.
          </p>
        </div>

        <!-- About me -->
        <div
          class="txt-about caption raleway-font"
          v-text="shortDescription"
        ></div>

        <!-- Download CV btn -->
        <div class="btn-dl-cv q-py-md">
          <q-btn
            outline
            rounded
            no-caps
            color="secondary"
            label="Let's connect on LinkedIn"
            size="md"
            class="dense"
            type="a"
            target="_blank"
            href="https://www.linkedin.com/in/zmars"
          />
        </div>
      </div>

      <!-- Photo -->
      <div class="col-6 col-md-6 img-photo-self q-pa-lg">
        <q-img src="../assets/programmer.svg" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutMePage",

  data() {
    return {
      shortDescription:
        "A passionate and driven software engineer who is highly committed to advocating for servant leadership and women empowerment. A strong believer in creating a welcoming and inclusive culture in the tech industry.",
    };
  },

  mounted() {},

  setup() {},
});
</script>

<style lang="scss">
.txt-intro {
  display: inline-block;
}
.typed-out {
  overflow: hidden;
  border-right: 0.6em solid $secondary;
  white-space: nowrap;
  animation: typing 1.5s steps(20, end) forwards, blinking 0.9s infinite;
  font-size: 1.6rem;
  width: 0;
}
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
@keyframes blinking {
  from {
    border-color: transparent;
  }
  to {
    border-color: $secondary;
  }
}
</style>
