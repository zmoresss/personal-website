<template>
  <q-page class="flex">
    <div class="section-contact-me self-start row col full-width">
      <!-- Contact Form -->
      <div class="col-6 col-md-6 self-center">
        <div class="txt-intro text-secondary">
          <p class="q-ma-none bebasneue-font txt-talk">Let's Talk</p>
        </div>

        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          <!-- Name -->
          <q-input
            bottom-slots
            color="accent"
            label-color="accent"
            v-model="name"
            label="Name"
            dark
            :dense="dense"
          >
            <template v-slot:prepend>
              <q-icon name="account_circle" color="accent" />
            </template>
          </q-input>

          <!-- Email -->
          <q-input
            bottom-slots
            color="accent"
            label-color="accent"
            v-model="email"
            label="Email"
            dark
            :dense="dense"
          >
            <template v-slot:prepend>
              <q-icon name="alternate_email" color="accent" />
            </template>
          </q-input>

          <!-- Email -->
          <q-input
            bottom-slots
            color="accent"
            label-color="accent"
            v-model="email"
            label="Email"
            type="textarea"
            dark
            :dense="dense"
          >
            <template v-slot:prepend>
              <q-icon name="message" color="accent" />
            </template>
          </q-input>

          <!-- Submit Button -->
          <div class="row justify-end">
            <q-btn label="Submit" type="submit" color="secondary" />
            <q-btn
              label="Reset"
              type="reset"
              color="secondary"
              flat
              class="q-ml-sm"
            />
          </div>
        </q-form>
      </div>

      <!-- Contact Info -->
      <div class="col-6 col-md-6 img-photo-self q-pa-lg"></div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContactMePage",

  data() {
    return {};
  },

  mounted() {},

  setup() {},
});
</script>

<style lang="scss">
.txt-talk {
  font-size: 1.6rem;
}
</style>
