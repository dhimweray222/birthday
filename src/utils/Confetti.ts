interface Particle {
  x: number;
  y: number;
  r: number;
  d: number;
  color: string;
  tilt: number;
  tiltAngleIncrement: number;
  tiltAngle: number;
}

export class Confetti {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D | null;
  private particles: Particle[] = [];
  private maxParticles = 150;
  private animationId: number | null = null;
  private active = false;
  private colors = [
      '#E8AEB7', // Dusty Rose
      '#FFF6EC', // Warm Cream
      '#C86B85', // Deep Rose
      '#F7D9C4', // Champagne
      '#FFFFFF', // White
  ];

  constructor(canvas: HTMLCanvasElement) {
      this.canvas = canvas;
      this.ctx = this.canvas.getContext('2d');
      this.resizeCanvas();
  }

  public resizeCanvas() {
      if (!this.canvas) return;
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
  }

  private initParticles() {
      this.particles = [];
      const width = this.canvas.width;
      const height = this.canvas.height;
      
      for (let i = 0; i < this.maxParticles; i++) {
          this.particles.push({
              x: Math.random() * width,
              y: Math.random() * height - height, // Start above screen
              r: Math.random() * 5 + 2, // radius slightly bigger
              d: Math.random() * this.maxParticles, // density
              color: this.colors[Math.floor(Math.random() * this.colors.length)],
              tilt: Math.floor(Math.random() * 10) - 10,
              tiltAngleIncrement: (Math.random() * 0.07) + 0.05,
              tiltAngle: 0
          });
      }
  }

  private draw() {
      if (!this.ctx) return;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      
      for (let i = 0; i < this.maxParticles; i++) {
          const p = this.particles[i];
          this.ctx.beginPath();
          this.ctx.lineWidth = p.r;
          this.ctx.strokeStyle = p.color;
          this.ctx.moveTo(p.x + p.tilt + p.r, p.y);
          this.ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r);
          this.ctx.stroke();
      }

      this.update();
  }

  private update() {
      let remaining = false;
      const height = this.canvas.height;
      
      for (let i = 0; i < this.maxParticles; i++) {
          const p = this.particles[i];
          p.tiltAngle += p.tiltAngleIncrement;
          p.y += (Math.cos(p.d) + 1 + p.r / 2) / 2;
          p.x += Math.sin(p.tiltAngle);
          
          if (p.y <= height) {
              remaining = true;
          }
      }

      if (this.active && remaining) {
          this.animationId = requestAnimationFrame(this.draw.bind(this));
      } else if (!remaining && this.active) {
          this.stop();
      }
  }

  public start() {
      if (this.active) return;
      this.active = true;
      this.initParticles();
      this.draw();
  }

  public stop() {
      this.active = false;
      if (this.animationId) {
          cancelAnimationFrame(this.animationId);
      }
      if (this.ctx) {
          this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      }
  }
}
