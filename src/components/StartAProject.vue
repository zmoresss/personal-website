<template>
  <div class="flex col full-width q-mb-lg">
    <div class="start-a-project-component self-start row col full-width q-mt-lg">

      <div class="full-width text-center text-secondary q-my-sm">
        <p class="q-ma-none bebasneue-font txt-talk">🔥 Collaborate with me 🔥</p>
      </div>

      <q-card
        bordered
        dark
        class="full-width transparent q-pa-md"
      >
        <q-card-section class="row col justify-between start-project-card">
          <div class="col-8 col-md-8 col-xs-12 txt-start-project raleway-font">
            Interested in starting a project with me? Would you like to consult about IT stuff? Or just a friendly chat?
            You may schedule a meeting with me and discuss it. ❤️
          </div>

          <div class="col-2 col-md-4 col-xs-12 btn-schedule q-pa-md row justify-end">
            <!-- Schedule a meeting btn -->
            <q-btn
              outline
              rounded
              no-caps
              color="secondary"
              label="Schedule a meeting"
              size="md"
              class="dense q-mr-sm"
              type="a"
              @click="$router.push({ path: '/schedule-meeting' })"
            />
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "StartAProject",

  data() {
    return {};
  },

  mounted() {},

  setup() {},
});
</script>

<style lang="scss">
.txt-start-project {
  color: $accent;
}

.start-project-card {
  border-color: $secondary;
}

.txt-talk {
  font-size: 1.6rem;
}

body.mobile {
  .start-project-card {
    text-align: center;

    .btn-schedule {
      margin-top: 20px;
      padding: 0;
      justify-content: center;
    }
  }
}
</style>
