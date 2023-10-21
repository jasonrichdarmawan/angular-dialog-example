import { NotExistsPipe } from './not-exists.pipe';

describe('NotExistsPipe', () => {
  it('create an instance', () => {
    const pipe = new NotExistsPipe();
    expect(pipe).toBeTruthy();
  });
});
