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
  <vg-button>default text</vg-button>
  <vg-button type="primary">primary text</vg-button>
  <vg-button disabled>disabled text</vg-button>
  <vg-button type="dashed">dashed</vg-button>
  <vg-button danger>danger default</vg-button>
  <vg-button danger type="primary">danger primary</vg-button>
  <vg-button danger type="dashed">danger dashed</vg-button>
  <vg-button loading type="primary">Loading</vg-button>
  <vg-button @click="handleClick" :loading="loadingStatus" type="primary">Loading</vg-button>
  <vg-button loading danger type="default">danger primary</vg-button>
  <vg-button textHideWhenLoading loading type="default">default</vg-button>
  `;
  const jsCode =
  `
  export default class Button extends Vue {
    public loadingStatus = false;
    handleClick() {
      if (this.loadingStatus) {
        return;
      }
      this.loadingStatus = true;
      const timer = setTimeout(() => {
        this.loadingStatus = false;
        clearTimeout(timer);
      }, 5000);
    }
  }
  `;
  @Options({
    name: "ButtonCode"
  })
  export default class ButtonCode extends Vue {
    public exampleCode = exampleCode;
    public jsCode = jsCode;
    mounted() {
      document.querySelectorAll("pre code").forEach(block => window.Prism.highlightElement(block));
    }
  }
</script>