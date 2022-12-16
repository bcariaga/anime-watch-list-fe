import type { Config } from 'jest'
import { defaults } from 'jest-config'

const config: Config = {
  testEnvironment: 'jsdom',
  moduleFileExtensions: [...defaults.moduleFileExtensions],
  moduleNameMapper: {
    '^components(.*)$': '<rootDir>/src/components/$1',
    '^common(.*)$': '<rootDir>/src/common/$1',
  },
}

export default config
