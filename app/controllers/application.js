import Controller from '@ember/controller';

export default class ApplicationController extends Controller {
  get test() {
    const test = {
      items: [],
    };
    [1, 2].forEach((i) => {
      test.items.push(i);
    });
    return String(test.items?.[0]);
  }
}
