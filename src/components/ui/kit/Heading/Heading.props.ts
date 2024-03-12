import { type ElementType } from 'react';

export type HeadingElementType = Extract<ElementType, `h${number}`>;

export interface HeadingProps {
  as: HeadingElementType;
}
