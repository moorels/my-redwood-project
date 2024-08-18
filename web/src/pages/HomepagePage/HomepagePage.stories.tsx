import type { Meta, StoryObj } from '@storybook/react'

import HomepagePage from './HomepagePage'

const meta: Meta<typeof HomepagePage> = {
  component: HomepagePage,
}

export default meta

type Story = StoryObj<typeof HomepagePage>

export const Primary: Story = {}
