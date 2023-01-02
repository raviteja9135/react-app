/* eslint-disable */
import Search from './Search';

export default {
  title: "Search",
};

function someText() {
  console.log('test search');
}

export const Default = () => <Search someText={someText} />;

Default.story = {
  name: 'default',
};
