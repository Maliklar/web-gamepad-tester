class EventHandler {
    XBOX_ONE = 'Xbox 360 Controller (XInput STANDARD GAMEPAD)';
    constructor(id) {
        this.btnA = document.getElementById('btn-a');
        this.btnB = document.getElementById('btn-b');
        this.btnY = document.getElementById('btn-y');
        this.btnX = document.getElementById('btn-x');
        this.btnUp = document.getElementById('btn-up');
        this.btnLeft = document.getElementById('btn-left');
        this.btnRight = document.getElementById('btn-right');
        this.btnDown = document.getElementById('btn-down');
        this.btnSelect = document.getElementById('btn-select');
        this.btnL1 = document.getElementById('L1');
        this.btnL2 = document.getElementById('L2');
        this.btnR1 = document.getElementById('R1');
        this.btnR2 = document.getElementById('R2');
        this.btnMenu = document.getElementById('btn-menu');
        this.rightAnalog = document.getElementById('right-analog');
        this.rightAnalogText = document.getElementById('right-analog-text');
        this.leftAnalog = document.getElementById('left-analog');
        this.leftAnalogText = document.getElementById('left-analog-text');
        this.id = id;

    }

    handleAnalog(analog) {
        switch (this.id) {
            case this.XBOX_ONE:
                this.handleAnalogXbox(analog);
                break;
            default:
                console.log('not found');

        }
    }

    handleAnalogXbox(analog) {
        this.leftAnalog.style.transform = `translate(${ analog[0]*5 }%,${ analog[1]*5 }%)`;
        this.leftAnalogText.style.transform = `translate(${ analog[0]*5 }%,${ analog[1]*5 }%)`;
        this.leftAnalogText.innerHTML = `${this.toPercent(analog[0])} / ${this.toPercent(analog[1])}`;

        this.rightAnalog.style.transform = `translate(${ analog[2]*5 }%,${ analog[3]*5 }%)`;
        this.rightAnalogText.style.transform = `translate(${ analog[2]*5 }%,${ analog[3]*5 }%)`;
        this.rightAnalogText.innerHTML = `${this.toPercent(analog[2])} / ${this.toPercent(analog[3])}`

    }
    handleButton(buttons) {
        buttons[0].pressed ? this.activate(this.btnA) : this.deactivate(this.btnA);
        buttons[1].pressed ? this.activate(this.btnB) : this.deactivate(this.btnB);
        buttons[2].pressed ? this.activate(this.btnX) : this.deactivate(this.btnX);
        buttons[3].pressed ? this.activate(this.btnY) : this.deactivate(this.btnY);
        buttons[4].pressed ? this.activate(this.btnL1) : this.deactivate(this.btnL1);
        buttons[5].pressed ? this.activate(this.btnR1) : this.deactivate(this.btnR1);
        buttons[6].pressed ? this.activate(this.btnL2, buttons[6].value) : this.deactivate(this.btnL2);
        buttons[7].pressed ? this.activate(this.btnR2, buttons[7].value) : this.deactivate(this.btnR2);
        buttons[8].pressed ? this.activate(this.btnSelect) : this.deactivate(this.btnSelect);
        buttons[9].pressed ? this.activate(this.btnMenu) : this.deactivate(this.btnMenu);
        buttons[10].pressed ? this.activate(this.leftAnalog) : this.deactivate(this.leftAnalog, 'white');
        buttons[11].pressed ? this.activate(this.rightAnalog) : this.deactivate(this.rightAnalog, 'white');
        buttons[12].pressed ? this.activate(this.btnUp) : this.deactivate(this.btnUp);
        buttons[13].pressed ? this.activate(this.btnRight) : this.deactivate(this.btnRight);
        buttons[14].pressed ? this.activate(this.btnLeft) : this.deactivate(this.btnLeft);
        buttons[15].pressed ? this.activate(this.btnDown) : this.deactivate(this.btnDown);
    }

    activate(element, value) {
        if (value) {
            element.style.fill = `rgba(20, 238, 20, ${value} )`
            element.style.height = 13 * value + "";
        } else {
            element.style.fill = 'rgb(20, 238, 20)'

        }
    }
    deactivate(element, color) {
        color ? element.style.fill = color :
            element.style.fill = 'none';
    }

    toPercent(number) {
        return (number * 100).toFixed(0);
    }
}

export default EventHandler;