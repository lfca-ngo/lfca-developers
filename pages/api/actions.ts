import type { NextApiRequest, NextApiResponse } from 'next'

import ACTIONS from '../../data/actions.json'
import { Action } from '../../models/action'

/**
 * @swagger
 * /api/actions:
 *   get:
 *     operationId: actions
 *     tags: [Action]
 *     responses:
 *       200:
 *         description: Action
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 $ref: '#/components/schemas/Action'
 */
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Action[]>
) {
  const result: Action[] = ACTIONS.map((a) => ({
    id: a.id,
    title: a.title,
  }))

  res.status(200).json(result)
}
