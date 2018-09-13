// @flow
import { shallow } from 'enzyme';
import React from 'react';
import { InputSelect } from '../InputSelect';

const id = 'some-id';
const name = 'some-name';
const value = 'Some Value';
const options = [{ value: 1, label: 'First' }, { value: 2, label: 'Second' }];
const someEvent = () => {
  window.alert('Event triggered!');
};

describe('InputSelect', () => {
  beforeAll(() => {
    spyOn(window, 'alert');
  });

  describe('has invalid type', () => {
    it('does not render', () => {
      const wrapper = shallow(
        <InputSelect
          name={name}
          id={id}
          value={value}
          onChange={someEvent}
        />,
      );
      expect(wrapper.find('select').exists()).toEqual(false);
    });
  });

  describe('has valid type', () => {
    it('has correct interactions', () => {
      const wrapper = shallow(
        <InputSelect
          name={name}
          id={id}
          value={value}
          options={options}
          onChange={someEvent}
        />,
      );
      wrapper.find('select').simulate('change', { currentTarget: { value: options[1].value } });
      expect(window.alert).toHaveBeenCalled();
      expect(wrapper.state('value')).toEqual(options[1].value);
      wrapper.find('select').simulate('change', { currentTarget: { value: options[0].value } });
      expect(window.alert).toHaveBeenCalled();
      expect(wrapper.state('value')).toEqual(options[0].value);
    });
  });
});
