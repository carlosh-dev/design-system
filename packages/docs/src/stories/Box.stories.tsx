import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@carlosh-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  tags: ['autodocs'],
  args: {
    children: (
      <>
        <Text sizes="lg" as="h1">
          Box
        </Text>
        <Text>Thats a box.</Text>
      </>
    ),
  },
  argTypes: {
    children: {
      control: { disable: true },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
