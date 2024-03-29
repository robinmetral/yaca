# yaca · yet another chat app

React chat interface with a focus on usability and a11y :speech_balloon:

:arrow_right: [yet-another-chat-app.herokuapp.com](https://yet-another-chat-app.herokuapp.com)

- [:fire: Features](#fire-features)
  - [:crescent_moon: Theme switcher](#crescent_moon-theme-switcher)
  - [:globe_with_meridians: a11y](#globe_with_meridians-a11y)
  - [:nail_care: SVG icons](#nail_care-svg-icons)
  - [:trophy: Lighthouse scores](#trophy-lighthouse-scores)
- [:construction: Development](#construction-development)
  - [:briefcase: Dependencies](#briefcase-dependencies)
  - [:truck: Deployment](#truck-deployment)

---

## :fire: Features

### :crescent_moon: Theme switcher

Light and dark theme switcher using the React context API, via styled-components [`ThemeProvider`](https://www.styled-components.com/docs/api#themeprovider).

The default light theme is typically more readable, but the dark theme helps preserve user eyes when they chat late at night :stuck_out_tongue:

> _One of the few types of alternative theme that adds real value to users is a low light intensity "night mode" theme. Not only is it easier on the eyes when reading in the dark, but it also reduces the likelihood of migraine and the irritation of other light sensitivity disorders._  
> Heydon Pickering, [Inclusive Components](https://inclusive-components.design/a-theme-switcher/)

### :globe_with_meridians: a11y

I care a lot about accessibility. Here are some things I've done to improve it in this app:

- using aria labels (for example on the [IconButton](/src/components/IconButton.js) component)
- tab order and keyboard navigation (a possible improvement here would be keyboard shortcuts)
- semantic HTML

### :nail_care: SVG icons

I used common icons to simplify the interface while keeping it user-friendly.

The icons are SVG [Font Awesome](https://github.com/FortAwesome/Font-Awesome) icons ([CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)). They're imported into the app as React components with [svgr](https://github.com/smooth-code/svgr), built into Create React App.

Using SVGs enables icon scaling and client-side CSS styling. In this app, icon colors are dynamically changed depending on the theme.

- Take a look at the [IconButton](/src/components/IconButton.js) component.

The favicon is Twitter's [Twemoji](https://github.com/twitter/twemoji) for Unicode `U+1F4AC` :speech_balloon: ([CC BY 4.0](https://creativecommons.org/licenses/by/4.0/))

### :trophy: Lighthouse scores

![Lighthouse scores](https://github.com/robinmetral/yaca/blob/master/lighthouse-2019-05-31.png)

(updated May 31, 2019)

---

## :construction: Development

This app was built on top of Create React App.

### :briefcase: Dependencies

I've avoided extra dependencies for better performance and maintainability. For the client-side app, only `styled-components` was used on top of CRA!

For example, I've used a custom-made time formatting function (see [helpers.js](/src/helpers.js)) instead of working with a library like Moment.js.

Server-side, Express and Mongoose were used to interact with the MongoDB database. Dotenv deals with environment variables locally. They're passed directly to Heroku in production.

### :truck: Deployment

Deployed to Heroku at [yet-another-chat-app.herokuapp.com](https://yet-another-chat-app.herokuapp.com).
