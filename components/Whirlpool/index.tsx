import React, { useEffect, useRef } from "react";

import { imageUrls, labels } from "./ParticlesInfo";
import {
  particlesColor,
  cellSize,
  curve,
  zoom,
  divider,
  canvasWidth,
  canvasHeight,
  numberOfParticles,
  centerRadius,
  islandRadius,
  islandPositionRadius,
  debug,
  islandsAngle,
  fontSize,
  islandsNumber,
} from "@/settings/constants";
import { Flex } from "@chakra-ui/react";

type Props = {};

class Particle {
  effect: any;
  x: number;
  y: number;
  radius: number;
  speedModifier: number;
  speedX: number;
  speedY: number;
  color: number[];

  constructor(effect: any) {
    this.effect = effect;

    this.x = 0;
    this.y = 0;
    this.speedX = 0;
    this.speedY = 0;
    this.color = [0, 0, 0];

    this.resetOnIslands();

    this.radius = Math.random() * 2 + 2;
    this.speedModifier = Math.floor(Math.random() * 5 + 5);
  }

  resetOnIslands() {
    let x = Math.random() * this.effect.width;
    let y = Math.random() * this.effect.height;

    let index = Math.floor(Math.random() * this.effect.islandsInfo.length);

    while (
      Math.sqrt(Math.pow(this.effect.islandsInfo[index].x - x, 2) + Math.pow(this.effect.islandsInfo[index].y - y, 2)) >
      this.effect.islandsInfo[index].radius - 10
    ) {
      x = Math.random() * this.effect.width;
      y = Math.random() * this.effect.height;
    }

    this.x = x;
    this.y = y;
    this.color = this.effect.islandsInfo[index].color;
  }

  reset() {
    let x = Math.random() * this.effect.width;
    let y = Math.random() * this.effect.height;

    while (Math.sqrt(Math.pow(this.effect.center.x - x, 2) + Math.pow(this.effect.center.y - y, 2)) < this.effect.centerRadius) {
      x = Math.random() * this.effect.width;
      y = Math.random() * this.effect.height;
    }

    this.x = x;
    this.y = y;
  }

  draw(context: any) {
    context.save();
    context.fillStyle = `rgb(${this.color[0] ?? 0}, ${this.color[1] ?? 0}, ${this.color[2] ?? 0})`;
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    context.fill();
    context.strokeStyle = "#000000";
    context.strokeStyle = this.color;
    context.stroke();
    context.restore();
  }

  update() {
    if (Math.sqrt(Math.pow(this.effect.center.x - this.x, 2) + Math.pow(this.effect.center.y - this.y, 2)) < this.effect.centerRadius) {
      this.resetOnIslands();
    } else {
      let x = Math.floor(this.x / this.effect.cellSize);
      let y = Math.floor(this.y / this.effect.cellSize);
      let index = y * this.effect.cols + x;

      if (this.effect.flowField[index] !== undefined) {
        this.speedX = this.effect.flowField[index].x;
        this.speedY = this.effect.flowField[index].y;

        this.x += this.speedX * this.speedModifier;
        this.y += this.speedY * this.speedModifier;
      } else {
        this.resetOnIslands();
      }
    }
  }
}

class Effect {
  width: number;
  height: number;
  particles: any[];
  numberOfParticles: number;
  cellSize: number;
  rows: number;
  cols: number;
  flowField: { x: number; y: number }[];
  curve: number;
  zoom: number;
  debug: boolean;
  canvas: any;
  context: any;

  center: { x: number; y: number };
  divider: number;
  centerRadius: number;

  islandsInfo: any[];

  islandPositionRadius: number;
  islandRadius: number;
  islandsAngle: number;
  islandsNumber: number;

  opticsX: number;
  opticsY: number;

  electronicsX: number;
  electronicsY: number;

  aiX: number;
  aiY: number;

  engineeringX: number;
  engineeringY: number;

  biologyX: number;
  biologyY: number;

  anatomyX: number;
  anatomyY: number;

  constructor(canvas: any, context: any) {
    this.canvas = canvas;
    this.context = context;
    this.width = canvasWidth(this.canvas.width);
    this.height = canvasHeight(this.canvas.height);
    this.particles = [];
    this.numberOfParticles = numberOfParticles(this.width);
    this.cellSize = cellSize;
    this.islandsNumber = islandsNumber;

    this.flowField = [];
    this.curve = curve;
    this.zoom = zoom;
    this.debug = debug;

    this.rows = 0;
    this.cols = 0;

    this.center = { x: this.width / 2, y: this.height / 2 };
    this.divider = divider;

    this.centerRadius = centerRadius(this.width);
    this.islandRadius = islandRadius(this.width, this.height);
    this.islandPositionRadius = islandPositionRadius(this.width, this.height, this.islandRadius);
    this.islandsAngle = islandsAngle;

    this.islandsInfo = [];

    this.opticsX = 0;
    this.opticsY = 0;

    this.electronicsX = 0;
    this.electronicsY = 0;

    this.aiX = 0;
    this.aiY = 0;

    this.engineeringX = 0;
    this.engineeringY = 0;

    this.biologyX = 0;
    this.biologyY = 0;

    this.anatomyX = 0;
    this.anatomyY = 0;

    this.init();

    window.addEventListener("keydown", (e) => {
      if (e.key === "d") {
        this.debug = !this.debug;
      }
    });

    window.addEventListener("resize", (e: any) => {
      this.resize(e.target.innerWidth, e.target.innerHeight);
    });
  }

  resize(width: number, height: number) {
    this.canvas.width = width;
    this.canvas.height = height * 0.9;
    this.width = this.canvas.width;
    this.height = this.canvas.height;

    this.numberOfParticles = numberOfParticles(this.width);
    this.centerRadius = centerRadius(this.width);
    this.islandRadius = islandRadius(this.width, this.height);

    this.islandPositionRadius = islandPositionRadius(this.width, this.height, this.islandRadius);

    this.center = { x: this.width / 2, y: this.height / 2 };
    this.context.strokeStyle = "white";
    this.context.fillStyle = "white";

    this.init();
  }

  createSpiralFlowField(pointX: number, pointY: number) {
    // Iterate through each pixel in the canvas

    pointX = pointX - this.width / 2;
    pointY = pointY - this.height / 2;

    // Calculate the distance from the current pixel to the center
    let vx = pointY - pointX;
    let vy = -pointX - pointY;

    return { x: vx / this.divider, y: vy / this.divider };

    // Create an object representing the vector and add it to the row
  }

  init() {
    this.rows = Math.floor(this.height / this.cellSize);
    this.cols = Math.floor(this.width / this.cellSize);
    this.flowField = [];

    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        this.flowField.push(this.createSpiralFlowField((x + 0.5) * this.cellSize, (y + 0.5) * this.cellSize));
      }
    }

    this.islandsInfo = [];

    for (let i = 0; i < this.islandsNumber; i++) {
      this.islandsInfo.push({
        x: this.width / 2 + this.islandPositionRadius * Math.cos(this.islandsAngle * (i + 1) + Math.PI / 4),
        y: this.height / 2 + this.islandPositionRadius * Math.sin(this.islandsAngle * (i + 1) + Math.PI / 4),
        radius: this.islandRadius,
        color: particlesColor[i],
        image: imageUrls[i],
        label: labels[i],
        imageX: this.width / 2 + this.islandPositionRadius * Math.cos(this.islandsAngle * (i + 1) + Math.PI / 4),
        imageY: this.height / 2 + this.islandPositionRadius * Math.sin(this.islandsAngle * (i + 1) + Math.PI / 4),
      });
    }

    this.particles = [];
    for (let i = 0; i < this.numberOfParticles; i++) {
      this.particles.push(new Particle(this));
    }
  }

  render(context: any) {
    this.particles.forEach((particle) => {
      particle.draw(context);
      particle.update();
    });

    // let imageObj1 = new Image();
    // imageObj1.src = "https://s-media-cache-ak0.pinimg.com/236x/d7/b3/cf/d7b3cfe04c2dc44400547ea6ef94ba35.jpg";
    // imageObj1.onload = function () {
    //     context.drawImage(imageObj1, 0, 0, 100, 100);
    // };
  }

  drawIslands(context: any) {
    context.fillStyle = "red";
    context.lineCap = "round";

    this.islandsInfo.forEach((island: any) => {
      // context.beginPath();
      // context.arc(island.x, island.y, island.radius * 0.9, 0, 2 * Math.PI);
      // context.fill();

      // let img = new Image();

      // img.src = island.image;
      // context.drawImage(img, island.imageX - island.radius, island.imageY - island.radius, island.radius * 2, island.radius * 2);

      context.fillStyle = "rgba(0,0,0,0.3)";
      context.beginPath();
      context.arc(island.x, island.y, island.radius, 0, 2 * Math.PI);
      context.fill();
      context.fillStyle = `rgb(${island.color[0]},${island.color[1]},${island.color[2]})`;
      context.fillStyle = `white`;

      context.textAlign = "center";
      const separateLines = island.label.split(" ");
      const lineheight = Math.max(16, 0.013 * window.innerWidth);

      for (var i = 0; i < separateLines.length; i++) {
        context.fillText(separateLines[i], island.x, island.y + (i - (separateLines.length - 1) / 2) * lineheight);
      }
      context.restore();
    });

    context.beginPath();
    context.fillStyle = "rgb(24,24,26)";
    context.arc(this.width / 2, this.height / 2, this.centerRadius, 0, 2 * Math.PI);
    context.fill();
  }

  drawGrid(context: any) {
    for (let c = 0; c < this.cols; c++) {
      context.beginPath();
      context.moveTo(this.cellSize * c, 0);
      context.lineTo(this.cellSize * c, this.height);
      context.stroke();
    }

    for (let r = 0; r < this.rows; r++) {
      context.beginPath();
      context.moveTo(0, this.cellSize * r);
      context.lineTo(this.width, this.cellSize * r);
      context.stroke();
    }
  }

  drawGridAngles(context: any) {
    context.save();
    context.strokeStyle = "red";
    context.lineWidth = 2;
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        context.beginPath();
        context.moveTo(c * this.cellSize + this.cellSize / 2, this.cellSize * r + this.cellSize / 2);
        context.lineTo(
          c * this.cellSize + this.cellSize / 2 + (this.flowField[r * this.cols + c].x * this.cellSize) / 3,
          this.cellSize * r + this.cellSize / 2 + (this.flowField[r * this.cols + c].y * this.cellSize) / 3
        );
        context.stroke();
        context.fillText(Math.round(this.flowField[r * this.cols + c].x), c * this.cellSize + this.cellSize / 2, this.cellSize * r + this.cellSize / 2);
      }
    }
    context.restore();
  }
}

const Page = (props: Props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvasElement: any = canvasRef.current;

      canvasElement.width = window.innerWidth;
      canvasElement.height = window.innerHeight - 200;

      let canvasCtx = canvasElement.getContext("2d");

      // let Satoshi = new FontFace("Satoshi", "url(/fonts/Satoshi.regular.ttf)");
      let Satoshi = new FontFace("Satoshi", "url(/fonts/Satoshi-Variable.woff2)");

      Satoshi.load().then((font) => {
        document.fonts.add(font);
        canvasCtx.font = `${fontSize(window.innerWidth)}px Satoshi`;
      });

      let effect = new Effect(canvasElement, canvasCtx);

      effect.render(canvasCtx);

      const animate = () => {
        canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
        effect.render(canvasCtx);
        effect.drawIslands(canvasCtx);

        // effect.drawGrid(canvasCtx);
        // effect.drawGridAngles(canvasCtx);

        requestAnimationFrame(animate);
      };
      animate();

      return () => {};
    }
  }, []);

  return (
    <>
      <Flex position={"absolute"} top={0} left={0}>
        <canvas ref={canvasRef} className=""></canvas>
      </Flex>
    </>
  );
};

export default Page;
