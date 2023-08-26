const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "blogs", component: () => import("pages/BlogsPage.vue") },
      { path: "schedule-meeting", component: () => import("pages/ScheduleMeetingPage.vue") },
      { path: "my-cv", component: () => import("pages/MyCv.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
