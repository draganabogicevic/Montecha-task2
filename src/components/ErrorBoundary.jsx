import React from "react";
import FallbackUI from "./FallbackUI";

class ErrorBondery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    }
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
   if(this.props.hasError) {
     return <FallbackUI error={this.state.error} />;
   }
   return this.props.children;
  }
}

export default ErrorBondery;