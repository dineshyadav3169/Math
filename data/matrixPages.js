const mainSlideNavData = [
  { link: 'addition', name: 'Addition Calculator' },
  { link: 'subtraction', name: 'Substraction Calculator' },
  { link: 'adjoint', name: 'Adjoint Calculator' },
  { link: 'determinant', name: 'Determinant Calculator' },
  { link: 'lu-decomposition-crout', name: 'LuCrout Calculator' },
  { link: 'lu-decomposition-doolittle', name: 'LuDoolittle Calculator' }
];

export const LUCROUT = {
  pageTitle: "Online LU decomposition Calculator using Crout's method",
  pageDescription:
    "Calculate systems of linear equations using LU decomposition Crout's method with step by step instructions",
  heading:
    "Calculate systems of linear equations using LU decomposition Crout's method",
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
      question: 'Q.1 2x+5y=16, 3x+4y=11'
    },
    {
      id: 'q1',
      value: '9x+9y=16\n3x+y=11',
      question: 'Q.2 9x+9y=16, 3x+y=11'
    },
    {
      id: 'q2',
      value: '2x+y+z=5\n3x+5y+2z=15\n2x+y+4z=8',
      question: 'Q.2 2x+y+z=5 3x+5y+2z=15 2x+y+4z=8'
    }
  ],
  
  detail: [
    {
      key: 'f0',
      detailTitle: "How to Calculate LU decomposition using Crout's method",
      data: [
        {
          id: 'f0',
          detail: 'Step 1: Enter Equations in the form of 2x+5y=16, 3x+4y=11'
        },
        {
          id: 'f1',
          detail:
            'Step 2: Click on the Solve button to calculate the LU decomposition'
        },
        {
          id: 'f2',
          detail: "Step 3: Click on the Solution's Tab to see the answer"
        }
      ]
    }
  ]
};

export const LUDOOLITTLE = {
  pageTitle: "Online LU decomposition Calculator using Doolittle's method",
  pageDescription:
    "Calculate systems of linear equations using LU decomposition Doolittle's method with step by step instructions",
  heading:
    "Calculate systems of linear equations using LU decomposition Doolittle's method",
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
      question: 'Q.1 2x+5y=16, 3x+4y=11'
    },
    {
      id: 'q1',
      value: '9x+9y=16\n3x+y=11',
      question: 'Q.2 9x+9y=16, 3x+y=11'
    },
    {
      id: 'q2',
      value: '2x+y+z=5\n3x+5y+2z=15\n2x+y+4z=8',
      question: 'Q.2 2x+y+z=5 3x+5y+2z=15 2x+y+4z=8'
    }
  ],
  detail: [
    {
      key: 'f0',
      detailTitle: "How to Calculate LU decomposition using Doolittle's method",
      data: [
        {
          id: 'f0',
          detail: 'Step 1: Enter Equations in the form of 2x+5y=16, 3x+4y=11'
        },
        {
          id: 'f1',
          detail:
            'Step 2: Click on the Solve button to calculate the LU decomposition'
        },
        {
          id: 'f2',
          detail: "Step 3: Click on the Solution's Tab to see the answer"
        }
      ]
    }
  ]
};

export const ADDITION = {
  pageTitle: 'Online Matrix Addition Calculator',
  pageDescription:
    'Online Matrix Calculator to add two matrices with step by step instructions',
  heading: 'Calculate the sum of two matrices',
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
      question: 'Q.1 **A=[[1,2],[3,4]] B=[[9,8],[7,6]]**'
    },
    {
      id: 'q1',
      value: '',
      question:
        'Q.2 **A=[[1,2,3],[4,5,6],[7,8,9]] B=[[9,9,8],[8,7,6],[5,4,4]]**'
    }
  ],
  detail: [
    {
      key: 'f0',
      detailTitle: 'Addition of matrices Formula',
      data: [
        {
          id: 'f0',
          detail:
            'A=**[[a_11,a_12,a_13],[a_21,a_22,a_23]], B=[[b_11,b_12,b_13],[b_21,b_22,b_23]]**'
        },
        {
          id: 'f1',
          detail:
            'A + B = **[[a_11,a_12,a_13],[a_21,a_22,a_23]]+[[b_11,b_12,b_13],[b_21,b_22,b_23]]**'
        },
        {
          id: 'f2',
          detail:
            '**= [[a_11+b_11,a_12+b_12,a_13+b_13],[a_21+b_21,a_22+b_22,a_23+b_23]]**'
        }
      ]
    },
    {
      key: 'f1',
      detailTitle: "How to Calculate Matrix Addition",
      data: [
        {
          id: 'f0',
          detail: 'Step 1: Enter matrix A and B in the form of **[[1,2],[3,4]]** or **[[1,2,3],[4,5,6],[7,8,9]]**'
        },
        {
          id: 'f1',
          detail:
            'Step 2: Click on the Solve button to calculate the sum of the matrices'
        },
        {
          id: 'f2',
          detail: "Step 3: Click on the Solution's Tab to see the answer"
        }
      ]
    }
  ]
};

export const SUBTRACTION = {
  pageTitle: 'Online Matrix Subtraction Calculator',
  pageDescription: 'Online Matrix Calculator to subtract two matrices with step by step instructions',
  heading: 'Calculate the difference of two matrices',
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
      question: 'Q.1 2x+5y=16, 3x+4y=11'
    },
    {
      id: 'q1',
      value: '9x+9y=16\n3x+y=11',
      question: 'Q.2 9x+9y=16, 3x+y=11'
    },
    {
      id: 'q2',
      value: '2x+y+z=5\n3x+5y+2z=15\n2x+y+4z=8',
      question: 'Q.2 2x+y+z=5 3x+5y+2z=15 2x+y+4z=8'
    }
  ],
  detail: [
    {
      key: 'f0',
      detailTitle: 'Substraction of matrices',
      data: [
        {
          id: 'f0',
          detail:
            'A=**[[a_11,a_12,a_13],[a_21,a_22,a_23]], B=[[b_11,b_12,b_13],[b_21,b_22,b_23]]**'
        },
        {
          id: 'f1',
          detail:
            'A + B = **[[a_11,a_12,a_13],[a_21,a_22,a_23]]-[[b_11,b_12,b_13],[b_21,b_22,b_23]]**'
        },
        {
          id: 'f2',
          detail:
            '= **[[a_11-b_11,a_12-b_12,a_13-b_13],[a_21-b_21,a_22-b_22,a_23-b_23]]**'
        }
      ]
    }
  ]
};

export const ADJOINT = {
  pageTitle: 'Online Adjoint Matrix Calculator',
  pageDescription: 'Online Matrix Calculator to find the adjoint of a matrix with step by step instructions',
  heading: 'Calculate the Adjoint of a matrix',
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
      question: 'Q.1 2x+5y=16, 3x+4y=11'
    },
    {
      id: 'q1',
      value: '9x+9y=16\n3x+y=11',
      question: 'Q.2 9x+9y=16, 3x+y=11'
    },
    {
      id: 'q2',
      value: '2x+y+z=5\n3x+5y+2z=15\n2x+y+4z=8',
      question: 'Q.2 2x+y+z=5 3x+5y+2z=15 2x+y+4z=8'
    }
  ],
  detail: [
    {
      key: 'f0',
      detailTitle: 'How to Calculate Matrix Adjoint',
      data: [
        {
          id: 'f0',
          detail: 'Step 1: Enter matrix A in the form of **[[1,2],[3,4]]** or **[[1,2,3],[4,5,6],[7,8,9]]**'
        },
        {
          id: 'f1',
          detail: 'Step 2: Click on the Solve button to calculate the Adjoint of the matrix'
        },
        {
          id: 'f2',
          detail: "Step 3: Click on the Solution's Tab to see the answer"
        }
      ]
    }]
};

export const DETERMINANT = {
  pageTitle: 'Online Determinant Matrix Calculator',
  pageDescription: 'Online Matrix Calculator to find the determinant of a matrix with step by step instructions',
  heading: 'Calculate the Determinant of a matrix',
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
      question: 'Q.1 2x+5y=16, 3x+4y=11'
    },
    {
      id: 'q1',
      value: '9x+9y=16\n3x+y=11',
      question: 'Q.2 9x+9y=16, 3x+y=11'
    },
    {
      id: 'q2',
      value: '2x+y+z=5\n3x+5y+2z=15\n2x+y+4z=8',
      question: 'Q.2 2x+y+z=5 3x+5y+2z=15 2x+y+4z=8'
    }
  ],
  detail: [
    {
      key: 'f0',
      detailTitle: 'How to Calculate Matrix Determinant',
      data: [
        {
          id: 'f0',
          detail: 'Step 1: Enter matrix A in the form of **[[1,2],[3,4]]** or **[[1,2,3],[4,5,6],[7,8,9]]**'
        },
        {
          id: 'f1',
          detail: 'Step 2: Click on the Solve button to calculate the Determinant of the matrix'
        },
        {
          id: 'f2',
          detail: "Step 3: Click on the Solution's Tab to see the answer"
        }
      ]
    }
  ]
};
