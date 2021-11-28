import React from 'react';
import { HybridHighlighter, HybridHighlighterProps } from '../hybrid-highligher';

export type HoverHighlighterProps = Omit<HybridHighlighterProps, 'mode'>;

export function HoverHighlighter({ ...props }: HoverHighlighterProps) {
  return <HybridHighlighter {...props} mode={'hover'} />;
}
