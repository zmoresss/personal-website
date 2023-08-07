<template>
  <q-page class="flex">
    <div class="section-book-meeting self-start row col full-width q-mt-lg">
      <q-card dark>
        <q-card-section>
          <!-- Calendly inline widget begin -->
          <div
            class="calendly-inline-widget"
            data-url="https://calendly.com/zmores/meeting-with-zsannen?background_color=141416&text_color=ffffff&primary_color=03cb0c"
            style="min-width:300px;height:650px"
          >
          </div>
          <!-- Calendly inline widget end -->
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "BookMeeting",

  data() {
    return {};
  },

  mounted() {
    const recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js')
    document.head.appendChild(recaptchaScript)
  },

  setup() {},
});
</script>

<style lang="scss">
</style>
