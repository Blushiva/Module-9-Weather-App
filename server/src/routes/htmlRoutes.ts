import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Router } from 'express';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = Router();

// TODO: Define route to serve index.html
router.get('/', (req:any, res:any) => {
  res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
  readFile(fullpath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading file');
        return;
      }
      res.send(data);
    });
  });

export default router;
