import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import List from './List';

describe('<List />', () => {
  const cardsArray = [
    {0: {id: "a", title: "First card", content: "lorem ipsum"}},
    {1: {id: "b", title: "Second card", content: "lorem ipsum"}},
    {2: {id: "e", title: "Fifth card", content: "lorem ipsum"}},
    {3: {id: "f", title: "Sixth card", content: "lorem ipsum"}},
    {4: {id: "g", title: "Seventh card", content: "lorem ipsum"}},
  ];
  console.log(cardsArray);
  
  it('renders without crashing', () => {
        // Create a DOM element to render the component into
        const div = document.createElement('div');

        // Render the component
        // If something is wrong it will fail here
        ReactDOM.render(<List key="1" header="First list" cards={cardsArray} />, div);

        // Clean up
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders this UI as expected', () => {
      // Render the component, as JSON
      const tree = renderer.create(<List key="1" header="First list" cards={cardsArray} />).toJSON();
      // Check whether it matches the previous snapshot
      // Stored in __snapshots__/App.test.js.snap
      expect(tree).toMatchSnapshot(); 
    });
});