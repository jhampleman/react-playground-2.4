import React from 'react';
import FunctionComponent from "./FunctionComponent";

class Page2 extends React.Component {
render() {
    return(	
	<>
	<h4>This only shows on Page 2.  And comes from a Component called Page2 (see Page2.js)</h4>
	<a href="/">Go to Page 1 (React Router)</a>
	<br /><br />
	<FunctionComponent />
	<br /><br />
	<strong>What's Missing? ToDo List:</strong>
	<ol>
	<li>TBD</li>
	</ol>
	</>
)
}
};

export default Page2;
