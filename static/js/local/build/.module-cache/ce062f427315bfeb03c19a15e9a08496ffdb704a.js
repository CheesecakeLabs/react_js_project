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
	var IndexPage = React.createClass({displayName: 'IndexPage',
		render: function() {
			return React.DOM.h1(null, "Hello World");
		}
	});

	React.renderComponent(
        IndexPage(null ),
        document.getElementById('content')
    );
});