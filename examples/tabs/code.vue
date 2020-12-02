<template>
  <div class="code">
    <h3>html</h3>
    <pre><code class="lang-html">{{ htmlCode }}</code></pre>
    <h3>js</h3>
    <pre><code class="lang-js">{{ jsCode }}</code></pre>
  </div>
</template>
<script lang="ts">
  import { Options, Vue } from 'vue-class-component';
  const htmlCode =
  `
  `;
  const jsCode =
  `
  `;
  @Options({
    name: "TabsCode"
  })
  export default class TabsCode extends Vue {
    public htmlCode = htmlCode;
    public jsCode = jsCode;
    mounted() {
      document.querySelectorAll("pre code").forEach(block => window.Prism.highlightElement(block));
    }
  }
</script>