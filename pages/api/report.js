import db from '@/lib/db';
import runMiddleware from '@/utils/middleware';

export default async function reportHandler(req, res) {
  await runMiddleware(req, res);

  const { method, body } = req;

  switch (method) {
    case 'POST':
      try {
        const refs = db.ref('report');
        refs.set(body);

        res.status(200).json(body);
      } catch (e) {
        console.error('Request error', e);
        res.status(500).json({ error: 'Error fetching report' });
      }
      break;
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
