<template>
  <div class="code">
    <h3>html</h3>
    <pre><code class="lang-html">{{ exampleCode }}</code></pre>
  </div>
</template>
<script lang="ts">
  import { Options, Vue } from 'vue-class-component';
  const exampleCode =
  `
  <vg-icon name="close"></vg-icon>
  <vg-icon name="location"></vg-icon>
  `;
  @Options({
    name: "IconCode"
  })
  export default class IconCode extends Vue {
    public exampleCode = exampleCode;
    mounted() {
      document.querySelectorAll("pre code").forEach(block => window.Prism.highlightElement(block));
    }
  }
</script>