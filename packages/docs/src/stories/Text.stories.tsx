import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@carlosh-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi minima dolores explicabo debitis at suscipit cum distinctio consequuntur quae non quia earum eius quod dolorem quasi eos commodi, hic nam?',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const Strong: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
