import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error('UI error', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center p-8 bg-surface text-text">
          <div className="text-6xl mb-4">☕</div>
          <h1 className="font-display text-3xl mb-2">Une erreur est survenue</h1>
          <p className="font-ui text-sm text-muted mb-6 max-w-md">
            Une perturbation inattendue. Notre équipe a été notifiée. Veuillez réessayer.
          </p>
          <button
            onClick={() => { this.setState({ hasError: false }); window.location.href = '/'; }}
            className="btn-primary"
          >
            Retour à l'accueil
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
