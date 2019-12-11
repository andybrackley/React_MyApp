/* https://reactjs.org/docs/testing-recipes.html */

import React from 'react';
import { render } from '@testing-library/react';
import CounterWithButton from "./CounterWithButtons"

test('Initial state is set to props text and counter is = 0', () => {
    const rendered = render(<CounterWithButton message={"Test Message"} />);
    
    const text = rendered.container.innerHTML;
    expect(text).toContain("Text=Test Message");
    expect(text).toContain("counter=0")
});

test('Clicking increment button updates counter by 1', () => {
    const rendered = render(<CounterWithButton message={"Test Message"} />);
    const incButton = rendered.container.querySelector("[data-testid=Button_IncCounter]");
    incButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));

    const text = rendered.container.innerHTML;
    expect(text).toContain("counter=1")
});

test('Clicking decrement button updates counter by - 1', () => {
    const rendered = render(<CounterWithButton message={"Test Message"} />);
    const decButton = rendered.container.querySelector("[data-testid=Button_DecCounter]");
    decButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));

    const text = rendered.container.innerHTML;
    expect(text).toContain("counter=-1")
});