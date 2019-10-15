# Discourage using common inclusion/exclusion terms that may relate to race (no-race-names)

The `no-race-names` rule generates warnings when variable identifiers include terms that may relate to race. This encourages a more meaningful way to describe inclusion/exclusion (e.g. allow and deny), which should be more intuitive to anyone reading the code.

:wrench: The `--fix` option on the command line can automatically fix some of
the problems reported by this rule.

## Rule Details

Examples of **incorrect** code for this rule:

```js
// list inclusion/exclusion
let whiteList = ["zelda", "link"];
let blackList = ["ganon", "ganondorf"];

// master/slave
let master = "server1";
let masterNode = "server1";
let _master = "server1";
let slave = "server2";
let slaveServer = "server2";
let slave_set = ["server2", "server3"];
```

Examples of **correct** code for this rule:

```js
// list inclusion/exclusion
let allowList = ["zelda", "link"];
let denyList = ["ganon", "ganondorf"];

// primary/replica
let primary = "server1";
let primaryNode = "server1";
let replica = "server2";
let replica_set = ["server2", "server3"];
```

## Further Reading/Watching

-   :book: [Are the terms WhiteList and BlackList racist?](http://garysaid.com/are-the-terms-whitelist-and-blacklist-racist/)
-   :movie_camera: [EmberConf 2019 - The State of Community Documentation by Kenneth Larsen](https://www.youtube.com/watch?v=p6chThVPHHY&list=PLE7tQUdRKcyYWLWrHgmWsvzsQBSWCLHYL&index=17&t=900s)
