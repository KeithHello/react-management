class StarrySky {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    particles: Particle[];
    count: number;
    actions: string[];
    action: number;

    constructor() {
        this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
        this.canvas.width = innerWidth;
        this.canvas.height = innerHeight;
        this.canvas.style.zIndex = '-1';
        this.ctx = this.canvas.getContext('2d')!;
        document.body.appendChild(this.canvas);

        this.particles = [];
        this.count = 300;

        this.actions = ['right', 'left', 'up', 'down', 'around'];
        this.action = 0;
    }

    init() {
        this.animate();
        this.event();
    }

    event() {
        document.body.addEventListener('click', () => {
            this.action += Math.floor(Math.random() * this.actions.length) || 1;
            this.action = this.action % this.actions.length;
        });
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        if (this.particles.length < this.count) {
            this.particles.push(
                new Particle(this.canvas.width, this.canvas.height, this.ctx)
            );
        }
        for (let i in this.particles) {
            const p = this.particles[i];
            p.update(this.actions[this.action]);
            p.draw();
        }
    }

    animate() {
        requestAnimationFrame(() => this.animate());
        this.draw();
    }

}

class Particle {
    x: number;
    y: number;
    vx: number;
    w: number;
    h: number;
    ctx: CanvasRenderingContext2D;

    constructor(width: number, height: number, ctx: CanvasRenderingContext2D) {
        this.w = width;
        this.h = height;
        this.ctx = ctx;
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = Math.random();
    }

    update(direction = 'right') {
        switch (direction) {
            case 'right':
                this.x += this.vx * 3;
                if (this.x > this.w) this.x = 0;
                break;
            case 'left':
                this.x -= this.vx * 3;
                if (this.x < 0) this.x = this.w;
                break;
            case 'up':
                this.y -= this.vx * 3;
                if (this.y < 0) this.y = this.h;
                break;
            case 'down':
                this.y += this.vx * 3;
                if (this.y > this.h) this.y = 0;
                break;
        }
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, 1 + this.vx, 0, Math.PI * 2);
        this.ctx.fillStyle = `rgba(255, 255, 255, ${this.vx})`;
        this.ctx.fill();
    }
}

export default StarrySky;