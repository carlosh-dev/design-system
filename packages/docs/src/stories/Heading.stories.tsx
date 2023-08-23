import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@carlosh-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
  args: {
    sizes: 'md',
    children: 'Custom title',
  },
  argTypes: {
    sizes: {
      options: ['sm', 'md', 'lg', '2xl', '3xl', '4xl', '5xl', '6xl'],
      control: { type: 'inline-radio' },
      defaultValue: 'md',
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story: 'You can change the tag of the heading.',
      },
    },
  },
}
