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

Light and dark theme switcher using the React context API, via styled-components [`ThemeProvider`](https://www.styled-components.com/docs/api#themeprovider).

The default light theme is typically more readable, but the dark theme helps preserve user eyes when they chat late at night :slightly-smiling-face:

> _One of the few types of alternative theme that adds real value to users is a low light intensity "night mode" theme. Not only is it easier on the eyes when reading in the dark, but it also reduces the likelihood of migraine and the irritation of other light sensitivity disorders._  
> Heydon Pickering, [Inclusive Components](https://inclusive-components.design/a-theme-switcher/)

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
