import { useEffect, useRef } from "react";

let particles: Particle[] = [];
let mousePos: {
  x: number | undefined;
  y: number | undefined;
  lastMoved: number | undefined;
} = {
  x: undefined,
  y: undefined,
  lastMoved: undefined,
};

const resizeCanvasToDisplaySize = (canvas: HTMLCanvasElement) => {
  const { width, height } = canvas.getBoundingClientRect();

  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
    return true;
  }

  return false;
};

const getRandomColor = () => {
  const colors = [
    "rgba(255, 99, 132, 0.7)",
    "rgba(54, 162, 235, 0.7)",
    "rgba(255, 205, 86, 0.7)",
    "rgba(75, 192, 192, 0.7)",
    "rgba(153, 102, 255, 0.7)",
    "rgba(255, 159, 64, 0.7)",
    "rgba(255, 99, 132, 0.7)",
    "rgba(54, 162, 235, 0.7)",
    "rgba(255, 205, 86, 0.7)",
    "rgba(75, 192, 192, 0.7)",
  ];

  return colors[Math.floor(Math.random() * colors.length)];
};

const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

class Particle {
  x: number;
  y: number;
  radius: number;
  color: string;
  ctx: CanvasRenderingContext2D;

  constructor(ctx: CanvasRenderingContext2D) {
    this.x = mousePos.x! + getRandomInt(-10, 10);
    this.y = mousePos.y! + getRandomInt(-10, 10);

    this.color = getRandomColor();
    this.radius = getRandomInt(10, 15);
    this.ctx = ctx;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
  }

  update() {
    if (this.radius >= 0.1) {
      this.radius -= 0.1;
    }
  }
}

const useMouseTail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas) {
      const context = canvas.getContext("2d");

      if (!context) {
        return;
      }

      let animationFrameId: number;

      const render = () => {
        resizeCanvasToDisplaySize(canvas);

        context.clearRect(0, 0, canvas.width, canvas.height);

        if (
          particles.length < 200 &&
          mousePos.lastMoved &&
          Date.now() - mousePos.lastMoved < 1000 &&
          mousePos.x !== undefined &&
          mousePos.y !== undefined
        ) {
          particles.push(new Particle(context));
        }

        for (let i = 0; i < particles.length; i++) {
          if (particles[i].radius < 0.1) {
            particles.splice(i, 1);
          } else {
            particles[i].update();
            particles[i].draw();
          }
        }

        animationFrameId = window.requestAnimationFrame(render);
      };
      render();

      return () => {
        window.cancelAnimationFrame(animationFrameId);
      };
    }
  }, [canvasRef]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mousePos = {
        x: event.clientX,
        y: event.clientY + window.scrollY,
        lastMoved: Date.now(),
      };
    };

    const handleMouseOut = () => {
      mousePos = { x: undefined, y: undefined, lastMoved: undefined };
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  });

  return canvasRef;
};

export default useMouseTail;
