
  class HelloWorld extends React.Component {
    render() {
      // Tells React what HTML code to render
      return <h1>Hello World</h1>
    }
  }
  
  // Tells React to attach the HelloWorld component to the 'root' HTML div
  ReactDOM.render(<HelloWorld />, document.getElementById("root"))