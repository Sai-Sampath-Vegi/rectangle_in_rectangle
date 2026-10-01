const r = require("raylib");
const geometry = require("./geometry");

const window = {
	width: 600,
	height: 400,
	title: "Rectangle inside Rectangle",
};

const FPS = 60;

const outerRectangle = {
	width: 100,
	height: 160,
};

const innerRectangle = {
	width: 60,
	height: 40,
};

function running() { return !r.WindowShouldClose(); }

function setup() {
	r.SetTraceLogLevel(r.LOG_NONE);
	r.InitWindow(window.width, window.height, window.title);
	r.SetTargetFPS(FPS);

	outerRectangle.x = geometry.calcOffset(window.width, outerRectangle.width);
	outerRectangle.y = geometry.calcOffset(window.height, outerRectangle.height);

	innerRectangle.x = outerRectangle.x + geometry.calcOffset(outerRectangle.width, innerRectangle.width);
	innerRectangle.y = outerRectangle.y + geometry.calcOffset(outerRectangle.height, innerRectangle.height);
}

function update() { }

function draw() {
	r.BeginDrawing();

	r.ClearBackground(r.BLUE);

	r.DrawRectangleRec(outerRectangle, r.WHITE);
	r.DrawRectangleRec(innerRectangle, r.RED);

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