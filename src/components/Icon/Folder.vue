<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
  >
    <path
      d="M10.59 4.59C10.21 4.21 9.7 4 9.17 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-1.41-1.41z"
      :fill="color"
    ></path>
  </svg>
</template>

<script>
  export default {
    name: 'Folder',
    props: {
      size: { type: [String, Number], default: 24 },
      color: { type: String, default: '#837E9F' },
    },
  };
</script>
