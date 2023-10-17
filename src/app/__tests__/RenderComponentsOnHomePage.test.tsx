import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import HomePage from '../page';


// afterEach function runs after each test suite is executed
afterEach(() => {
    cleanup(); // Resets the DOM after each test suite
})

describe('Rendering component on homepage', () => {

    it('Should render the home & course(s) component', () => {
        render(<HomePage />);
        expect(screen.getByTestId('homeSectionContainer')).toBeInTheDocument();
        expect(screen.getByTestId('courseSectionContainer')).toBeInTheDocument();
    });

});