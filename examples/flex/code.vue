<template>
  <div class="code">
    <h3>html</h3>
    <pre><code class="lang-html">{{ exampleCode }}</code></pre>
    <h3>css</h3>
    <pre><code class="lang-css">{{ cssCode }}</code></pre>
  </div>
</template>
<script lang="ts">
  import { Options, Vue } from 'vue-class-component';
  const exampleCode =
  `
    <vg-flex justifyContent="center" alignItems="center" class="face">
      <transition>
        <vg-flex-item class="dot"></vg-flex-item>
      </transition>
    </vg-flex>
    <vg-flex justifyContent="spaceBetween" class="face">
      <vg-flex-item class="dot"></vg-flex-item>
      <vg-flex-item class="dot" align-self="flex-end"></vg-flex-item>
    </vg-flex>
    <vg-flex justifyContent="spaceBetween" class="face">
      <vg-flex-item class="dot"></vg-flex-item>
      <vg-flex-item class="dot" align-self="center"></vg-flex-item>
      <vg-flex-item class="dot" align-self="flex-end"></vg-flex-item>
    </vg-flex>
    <vg-flex justifyContent="spaceBetween" flexDirection="column" class="face">
      <vg-flex-item>
        <vg-flex justifyContent="spaceBetween">
          <vg-flex-item class="dot"></vg-flex-item>
          <vg-flex-item class="dot"></vg-flex-item>
        </vg-flex>
      </vg-flex-item>
      <vg-flex-item>
        <vg-flex justifyContent="spaceBetween">
          <vg-flex-item class="dot"></vg-flex-item>
          <vg-flex-item class="dot"></vg-flex-item>
        </vg-flex>
      </vg-flex-item>
    </vg-flex>
    <vg-flex justifyContent="spaceBetween" flexDirection="column" class="face">
      <vg-flex-item>
        <vg-flex justifyContent="spaceBetween">
          <vg-flex-item class="dot"></vg-flex-item>
          <vg-flex-item class="dot"></vg-flex-item>
        </vg-flex>
      </vg-flex-item>
      <vg-flex-item>
        <vg-flex justify-content="center">
          <vg-flex-item class="dot"></vg-flex-item>
        </vg-flex>
      </vg-flex-item>
      <vg-flex-item>
        <vg-flex justifyContent="spaceBetween">
          <vg-flex-item class="dot"></vg-flex-item>
          <vg-flex-item class="dot"></vg-flex-item>
        </vg-flex>
      </vg-flex-item>
    </vg-flex>
    <vg-flex justifyContent="spaceBetween" flexDirection="column" class="face">
      <vg-flex-item>
        <vg-flex justifyContent="spaceBetween">
          <vg-flex-item class="dot"></vg-flex-item>
          <vg-flex-item class="dot"></vg-flex-item>
        </vg-flex>
      </vg-flex-item>
      <vg-flex-item>
        <vg-flex justify-content="spaceBetween">
          <vg-flex-item class="dot"></vg-flex-item>
          <vg-flex-item class="dot"></vg-flex-item>
        </vg-flex>
      </vg-flex-item>
      <vg-flex-item>
        <vg-flex justifyContent="spaceBetween">
          <vg-flex-item class="dot"></vg-flex-item>
          <vg-flex-item class="dot"></vg-flex-item>
        </vg-flex>
      </vg-flex-item>
    </vg-flex>
  `;
  const cssCode =
  `
  .face {
    margin: 16px;
    padding: 4px;
    background-color: #e7e7e7;
    width: 104px;
    height: 104px;
    -o-object-fit: contain;
    object-fit: contain;
    box-shadow: inset 0 5px white, inset 0 -5px #bbb, inset 5px 0 #d7d7d7,
      inset -5px 0 #d7d7d7;
    border-radius: 10%;
  }
  .dot {
    display: block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin: 4px;
    background-color: #333;
    box-shadow: inset 0 3px #111, inset 0 -3px #555;
  }
  `;
  @Options({
    name: "FlexCode"
  })
  export default class FlexCode extends Vue {
    public exampleCode = exampleCode;
    public cssCode = cssCode;
    mounted() {
      document.querySelectorAll("pre code").forEach(block => window.Prism.highlightElement(block));
    }
  }
</script>