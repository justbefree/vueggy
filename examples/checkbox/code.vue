<template>
  <div class="code">
    <h3>html</h3>
    <pre><code class="lang-html">{{ exampleCode }}</code></pre>
    <h3>js</h3>
    <pre><code class="lang-js">{{ jsCode }}</code></pre>
  </div>
</template>
<script lang="ts">
  import { Options, Vue } from 'vue-class-component';
  const exampleCode =
  `
  <vg-checkbox v-model="checkbox1" :disabled="true"></vg-checkbox>
  <vg-checkbox v-model="checkbox2"></vg-checkbox>
  `;
  const jsCode =
  `
  export default class Flex extends Vue {
    public checkbox1 = true;
    public checkbox2 = false;
  }
  `;
  @Options({
    name: "CheckboxCode"
  })
  export default class CheckboxCode extends Vue {
    public exampleCode = exampleCode;
    public jsCode = jsCode;
    mounted() {
      document.querySelectorAll("pre code").forEach(block => window.Prism.highlightElement(block));
    }
  }
</script>