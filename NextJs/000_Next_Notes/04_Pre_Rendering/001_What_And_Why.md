# Pre-rendering

## React vs NextJs

By default, NextJs pre-renders every page in the application

## What does pre-rendering mean?

Pre-rendering refers to process of generating HTML with necessary data for a page in our application.

### No Pre-rendering (Plain React app)

- Initial Load (App is not rendered). Page source has only a div with tag id equal to root.
- JS loads
- **Hydration** - React components are initialized and App become interactive

### Pre-rendered app (Using Next Js)

- Initial Load - Pre-rendered HTML is displayed (**here comes perks of pre rendering**)
- JS loads
- **Hydration** - React components are initialized and App become interactive. If your app has ineractive components like `<Link />`, they'll be active after js loads.

## Why Pre-rendering

**1 Pre-rendering improves performance.**

- In a react app, you need to wait for js to be executed , perhaps fetch data from external api and then render UI
- There is a wait time for user
- With pre-rendered page, HTML is already generated & loads faster.

**2 Pre-rendering helps SEO.**

- If you're building a blog or e-commerce site(which is not behind login), SEO is concern.
- With a react app, if search engine hits your page, it only sees a div tag id equal to root.
- If search engine hits a pre-rendered page, all the content is present in the source code which help index that page.
