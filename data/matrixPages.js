export const LUCROUT = {
  pageTitle: 'LU decomposition Crout luCrout',
  pageDescription: 'LU decomposition Crout luCrout',
  heading: "LU decomposition using Crout's method",
  currentPage: 'luCrout',
  subDirectory: 'matrix',
  slideData: [
    {
      index: 0,
      slideNavTitle: 'Matrix',
      slideNavData: [
        { link: 'luCrout', name: 'LuCrout' },
        { link: 'luDoolittle', name: 'LuDoolittle' },
        { link: 'addition', name: 'Addition' }
      ]
    }
  ],
  exampleQuestions: [
    {
      id: 'q0',
      value: '2x+5y=16\n3x+4y=11',
      question: "Q.1 2x+5y=16, 3x+4y=11"

    },
    {
      id: 'q1',
      value: '9x+9y=16\n3x+y=11',
      question: "Q.2 9x+9y=16, 3x+y=11"
    }
  ]
};

export const LUDOOLITTLE = {
  pageTitle: 'LU decomposition Doolittle luCrout',
  pageDescription: 'LU decomposition Doolittle luCrout',
  heading: "LU decomposition using Doolittle's method",
  currentPage: 'luDoolittle',
  slideData: [
    {
      index: 0,
      slideNavTitle: 'Matrix',
      slideNavData: [
        { link: 'luCrout', name: 'LuCrout' },
        { link: 'luDoolittle', name: 'LuDoolittle' },
        { link: 'addition', name: 'Addition' }
      ]
    }
  ]
};
