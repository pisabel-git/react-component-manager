This component was bootstrapped with [Direflow](https://direflow.io).

# Component Manager

> Pseudo-router for web-components : same navigation, no route modification (~Tabs)

> cf. `/src/direflow-components/component-manager/react-c-manager`

## Documentation

- [ComponentManager](#ComponentManager)
- [Tab](#Tab)
- [ComponentLink](#ComponentLink)
- [Usage Example](#Usage-Example)

### ComponentManager

```html
<ComponentManager>
  <App />
</ComponentManager>
```

Props

- `children` : Provided children components with pseudo-routing

### Tab

```html
<Tab link="link">
  <Component />
</Tab>
```

Props

- `children` : Provided children components with pseudo-routing
- `link` (string): pseudo-route

### ComponentLink

```html
<ComponentLink to="to">link</ComponentLink>
```

Props

- `children` : Provided children components or text
- `to` (string): relates to ComponentTab prop `link`

### Usage Example

```jsx
function App() {
  return (
    <ComponentManager>
      <nav>
        <ComponentLink to="/">Component 1</ComponentLink>
        <ComponentLink to="/c2">Component 2</ComponentLink>
        <ComponentLink to="/c3">Component 3</ComponentLink>
      </nav>
      <section>
        <Tab link="/">
          <Component1 />
        </Tab>
        <Tab link="/c2">
          <Component2 />
        </Tab>
        <Tab link="/c3">
          <Component3 />
        </Tab>
      </section>
    </ComponentManager>
  );
}

function Component1() {
  return (
    <>
      <div>Component 1</div>
      <ComponentLink to="/c3">To Component 3</ComponentLink>
    </>
  );
}
```
