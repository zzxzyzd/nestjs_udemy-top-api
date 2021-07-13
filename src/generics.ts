function logTime<T>(num: T): T {
  console.log(new Date());
  return num;
}

logTime<number>(5);

type Point = { x: number; y: number };
type P = keyof Point;

function MyF() {
  return { a: 1 };
}
type K = ReturnType<typeof MyF>;
const a: K = { a: 2 };

type MessageOf<T> = T extends { message: unknown } ? T['message'] : never;
