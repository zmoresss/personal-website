<template>
  <div class="section-blog-page justify-start row col full-width">
    <div class="q-px-lg q-py-md text-accent">
      <q-timeline color="secondary">
        <!-- LODAGO -->
        <q-timeline-entry
          title="Lodago (Under Tairi) | Lead Engineer | Project-based"
          subtitle="March 2023 - August 2023"
          side="left"
          class="bebasneue-font text-secondary"
        >
          <q-tree
            class="text-accent raleway-font"
            :nodes="expDataLodago"
            node-key="label"
            dark
          />
        </q-timeline-entry>

        <!-- CAREER BREAK -->
        <q-timeline-entry
          title="Career Break"
          subtitle="November 2022 - February 2023"
          class="bebasneue-font text-orange"
          color="orange"
        >
        </q-timeline-entry>

        <!-- TALINO LABS -->
        <q-timeline-entry
          title="Talino Labs | Full Stack Lead Engineer"
          subtitle="March 2022 - October 2022"
          class="bebasneue-font text-secondary"
        >
          <q-tree
            class="text-accent raleway-font"
            :nodes="expDataTalino"
            node-key="label"
            dark
          />
        </q-timeline-entry>

        <!-- NUSKIN -->
        <q-timeline-entry
          title="NuSkin Enterprises | Lead Software Engineer"
          subtitle="March 2021 - March 2022"
          class="bebasneue-font text-secondary"
        >
          <q-tree
            class="text-accent raleway-font"
            :nodes="expDataNuskin"
            node-key="label"
            dark
          />
        </q-timeline-entry>

        <!-- FREEDOM -->
        <q-timeline-entry
          title="Freedom! Family Ltd (formerly Freedom MCN) | Software Development Engineer"
          subtitle="December 2018 - March 2021"
          class="bebasneue-font text-secondary"
        >
          <q-tree
            class="text-accent raleway-font"
            :nodes="expDataFreedom"
            node-key="label"
            dark
          />
        </q-timeline-entry>

        <!-- GODIGITAL -->
        <q-timeline-entry
          title="GoDigital Corporation | Software Engineer"
          subtitle="November 2016 - December 2018"
          class="bebasneue-font text-secondary"
        >
          <q-tree
            class="text-accent raleway-font"
            :nodes="expDataGoDigital"
            node-key="label"
            dark
          />
        </q-timeline-entry>

        <!-- WISHLAND -->
        <q-timeline-entry
          title="Wishland Software Technologies  | Game & Web Developer"
          subtitle="April 2015 - October 2016"
          class="bebasneue-font text-secondary"
        >
          <q-tree
            class="text-accent raleway-font"
            :nodes="expDataWishland"
            node-key="label"
            dark
          />
        </q-timeline-entry>
      </q-timeline>
    </div>
  </div>
</template>

<script>
import expDataLodago from '../data/work-experiences/lodago.json';
import expDataTalino from '../data/work-experiences/talino-labs.json';
import expDataNuskin from '../data/work-experiences/nuskin.json';
import expDataFreedom from '../data/work-experiences/freedom.json';
import expDataGoDigital from '../data/work-experiences/godigital.json';
import expDataWishland from '../data/work-experiences/wishland.json';

export default {
  name: 'WorkExperiences',
  setup () {

    return {
      expDataLodago,
      expDataTalino,
      expDataNuskin,
      expDataFreedom,
      expDataGoDigital,
      expDataWishland,
    }
  }
}
</script>
