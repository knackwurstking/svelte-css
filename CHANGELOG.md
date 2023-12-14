# Changelog

## v0.7.0 [unreleased]

- Update drawer components (`GroupItem` now is just a container)
- Remove border from button variant "full"
- Change fonts theming
- Adding a minified css file containing all the styles (input components still missing)
- Adding some css utils

## v0.6.1 2023-12-03

### Fixed

- Missing top-app-bar styles (`CSS.Root`)

## v0.6.0 2023-11-26

### Added

- Import "normalize.css" on top of `CSS.Root`
- New component `FlexGrid` (replacing `Grid`)
- Transition for `Input.Select` open/close
- CSS utils
- CSS ui (component styles)
- New component: `TopAppBar`
- New component: `Drawer`
- New component: `Input.HTMLSelect`
- New component: `Input.Search`

### Fixed

- Code clean up

### Changed

- Theming mode and variant
- Library packaging using svelte-kit now
- CSS base fonts (sans-serif/serif/monospace)
- Style changes

### Removed

- CSS utils: ".has-margin/padding(-x/-y)"


## v0.5.0 2023-11-08

### Added

- input component for type month and date
- css utils:
    - .no-user-select
    - .no-overflow
- collapse/expand exports to `Input.Select`
- `--slider-color` to slider input component

### Changed

- icon button borders (round, no border)C
