import React from 'react';
import ReactDOM from 'react-dom';

import Paged from '../components/Paged';

class App extends React.Component {

  render() {
    return (
      <div>
        <Paged />
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
