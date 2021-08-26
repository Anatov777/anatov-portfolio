<template>
  <div class="projects__item">
    <h2>{{ projectData.title }}</h2>
    <p v-html="projectData.description"></p>
    <p>{{ projectData.technologies }}</p>
    <div class="links-wrapper">
      <p v-if="projectData.github">
        <a class="github-link" :href="projectData.github" target="_blank"
          >GitHub</a
        >
      </p>
      <p v-if="projectData.site">
        <a class="show-btn" :href="projectData.site" target="_blank"
          >Посмотреть</a
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PortfolioItem",
  props: {
    projectData: Object
  }
};
</script>
