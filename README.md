# Thriday App Developer Technical Challenge

## Introduction

Our React Native technical interview process involves candidates doing an at-home project to test your React Native knowledge and problem solving abilities, while also giving you a chance to write code in a way that you find comfortable.
Using Google/StackOverflow/whatever for help is allowed, but ultimately you should write and be able to justify every piece of the code being submitted.
Your solution should be shared on a public Github or Bitbucket repo showing all commit history.

## Requirements

Technology Stack:

Structure the project following your favorite patterns or you can use: react-native-template-typescript
Minium RN version is 0.71.+


React Components:

Implement the app using either React Hooks or standard React. Regardless of your choice, it's essential to demonstrate a deep understanding of state management and prop usage. Ensure proper component abstraction, knowing when to create subcomponents for modularity and reusability.

Device and Platform Focus:

Ensure that the components appear visually appealing on both Android and iOS.

React Navigation:

Integrate React Navigation to ensure seamless navigation within the app. The navigation structure should be user-friendly and efficient.

Styling and Compatibility:

Make sure that the app's UI and list components are visually appealing and functional on both Android and iOS platforms. You are encouraged to use TypeScript for type safety and code maintainability.

## The Challenge

We have [provided a JSON file](db.json) containing a small sample from an API response; it contains a list of Transactions. Using this JSON data, build a React Native app that implements the Transaction list (i.e. the highlighted area) shown in the following mobile design:

| Breakpoint | Design                                                    |
| ---------- | --------------------------------------------------------- |
| Mobile     | <img src="screens/mobile.png" width="50%" height="50%" /> |

### Assets

- You can find [the designs on Figma](https://www.figma.com/file/3dbbFqp863G43K22aRmCY5/App-(Engineer-Test)?node-id=0%3A1).
- The Overpass font is [available on Google Fonts.](https://fonts.google.com/specimen/Overpass)

### Acceptance Criteria

Set up the bottom navigation

The list of transactions should be grouped by date (the "date" property).

Each group of transactions should display a title showing the date of the group (don't worry about handling the "Today" and "Yesterday" titles).

All Transactions should display:

- a logo (the "logoUrl" property)
- a title (the "transactionTitle" property)
- a subtitle
  - the "suburb" property, if it has a value
  - the "shortCategory" property, if it has a value
  - if both properties have values, display a separator between them
- an amount (the "amount" property)
  - styled differently based on the "cashflow" property
    - when cashflow === "inflow"
      - prefix with "+"
      - colour green
    - when cashflow === "outflow"
      - prefix with "-"
      - colour black
- "Pending" Transactions ("status" === "PENDING") should be shown with a dark grey background colour
