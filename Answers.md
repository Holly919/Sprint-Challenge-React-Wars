# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

ReactJS is a library developed by the team at Facebook for building user interfaces. The main problem solved by react is the development of large applications that have temporal data changes. The data in such applications is not static so it changes over time.  
React also makes working with the DOM simpler. It also helps things to load much faster because React codes the interaction with the DOM in the simplest way possible.

1. Describe component state.

The State of a component is an object that holds some information that may change over the lifetime of the component. It's where you store properties that belong to a component and when the state object changes, the component re-renders.

1. Describe props.

“Props”, short for properties, is a plain Javascript object. Props passes data from one component to another. They are also passed in a uni-directional flow.
 

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

A side effect is anything outside the scope of the function being executed. You sync effects the way you want them to run by using the effect hook.