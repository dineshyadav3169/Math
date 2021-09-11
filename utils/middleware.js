import Cors from 'cors';

const cors = Cors({
  origin: 'https://localhost:3000',
  methods: ['POST']
});

export default function runMiddleware(req, res) {
  return new Promise((resolve, reject) => {
    cors(req, res, (result) => {
      if (result instanceof Error) {
        console.log('reject');
        return reject(result);
      }
      console.log('pass');
      return resolve(result);
    });
  });
}
