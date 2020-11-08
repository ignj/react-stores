# react-stores

This repo shows the implementation differences between using the following react stores

  - Context API
  - Mobx
  - Redux

Unit tests are included for each solution.
This examples also show the re-render issue that you might face when using Context API.

![alt img](diagrams/comparison.png?raw=true)

Conclusions
- Context API
    - Official docs of ContextAPI encourage its use for global values that do not change often. They also expose the re-render issue recreated here. 
    - Writing unit tests with this store leads to the "test by feature" idea, as you will need the component tree to have the Provider's props available in the tested component (Consumer).
- Redux
    - Redux may be the most challenging to understand, but I believe is the one that gives more flexibility: you're allowed to trace bugs in the actions and reducers. You can write unit tests without relying on the rendering of other components, and write tests for each piece of code.
    - While TypeScript is supported, the amount of noise that the types introduce is considerable.
- Mobx
    - I used the last update that removes the experimental decorators (TS).
    - Stores can handle most of the logic, so you can keep clean the UI components. 
    - Unit tests can be done for each store to test every action isolated. Also, the store can be easily mocked to test each UI component individually.
