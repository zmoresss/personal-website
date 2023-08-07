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
      <div class="col-xs-12 img-photo-self desktop-hide q-mt-lg card">
        <q-img src="../assets/photo-self.jpg" />
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
          class="txt-about caption raleway-font q-pr-lg"
          v-text="shortDescription"
        ></div>

        <div class="btn-dl-cv q-py-md q-pr-sm">
          <!-- Schedule a meeting btn -->
          <q-btn
            outline
            rounded
            no-caps
            color="secondary"
            label="Schedule a meeting"
            size="sm"
            class="dense q-mr-sm"
            type="a"
            @click="$router.push({ path: '/schedule-meeting' })"
          />

          <!-- Connect LinkedIn btn -->
          <q-btn
            outline
            rounded
            no-caps
            color="secondary"
            label="Let's connect on LinkedIn"
            size="sm"
            class="dense"
            type="a"
            target="_blank"
            href="https://www.linkedin.com/in/zmars"
          />
        </div>
      </div>

      <!-- Photo -->
      <div class="col-6 col-md-6 img-photo-self mobile-hide card">
        <q-img
          :ratio="1"
          src="../assets/photo-self.jpg"
        />
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

  .img-photo-self img {
    -webkit-filter: grayscale(0%); /* Safari 6.0 - 9.0 */
    filter: grayscale(0%);
  }
}

.img-photo-self img {
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
}

@property --rotate {
  syntax: "<angle>";
  initial-value: 132deg;
  inherits: false;
}

:root {
  --card-height: 65vh;
  --card-width: calc(var(--card-height) / 1.5);
}

.card {
  background: #191c29;
  width: var(--card-width);
  height: var(--card-height);
  position: relative;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  color: rgb(88 199 250 / 0%);
}

.card:hover {
  color: rgb(88 199 250 / 100%);
  transition: color 1s;
}


.card::before {
  content: "";
  width: 104%;
  height: 104%;
  border-radius: 8px;
  background-image: linear-gradient(
      var(--rotate)
    , #5ddcff, #3c67e3 43%, #4e00c2);
  position: absolute;
  z-index: -1;
  top: -2%;
  left: -2%;
  animation: spin 2.5s linear infinite;
}

.card::after {
  position: absolute;
  content: "";
  top: calc(var(--card-height) / 14);
  left: 0;
  right: 0;
  z-index: -1;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  transform: scale(0.8);
  filter: blur(calc(var(--card-height) / 6));
  background-image: linear-gradient(
      var(--rotate)
    , #5ddcff, #3c67e3 43%, #4e00c2);
  opacity: 1;
  transition: opacity .5s;
  animation: spin 2.5s linear infinite;
}

.card:hover {
  img {
    -webkit-filter: grayscale(0%); /* Safari 6.0 - 9.0 */
    filter: grayscale(0%);
  }
}

@keyframes spin {
  0% {
    --rotate: 0deg;
  }
  100% {
    --rotate: 360deg;
  }
}
</style>
