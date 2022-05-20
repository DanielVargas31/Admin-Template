import { CustomFilterPipe } from "../custom-filter.pipe";

describe('CustomFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new CustomFilterPipe();
    expect(pipe).toBeTruthy();
  });

  it('is empty', () => {
    const pipe = new CustomFilterPipe();
    expect(pipe.transform(null, 'test', 'value')).toEqual([]);
  });

  it('filtered', () => {
    const pipe = new CustomFilterPipe();
    expect(pipe.transform([{ key: 0, value: 'Test0' }, { key: 1, value: 'Test1' }], 'value', 'Test1')).toEqual([{ key: 1, value: 'Test1' }]);
  });
});