# Dashboard Basic Template

> Provide a basic template for quickly setup development environment

[TOC]

## Development Environment

- Base on
  - [React.js](https://reactjs.org/)
  - [Berry free template](https://github.com/codedthemes/berry-free-react-admin-template)
  - [Material ui](https://mui.com/)
  - [MSW](https://mswjs.io/)

- IDE : [Vscode](https://code.visualstudio.com/)
  - [Eslint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [Stylelint extension](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
    - 💡 If you need format with keyboard shortcuts (Shift + Alt + F), add below config to VSCode's `keybindings.json`.

      ```javascript
      [
          {
              "key": "alt+shift+f",
              "command": "stylelint.executeAutofix",
              "when": "editorTextFocus && editorLangId == 'css'"
          },
          {
              "key": "alt+shift+f",
              "command": "stylelint.executeAutofix",
              "when": "editorTextFocus && editorLangId == 'scss'"
          },
          {
              "key": "alt+shift+f",
              "command": "stylelint.executeAutofix",
              "when": "editorTextFocus && editorLangId == 'less'"
          }
      ]
      ```

  - [Vscode settings](.vscode\settings.json)
- Package Manager :  [yarn](<https://yarnpkg.com/>)

## Linter Tools

- [ESLint](https://eslint.org/)
  - [Airbnb](https://github.com/airbnb/javascript)
  - [Next lint](https://nextjs.org/docs/basic-features/eslint)
- [Stylelint](https://stylelint.io/)
  - [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)
  - [stylelint-config-standard-scss](https://github.com/stylelint-scss/stylelint-config-standard-scss#readme)
- [lint-staged](https://github.com/okonet/lint-staged)
- [husky](https://typicode.github.io/husky/#/?id=features)
- [commitlint](https://commitlint.js.org/#/)

---

## Versioning

- **Follow [Semantic Versioning](https://semver.org/).**
- **Only the master branch is required.**
- Use [yarn version](https://classic.yarnpkg.com/en/docs/cli/version) to update the version of project via the command line. e.g.

**Version check**

```sh
yarn version
```

**major update**

```sh
yarn version --major
```

**minor udpate**

```sh
yarn version --minor
```

**patch update**

```sh
yarn version --patch
```

---

## GitHub / GitLab

- Branch `main` or `master` is the main branch, all updates need to be tagged with a [version](#versioning).
- Repositories and branches naming rules follow [Git Branching Naming Convention](https://codingsight.com/git-branching-naming-convention-best-practices/)  e.g., `an-awesome-project`, `some-branch`.
- Commit, follow [How to Write a Git Commit Message](https://cbea.ms/git-commit/), [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) and [the Angular convention](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)

**Overall rules**
  
  > 1. Separate subject from body with a blank line.
  > 2. Limit the subject line to 50 characters.
  > 3. Capitalize the subject line.
  > 4. Do not end the subject line with a period.
  > 5. Use the imperative mood in the subject line.
  > 6. Wrap the body at 72 characters.
  > 7. Use the body to explain what and why vs. how.
  
**Format**

```bash
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

---

## Note

Any comments are welcome, Jay and Ericsen are good people. Don't be afraid.
