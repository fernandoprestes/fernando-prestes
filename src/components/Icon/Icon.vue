<template>
  <component
    :is="name"
    v-bind="$props"
  />
</template>
<script>
  import Folder from './Folder.vue';
  import Github from './Github.vue';
  import Linkedin from './Linkedin.vue';

  export default {
    components: { Github, Folder, Linkedin },
    props: {
      name: {
        type: String,
        require: true,
      },
      color: {
        type: String,
      },
    },
  };
</script>
