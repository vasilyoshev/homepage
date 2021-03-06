import { Todo } from 'interfaces';
import { render } from 'utils';
import { TodoListItem } from './TodoListItem';

describe('TodoListItem', () => {
  it('renders successfully', () => {
    const { asFragment } = render(<TodoListItem todo={{} as Todo} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
