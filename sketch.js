const r = require("raylib");
const geometry = require("./geometry");

const windowWidth = 600;
const windowHeight = 400;
const windowTitle = "Rectangle inside Rectangle";

const FPS = 60;

const outerRectangleWidth = 100;
const outerRectangleHeight = 160;

const innerRectangleWidth = 60;
const innerRectangleHeight = 40;

function running() { return !r.WindowShouldClose(); }

function setup() {
	r.InitWindow(windowWidth, windowHeight, windowTitle);
	r.SetTargetFPS(FPS);
}

function update() { }

function draw() {
	const outerX = geometry.calcOffSet(windowWidth, outerRectangleWidth);
	const outerY = geometry.calcOffSet(windowHeight, outerRectangleHeight);

	const innerX = outerX + geometry.calcOffSet(outerRectangleWidth, innerRectangleWidth);
	const innerY = outerY + geometry.calcOffSet(outerRectangleHeight, innerRectangleHeight);

	r.BeginDrawing();

	r.ClearBackground(r.BLUE);

	r.DrawRectangle(outerX, outerY, outerRectangleWidth, outerRectangleHeight, r.WHITE);
	r.DrawRectangle(innerX, innerY, innerRectangleWidth, innerRectangleHeight, r.RED);

	r.EndDrawing();
}

function teardown() { r.CloseWindow(); }

module.exports = {
	running,
	setup,
	update,
	draw,
	teardown,
}