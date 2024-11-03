import p5 from "p5";
const CENTER_W = 400;
const CENTER_H = 400;

const length = 200;

export class GaussianDistribution {
  p: p5;
  gaussianDestro: Map<number, number>;
  constructor(p: p5) {
    this.p = p;
    this.gaussianDestro = new Map();
  }
  init() {}
  animate() {
    this.gaussianDestro.forEach((val, key) => {
      this.p.point(CENTER_W + key - 400, CENTER_H + val);
    });
    this.fill();
  }

  fill() {
    let i = 0;
    while (i < 60) {
      i++;
      const newVal = this.p.randomGaussian(300, 40);
      const floor = this.p.floor(newVal);

      if (this.gaussianDestro.has(floor)) {
        const val = (this.gaussianDestro.get(floor) || 0) + 0.5;
        this.gaussianDestro.set(floor, val);
      } else {
        this.gaussianDestro.set(floor, 0.1);
      }
    }
  }
}
