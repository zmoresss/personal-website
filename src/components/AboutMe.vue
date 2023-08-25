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
      <div class="txt-intro col-7 col-md-7 col-xs-12 self-center">
        <!-- Text intro -->
        <div class="txt-intro text-secondary">
          <p class="typed-out q-ma-none bebasneue-font">
            It's me. Hi. I'm the Zsannen. It's me.
          </p>
        </div>

        <!-- About me -->
        <div
          class="txt-about text-accent raleway-font q-pr-xl"
          v-text="shortDescription1"
        ></div>
        <div
          class="txt-about text-accent raleway-font q-pr-xl"
          v-text="shortDescription2"
        ></div>

        <div class="btn-dl-cv q-py-md q-pr-sm">
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
      <div class="col-5 col-md-5 img-photo-self mobile-hide card q-pl-xl">
        <q-img
          src="../assets/photo-self.jpg"
          style="height: 300px; max-width: 300px"
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
      shortDescription1:
        "I am a passionate and skilled software engineer with a deep love for both the world of code and the realm of creativity. As someone who thrives in the dynamic intersection of technology and artistry, I have cultivated a unique blend of skills that allow me to excel in crafting elegant software solutions while indulging in my other passions.",
      shortDescription2: "Guided by the principles of servant leadership, I have honed my skills in empathy, active listening, and fostering a collaborative environment. I recognize that the success of a project is not solely measured by its technical achievements, but also by the growth and well-being of every team member. By creating a space where everyone's ideas are valued, and each individual's strengths are leveraged, I strive to cultivate an atmosphere of trust and mutual respect.",
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
