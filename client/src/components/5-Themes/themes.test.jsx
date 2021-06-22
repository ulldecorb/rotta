import React from 'react';
import ThemesCard from './index';
import { render } from '../../utils/testUtils';

describe('Given a ThemesCard component', () => {
  test('Should render html element', () => {
    const { container } = render(<ThemesCard />);
    const chooseTag = container.querySelector('div');
    expect(chooseTag?.innerHTML).toBe('');
  });
});

describe('Given a array map', () => {
  test('Should render html element', () => {
    const { container } = render(<ThemesCard />);
    const chooseTag = [{ project: 'macrame' }];
    const projectTitle = 'macrame';
    expect(chooseTag.map(obj => obj.project === projectTitle)).toEqual([true])
        });
});

