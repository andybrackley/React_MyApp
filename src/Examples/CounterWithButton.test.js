/* https://reactjs.org/docs/testing-recipes.html */

import React from 'react';
import { render } from '@testing-library/react';
import CounterWithButton from "./CounterWithButtons"

function validateCounterValue(rendered, expectedVal) {
    const text = rendered.container.querySelector("[data-testid=Text_Counter]");
    expect(text.innerHTML).toContain(expectedVal)
}

function clickButton(rendered, buttonId) {
    const buttonLookup = "[data-testid=" + buttonId + "]";
    const button = rendered.container.querySelector(buttonLookup);
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
}

test('Initial state is set to props text and counter is = 0', () => {
    const rendered = render(<CounterWithButton message={"Test Message"} />);
    const text = rendered.container.querySelector("[data-testid=Text_Message]");
    
    expect(text.innerHTML).toContain("Test Message");
    validateCounterValue(rendered, 0)
});

test('Clicking increment button updates counter by 1', () => {
    const rendered = render(<CounterWithButton message={"Test Message"} />);
    clickButton(rendered, "Button_IncCounter")
    validateCounterValue(rendered, 1)
});

test('Clicking decrement button updates counter by - 1', () => {
    const rendered = render(<CounterWithButton message={"Test Message"} />);
    clickButton(rendered, "Button_DecCounter")
    validateCounterValue(rendered, -1)
});

/*
test('Clicking reset button sets counter to 0', () => {
    const rendered = render(<CounterWithButton message={"Test Message"} />);
    clickButton(rendered, "Button_Reset")
    validateCounterValue(rendered, 0)
});
*/