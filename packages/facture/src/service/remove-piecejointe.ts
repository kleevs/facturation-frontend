import type { remove } from 'lib/src/main'

type Deps = {
  remove: typeof remove;
}

export default ({remove}: Deps) => 
function removePieceJointe(factureId: number, filename: string): Promise<void> {
  return remove(`/api/facturation/${factureId}/piecejointe/${filename}`);
}