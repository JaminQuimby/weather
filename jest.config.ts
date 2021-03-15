export default {
  clearMocks: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testPathIgnorePatterns: ['\\\\node_modules\\\\'],
    testMatch: [
      "**/tests/**/*.[jt]s?(x)",
      "**/?(*.)+(spec|test).[tj]s?(x)"
    ],
    setupFilesAfterEnv: [
      "<rootDir>/jest.setup.ts"
    ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },

};
