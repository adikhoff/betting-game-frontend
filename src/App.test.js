import App from './App';
import {shallow} from 'enzyme'

describe('App', () => {

    let wrapper;
    beforeAll(() => {
            wrapper = shallow(<App />);
        }
    );

    it('renders the title', () => {
        expect(wrapper.find('h1').text()).toBe('Welkom in de familie app')
    });

    it('has state', () => {
        const state = wrapper.state();
        expect(state).not.toBeNull();
    });

    it('renders the form', () => {
        const form = wrapper.find('form');
        expect(form.find('#username')).not.toBeNull();
        expect(form.find('#password')).not.toBeNull();
        expect(form.find('#login-btn').text()).toBe('Inloggen');
    });

    it('submits the form on login', () => {
        //todo
    });


});



