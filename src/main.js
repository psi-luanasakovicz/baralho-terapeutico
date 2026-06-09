import './style.css';
import { requireStoreAccess } from './access-gate.js';

requireStoreAccess().then(async (allowed) => {
  if (!allowed) return;

  const { startBaralhoGame } = await import('./script.js');
  startBaralhoGame();
});
