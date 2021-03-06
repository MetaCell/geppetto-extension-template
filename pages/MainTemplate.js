define(function (require) {

    var React = require('react');
    var Route = require('react-router-dom').Route;

    var Home = require('./home/Home');
    var Other = require('./other/Other');
    
    var Header = require('./Header');
    var Footer = require('./Footer');

    var mainTemplate = React.createClass({
        render() {
            return (
                <div id="mainContainer">
                    <div id="innerContainer">
                        <Header/>

                        <div id="midContainer">
                            <Route path={'/geppetto'} component={Home} exact/>
                            <Route path={'/other'} component={Other} />
                        </div>
                        
                    </div>

                    <Footer/>
                    
                </div>
            );
        }
    });

    return mainTemplate;
});
