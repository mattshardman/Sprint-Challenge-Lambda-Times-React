- [ ] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.
* because JS is a dynamically typed language, PropTypes are used to validate that props passed to components are of the intended type e.g. string, bool etc.
- [ ] Describe a life-cycle event in React?
* Each react component follows a set life-cycle from initial rendering through to un-mounting, different methods are available at different stages of the life cycle. For example ComponentDidUpdate is available each type the state or props of component are updated, the method can then be used to run an arbitrary code at this point.
- [ ] Explain the details of a Higher Order Component?
* A HOC component is a component that takes a component as an input and returns another component. This is useful for adding props to multiple component for example a component could be wrapped in a HOC, and adds a prop that stipulates whether a user is logged in or not.
- [ ] What are three different ways to style components in React? Explain some of the benefits of each.
* Css: simple, used for many years, can be separated into separate files.
* In-line styles: transfers well with react-native, available 'out of the box' i.e. no dependencies, possible to dynamically generate styles
* Styled-components: reusable, data-driven, follows react component model, possible to dynamically generate styles