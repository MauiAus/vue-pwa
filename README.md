# Backpack Vue PWA

A Vue.js Progressive Web Application (PWA) for Backpack

## Requirements
* Node.js
* Vue CLI

## Installation
```
git clone https://github.com/backpack-io/vue-pwa.git
cd vue-pwa
npm install
```

## Run
```
npm run serve
```

## FontAwesome
**NOTE: Only Solid and Brand FontAwesome icons are supported**

Refer to [FontAwesome](https://fontawesome.com/icons) for the Icons. Since we are not using [FontAwesome Pro](https://fontawesome.com/pro), we can't use FontAwesome's **Pro Solid**, **Regular**, **Duotone**, and **Light** icons.

### Solid Icons

Let's say you want to add an icon from [FontAwesome](https://fontawesome.com/icons) to the App called `credit-card` and it is a Solid icon.

First, import the icon on the App. Use the initial `fa` and write your icon's name in this form (`credit-card` = `faCreditCard`):

**`main.js`**
```js
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'

library.add(faCreditCard)
```

Then to use that icon in your component. Take note of `fas` (fa-solid) here:

**`Component.vue`**
```html
<font-awesome-icon :icon="['fas', 'credit-card']" />
```

If you want to add another Solid icon called `calendar-alt`:

**`main.js`**
```js
import { faCreditCard, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faCreditCard)
library.add(faCalendarAlt)
```

### Brand Icons

You can apply the same thing for Brand icons. However, you will now import your icons from `@fortawesome/free-brands-svg-icons`:

**`main.js`**
```js
import { faGithub } from '@fortawesome/free-brands-svg-icons'
```

Then to use the icon on your component, you need to use `fab` (fa-brand) instead of `fas` (fa-solid) earlier:

**`Component.vue`**
```html
<font-awesome-icon :icon="['fab', 'github']" />
```


## Contribution
Feel free to make a [Pull Request](https://github.com/backpack-io/vue-pwa/pulls) and report [Issues](https://github.com/backpack-io/vue-pwa/issues).