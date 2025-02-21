/**
 * <div id="parent">
 *      <div id="child">
 *          <h1>I am H1 tag</h1>
 *      <div>
 * <div>
 */

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "I am h1 tag")
//   )
// );

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello from React"
// );

/**
 * <div id="parent">
 *      <div id="child">
 *          <h1>I am h1 tag</h1>
 *          <h2>I am h2 tag</h2>
 *      <div>
 * <div>
 */
// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I am h1 tag"),
//     React.createElement("h2", {}, "I am h2 tag"),
//   ])
// );

/**
 * <div id="parent">
 *      <div id="child">
 *          <h1>I am h1 tag</h1>
 *          <h2>I am h2 tag</h2>
 *      <div>
 *      <div id="child2">
 *          <h1>I am h1 tag</h1>
 *          <h2>I am h2 tag</h2>
 *      <div>
 *
 * <div>
 */

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" }, [
    React.createElement("h1", {} < "I am h1 tag from child"),
    React.createElement("h2", {}, "I am h2 tag from child"),
  ]),
    React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 tag from child2"),
    React.createElement("h2", {}, "I am h2 tag from child2"),
  ]),
]);

console.log(parent); // returns an object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
