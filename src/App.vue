<template>
  <div class="prev-wrapper">
    <button 
      v-for="item in types" 
      :key="item" 
      @click="renderPreview(item)" 
      :class="{active: item === type}">
      {{item}}
    </button>
    <VueDocPreview
      :value="docValue"
      :type="docType"
      :mdStyle="mdStyle"
      :language="language"
      :url="docUrl"
    />
    <a href="https://gitee.com/ele-cat/vue-doc-preview" target="_blank" class="widget"><img src='https://gitee.com/ele-cat/vue-doc-preview/widgets/widget_1.svg' alt='Fork me on Gitee' /></a>
  </div>
</template>

<script>
import VueDocPreview from "vue-doc-preview";

export default {
  components: {
    VueDocPreview,
  },
  data() {
    return {
      types: [
        "markdown",
        "office",
        "code",
        "text",
        "url",
      ],
      type: "",
      docValue: "",
      docType: "",
      mdStyle: {
        pre: {
          "background-color": "rgb(248, 248, 248)",
        },
        code: {
          "background-color": "rgb(248, 248, 248)",
          "line-height": "28px",
        },
      },
      language: "javascript",
      docUrl: "https://static-1252421604.cosgz.myqcloud.com/test/README-CN.md",
    };
  },
  created() {
    this.renderPreview("markdown");
  },
  methods: {
    renderPreview(type) {
      const renderValues = {
        office: "https://static-1252421604.cos.ap-guangzhou.myqcloud.com/vdp.docx",
        // office: "https://static-1252421604.cos.ap-guangzhou.myqcloud.com/vdp.pptx",
        markdown: "# Marked\n **success**\n```javascript\nconst a = 10\nfunction () {\n  console.log(a)\n}```",
        code:
          "import Marked from 'marked'\n" +
          "import HLJS from '../lib/highlight'\n" +
          "watch: {\n" +
          "  value: function (val) {\n" +
          "    this.updateContent(val)\n" +
          "  }\n" +
          "},\n" +
          "mounted: function () {\n" +
          "  this.updateContent(this.value)\n" +
          "},\n" +
          "updateContent: function (val) {\n" +
          "  if (val) {\n" +
          "    const parseMarked = Marked(val)\n" +
          "    this.content = parseMarked\n" +
          "    let self = this\n" +
          "    this.$nextTick(() => {\n" +
          "      self.parseHtml()\n" +
          "      console.log('Hello VueDocPreview')\n" +
          "    })\n" +
          "  }\n" +
          "}",
        text: "排列数A(n, m) = n! / (n-m)!\n组合数C(n, m) = A(n, m) / m!",
      };

      this.type = type;
      if (type === "url") {
        this.docValue = ""
        return
      }
      this.docType = type;
      this.docValue = renderValues[type];
    },
  },
};
</script>

<style>
.prev-wrapper button {
  margin: 0 6px 10px 0;
  color: #fff;
  background-color: #2d8cf0;
  border-color: #2d8cf0;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  line-height: 1.5;
  user-select: none;
  padding: 5px 15px 6px;
  font-size: 12px;
  border-radius: 4px;
}
.prev-wrapper button.active {
  background-color: orange;
  border-color: orange;
}
.widget {
  position: fixed;
  top: 0;
  right: 0;
}
</style>