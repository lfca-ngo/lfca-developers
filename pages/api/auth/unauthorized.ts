import type { NextApiRequest, NextApiResponse } from 'next'

import { Error } from '../../../services/internal/models'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Error>
) {
  res.status(401).json({ code: 401, message: 'Unauthorized' })
}
