## Carousel

This widget is made using React, React-Material and React Transition

### Example

```
     <Carousel searched={search} items={products} filterProp={"category"}/>
```

Where `items` is an array of json objects which would render the cards of this component.
The prop `searched` is a filter to pass to this component and `filterProp` is the key to filter on


### Issues

Search/Filter does not work properly

Animation is janky

The click on the slider icon does not perform navigation on the carousel.