import React from 'react';
import ReactDOM from 'react-dom';

import Paged from '../components/Paged';
import PagedContent from '../components/PagedContent';
import PagedItem from '../components/PagedItem';
import PagedControls from '../components/PagedControls';

class App extends React.Component {

  render() {
    let pagedItems = [];
    for (let i = 1; i <=45 ; i++) {
      pagedItems.push((
        <PagedItem key={ i }>
          <h3>Content item { i }</h3>
        </PagedItem>
      ));
    }
    return (
      <div>
        <Paged>
          <PagedContent>
            { pagedItems }
          </PagedContent>
          <PagedControls />
        </Paged>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
