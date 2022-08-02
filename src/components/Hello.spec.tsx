import {render, screen} from '@testing-library/react'
import Hello from './Hello'


it('Test Hello component', () => {
    render(<Hello/>);
    const myEle = screen.getByText('Hello word!');
    expect(myEle).toBeInTheDocument();
})