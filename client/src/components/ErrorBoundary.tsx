import React, { Component } from 'react'

type Props = any

type State = {
  hasError: boolean
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidCatch(error, info) {
    console.log({ error })
    // Display fallback UI
    this.setState({ hasError: true })
    // You can also log the error to an error reporting service
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <main>
          <h1>Something went wrong.</h1>
        </main>
      )
    }

    return this.props.children
  }
}
