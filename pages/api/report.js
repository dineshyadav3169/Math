import prisma from '@/lib/prisma';

export default async function reportHandler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const report = await prisma.report.create({
          id: 122,
          createdAt: new Date().toISOString(),
          description: 'this is a test',
          question: 'question test',
          questionSlug: '/matrix/addition'
        });
        const reports = await prisma.report;
        res.status(200).json(reports);
      } catch (e) {
        console.error('Request error', e);
        res.status(500).json({ error: 'Error fetching report' });
      }
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
