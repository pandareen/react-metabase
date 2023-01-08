import React from 'react'
import { FunctionalIFrameComponent } from './examples/functional'
import { ClassBasedIFrameComponent } from './examples/class-based'
import { WithClonedStyles } from './examples/with-cloned-styles'
import {
  WithStyledComponents,
  StyledTitle
} from './examples/with-styled-components'
import {
  WithEmotion,
  EmotionalTitle
} from './examples/with-emotion'
import {
  WithMaterialUI,
  MaterialButton
} from './examples/with-material-ui'

import './styles.css'

export function App() {
  return (
    <div className="app">
      <h1>
        Examples: Controlled <code>{'<iframe>'}</code>{' '}
        content with React
      </h1>
      <p>
        For more context, see{' '}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://stackoverflow.com/questions/34743264/how-to-set-iframe-content-of-a-react-component"
        >
          this question on Stackoverflow
        </a>
        .
      </p>
      <figure>
        <figcaption>
          Functional <code>{'<iframe>'}</code> component
        </figcaption>
        <FunctionalIFrameComponent title="functional-iframe">
          <h3>Lorem ipsum</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
        </FunctionalIFrameComponent>
      </figure>
      <figure>
        <figcaption>
          Class-based <code>{'<iframe>'}</code> component
        </figcaption>
        <ClassBasedIFrameComponent title="class-based-iframe">
          <h3>Etiam ipsum mi!</h3>
          <p>
            Etiam ipsum mi, mattis cursus vehicula eu,
            posuere in velit.
          </p>
        </ClassBasedIFrameComponent>
      </figure>
      <figure>
        <figcaption>
          With cloned <code>{'<link>'}</code> refs from
          parent document
        </figcaption>
        <link
          data-frame
          type="text/css"
          rel="stylesheet"
          href="./external.css"
        />
        <WithClonedStyles
          title="with-cloned-styles"
          styleSelector="link[data-frame]"
        >
          <p className="external">
            secure-box:/ guest$ ../
          </p>
        </WithClonedStyles>
      </figure>
      <figure>
        <figcaption>With styled-components</figcaption>
        <WithStyledComponents title="with-styled-components">
          <StyledTitle>
            A stylish framed component!
          </StyledTitle>
        </WithStyledComponents>
      </figure>
      <figure>
        <figcaption>With emotion</figcaption>
        <WithEmotion title="with-emotion">
          <EmotionalTitle>
            An emotional framed component!
          </EmotionalTitle>
        </WithEmotion>
      </figure>
      <figure>
        <figcaption>With material-ui/JSS</figcaption>
        <WithMaterialUI title="with-material-ui">
          <MaterialButton>
            I'm a material button!
          </MaterialButton>
        </WithMaterialUI>
      </figure>
    </div>
  )
}
