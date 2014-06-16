/** @jsx React.DOM */

requirejs.config({
    baseUrl:'static/js/',
    paths: {
        react: 'third_party/react-with-addons-0.10.0',
    },
});

var dependencies = [
    'react',
];

require(dependencies, function(React) {
	var IndexPage = React.createClass({
		render: function() {
			return <h1>Hello World</h1>;
		}
	});

	React.renderComponent(
        <IndexPage />,
        document.getElementById('content')
    );
});