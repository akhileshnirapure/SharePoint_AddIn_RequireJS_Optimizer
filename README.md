---
SharePoint AddIn RequireJS Optimizer
---

Achieving modularity in JavaScript code can be achieved by adhering to
revealing module pattern, this gives huge benefit as one can write
re-usable modular code. With the increasing number of module we need
mechanism to load them as we require, thus RequireJS library comes
pretty handy.

The flip side of splitting modules in individual files results in
individual request being generated at client side (browser) when
requirejs tries to load dependency. This may work fine with simple
solutions but can really become bottle neck when dealing with lots of
dependencies. We need a way so that we are more cohesive and still be
decoupled in nature.

**RequireJS** comes with optimizer called **r.js** which when provided
with appropriate configuration to nodejs can generate modules with
appropriate cohesiveness and modularity.

More documentation at: <http://requirejs.org/docs/optimization.html>

The solution gives standard template (folder structure with build
configuration) as to how we can build cohesive and decoupled solution
and utilizing r.js optimizer.


#Multi-Page RequireJS and SharePoint
---
## Brain Map

<iframe src="https://onedrive.live.com/embed?cid=1F816D036F021D89&resid=1F816D036F021D89%219184&authkey=AKgVJTjtx4Rmwss" width="320" height="155" frameborder="0" scrolling="no"></iframe>

---

## Folder Structure

<iframe src="https://onedrive.live.com/embed?cid=1F816D036F021D89&resid=1F816D036F021D89%219185&authkey=AKNPy05hkNC5Vrc" width="320" height="210" frameborder="0" scrolling="no"></iframe>