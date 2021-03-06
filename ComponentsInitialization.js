define(function (require) {
    return function (GEPPETTO) {
		var ReactDOM = require('react-dom');
		var React = require('react');

        var Router = require('react-router-dom').BrowserRouter;
        var Route = require('react-router-dom').Route;
        var Switch = require('react-router-dom').Switch;

        var MainTemplate = require('./pages/MainTemplate');

        require('./styles/template.less');

		G.enableLocalStorage(false);
		G.setIdleTimeOut(-1);
		
        document.title="Geppetto Extension";
        var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.href = 'http://www.geppetto.org/images/favicon.png';
        document.getElementsByTagName('head')[0].appendChild(link);

		// Create router structure
        ReactDOM.render(
			<Router basename={GEPPETTO_CONFIGURATION.contextPath}>
				<Switch>
					<Route path="/geppetto" component={MainTemplate} exact/>
                    <Route path="/other" component={MainTemplate} />
				</Switch>
			</Router>
			, document.getElementById('mainContainer')
		);
    };
});
