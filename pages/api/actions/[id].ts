import type { NextApiRequest, NextApiResponse } from 'next'

import { fetchActionById } from '../../../services/contentful'
import { Action, Error } from '../../../services/internal/models'
import { parseContentfulAction } from '../../../services/internal/utils'

/**
 *  @swagger
 *  /actions/{id}:
 *    get:
 *      operationId: get-action
 *      tags: [Actions]
 *      summary: Get Action
 *      parameters:
 *        - description: The `id` of an Action
 *          in: path
 *          name: id
 *          required: true
 *          schema:
 *            type: string
 *      responses:
 *        200:
 *          description: |-
 *            Get a single action using an `id`
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                $ref: '#/components/schemas/Action'
 *        401:
 *          $ref: '#/components/responses/Unauthorized'
 *        404:
 *          $ref: '#/components/responses/NotFound'
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Action | Error>
) {
  const { id } = req.query
  if (!id || typeof id !== 'string') {
    return res
      .status(400)
      .json({ code: 400, message: '"id" missing or invalid' })
  }

  try {
    const action = await fetchActionById(id)

    if (!action) {
      return res.status(400).json({ code: 404, message: 'Action not found' })
    }

    res.status(200).json(parseContentfulAction(action))
  } catch (e) {
    res.status(500).json({ code: 500, message: 'Internal Server Error' })
  }
}
