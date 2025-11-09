// logic was written by ehan, but knowing his ahh he probably copied a lot of this

import { Vector2D, magnitude, normalize } from "./vector2D.js";

(() => {
    const canvas = document.getElementById("particles");
    const divDiv = document.getElementById("socials-background");
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
        canvas.width = divDiv.clientWidth;
        canvas.height = divDiv.clientHeight;
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let mousePos = null;
    document.addEventListener("mousemove", (e) => {
        mousePos = new Vector2D(e.clientX, e.clientY);
    });

    const minDist = 70;

    class Particle {
        constructor() {
            this.pos = new Vector2D(Math.random() * canvas.width, Math.random() * canvas.height);
            this.speed = new Vector2D(Math.random() - 0.5, Math.random() - 0.5);
            this.size = Math.random() + 1;
            this.originalSpeed = this.speed;
        }

        update() {
            this.pos = this.pos.add(this.speed);

            if (mousePos) {
                const dist = magnitude(this.pos.sub(mousePos));
                if (dist < minDist) {
                    let vec = this.pos.sub(mousePos);
                    vec = normalize(vec).mult((minDist - dist) / 100);
                    this.speed = this.speed.add(vec);
                } else {
                    this.speed = this.speed.lerp(this.originalSpeed, 0.05);
                }
            }

            if (this.pos.x < 0) this.pos.x = canvas.width;
            if (this.pos.x > canvas.width) this.pos.x = 0;
            if (this.pos.y < 0) this.pos.y = canvas.height;
            if (this.pos.y > canvas.height) this.pos.y = 0;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.pos.x, this.pos.y, this.size, 0, 2 * Math.PI);
            ctx.fillStyle = "rgb(240, 238, 220)";
            ctx.shadowBlur = 8;
            ctx.shadowColor = ctx.fillStyle;
            ctx.fill();
            ctx.shadowBlur = 0;
        }
    }

    const particles = Array.from({ length: 350 }, () => new Particle());

    function animate() {
        ctx.fillStyle = "rgb(27, 26, 30)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        particles.forEach((p) => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animate);
    }

    animate();
})();