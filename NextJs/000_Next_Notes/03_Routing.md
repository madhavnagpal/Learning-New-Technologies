# Routing

## Routing in React

1 Install a third party package.  
2 Add routes.js file to configure the routes.  
3 For each route, create a component, export the component, import in routes.js and configure the new route with a path property.

## Routing in a Next.js app

1 **Page-based routing mechanism** - Pages are associated with a route based on their file name.  
2 **Nested routes** - Nested folder structure, files will be automatically routed in the same way in the URL.  
3 **Dynamic routes** - Can be created by adding square brackets to a page name.  
4 **Catch all routes** - Add three dots inside square brackets to create a catch all route. Helpful when you want different URL's for the same page layout or even when you're working with pages with some of the route parameters are optional.  
5 **Optional Catch all routes** - Catch all routes can be made optional by including the parameter in double brackets ([[...params]]).The main difference between catch all and optional catch all routes is that with optional, the route without the parameter is also matched (/post in the example above).  
6 **Link** component to navigate on click of an element.  
7 useRouter hook's **router.push** method to navigate progammatically.  
8 To create **Custom 404 page** add `page/404.js`.

## Precedence of various routing methods

Predefined routes take precedence over dynamic routes, and dynamic routes over catch all routes. Take a look at the following examples:

`pages/post/create.js` - Will match /post/create  
`pages/post/[pid].js` or `pages/post/[pid]/index.js` - Will match /post/1, /post/abc, etc. But not /post/create  
`pages/post/[...params].js` - Will match /post/1/2, /post/a/b/c, etc. But not /post/create, /post/abc

## Shallow Routing

- Shallow routing allows you to change the URL without running data fetching methods again, that includes getServerSideProps, getStaticProps, and getInitialProps.

- You'll receive the updated pathname and the query via the router object (added by useRouter or withRouter), without losing state.

- Shallow routing only works for same page URL changes

```
useEffect(() => {
    // Always do navigations after the first render
    router.push('/?counter=10', undefined, { shallow: true })
  }, [])

  useEffect(() => {
    // The counter changed!
  }, [router.query.counter])
```

## For more details

https://nextjs.org/docs/routing/introduction
