import {typedPath} from 'typed-path';
import 'core-js';

type State = {
  aaa?: {
    bbb?: string
  }
}

const path = typedPath<State>().aaa?.bbb?.$path;

console.log("### path", path);

const main = document.getElementById('main');
if (main) {
  main.innerHTML = path ?? '???';
}
