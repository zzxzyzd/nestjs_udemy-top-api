import * as testJson from './interface_test.json';
import { createInterface } from 'readline';

const interface_test = testJson;

function consoleTest(test: ITest) {
  console.log(test);
}

interface IInfo {
  desc: string;
  isActive: boolean;
}

interface ITags {
  name: string;
  value: number;
}

interface ITest {
  userId: number;
  id: number;
  title: string;
  info: IInfo;
  tags: ITags;
}
