<template>
  <q-page class="flex">
    <div
      class="section-blog-list self-start row col justify-center full-width text-white q-py-md"
    >
      <div v-for="blog in blogs" :key="blog.url">
        <q-card class="blog-cards col-3 q-ma-sm" flat bordered dark>
          <q-img :src="blog.previewPhoto" class="img-preview-photo" />

          <q-card-section>
            <div class="text-center caption">{{ blog.title }}</div>
          </q-card-section>

          <q-card-actions class="row justify-center absolute-bottom q-pb-md">
            <q-btn
              outline
              rounded
              no-caps
              color="secondary"
              label="Read on Medium"
              size="sm"
              type="a"
              :href="blog.url"
            />
          </q-card-actions>
        </q-card>
      </div>
      <!-- <div v-html="blogHtml"></div> -->
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "BlogListPage",

  data() {
    return {
      blogs: [],
    };
  },

  async mounted() {
    await this.initBlogItems();
  },

  setup() {
    return {
      async initBlogItems() {
        const url =
          "https://gist.githubusercontent.com/zmoresss/ecf2bc516ff5b5507b4e827cf44de4ad/raw/3ccf3d0914d79add73b5075b706c9328cef2ddf1/medium-rss.json";

        const response = await fetch(url);
        const mediumBlogs = await response.json();

        this.blogs = this.formatBlogs(mediumBlogs.items);
      },

      formatBlogs(blogs) {
        return blogs.map((blog) => {
          const { title, guid, date_published, preview_image } = blog;

          return {
            title: title,
            url: guid,
            publishedDate: date_published,
            previewPhoto: preview_image,
          };
        });
      },
    };
  },
});
</script>

<style lang="scss">
.blog-cards {
  min-width: 250px;
  min-height: 280px;
  max-width: 250px;
  max-height: 300px;
  font-size: 10pt;
}

.img-preview-photo {
  max-height: 150px;
  min-height: 150px;
}
</style>
