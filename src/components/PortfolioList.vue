<template>
  <section class="projects">
    <portfolio-item
      v-for="(project, index) in PROJECTS"
      :key="index"
      :project-data="project"
    />
  </section>
</template>

<script>
import PortfolioItem from "@/components/PortfolioItem.vue";

export default {
  name: "PortfolioList",
  components: {
    PortfolioItem,
  },
  created() {
    this.PROJECTS = [
      {
        title: 'Авторизация',
        description:
          "Авторизация на Vue с использованием Supabase.",
        technologies: "Технологии: Vue.js 3, Composition API, Typescript, Tailwind CSS, Supabase",
        github: "https://github.com/Anatov777/vue3-example",
        site: "https://anatov777.github.io/vue3-example/",
      },
      {
        title: 'Учетная система "Консультации"',
        description:
          "Предназначена для автоматизации работы с консультациями пациентов.",
        technologies: "Технологии: Vue.js, Vuex, Vuetify, Vuelidate",
        github: "https://github.com/Anatov777/consulting",
        site: "https://anatov777.github.io/consulting/#/patients",
      },
      {
        title: "Маркетплейс аренды помещений",
        description: "Обзор проекта маркетплейса почасовой аренды помещений, в котором я участвовал в роли Frontend-разработчика.",
        technologies: "Технологии: Vue.js, Nuxt, TypeScript",
        site: "https://github.com/Anatov777/room-marketplace",
      },
      {
        title: "Корпоративный портал",
        description: "Примеры задач, выполненных для корпоративного портала.",
        technologies: "Технологии: Vue.js, Vuex, Vuelidate, Bootstrap",
        site: "https://github.com/Anatov777/corporate-portal",
      },
      {
        title: "Кольцевая диаграмма",
        description:
          "Диаграмма показывает процентное соотношение сотрудников компании по отделам.",
        technologies: "Технологии: Vue.js, Chart.js",
        github: "https://github.com/Anatov777/doughnut-chart",
        site: "https://anatov777.github.io/doughnut-chart/",
      },
      {
        title: "Гостиница",
        description: "Верстка страниц сайта гостиницы.",
        technologies: "Технологии: HTML, CSS, JS/jQuery",
        github: "https://github.com/Anatov777/toxin-hotel",
        site: "https://anatov777.github.io/toxin-hotel/",
      },
      {
        title: "Университет",
        description: "Верстка страниц сайта университета.",
        technologies: "Технологии: Pug, SCSS, JS/jQuery, Gulp",
        github: "https://github.com/Anatov777/university",
        site: "https://anatov777.github.io/university/",
      },
    ];
  },
};
</script>
