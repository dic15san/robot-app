import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import RobotControl from './RobotControl';
import { mount, shallow, render } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

/* Square Tests */

describe('<RobotControl />', () => {
    it('should get correct position and facing direction', () => {
        const wrapper = shallow(<RobotControl/>);
        wrapper.setState({inputCommand: "HGHGGHGHG", language: "swedish", shape: "square", facing: "N", positionX: 1, positionY: 2, columns: 5, rows: 5, radius: 0})
        wrapper.find('#submitButton').simulate('click', {preventDefault: () => {}})
        const positionX = wrapper.state().positionX;
        expect(positionX).toEqual(1);
        const positionY = wrapper.state().positionY;
        expect(positionY).toEqual(3);
        const facing = wrapper.state().facing;
        expect(facing).toEqual("N");
    })
})

describe('<RobotControl />', () => {
    it('should get alert about negative start position', () => {
        const wrapper = shallow(<RobotControl/>);
        window.alert = jest.fn();
        wrapper.setState({inputCommand: "HGHGGHGHG", language: "swedish", shape: "square", facing: "N", positionX: -1, positionY: 2, columns: 5, rows: 5, radius: 0})
        wrapper.find('#submitButton').simulate('click', {preventDefault: () => {}})
        expect(window.alert).toHaveBeenCalledWith("Start position, columns or rows invalid");
    })
})

describe('<RobotControl />', () => {
    it('should get alert about position outside square', () => {
        const wrapper = shallow(<RobotControl/>);
        window.alert = jest.fn();
        wrapper.setState({inputCommand: "HGHGGHGHG", language: "swedish", shape: "square", facing: "N", positionX: 6, positionY: 2, columns: 5, rows: 5, radius: 0})
        wrapper.find('#submitButton').simulate('click', {preventDefault: () => {}})
        expect(window.alert).toHaveBeenCalledWith("Start position, columns or rows invalid");
    })
})

describe('<RobotControl />', () => {
    it('should get alert about negative column', () => {
        const wrapper = shallow(<RobotControl/>);
        window.alert = jest.fn();
        wrapper.setState({inputCommand: "HGHGGHGHG", language: "swedish", shape: "square", facing: "N", positionX: 2, positionY: 2, columns: -5, rows: 5, radius: 0})
        wrapper.find('#submitButton').simulate('click', {preventDefault: () => {}})
        expect(window.alert).toHaveBeenCalledWith("Start position, columns or rows invalid");
    })
})

describe('<RobotControl />', () => {
    it('should get alert about robot can not walk outside area, east', () => {
        const wrapper = shallow(<RobotControl/>);
        window.alert = jest.fn();
        wrapper.setState({inputCommand: "HG", language: "swedish", shape: "square", facing: "N", positionX: 2, positionY: 2, columns: 2, rows: 2, radius: 0})
        wrapper.find('#submitButton').simulate('click', {preventDefault: () => {}})
        expect(window.alert).toHaveBeenCalledWith("Robot walked outside area");
    })
})

describe('<RobotControl />', () => {
    it('should get alert about robot can not walk outside area, south', () => {
        const wrapper = shallow(<RobotControl/>);
        window.alert = jest.fn();
        wrapper.setState({inputCommand: "HHG", language: "swedish", shape: "square", facing: "N", positionX: 2, positionY: 2, columns: 2, rows: 2, radius: 0})
        wrapper.find('#submitButton').simulate('click', {preventDefault: () => {}})
        expect(window.alert).toHaveBeenCalledWith("Robot walked outside area");
    })
})

describe('<RobotControl />', () => {
    it('should get alert about robot can not walk outside area, north', () => {
        const wrapper = shallow(<RobotControl/>);
        window.alert = jest.fn();
        wrapper.setState({inputCommand: "GG", language: "swedish", shape: "square", facing: "N", positionX: 2, positionY: 2, columns: 2, rows: 2, radius: 0})
        wrapper.find('#submitButton').simulate('click', {preventDefault: () => {}})
        expect(window.alert).toHaveBeenCalledWith("Robot walked outside area");
    })
})

describe('<RobotControl />', () => {
    it('should get alert about robot can not walk outside area, west', () => {
        const wrapper = shallow(<RobotControl/>);
        window.alert = jest.fn();
        wrapper.setState({inputCommand: "VGG", language: "swedish", shape: "square", facing: "N", positionX: 2, positionY: 2, columns: 2, rows: 2, radius: 0})
        wrapper.find('#submitButton').simulate('click', {preventDefault: () => {}})
        expect(window.alert).toHaveBeenCalledWith("Robot walked outside area");
    })
})


/* Circle Tests */

describe('<RobotControl />', () => {
    it('should get correct position and facing direction', () => {
        const wrapper = shallow(<RobotControl/>);
        wrapper.setState({inputCommand: "LFF", language: "english", shape: "square", facing: "N", positionX: 0, positionY: 0, columns: 0, rows: 0, radius: 5})
        wrapper.find('#submitButton').simulate('click', {preventDefault: () => {}})
        const positionX = wrapper.state().positionX;
        expect(positionX).toEqual(-2);
        const positionY = wrapper.state().positionY;
        expect(positionY).toEqual(0);
        const facing = wrapper.state().facing;
        expect(facing).toEqual("W");
    })
})

describe('<RobotControl />', () => {
    it('should get alert about position outside circle', () => {
        const wrapper = shallow(<RobotControl/>);
        window.alert = jest.fn();
        wrapper.setState({inputCommand: "", language: "swedish", shape: "circle", facing: "N", positionX: 1, positionY: 2, columns: 0, rows: 0, radius: 1})
        wrapper.find('#submitButton').simulate('click', {preventDefault: () => {}})
        expect(window.alert).toHaveBeenCalledWith("Start position or radius invalid");
    })
})

describe('<RobotControl />', () => {
    it('should get alert about negative radius', () => {
        const wrapper = shallow(<RobotControl/>);
        window.alert = jest.fn();
        wrapper.setState({inputCommand: "", language: "swedish", shape: "circle", facing: "N", positionX: 2, positionY: 2, columns: 0, rows: 0, radius: -1})
        wrapper.find('#submitButton').simulate('click', {preventDefault: () => {}})
        expect(window.alert).toHaveBeenCalledWith("Start position or radius invalid");
    })
})

describe('<RobotControl />', () => {
    it('should get alert about robot can not walk outside area, east', () => {
        const wrapper = shallow(<RobotControl/>);
        window.alert = jest.fn();
        wrapper.setState({inputCommand: "HGG", language: "swedish", shape: "circle", facing: "N", positionX: 1, positionY: 1, columns: 0, rows: 0, radius: 2})
        wrapper.find('#submitButton').simulate('click', {preventDefault: () => {}})
        expect(window.alert).toHaveBeenCalledWith("Robot walked outside area");
    })
})

describe('<RobotControl />', () => {
    it('should get alert about robot can not walk outside area, south', () => {
        const wrapper = shallow(<RobotControl/>);
        window.alert = jest.fn();
        wrapper.setState({inputCommand: "HHGG", language: "swedish", shape: "circle", facing: "N", positionX: 0, positionY: 0, columns: 0, rows: 0, radius: 2})
        wrapper.find('#submitButton').simulate('click', {preventDefault: () => {}})
        expect(window.alert).toHaveBeenCalledWith("Robot walked outside area");
    })
})

describe('<RobotControl />', () => {
    it('should get alert about robot can not walk outside area, north', () => {
        const wrapper = shallow(<RobotControl/>);
        window.alert = jest.fn();
        wrapper.setState({inputCommand: "G", language: "swedish", shape: "circle", facing: "N", positionX: 0, positionY: 0, columns: 0, rows: 0, radius: 1})
        wrapper.find('#submitButton').simulate('click', {preventDefault: () => {}})
        expect(window.alert).toHaveBeenCalledWith("Robot walked outside area");
    })
})

describe('<RobotControl />', () => {
    it('should get alert about robot can not walk outside area, west', () => {
        const wrapper = shallow(<RobotControl/>);
        window.alert = jest.fn();
        wrapper.setState({inputCommand: "VG", language: "swedish", shape: "circle", facing: "N", positionX: 0, positionY: 0, columns: 0, rows: 0, radius: 1})
        wrapper.find('#submitButton').simulate('click', {preventDefault: () => {}})
        expect(window.alert).toHaveBeenCalledWith("Robot walked outside area");
    })
})


/* Invalid command */

describe('<RobotControl />', () => {
    it('should get alert about invalid input command', () => {
        const wrapper = shallow(<RobotControl/>);
        window.alert = jest.fn();
        wrapper.setState({inputCommand: "hej", language: "swedish", shape: "square", facing: "N", positionX: 0, positionY: 0, columns: 0, rows: 0, radius: 1})
        wrapper.find('#submitButton').simulate('click', {preventDefault: () => {}})
        expect(window.alert).toHaveBeenCalledWith("Invalid command");
    })
})