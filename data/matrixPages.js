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
  detailTitle: '',
  detail: [
    {
      id: 'f0',
      detail: 'l_(21)=[[1,2],[3,4]]'
    },
    {
      id: 'f1',
      detail: 'L(U) = P(B)'
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
  detailTitle: '',
  detail: [
    {
      id: 'f0',
      detail: 'l_(21)=[[1,2],[3,4]]'
    },
    {
      id: 'f1',
      detail: 'L(U) = P(B)'
    }
  ]
};

export const ADDITION = {
  pageTitle: 'Matrix Addition Calculator',
  pageDescription: 'Matrix Addition',
  heading: "Matrix Addition Calculator",
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
      value: '',
      question: "Q.1 **A=[[1,2],[3,4]] B=[[9,8],[7,6]]**"
    },
    {
      id: 'q1',
      value: '',
      question: "Q.2 **A=[[1,2,3],[4,5,6],[7,8,9]] B=[[9,9,8],[8,7,6],[5,4,4]]**"
    }
  ],
  detailTitle: 'Addition of matrices',
  detail: [
    {
      id: 'f0',
      detail: 'A=[[a_11,a_12,a_13],[a_21,a_22,a_23]], B=[[b_11,b_12,b_13],[b_21,b_22,b_23]]'
    },
    {
      id: 'f1',
      detail: 'A + B = [[a_11,a_12,a_13],[a_21,a_22,a_23]]+[[b_11,b_12,b_13],[b_21,b_22,b_23]]'
    },
    {
      id: 'f2',
      detail: '= [[a_11+b_11,a_12+b_12,a_13+b_13],[a_21+b_21,a_22+b_22,a_23+b_23]]'
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
  detailTitle: 'Substraction of matrices',
  detail: [
    {
      id: 'f0',
      detail: 'A=[[a_11,a_12,a_13],[a_21,a_22,a_23]], B=[[b_11,b_12,b_13],[b_21,b_22,b_23]]'
    },
    {
      id: 'f1',
      detail: 'A + B = [[a_11,a_12,a_13],[a_21,a_22,a_23]]-[[b_11,b_12,b_13],[b_21,b_22,b_23]]'
    },
    {
      id: 'f2',
      detail: '= [[a_11-b_11,a_12-b_12,a_13-b_13],[a_21-b_21,a_22-b_22,a_23-b_23]]'
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
  detailTitle: '',
  detail: [
    {
      id: 'f0',
      detail: 'l_(21)=[[1,2],[3,4]]'
    },
    {
      id: 'f1',
      detail: 'L(U) = P(B)'
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
  detailTitle: '',
  detail: [
    {
      id: 'f0',
      detail: 'l_(21)=[[1,2],[3,4]]'
    },
    {
      id: 'f1',
      detail: 'L(U) = P(B)'
    }
  ]
};
