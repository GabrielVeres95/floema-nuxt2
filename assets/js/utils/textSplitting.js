/* eslint-disable no-unused-vars */
import SplitType from 'split-type'
import $ from 'jquery'

export function splitLines() {
  const text = new SplitType('#split-lines', { types: 'lines', tagName: 'span' })
  $(".line").wrap("<div class='line-mask'></div>");
}

export function splitWords() {
  const text = new SplitType('#split-words', { types: 'words' })
}

export function splitChars() {
  const text = new SplitType('#split-chars', { types: 'chars' })
}

export function splitLinesWords() {
  const text = new SplitType('#split-lines-words', { types: 'lines, words' })
}

export function splitAll() {
  const text = new SplitType('#split-all')
}