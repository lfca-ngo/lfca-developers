import type { NextApiRequest, NextApiResponse } from 'next'

import { fetchAllActions } from '../../../services/contentful'
import { Action, Error } from '../../../services/internal/models'
import { parseContentfulAction } from '../../../services/internal/utils'

/**
 *  @swagger
 *  /actions:
 *    get:
 *      operationId: get-actions
 *      tags: [Actions]
 *      summary: List Actions
 *      responses:
 *        200:
 *          description: |-
 *            Returns a list of all actions
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  type: object
 *                  $ref: '#/components/schemas/Action'
 *        401:
 *          $ref: '#/components/responses/Unauthorized'
 */
export default async function handler(
  _: NextApiRequest,
  res: NextApiResponse<Action[] | Error>
) {
  try {
    const actions = await fetchAllActions()

    res.status(200).json(actions.items.map((a) => parseContentfulAction(a)))
  } catch (e) {
    res.status(500).json({ code: 500, message: 'Internal Server Error' })
  }
}
