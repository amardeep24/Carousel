## Carousel

This widget is made using React, React-Hooks & React-Material icons.

### Example

```
     <Carousel 
      items={items}
      renderFn={(item, index) => <YourComponent {...item}/>}
     />
```

Where `items` is an array of json objects which would render the cards of this component.
The `renderFn` would take a custom function which renders a component based on the item in the JSON array.
The prop `searched` is a filter to pass to this component and `filterProp` is the key to filter on
