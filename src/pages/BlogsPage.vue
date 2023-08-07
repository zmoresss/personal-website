<template>
  <div class="q-pa-md q-gutter-sm txt-bcrumbs">
    <div class="justify-center row col">
      <q-badge
        outline
        class="desktop-hide badge-warning"
        color="warning"
        label="website under construction"
      />
    </div>
  </div>
    <q-breadcrumbs class="text-grey mobile-hide">
      <template v-slot:separator>
        <q-icon size="1.0em" name="arrow_forward" color="grey" />
      </template>

      <q-breadcrumbs-el
        class="text-grey"
        label="Home"
        to="https://zmores.dev/"
      />
      <q-breadcrumbs-el class="text-secondary" label="Blogs" />
    </q-breadcrumbs>
  <div class="section-blog-page justify-center row col full-width q-mt-xl">
    <div class="txt-intro text-secondary q-mt-xl">
      <p class="q-ma-none bebasneue-font txt-talk">✒️ My Awesome Blogs ✒️</p>
    </div>
    <component :is="BlogList" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import BlogList from "../components/BlogList.vue";

export default defineComponent({
  name: "BlogsPage",

  components: [BlogList],

  data() {
    return {
      BlogList,
    };
  },

  setup() {},
});
</script>

<style lang="scss">
.txt-talk {
  font-size: 1.6rem;
}

.txt-bcrumbs {
  font-size: 8pt;
  display: none!important;
}

.section-blog-page {
  margin: 0 !important;
}

.q-pa-md.q-gutter-sm.txt-bcrumbs {
  display: none!important;
}
</style>
