<template>
  <div id="app">
    <header class="header">
      <h1>Мои проекты</h1>
    </header>
    <main class="main">
      <portfolio-list msg="Welcome to Your Vue.js App" />
    </main>
    <footer class="footer">
      <div class="contacts">
        <h2>Контакты</h2>
        <div class="contacts__content">
          <p>anatovtimur@gmail.com</p>
          <a href="tel:+79817244835">+79817244835</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import PortfolioList from "@/components/PortfolioList.vue";
import "@/styles/style.scss";

export default {
  name: "App",
  components: {
    PortfolioList
  }
};
</script>
