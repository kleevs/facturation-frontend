import type { post } from 'lib'

type Deps = {
  post: typeof post;
}

export default ({post}: Deps) => 
function createPieceJointe(factureId: number, files: unknown[]): Promise<void> {
  return post(`/api/piecejointe`, { id: factureId, documents: files });
}