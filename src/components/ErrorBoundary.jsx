import { Component } from "react";

/**
 * Catches client-side render errors (e.g. a bug on one route) so the whole app
 * does not silently fail to a white screen.
 */
export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <div className="mx-auto min-h-screen max-w-2xl px-6 py-20 font-body text-slate-800">
          <h1 className="text-xl font-bold text-slate-900">Something went wrong</h1>
          <p className="mt-2 text-slate-600">
            The page could not be displayed. Try a refresh, or return home and navigate again.
          </p>
          <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-100 p-3 text-left text-sm text-slate-700">
            {String(this.state.error?.message || this.state.error)}
          </pre>
          <p className="mt-4">
            <a href="/" className="font-semibold text-navy underline">
              Go to home
            </a>
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}
