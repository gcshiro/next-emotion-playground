import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Button from '@/components/Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    label: {
      type: 'text',
      defaultValue: 'Button',
    },
  },
} as Meta;

const Template: Story<any> = (args) => <Button>{args.label}</Button>;

export const Primary = Template.bind({});
