import currentView from './currentView';
import * as actions from '../../actions';

describe('currentView reducer tests', () => {
  it('Should return store by default', () => {
    const expected = 'List';

    expect(currentView(undefined, {})).toEqual(expected);
  });

  it('Should return a new store with a different currentView', () => {
    const expected = 'Grid';

    expect(currentView(undefined, actions.changePhotosView('Grid'))).toEqual(
      expected
    );
  });
});
