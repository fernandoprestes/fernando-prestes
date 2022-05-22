<script setup>
  import { githubData } from '../../server/api';
  const TECHNOLOGIES = {
    js: 'JavaScript',
    vue: 'VueJs',
  };
  const techBgAndRingColor = item => {
    return `bg-tech-${item} ring-1 ring-tech-${item}`;
  };
</script>
<template>
  <div class="flex items-center justify-center lg:container">
    <div class="flex w-full flex-col gap-5 py-2 px-4 md:flex-row">
      <div class="flex flex-col gap-5">
        <v-card class="flex flex-col items-center gap-4 text-center">
          <img
            class="w-16 rounded-full border-2 border-bg-cards ring-2 ring-tech-vue"
            src="https://github.com/fernandoprestes.png"
          />
          <div class="text-brand-color">
            <h2 class="text-xl font-bold">Fernando Prestes</h2>
            <p class="text-lg">Desenvolvedor frontend</p>
          </div>
        </v-card>
        <v-card class="h-full space-y-4">
          <div class="flex items-center gap-2">
            <icon name="Github" />
            <a
              href="https://github.com/fernandoprestes"
              target="_blank"
              class="text-brand-color hover:brightness-150"
              >/fernandoprestes</a
            >
          </div>
          <div class="flex items-center gap-2">
            <icon name="Linkedin" />
            <a
              href="https://www.linkedin.com/in/fernandoprestes/"
              target="_blank"
              class="text-brand-color hover:brightness-150"
              >/fernandoprestes</a
            >
          </div>
        </v-card>
      </div>
      <div class="flex flex-1 flex-col gap-4">
        <v-card class="flex justify-between text-brand-color">
          <h2 class="font-bold">Meus projetos e estudos</h2>
          <a
            class="hover:brightness-150"
            href="https://github.com/fernandoprestes"
          >
            ver no github
          </a>
        </v-card>
        <div class="grid gap-4 lg:grid-cols-2">
          <v-card
            v-for="(item, index) in githubData"
            :key="index"
            class="space-y-2 text-brand-color"
          >
            <a
              class="flex items-center gap-2 hover:brightness-150"
              :href="item.link"
              target="_blank"
            >
              <icon name="Folder" />
              <h2 class="font-bold">{{ item.name }}</h2>
            </a>

            <p>{{ item.description }}</p>
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <div
                  class="h-2 w-2 rounded-full border border-brand-color"
                  :class="techBgAndRingColor(item.tech)"
                />
                <p>{{ TECHNOLOGIES[item.tech] }}</p>
              </div>
            </div>
          </v-card>
        </div>
      </div>
    </div>
  </div>
  <div class="flex items-center justify-center lg:container">
    <div class="flex w-full flex-col gap-5 py-2 px-4 md:flex-row">
      <v-card class="flex gap-2">
        <div
          class="w-fit rounded-3xl border border-bg-cards bg-tech-vue px-4 text-sm ring-1 ring-tech-vue hover:brightness-110"
        >
          VueJS
        </div>
        <div
          class="w-fit rounded-3xl border border-bg-cards bg-tech-js px-4 text-sm ring-1 ring-tech-js hover:brightness-110"
        >
          JavaScript
        </div>
        <div
          class="w-fit rounded-3xl border border-bg-cards bg-tech-html px-4 text-sm ring-1 ring-tech-html hover:brightness-110"
        >
          HTML
        </div>
        <div
          class="w-fit rounded-3xl border border-bg-cards bg-tech-css px-4 text-sm ring-1 ring-tech-css hover:brightness-110"
        >
          CSS
        </div>
      </v-card>
    </div>
  </div>
  <div class="flex items-center justify-center lg:container">
    <div class="flex w-full flex-col gap-5 py-2 px-4 md:flex-row">
      <v-card class="space-y-2">
        <h2 class="font-bold text-brand-color">Experiência</h2>
        <div class="flex w-full gap-4 rounded bg-brand-color-100 p-2 text-brand-color">
          <img
            class="w-16 rounded bg-white px-2"
            src="./../../assets/img/logos/tegra.svg"
            alt=""
          />
          <div>
            <h2 class="text-lg font-bold">Tegra</h2>
            <p class="text-sm font-bold italic">Outubro/2021 - até o momento</p>
            <p>Desenvolvedor Frontend</p>
          </div>
        </div>
      </v-card>
      <v-card class="space-y-2">
        <h2 class="font-bold text-brand-color">Cursos</h2>
        <div class="flex w-full gap-4 rounded bg-brand-color-100 p-2 text-brand-color">
          <img
            class="w-16 px-2"
            src="./../../assets/img/logos/alura.svg"
            alt="Logo da escola Alura cursos online de Tecnologia"
          />
          <div>
            <h2 class="text-lg font-bold">
              <a href="https://www.alura.com.br/">Alura</a>
            </h2>
            <ul>
              <li>Formação: Vue.js</li>
              <li>Formação: Vue.js 3</li>
              <li>Formação: React JS</li>
            </ul>
          </div>
        </div>
        <div class="flex w-full gap-4 rounded bg-brand-color-100 p-2 text-brand-color">
          <img
            class="w-16 px-2"
            src="./../../assets/img/logos/origamid.svg"
            alt="Logo da escola Origamid cursos de Web Design, UX/UI Design e Front End"
          />
          <div>
            <h2 class="text-lg font-bold">
              <a href="https://www.origamid.com">Origamid</a>
            </h2>
            <ul>
              <li>Web Design Completo</li>
              <li>JavaScript Completo ES6</li>
            </ul>
          </div>
        </div>
      </v-card>
    </div>
  </div>
</template>
