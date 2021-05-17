# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.0.0-alpha.39](https://github.com/axe312ger/sqip/compare/sqip-cli-tt@1.0.0-alpha.38...sqip-cli-tt@1.0.0-alpha.39) (2021-05-17)


### Bug Fixes

* npm ([9b3f18e](https://github.com/axe312ger/sqip/commit/9b3f18e3afb4d98d1882d52873a03e3865c928c5))





# 1.0.0-alpha.38 (2021-05-17)


### Bug Fixes

* **dependencies:** ensure debug is included when installing ([15a9f11](https://github.com/axe312ger/sqip/commit/15a9f11b68b6b09f1c0cefdee4d2ad6cd730e645))
* **input-file-parsing:** allow non-rgb images via probe-image-size ([4a8cc83](https://github.com/axe312ger/sqip/commit/4a8cc83c405c893f69bf151d237fb3dfd60d18ca))
* **sqip-cli:** depend on plugins used in default config ([3705e0e](https://github.com/axe312ger/sqip/commit/3705e0e8764640924ab8de84e6ddabadea972f18))
* **sqip-cli:** pass given result width further to library. Fixes [#92](https://github.com/axe312ger/sqip/issues/92) ([c79ce73](https://github.com/axe312ger/sqip/commit/c79ce736fd9e21c73e430867124918487c784284))
* **sqip-cli:** register cli as binary ([46984ab](https://github.com/axe312ger/sqip/commit/46984ab6f5f5e562a8f1c7a321a817313476b6c1))
* **sqip-plugin-blur:** remove invalid character and set blur default to 55 like legacy sqip ([b3a91cc](https://github.com/axe312ger/sqip/commit/b3a91ccd558a3ccce2771c7d8e0f7fe80b1a9c86))


### Features

* **CLI:** always write svg file even when skipping output ([69321da](https://github.com/axe312ger/sqip/commit/69321da69d135079e85ffb158fc09e0d02f45564))
* **debugging:** add debug package and start to use it ([6b01e22](https://github.com/axe312ger/sqip/commit/6b01e224600babab8a05e0b1dd57ae0c5722b17d))
* **globbing:** allow processing of multiple files ([247acdf](https://github.com/axe312ger/sqip/commit/247acdf2d764a41e74879ec0c7b5628ca74307f1))
* **output:** svg preview and metadata table ([731d888](https://github.com/axe312ger/sqip/commit/731d888eb65b2ee60d66fb4e29ee23b9272da42e))
* **plugins:** cli can dynamically use plugins ([06de45d](https://github.com/axe312ger/sqip/commit/06de45db1d3c2b092e3a0ee5aabae70109698498))
* **plugins:** no more base64 output by default ([69d4c58](https://github.com/axe312ger/sqip/commit/69d4c5832f458ebd5e87202e1efe903eff1c3593))
* **primitive:** add support for rep, alpha, background and cores primitive configs ([2de9294](https://github.com/axe312ger/sqip/commit/2de92941ee660127cc2a32cc5cd9e2c1f6cd3eca)), closes [#54](https://github.com/axe312ger/sqip/issues/54) [#22](https://github.com/axe312ger/sqip/issues/22)
* **resizing:** resize image to 300px for web by default, allow overwriting ([cf1bfb6](https://github.com/axe312ger/sqip/commit/cf1bfb6654eac93e42c853232f8569a51ce2a690))
* **sqip-cli:** improve debug output ([1178e4e](https://github.com/axe312ger/sqip/commit/1178e4e28a0b47233df6244ece2adac2174bd2ad))
* **sqip-cli:** improve help output through upgrading dependency ([15ed7a3](https://github.com/axe312ger/sqip/commit/15ed7a3ff9ec15e184abc8d90e745d56b6eb02a6))





# [1.0.0-alpha.37](https://github.com/axe312ger/sqip/compare/sqip-cli@1.0.0-alpha.36...sqip-cli@1.0.0-alpha.37) (2021-05-17)

**Note:** Version bump only for package sqip-cli





# [1.0.0-alpha.36](https://github.com/axe312ger/sqip/compare/sqip-cli@1.0.0-alpha.35...sqip-cli@1.0.0-alpha.36) (2020-06-21)


### Features

* **CLI:** always write svg file even when skipping output ([69321da](https://github.com/axe312ger/sqip/commit/69321da69d135079e85ffb158fc09e0d02f45564))





# [1.0.0-alpha.35](https://github.com/axe312ger/sqip/compare/sqip-cli@1.0.0-alpha.34...sqip-cli@1.0.0-alpha.35) (2019-12-26)

**Note:** Version bump only for package sqip-cli





# [1.0.0-alpha.34](https://github.com/axe312ger/sqip/compare/sqip-cli@1.0.0-alpha.33...sqip-cli@1.0.0-alpha.34) (2019-12-23)

**Note:** Version bump only for package sqip-cli





# [1.0.0-alpha.33](https://github.com/axe312ger/sqip/compare/sqip-cli@1.0.0-alpha.32...sqip-cli@1.0.0-alpha.33) (2019-12-23)

**Note:** Version bump only for package sqip-cli





# [1.0.0-alpha.32](https://github.com/axe312ger/sqip/compare/sqip-cli@1.0.0-alpha.31...sqip-cli@1.0.0-alpha.32) (2019-11-24)


### Features

* **primitive:** add support for rep, alpha, background and cores primitive configs ([2de9294](https://github.com/axe312ger/sqip/commit/2de92941ee660127cc2a32cc5cd9e2c1f6cd3eca)), closes [#54](https://github.com/axe312ger/sqip/issues/54) [#22](https://github.com/axe312ger/sqip/issues/22)





# [1.0.0-alpha.31](https://github.com/axe312ger/sqip/compare/sqip-cli@1.0.0-alpha.30...sqip-cli@1.0.0-alpha.31) (2019-11-16)


### Bug Fixes

* **input-file-parsing:** allow non-rgb images via probe-image-size ([4a8cc83](https://github.com/axe312ger/sqip/commit/4a8cc83c405c893f69bf151d237fb3dfd60d18ca))





# [1.0.0-alpha.30](https://github.com/axe312ger/sqip/compare/sqip-cli@1.0.0-alpha.29...sqip-cli@1.0.0-alpha.30) (2019-08-13)


### Bug Fixes

* **sqip-cli:** pass given result width further to library. Fixes [#92](https://github.com/axe312ger/sqip/issues/92) ([c79ce73](https://github.com/axe312ger/sqip/commit/c79ce73))


### Features

* **sqip-cli:** improve debug output ([1178e4e](https://github.com/axe312ger/sqip/commit/1178e4e))
* **sqip-cli:** improve help output through upgrading dependency ([15ed7a3](https://github.com/axe312ger/sqip/commit/15ed7a3))





# [1.0.0-alpha.29](https://github.com/axe312ger/sqip/compare/sqip-cli@1.0.0-alpha.28...sqip-cli@1.0.0-alpha.29) (2019-06-17)


### Bug Fixes

* **sqip-cli:** depend on plugins used in default config ([3705e0e](https://github.com/axe312ger/sqip/commit/3705e0e))





# [1.0.0-alpha.28](https://github.com/axe312ger/sqip/compare/sqip-cli@1.0.0-alpha.27...sqip-cli@1.0.0-alpha.28) (2019-06-17)


### Bug Fixes

* **dependencies:** ensure debug is included when installing ([15a9f11](https://github.com/axe312ger/sqip/commit/15a9f11))





# [1.0.0-alpha.27](https://github.com/axe312ger/sqip/compare/sqip-cli@1.0.0-alpha.26...sqip-cli@1.0.0-alpha.27) (2019-06-17)


### Bug Fixes

* **sqip-cli:** register cli as binary ([46984ab](https://github.com/axe312ger/sqip/commit/46984ab))





# [1.0.0-alpha.26](https://github.com/axe312ger/sqip/compare/sqip-cli@1.0.0-alpha.25...sqip-cli@1.0.0-alpha.26) (2019-06-17)


### Features

* **output:** svg preview and metadata table ([731d888](https://github.com/axe312ger/sqip/commit/731d888))
