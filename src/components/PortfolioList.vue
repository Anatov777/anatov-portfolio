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
        title: 'Учетная система "Консультации"',
        description:
          "Предназначена для автоматизации работы с консультациями пациентов.",
        technologies: "Технологии: Vue.js, Vuex, Vuetify, Vuelidate",
        github: "https://github.com/Anatov777/consulting",
        site: "https://anatov777.github.io/consulting/#/patients",
      },
      {
        title: "Корпоративный портал",
        description: "Примеры задач, выполненных для корпоративного портала.",
        technologies: "Технологии: Vue.js, Vuex, Vuelidate, Bootstrap",
        github: "https://github.com/Anatov777/corporate-portal",
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
        title: "Сайт-портфолио",
        description: "Отображение списка работ макетчика-моделиста.",
        technologies: "Технологии: Django, React",
        github: "https://github.com/Anatov777/diorama-layouts",
        site: "https://diorama-heroku-app.herokuapp.com/",
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
      {
        title: "Игра Simon",
        description:
          "Задача игры — запомнить продемонстрированную последовательность вспышек и звуков и воспроизвести её.",
        technologies: "Технологии: Vue.js",
        github: "https://github.com/Anatov777/simon-game",
        site: "https://anatov777.github.io/simon-game/",
      },
      {
        title: "Таймеры",
        description: "Таймеры обратного отсчета.",
        technologies: "Технологии: Vue.js",
        github: "https://github.com/Anatov777/vue-timers",
        site: "https://anatov777.github.io/vue-timers/",
      },
    ];
  },
};
</script>
