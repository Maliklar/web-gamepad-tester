import EventHandler from './EventHandler.js';
window.addEventListener("gamepadconnected", () => {
    const gamepad = navigator.getGamepads()[0];
    console.log(gamepad);
    const handler = new EventHandler(gamepad.id);
    setInterval(() => {
        const gamepad = navigator.getGamepads()[0];
        handler.handleButton(gamepad.buttons);
        handler.handleAnalog(gamepad.axes);

    })
});