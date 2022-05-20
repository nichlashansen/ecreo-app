import { queryByText, render } from "@testing-library/react";
import NavLinks from "./NavBarLinks";
import {useSession} from 'next-auth/react';
import { screen, configure } from '@testing-library/react'

jest.mock("next-auth/react");
describe("Nav Links", () => {
    let mockSession;

beforeEach(() =>{
        mockSession = {
            user: { email: "a", name: "Delta", image: "c" },
                  };
    });

it('Should not render menu items when session is false', () => {
    useSession.mockReturnValueOnce([mockSession, false]);
    const {getByText} = render(<NavLinks />);
    const Home = screen.queryByText('Hjem');
    const Absense = screen.queryByText('Absense');
    const Dashboard = screen.queryByText('Dashboard');

    expect(Home).toBeNull;
    expect(Absense).toBeNull;
    expect(Dashboard).toBeNull;
})

});