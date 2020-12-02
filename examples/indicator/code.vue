<template>
  <div class="code">
    <h3>js</h3>
    <pre><code class="lang-js">{{ jsCode }}</code></pre>
  </div>
</template>
<script lang="ts">
  import { Options, Vue } from 'vue-class-component';
  const jsCode =
  `
  // spinType: snake,tripleBounce,rotate
  this.Indicator.open({ spinType, background: "transparent", lockScreen: true, transparent });
  `;
  @Options({
    name: "IndicatorCode"
  })
  export default class IndicatorCode extends Vue {
    public jsCode = jsCode;
    mounted() {
      document.querySelectorAll("pre code").forEach(block => window.Prism.highlightElement(block));
    }
  }
</script>