import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import styled, {
  StyleSheetManager
} from 'styled-components'

export const WithStyledComponents = ({
  children,
  styleSelector,
  title,
  ...props
}) => {
  const [contentRef, setContentRef] = useState(null)
  const doc = contentRef?.contentWindow?.document
  const mountNode = doc?.body
  const insertionTarget = doc?.createElement('link')
  if (insertionTarget) {
    doc.head.append(insertionTarget)
  }

  return (
    <iframe title={title} {...props} ref={setContentRef}>
      {mountNode &&
        createPortal(
          <StyleSheetManager target={insertionTarget}>
            {children}
          </StyleSheetManager>,
          mountNode
        )}
    </iframe>
  )
}

export const StyledTitle = styled.h3`
  font-family: sans-serif;
  font-weight: 300;
  font-size: 2.5em;
  color: darkgray;
`
