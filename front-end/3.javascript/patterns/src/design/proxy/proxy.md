# proxy

intercept and control interactions to target objects

interact with the proxy object instead of directly interacting with the target object

first argument is the target object

second argument is the *handler*

`get` (access a property) and `set` (modifies a property) are common methods of a proxy handler

proxies are useful to add validation.

## reflect

built-in object

instead of trying to access properties on a target object within the proxy, we can use the reflect object.

usecases of proxies

- validation
- formatting
- notifications
- debugging

using too many proxies can have a cost in performance.


