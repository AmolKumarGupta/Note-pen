import { render, renderHook, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Provider } from "react-redux"
import store from "../../app/store"
import Book from "../../components/Book"
import App from "../../App"
import { HashRouter } from "react-router-dom"

test('render Book', async ()=>{
    render(<Provider store={store}><Book /></Provider>)
    window.localStorage.clear();
    
    screen.getByText('Save')
    userEvent.click(screen.getByText('Save'))

    render(
        <Provider store={store}>
            <HashRouter>
            <App />
            </HashRouter>            
        </Provider>
    )
    // expect(textRef).toBeCalled();
})