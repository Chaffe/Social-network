export default {
  install(Vue, options) {
    Vue.prototype.$message = (html) => {
      window.M.toast({ html });
    };

    Vue.prototype.$error = (html) => {
      window.M.toast({ html: `[Error]: ${html}` });
    };
  },
};
