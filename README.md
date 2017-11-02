<p align="center">
  <img src="https://github.com/tarelli/bucket/blob/master/geppetto%20logo.png?raw=true" alt="Geppetto logo"/>
</p>

# Geppetto Extension Template

This repository provides a skeleton to develop a Geppetto Extension. Geppetto Extensions allows customising Geppetto Instance. This customization can go from very simple CSS styling to develop your own user interface creating your own GUI components and reusing some existing Geppetto components.

You can find more information about how to enable your extension and/or them in the [Geppetto documentation web page](http://docs.geppetto.org/en/latest/build.html).

The entry point for this example is the ComponentsInitialization file. It creates a brand new interface for Geppetto by initializing its own React application. This react application, using the React Router framework, implements two pages (home and other). These pages (which are created using a template mechanism) can be found in the pages folder while in the components folder we find a component that can be reused from multiple pages within the extension.
