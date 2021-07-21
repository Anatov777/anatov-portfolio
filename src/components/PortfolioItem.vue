<template>
  <div class="projects__item">
    <h2>{{ projectData.title }}</h2>
    <p v-html="projectData.description"></p>
    <p>{{ projectData.technologies }}</p>
    <p>
      <a class="github-link" :href="projectData.github" target="_blank">{{
        projectData.github
      }}</a>
    </p>
    <p v-if="projectData.site" class="btn-wrapper">
      <a class="show-btn" :href="projectData.site" target="_blank"
        >Посмотреть</a
      >
    </p>
  </div>
</template>

<script>
export default {
  name: "PortfolioItem",
  props: {
    projectData: Object,
  },
};
</script>
