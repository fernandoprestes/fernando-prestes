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
            class="w-16 rounded-full border-2 border-bg-cards ring-2 ring-brand-color"
            src="https://images.generated.photos/PT6UvTaFvGj79xdkE4n1HVArXgrjHCmZ0ma9rSRxLho/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTE3NDA5LmpwZw.jpg"
          />
          <div class="text-brand-color">
            <h2 class="text-xl font-bold">Nome do infeliz</h2>
            <p class="text-lg">Desenvolvedor frontend</p>
          </div>
        </v-card>
        <v-card class="h-full">
          <div class="flex items-center gap-2">
            <icon name="Github" />
            git
          </div>
          <div class="flex items-center gap-2">
            <icon name="Linkedin" />
            git
          </div>

          <p>Lorem ipsum dolor sit</p>
          <p>Lorem ipsum dolor sit</p>
          <p>Lorem ipsum dolor sit</p>
          <p>Lorem ipsum dolor sit</p>
          <p>Lorem ipsum dolor sit</p>
          <p>Lorem ipsum dolor sit</p>
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
      </v-card>
    </div>
  </div>
  <div class="flex items-center justify-center lg:container">
    <div class="flex w-full flex-col gap-5 py-2 px-4 md:flex-row">
      <v-card class="space-y-2">
        <h2 class="font-bold text-brand-color">Experiência</h2>
        <div class="flex w-full gap-4 rounded bg-brand-color-100 p-2 text-brand-color">
          <img
            class="w-16"
            src="https://thumbs.dreamstime.com/b/letter-k-drop-water-logo-vector-letter-k-drop-water-logo-vector-modern-logo-gear-shape-shape-suitable-entertainment-107014401.jpg"
            alt=""
          />
          <div>
            <h2 class="text-lg font-bold">Lorem</h2>
            <p>lorem lorem</p>
          </div>
        </div>
      </v-card>
      <v-card>
        <h2 class="font-bold text-brand-color">Cursos</h2>
      </v-card>
    </div>
  </div>
</template>
