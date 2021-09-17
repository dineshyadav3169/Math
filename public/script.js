window.MathJax = {
  loader: {
    load: ['input/asciimath','output/chtml']
  },
  // tex: {
  //   inlineMath: [['$', '$'], ['\\(', '\\)']]
  // },
  startup: {
    // ready: () => {
    //   console.log('MathJax is loaded, but not yet initialized');
    //   MathJax.startup.defaultReady();
    //   MathJax.startup.promise.then(() => {
    //     console.log('MathJax initial typesetting complete');
    //   });
    // }
    pageReady: () => {
      return MathJax.startup.defaultPageReady().then(() => {
        console.log('MathJax initial typesetting complete');
      });
    }
  }
};
console.log('load in')