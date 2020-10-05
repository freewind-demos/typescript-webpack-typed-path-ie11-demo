import {typedPath} from 'typed-path';

type State = {
  aaa?: {
    bbb? : string
  }
}

const path = typedPath<State>().aaa?.bbb?.$path;
