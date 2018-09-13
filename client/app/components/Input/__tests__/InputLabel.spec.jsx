// @flow
import { shallow } from 'enzyme';
import React from 'react';
import { InputLabel } from '../InputLabel';

const id = 'some-id';
const label = 'Some Label';
const info = 'Some Info';

describe('InputLabel', () => {
  describe('has invalid props', () => {
    it('renders correctly', () => {
      const wrapper = shallow(<InputLabel id={id} />);
      expect(wrapper.find(`#${id}`).exists()).toEqual(false);
    });
  });

  describe('has valid props', () => {
    it('renders correctly', () => {
      const wrapper = shallow(
        <InputLabel label={label} required info={info} id={id} error />,
      );
      expect(wrapper.find(`label[htmlFor="${id}"]`).exists()).toEqual(true);
    });
  });
});
