import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { Entry } from 'contentful'

import { ContentfulAction } from '../../contentful/models'
import { Action } from '../models'

export function parseContentfulAction(action: Entry<ContentfulAction>): Action {
  return {
    aboutText: documentToHtmlString(action.fields.aboutText),
    benefits: action.fields.benefits
      ? documentToHtmlString(action.fields.benefits)
      : undefined,
    examples: action.fields.examples
      ? documentToHtmlString(action.fields.examples)
      : undefined,
    heroImageUrl: action.fields.heroImage.fields.file.url,
    iconUrl: action.fields.badge.fields.file.url,
    id: action.fields.actionId,
    tags: action.fields.tags?.map((t) => t.fields.name || '') || [],
    title: action.fields.title,
  }
}
