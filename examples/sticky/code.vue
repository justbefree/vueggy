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
 <template>
   <div class="sticky-view">
     <div id="container">
       <template v-for="item in 200" :key="item">
         <div v-if="item === 20">
           <vg-sticky offsetTop="100">
             <span>我固定在某个位置{{ item }}</span>
           </vg-sticky>
         </div>
         <div v-else-if="item === 100">
           <vg-sticky offsetTop="0">
             <span>我固定在某个位置{{ item }}</span>
           </vg-sticky>
         </div>
         <div v-else-if="item === 120">
           <div class="box111" ref="container">
             <vg-sticky class="has-container" :container="container">
               <span>我固定在某个位置{{ item }}</span>
             </vg-sticky>
           </div>
         </div>
         <div v-else>{{ item }}</div>
       </template>
     </div>
   </div>
 </template>
  `;
  @Options({
    name: "StickyCode"
  })
  export default class StickyCode extends Vue {
    public exampleCode = exampleCode;
    mounted() {
      document.querySelectorAll("pre code").forEach(block => window.Prism.highlightElement(block));
    }
  }
</script>