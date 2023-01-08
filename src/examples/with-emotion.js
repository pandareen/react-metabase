/** @jsxImportSource @emotion/react */
import { useState } from 'react'
import { createPortal } from 'react-dom'
import { CacheProvider, css } from '@emotion/react'
import createCache from '@emotion/cache'
import weakMemoize from '@emotion/weak-memoize'

const memoizedCreateCacheWithContainer = weakMemoize(
  (container) => {
    const newCache = createCache({
      container,
      key: 'with-emotion'
    })
    return newCache
  }
)

export const WithEmotion = ({
  children,
  styleSelector,
  title,
  ...props
}) => {
  const [contentRef, setContentRef] = useState(null)
  const doc = contentRef?.contentWindow?.document
  const mountNode = doc?.body
  const insertionTarget = doc?.head

  return (
    <iframe title={title} {...props} ref={setContentRef}>
      {mountNode &&
        insertionTarget &&
        createPortal(
          <CacheProvider
            value={memoizedCreateCacheWithContainer(
              insertionTarget
            )}
          >
            {children}
          </CacheProvider>,
          mountNode
        )}
    </iframe>
  )
}

export const EmotionalTitle = ({ children }) => (
  <h3
    css={css`
      font-family: serif;
      font-weight: 600;
      font-size: 2.5em;
      color: darkorchid;
      letter-spacing: -2;
      text-transform: capitalize;
    `}
  >
    {children}
  </h3>
)
