import React from 'react'
import PropTypes from 'prop-types'

class ErrorBoundary extends React.Component {
  state = { error: null, errorInfo: null }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    })
  }

  render() {
    const { children } = this.props
    const { errorInfo, error } = this.state
    if (errorInfo) {
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {error && error.toString()}
            <br />
            {errorInfo.componentStack}
          </details>
        </div>
      )
    }

    return children
  }
}
ErrorBoundary.prototype = {
  children: PropTypes.element,
}
export default ErrorBoundary
