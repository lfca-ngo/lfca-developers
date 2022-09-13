import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import type { NextApiRequest, NextApiResponse } from 'next'

import { fetchAllActions } from '../../services/contentful'
import { Action } from '../../services/internal/models/action'

/**
 *  @swagger
 *  /actions:
 *    get:
 *      operationId: actions
 *      tags: [actions]
 *      summary: List all actions
 *      responses:
 *        200:
 *          description: Actions
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  type: object
 *                  $ref: '#/components/schemas/Action'
 *        403:
 *          $ref: '#/components/responses/Unauthorized'
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Action[] | { error: string }>
) {
  const actions = await fetchAllActions()

  const result: Action[] = actions.items.map((a) => ({
    aboutText: documentToHtmlString(a.fields.aboutText),
    benefits: a.fields.benefits
      ? documentToHtmlString(a.fields.benefits)
      : undefined,
    examples: a.fields.examples
      ? documentToHtmlString(a.fields.examples)
      : undefined,
    heroImageUrl: a.fields.heroImage.fields.file.url,
    iconUrl: a.fields.badge.fields.file.url,
    id: a.fields.actionId,
    tags: a.fields.tags?.map((t) => t.fields.name || '') || [],
    title: a.fields.title,
  }))

  // res.status(500).json({ error: 'failed to load data' })

  res.status(200).json(result)
}
