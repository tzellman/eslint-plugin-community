# Discourage using common inclusion/exclusion terms that may relate to race (no-x-list)

The `no-x-list` rule generates warnings when variable identifiers include terms that may relate to race, encouraging a more meaningful way to describe inclusion/exclusion (e.g. allow and deny).

:wrench: The `--fix` option on the command line can automatically fix some of
the problems reported by this rule.

## Rule Details

Examples of **incorrect** code for this rule:

```js
let allowList = ["zelda", "link"];
let denyList = ["ganon", "ganondorf"];
```

Examples of **correct** code for this rule:

```js
let whiteList = ["zelda", "link"];
let blackList = ["ganon", "ganondorf"];
```

## Further Reading/Watching

-   :book: [Are the terms WhiteList and BlackList racist?](http://garysaid.com/are-the-terms-whitelist-and-blacklist-racist/)
-   :movie_camera: [EmberConf 2019 - The State of Community Documentation by Kenneth Larsen](https://www.youtube.com/watch?v=p6chThVPHHY&list=PLE7tQUdRKcyYWLWrHgmWsvzsQBSWCLHYL&index=17&t=900s)
