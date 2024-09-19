# Reversi FigJam Widget
This is FigJam Widget of Reversi as published on Figma Community.
<img width="1440" alt="スクリーンショット 2024-09-19 21 31 35" src="https://github.com/user-attachments/assets/5198b234-c634-4011-9434-0ad3abcaa104">

## URL
[https://www.figma.com/community/widget/1410322967944300600](https://www.figma.com/community/widget/1411644011353793846)

## Development guide

*This widget is built with [Create Figma Plugin](https://yuanqing.github.io/create-figma-plugin/).*

### Pre-requisites

- [Node.js](https://nodejs.org) – v20
- [Figma desktop app](https://figma.com/downloads/)

### Build the widget

To build the widget:

```
$ npm run build
```

This will generate a [`manifest.json`](https://figma.com/widget-docs/widget-manifest/) file and a `build/` directory containing the JavaScript bundle(s) for the widget.

To watch for code changes and rebuild the widget automatically:

```
$ npm run watch
```

### Install the widget

1. In the Figma desktop app, open a FigJam document.
2. Search for and run `Import widget from manifest…` via the Quick Actions search bar.
3. Select the `manifest.json` file that was generated by the `build` script.

### Debugging

Use `console.log` statements to inspect values in your code.

To open the developer console, search for and run `Show/Hide Console` via the Quick Actions search bar.

## See also

- [Create Figma Plugin docs](https://yuanqing.github.io/create-figma-plugin/)
- [`yuanqing/figma-plugins`](https://github.com/yuanqing/figma-plugins#readme)

Official docs and code samples from Figma:

- [Widget API docs](https://figma.com/widget-docs/)
- [`figma/widget-samples`](https://github.com/figma/widget-samples#readme)
