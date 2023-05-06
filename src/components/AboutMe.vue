<template>
  <q-page class="flex">
    <div class="section-about-me self-start row col full-width q-py-lg q-mt-lg">
      <q-badge
        outline
        class="desktop-hide badge-warning"
        color="warning"
        label="website under construction"
      />

      <!-- Mobile Photo -->
      <div class="col-xs-12 img-photo-self desktop-hide q-pa-md q-mt-lg">
        <q-img src="../assets/programmer.svg" />
      </div>

      <!-- Introduction -->
      <div class="txt-intro col-6 col-md-6 col-xs-12 self-center">
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

        <div class="btn-dl-cv q-py-md">
          <!-- My Blogs btn -->
          <q-btn
            outline
            rounded
            no-caps
            color="secondary"
            label="My Blogs"
            size="md"
            class="dense q-ma-sm"
            type="a"
            href="https://zmores.dev/blogs"
          />

          <!-- Connect LinkedIn btn -->
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
      <div class="col-6 col-md-6 img-photo-self q-pa-lg mobile-hide">
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

body.mobile {
  .section-about-me {
    padding: 0;
    margin: 0;
  }

  .txt-intro {
    text-align: center !important;
    padding-top: 5%;
  }

  .txt-about {
    font-size: 12pt;
    padding: 5% 0;
  }

  .badge-warning {
    margin: auto;
  }
}
</style>
