import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@carlosh-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    src: 'https://github.com/carlosh-dev.png',
    alt: 'Carlos Henrique',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}
export const WithFallBack: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
