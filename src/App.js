// useState Basics
// import ErrorExample from "./tutorial/1-useState/setup/1-error-example";
// import UseStateBasics from "./tutorial/1-useState/setup/2-useState-basics";
// import UseStateArray from "./tutorial/1-useState/setup/3-useState-array";
// import UseStateObject from "./tutorial/1-useState/setup/4-useState-object";
// import UseStateCounter from "./tutorial/1-useState/setup/5-useState-counter";

// useEffect Basics
// import UseEffectBasics from "./tutorial/2-useEffect/setup/1-useEffect-basics";
// import UseEffectCleanup from "./tutorial/2-useEffect/setup/2-useEffect-cleanup";
// import UseEffectFetchData from "./tutorial/2-useEffect/setup/3-useEffect-fetch-data";

// Conditional Rendering
// import MultipleReturns from "./tutorial/3-conditional-rendering/setup/1-multiple-returns";
// import ShortCircuit from "./tutorial/3-conditional-rendering/setup/2-short-circuit";
// import ShowHide from "./tutorial/3-conditional-rendering/setup/3-show-hide";

// Forms
// import ControlledInputs from "./tutorial/4-forms/setup/1-controlled-inputs";
// import MultipleInputs from "./tutorial/4-forms/setup/2-multiple-inputs";

// useRef
import UseRefBasics from "./tutorial/5-useRef/setup/1-useRef-basics";

const App = () => {
  return (
    <div className="container">
      {/* useState basics  */}
      {/* <ErrorExample /> */}
      {/* <UseStateBasics /> */}
      {/* <UseStateArray /> */}
      {/* <UseStateObject /> */}
      {/* <UseStateCounter /> */}

      {/* useEffectBasics */}
      {/* <UseEffectBasics /> */}
      {/* <UseEffectCleanup /> */}
      {/* <UseEffectFetchData /> */}

      {/* Conditional rendering */}
      {/* <MultipleReturns /> */}
      {/* <ShortCircuit /> */}
      {/* <ShowHide /> */}
      {/* <ControlledInputs /> */}
      {/* <MultipleInputs /> */}
      <UseRefBasics />
    </div>
  );
};

export default App;
