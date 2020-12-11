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
 <template>
   <div class="field-view">
     <div id="container">
       <ul>
         <li>
           <span class="title">Basic usage</span>
           <vg-field label="Label" v-model="basicUsage" placeholder="Text"></vg-field>
         </li>
         <li>
           <span class="title">Types</span>
           <vg-field
             v-model="phoneNumber"
             label="Phone"
             type="tel"
             min="3"
             max="10"
             placeholder="phone number"
             pattern="[0-9]*"
           ></vg-field>
           <vg-field
             v-model="password"
             label="Password"
             type="password"
             placeholder="password"
           ></vg-field>
           <vg-field
             v-model="text"
             label="Text"
             type="text"
             placeholder="text"
           ></vg-field>
         </li>
         <li>
           <span class="title">Readonly</span>
           <vg-field
             v-model="readonly"
             label="ID"
             type="text"
             readonly
           ></vg-field>
         </li>
         <li>
           <span class="title">
             Encrypted
             <i class="hidden-value" @click="showHiddenValue">{{hidden}}</i>
           </span>
           <vg-field
             v-model="encryptedValue"
             label="Encrypted"
             type="text"
             encrypted
             ref="encrypted"
           ></vg-field>
         </li>
         <li>
           <span class="title">Disabled</span>
           <vg-field
             v-model="disabled"
             label="Keyword"
             type="text"
             disabled
           ></vg-field>
         </li>
         <li>
           <span class="title">Clear Icon</span>
           <vg-field
             class="clear-icon"
             v-model="clear"
             label="Clear"
             type="text"
             clearable
           ></vg-field>
         </li>
         <li>
           <span class="title">Textarea</span>
           <vg-field
             v-model="textarea"
             label="Textarea"
             type="textarea"
             maxlength="50"
             showTextareaCounter
             clearable
           ></vg-field>
         </li>
         <li>
           <span class="title">Column display</span>
           <vg-field v-model="customLable" display="column" placeholder="上面的label是我的">
             <template #label>
               <span class="custom-label">Column display</span>
             </template>
           </vg-field>
         </li>
       </ul>
     </div>
   </div>
 </template>
  `;
  const jsCode =
  `
  export default class Field extends Vue {
    public phoneNumber = "";
    public password = "";
    public text = "";
    public customLable = "";
    public basicUsage = "";
    public userPassword = "";
    public readonly = "Readonly";
    public disabled = "disabled";
    public clear = "clear icon";
    public textarea = "";
    public encryptedValue = "3252523523523";
    public hidden = "click show hidden value";
    showHiddenValue() {
      this.hidden = this.$refs.encrypted.getDecryptedValue();
    }
  }
  `;
  @Options({
    name: "FieldCode"
  })
  export default class FieldCode extends Vue {
    public exampleCode = exampleCode;
    public jsCode = jsCode;
    mounted() {
      document.querySelectorAll("pre code").forEach(block => window.Prism.highlightElement(block));
    }
  }
</script>