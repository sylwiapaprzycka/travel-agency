import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it ('should generate correct link', () => {
    const id = 'abc';
    const component = shallow(<TripSummary id={id} />);

    const renderedLink = component.find('.link').prop('to');
    expect(renderedLink).toEqual(`/trip/${id}`);
  });
  it('should render correct title and image', () => {
    const expectedSrc = 'src';
    const expectedAlt = 'alt';
    const component = shallow(<TripSummary image={expectedSrc} name={expectedAlt} />);

    expect(component.find('img').prop('src')).toEqual(expectedSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });
  it('should render correct props', () => {
    const expectedName = 'name';
    const expectedCost = 'cost';
    const expectedDay = 1;

    const component = shallow(<TripSummary name={expectedName} cost={expectedCost} days={expectedDay} />);
    expect(component.find('.title').text()).toEqual(expectedName);
    expect(component.find('span').at(0).text()).toEqual(`${expectedDay} days`);
    expect(component.find('span').at(1).text()).toEqual(`from ${expectedCost}`);

    expect(component).toBeTruthy();
  });
  it('should throw error without props: id, image, name, cost and days', () => {
    expect(() => shallow(<TripSummary id image name cost days />)).toThrow();
  });
  it('should render correct tags', () => {
    const expectedArray = ['one', 'two', 'three'];
    const component = shallow(<TripSummary tags={expectedArray}/>);

    expect(component.find('.tag').at(0).text()).toEqual(expectedArray[0]);
    expect(component.find('.tag').at(1).text()).toEqual(expectedArray[1]);
    expect(component.find('.tag').at(2).text()).toEqual(expectedArray[2]);
  });
  it ('should crash if tags are false', () => {
    const expectedTags = [];
    const component = shallow(<TripSummary tags={expectedTags}/>);
    expect(component.find('.tags')).toBeTruthy();
  });
});


