import { fireEvent, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import Navbar from "../../components/Navbar";
import { Provider } from "react-redux"
import store from "../../app/store";

test('render Navbar', async ()=>{
    render(<Provider store={store}><Navbar /></Provider>);
    
    await userEvent.click( await screen.getByText('example'));

    let holder = await screen.getByText('New');
    let plusBtn = await screen.getByText('+');
    await userEvent.click(holder);
    await userEvent.keyboard('amol');

    expect(holder.textContent).toBe('Newamol');
    expect(plusBtn.className).toBe('float-right text-xl ');

    await userEvent.click(plusBtn);
    let newBook = await screen.getByText('newamol');
    await userEvent.click(newBook);

    await userEvent.click(holder);
    holder.textContent = '';
    await fireEvent.blur(holder);

    await userEvent.click(holder);
    await fireEvent.keyPress(holder, {key: 'Enter', code: 'Enter', charCode: 13});

})