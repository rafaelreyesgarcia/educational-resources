# components API

## navigation

## bottom navigation

bar that allows movement between destinations in an app

if there's only 3 actions, display both icons and text.

if there's more than 4 actions, display inactive views as icons only.

fixed positioning keeps bottom navigation fixed to the bottom

perform navigation on the client only without an HTTP round-trip to the server.

`BottomNavigationAction` provides the `component` prop to handle this.