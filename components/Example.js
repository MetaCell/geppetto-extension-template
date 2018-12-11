define(function (require) {

    var React = require('react');


    return class Example extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                people: [],
            };
        }

        componentDidMount() {
            fetch("/api/people")
                .then((response) => response.json())
                .then((responseJson) => {
                    this.setState({people : responseJson});
                });
        }

        render() {
            if (typeof this.state.people !== 'undefined') {
                const persons = this.state.people.map((person, i) => (
                    <div>
                        <h3>{person.name}</h3>
                        <span>{person.surname}, {person.occupation}</span>
                    </div>
                ));



                return (
                    <div>
                        Example items:
                    {persons}
                    </div>
                )
            }
            return null;
        }
    };
});