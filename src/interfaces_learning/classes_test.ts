class Point {
  private x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  func() {
    console.log('function');
  }
}

class D3Point extends Point {
  z: number;

  constructor(x: number, y: number, z: number) {
    super(x, y);
    this.z = z;
    super.func();
  }
}
