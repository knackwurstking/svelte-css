# Changelog

## [unreleased] v0.6.0

### Added

- "normalize.css" import to `CSS.Root`
- `FlexGrid` component (replacing `Grid`)
- `Input.Select` transition on open/close
- css utils
- css "ui" (component styles)
- added some components
    - `TopAppBar` 
    - `Input.HTMLSelect`
    - `Drawer`
    - `Input.Search`

### Removed

- css utils: .has-margin/padding(-x/-y)

### Changed

- theming: dark/light mode handling ("zink" variant)
- using svelte-kit for packaging
- fonts css and variables for sans-serif/serif/monospace
- some css base font sizing
- component styles
- css class names for components ("ui-*")

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
