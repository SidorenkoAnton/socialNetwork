import DialogItem from "./DialogItem";
import Adapter from 'enzyme-adapter-react-16'
import { render, configure, shallow } from 'enzyme'
import { BrowserRouter } from "react-router-dom";
configure({ adapter: new Adapter() });


describe('<DialogItem/>', () => {
	const component = shallow(<DialogItem name='Васа' id='1' />)
	it('render test', () => {

		expect(component.contains('h3')).toBe
	})
})