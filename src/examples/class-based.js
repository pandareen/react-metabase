import React, { Component } from 'react'
import { createPortal } from 'react-dom'

export class ClassBasedIFrameComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mountNode: null
    }
    this.setContentRef = (contentRef) => {
      this.setState({
        mountNode: contentRef?.contentWindow?.document?.body
      })
    }
  }

  render() {
    const { children, title, ...props } = this.props
    const { mountNode } = this.state
    return (
      <iframe
        title={title}
        {...props}
        ref={this.setContentRef}
      >
        {mountNode && createPortal(children, mountNode)}
      </iframe>
    )
  }
}
