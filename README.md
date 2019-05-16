# Doodle Chat

React chat interface with a focus on usability and a11y :speech_balloon:

:arrow_right: [doodlechat.netlify.com](https://doodlechat.netlify.com)

- [:fire: Features](#fire-features)
  - [:crescent_moon: Theme switcher](#crescent_moon-theme-switcher)
  - [:globe_with_meridians: a11y](#globe_with_meridians-a11y)
  - [:trophy: Lighthouse scores](#trophy-lighthouse-scores)
- [:construction: Development](#construction-development)
  - [:truck: Deployment](#truck-deployment)
- [:crystal_ball: Future](#crystal_ball-future)
  - [:earth_africa: i18n](#earth_africa-i18n)

---

## :fire: Features

### :crescent_moon: Theme switcher

light and dark theme switcher using the React context API via styled-components `ThemeContext`. The default light theme is typically more readable, but the dark theme helps preserve user eyes when they chat late at night :slightly-smiling-face:

### :globe_with_meridians: a11y

I care a lot about accessibility. Here are some things I've done to improve it in this app:

- using aria labels (for example on the [IconButton](/src/components/IconButton.js) component)
- tab order and keyboard navigation (a possible improvement here would be keyboard shortcuts)
- semantic HTML

### :trophy: Lighthouse scores

![Lighthouse scores](https://github.com/robinmetral/doodle-chat/blob/master/lighthouse-2019-05-13.png)

(updated May 13, 2019)

---

## :construction: Development

This app was built on top of Create React App to scaffold it out quickly.

### :briefcase: Dependencies

I've avoided extra dependencies for better performance and maintainability (and because you want to see my code, not someone else's). Only `styled-components` was used on top of CRA!

For example, I've used a custom-made time formatting function (see [helpers.js](/src/helpers.js)) instead of working with a library like Moment.js.

### :truck: Deployment

This app is deployed on push to Netlify.

[![Netlify Status](https://api.netlify.com/api/v1/badges/ca859bbb-9991-419c-a2b5-2cb1ad0376ed/deploy-status)](https://app.netlify.com/sites/doodlechat/deploys)

---

## :crystal_ball: Future

### :earth_africa: i18n

As a native French speaker, I take internationalization and localization on the web very seriously.

A future version of this app would ship with support for multiple languages.
