# Let's Eat!

### Deployment

[Let's Eat on Gh Pages](https://ryanbahan.github.io/lets-eat/)

### Developer Notes

- Focus mainly on UX/architecture, with intention of creating product that could be flexible in final discrete styling decisions (font families / color palette)
- Use CSS-in-JS convention to keep all component data encapsulated within one file
- Use Context API to create a singular sotre for important data, and use selector pattern to present that data w/out derived state
- Use Travis CI for continuous integration/auto-deploy to GH Pages
