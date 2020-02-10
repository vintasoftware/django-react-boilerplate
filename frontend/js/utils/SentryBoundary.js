import * as Sentry from '@sentry/browser';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

const FallbackUI = ({ eventId }) => (
  <>
    <h3>Check if there is an error on your Sentry app</h3>
    <button type="button" onClick={() => Sentry.showReportDialog({ eventId })}>
      Report feedback
    </button>
  </>
);

FallbackUI.propTypes = {
  eventId: PropTypes.string,
};

FallbackUI.defaultProps = {
  eventId: '',
};

class ExampleBoundary extends Component {
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  constructor(props) {
    super(props);
    this.state = { eventId: null };
  }

  componentDidCatch(error, errorInfo) {
    Sentry.withScope((scope) => {
      scope.setExtras(errorInfo);
      const eventId = Sentry.captureException(error);
      this.setState({ eventId });
    });
  }

  render() {
    const { eventId, hasError } = this.state;
    const { children } = this.props;

    // render fallback UI
    if (hasError) {
      return <FallbackUI eventId={eventId} />;
    }

    // when there's not an error, render children untouched
    return children;
  }
}

ExampleBoundary.propTypes = {
  children: PropTypes.node,
};

ExampleBoundary.defaultProps = {
  children: null,
};

export default ExampleBoundary;
