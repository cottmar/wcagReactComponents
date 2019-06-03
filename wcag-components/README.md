# WCAG React Components
### Web Accessibility, or A11y, is the design of pages, tools, and technoglogies on the web that are built for everyone to use, regardless of ability or disability. Web development with an emphasis on accessibility ensures inclusion of the entire population that uses the web. I am passionate about adding accessibile features to apps and pages that I develop. By building reusable React Componenets that pass A11y audits and requirements, I will be both learning about A11y features and requirements, while simultaneously building reuseable components for reuse in future React applications.

# The Basics -- For noobs like me
1. Focus
2. Keyboard
3. Aria

# App Component
1. Document has a <title> element
2. <html> element has a [lang] attribute
3. <html> element has a valid value for its [lang] attribute
4. [user-scalable="no"] is not used in the <meta name="viewport"> element and the [maximum-scale] attribute is not less than 5.

# Button Component
### Passed Audits in Google Chrome
1. [aria-*] attributes match their roles
2. [aria-*] attributes have valid values
3. [aria-*] attributes are valid and not misspelled
4. Buttons have an accessible name
5. Background and foreground colors have a sufficient contrast ratio
6. No element has a [tabindex] value greater than 0

# Inert Polyfills
### WICG GH [https://github.com/WICG/inert](https://github.com/WICG/inert)
#### The inert attribute/property allows web authors to mark parts of the DOM tree as inert. This means, when a node is inert, the user agent must act as if the node was absent for the purposes of targeting user interaction events, they may ignore the node for the purposes of text search user interfaces, and may prevent the user from selecting text in that node. 
#### Think of a Side Drawer Menu - you may want the elements inside it unfocusable (by mouse, pointer events, or keyboard tabbing) unless it is selected. Otherwise, the user might be tabbing through a page and the focus will disapper.

# Resources
### W3C [https://www.w3.org/](https://www.w3.org/)
### ReactJS [https://reactjs.org/docs/accessibility.html](https://reactjs.org/docs/accessibility.html)
### Google Chrome Developers [https://www.youtube.com/watch?v=fGLp_gfMMGU&list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g&index=29](https://www.youtube.com/watch?v=fGLp_gfMMGU&list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g&index=29)

Goals:
Inert Polyfill - Work on adding the close button on sidedrawer, arias, toggles, and keybaord additions needed.
Contact Data - work on building out the a11y and test
Loading Component - alerts using when page is loading
Annoucements Component - messaging announcements
Modal
