## Better practises to choose css units

#### font-size

```
font-size: rem
so if user changes size for root element in his browser our units scales w.r.t it.
```

#### width

```
width: % in combination with a max-width
ch (character width) might come handy when you want to set paragraph max-width for e.g 60ch
max-width: 45ch;
```

#### height

```
height: question urself "do i rly need to set height" if yes -> use a min-height (%, rem or vh)
```

#### padding or margin

```
padding/margin: rem or em, you may often use em for padding of buttons
so if font-size of btn scales, its padding scales with it.
```

#### media queries

```
media queries: em
for consistencies in different browsers
```

px only for little things like shadows, borders etc.

% - useful for defining layouts and widths

vh/vw - useful for larger loyout concerns
