<template>
  <div class="code">
    <h3>js</h3>
    <pre><code class="lang-js">{{ exampleCode }}</code></pre>
  </div>
</template>
<script lang="ts">
  import { Options, Vue } from 'vue-class-component';
  const exampleCode =
  `
  this.Toast({
    position: "middle",
    message: "middle"
  });

  this.Toast({
    position: "bottom",
    message: "bottom"
  });

  this.Toast({
    position: "top",
    message: "top"
  });
  `;
  @Options({
    name: "ToastCode"
  })
  export default class ToastCode extends Vue {
    public exampleCode = exampleCode;
    mounted() {
      document.querySelectorAll("pre code").forEach(block => window.Prism.highlightElement(block));
    }
  }
</script>