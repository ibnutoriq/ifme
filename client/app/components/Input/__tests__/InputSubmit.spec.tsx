// @flow
import { shallow } from 'enzyme';
import React from 'react';
import { InputSubmit } from '../InputSubmit';

const id = 'some-id';
const name = 'some-name';
const value = 'Some Value';
const someEvent = () => {
  window.alert('Event triggered!');
};

describe('InputSubmit', () => {
  beforeAll(() => {
    spyOn(window, 'alert');
  });

  describe('has invalid type', () => {
    it('does not render', () => {
      const wrapper = shallow(
        <InputSubmit
          id={id}
          onClick={someEvent}
          large={large}
        />,
      );
      expect(wrapper.find('input').exists()).toEqual(false);
    });
  });

  describe('has valid type', () => {
    it('has correct interactions', () => {
      const wrapper = shallow(
        <InputSubmit
          id={id}
          onClick={someEvent}
          value={value}
          large={large}
        />,
      );
      wrapper.find('input').simulate('click');
      expect(window.alert).toHaveBeenCalled();
      wrapper.find('input').simulate('click');
      expect(window.alert).toHaveBeenCalled();
    });
  });
});
