src/
├── api/                  # API related code
│   ├── endpoints/        # API endpoint configurations
│   ├── services/        # API service methods
│   └── types/           # API type definitions
│
├── assets/              # Static assets
│   ├── fonts/
│   ├── images/
│   └── icons/
│
├── components/          # Reusable components
│   ├── common/         # Truly generic components (buttons, inputs, etc.)
│   ├── forms/          # Form-specific components
│   └── layout/         # Layout components (headers, footers, etc.)
│
├── hooks/              # Custom React hooks
│
├── navigation/         # Navigation configuration
│   ├── stacks/        # Stack navigators
│   └── tabs/          # Tab navigators
│
├── screens/            # Screen components
│   ├── auth/          # Authentication related screens
│   ├── home/          # Home related screens
│   └── settings/      # Settings related screens
│
├── store/             # State management (Redux/Context)
│   ├── actions/
│   ├── reducers/
│   └── selectors/
│
├── styles/            # Global styles
│   ├── theme.ts      # Theme configuration
│   ├── typography.ts # Typography styles
│   └── colors.ts     # Color definitions
│
├── types/             # TypeScript type definitions
│
└── utils/             # Utility functions and helpers
    ├── constants.ts
    ├── validation.ts
    └── formatting.ts