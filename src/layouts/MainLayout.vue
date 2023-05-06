<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="section-header bg-transparent text-secondary">
      <q-toolbar class="q-pa-none">
        <q-toolbar-title class="text-bold header-title"
          >zmores.dev</q-toolbar-title
        >

        <div class="header-menu-options mobile-hide">
          <q-badge outline color="warning" label="website under construction" />
          <!-- <q-btn flat dense no-caps class="q-px-md">About</q-btn>
          <q-btn flat dense no-caps class="q-px-md q-ml-sm">Contact</q-btn>
          <q-btn flat dense class="q-px-md">Blog</q-btn>
          <q-btn flat dense>Career</q-btn> -->
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style lang="scss">
.section-header {
  padding: 0 20%;
}

body.mobile {
  .header-title {
    text-align: center !important;
  }
}
</style>
