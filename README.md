Paged
===


Add simple paging in React.

## Installation

NPM installation coming soon.

## Usage
The component actually consists of 4 components.
- `Paged` - a wrapper for the other components
- `PagedContent` - the content that is to have paging applied to it (this component will probably disappear at some point. It's really not necessary)
- `PagedItem` - a single item within `PagedContent`
- `PagedControls` - adds controls for the pager

## Example

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

import { Paged, PagedContent, PagedItem, PagedControls } from 'react-paged';

class App extends React.Component {

  render() {
    /* this just generates some random items to display as an example */
    let pagedItems = [];
    for (let i = 1; i <=45 ; i++) {
      pagedItems.push((
        <PagedItem key={ i }>
          <div>Item { i }</div>
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
```
