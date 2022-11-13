//! debug

import { Input, Theme, YStack } from '@my/ui'
import React from 'react'

export function HomeScreen() {
  return (
    <Theme name="blue">
      <YStack p="$6">
        <Input />
      </YStack>
    </Theme>
  )
}
