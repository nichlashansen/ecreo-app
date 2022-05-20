import { render } from "@testing-library/react";
import Hero from "../Components/Hero";
import {useSession} from 'next-auth/react';

jest.mock("next-auth/react");
describe("Hero Component", () => {
    let expectedProps;
    let mockSession;

beforeEach(() =>{
        expectedProps = {
            headline: 'this is the heading',
            subHeadline: 'this is the subtitle',
            image:'https://picsum.photos/536/354'
        };
        mockSession = {
            expires: "1",
            user: { email: "a", name: "Delta", image: "c" },
                  };
    });

it('should render headline and subHeadline', () => {
    useSession.mockReturnValueOnce([mockSession, false]);
    const {getByText} =render(<Hero {...expectedProps} />);
    const headline =  getByText(expectedProps.headline);
    const subHeadline = getByText(expectedProps.subHeadline);

    expect(headline).toBeVisible;
    expect(subHeadline).toBeVisible;
})

it('should render login button', () => {
    useSession.mockReturnValueOnce([mockSession, false]);
    const {getByText} = render(<Hero {...expectedProps}/>);
    const loginButton = getByText('Login med Microsoft');

    expect(loginButton).toBeVisible;
})

it('should disable button when session is active', () => {
    useSession.mockReturnValueOnce([mockSession, true]);
    const {getByText} = render(<Hero {...expectedProps}/>);
    const loginButton = getByText('Login med Microsoft');

    expect(loginButton).toBeInvalid;
})

});