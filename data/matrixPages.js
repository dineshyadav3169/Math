const mainSlideNavData =  [
  { link: 'addition', name: 'Addition' },
  { link: 'subtraction', name: 'Substraction' },
  { link: 'adjoint', name: 'Adjoint' },
  { link: 'determinant', name: 'Determinant' },
  { link: 'lu-decomposition-crout', name: 'LuCrout' },
  { link: 'lu-decomposition-doolittle', name: 'LuDoolittle' },
];

export const LUCROUT = {
  pageTitle: 'LU decomposition Crout luCrout',
  pageDescription: 'LU decomposition Crout luCrout',
  heading: "LU decomposition using Crout's method",
  currentPage: 'lu-decomposition-crout',
  subDirectory: 'matrix',
  slideData: [
    {
      index: 0,
      slideNavTitle: 'Matrix',
      slideNavData: mainSlideNavData
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
    },
    {
      id: 'q2',
      value: '2x+y+z=5\n3x+5y+2z=15\n2x+y+4z=8',
      question: "Q.2 2x+y+z=5 3x+5y+2z=15 2x+y+4z=8"
    },
    
  ],
  formula: [
    {
      id: 'f0',
      formula: 'l_(21)=[[1,2],[3,4]]'
    },
    {
      id: 'f1',
      formula: 'L(U) = P(B)'
    }
  ]
};

export const LUDOOLITTLE = {
  pageTitle: 'LU decomposition Doolittle luCrout',
  pageDescription: 'LU decomposition Doolittle luCrout',
  heading: "LU decomposition using Doolittle's method",
  subDirectory: 'matrix',
  currentPage: 'lu-decomposition-doolittle',
  slideData: [
    {
      index: 0,
      slideNavTitle: 'Matrix',
      slideNavData: mainSlideNavData
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
    },
    {
      id: 'q2',
      value: '2x+y+z=5\n3x+5y+2z=15\n2x+y+4z=8',
      question: "Q.2 2x+y+z=5 3x+5y+2z=15 2x+y+4z=8"
    }
  ],
  formula: [
    {
      id: 'f0',
      formula: 'l_(21)=[[1,2],[3,4]]'
    },
    {
      id: 'f1',
      formula: 'L(U) = P(B)'
    }
  ]
};

export const ADDITION = {
  pageTitle: 'Matrix Addition',
  pageDescription: 'Matrix Addition',
  heading: "Matrix Addition method",
  subDirectory: 'matrix',
  currentPage: 'addition',
  slideData: [
    {
      index: 0,
      slideNavTitle: 'Matrix',
      slideNavData: mainSlideNavData
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
    },
    {
      id: 'q2',
      value: '2x+y+z=5\n3x+5y+2z=15\n2x+y+4z=8',
      question: "Q.2 2x+y+z=5 3x+5y+2z=15 2x+y+4z=8"
    }
  ],
  formula: [
    {
      id: 'f0',
      formula: 'l_(21)=[[1,2],[3,4]]'
    },
    {
      id: 'f1',
      formula: 'L(U) = P(B)'
    }
  ]
};

export const SUBTRACTION = {
  pageTitle: 'Matrix Subtraction',
  pageDescription: 'Matrix Subtraction',
  heading: "Matrix Subtraction method",
  subDirectory: 'matrix',
  currentPage: 'subtraction',
  slideData: [
    {
      index: 0,
      slideNavTitle: 'Matrix',
      slideNavData: mainSlideNavData
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
    },
    {
      id: 'q2',
      value: '2x+y+z=5\n3x+5y+2z=15\n2x+y+4z=8',
      question: "Q.2 2x+y+z=5 3x+5y+2z=15 2x+y+4z=8"
    }
  ],
  formula: [
    {
      id: 'f0',
      formula: 'l_(21)=[[1,2],[3,4]]'
    },
    {
      id: 'f1',
      formula: 'L(U) = P(B)'
    }
  ]
};

export const ADJOINT = {
  pageTitle: 'Matrix Adjoint',
  pageDescription: 'Matrix Adjoint',
  heading: "Matrix Adjoint method",
  subDirectory: 'matrix',
  currentPage: 'adjoint',
  slideData: [
    {
      index: 0,
      slideNavTitle: 'Matrix',
      slideNavData: mainSlideNavData
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
    },
    {
      id: 'q2',
      value: '2x+y+z=5\n3x+5y+2z=15\n2x+y+4z=8',
      question: "Q.2 2x+y+z=5 3x+5y+2z=15 2x+y+4z=8"
    }
  ],
  formula: [
    {
      id: 'f0',
      formula: 'l_(21)=[[1,2],[3,4]]'
    },
    {
      id: 'f1',
      formula: 'L(U) = P(B)'
    }
  ]
};

export const DETERMINANT = {
  pageTitle: 'Matrix Determinant',
  pageDescription: 'Matrix Determinant',
  heading: "Matrix Determinant method",
  subDirectory: 'matrix',
  currentPage: 'determinant',
  slideData: [
    {
      index: 0,
      slideNavTitle: 'Matrix',
      slideNavData: mainSlideNavData
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
    },
    {
      id: 'q2',
      value: '2x+y+z=5\n3x+5y+2z=15\n2x+y+4z=8',
      question: "Q.2 2x+y+z=5 3x+5y+2z=15 2x+y+4z=8"
    }
  ],
  formula: [
    {
      id: 'f0',
      formula: 'l_(21)=[[1,2],[3,4]]'
    },
    {
      id: 'f1',
      formula: 'L(U) = P(B)'
    }
  ]
};
