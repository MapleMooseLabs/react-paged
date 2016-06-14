import React from 'react';
import ReactDOM from 'react-dom';

import Paged from '../components/Paged';
import PagedContent from '../components/PagedContent';

class App extends React.Component {

  render() {
    let data = [];
    for (let i = 1; i <=45 ; i++) {
      data.push((
        <h3>Content item { i }</h3>
      ));
    }
    return (
      <div>
        <Paged showControls>
            {
              data.map((item, index) => {
                return (
                  <PagedContent key={ index }>
                    { item }
                  </PagedContent>
                );
              })
            }

        </Paged>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
