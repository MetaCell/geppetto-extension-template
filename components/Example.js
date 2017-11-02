define(function (require) {

    var React = require('react');


    return class Example extends React.Component {

        constructor(props) {
            super(props);
            this.state = {

            };
        }

        componentDidMount() {
            this.getPeople();
        }

        getPeople() {
            var people = [
                {"name": "Matteo2", "surname": "Cantarelli", "occupation": "Philisopher"},
                {"name": "Adrian", "surname": "Quintana", "occupation": "Guru"},
                {"name": "Giovanni", "surname": "Idilli", "occupation": "The Boss"},
            ]
            this.setState({people: people})
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