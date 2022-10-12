# Generate release name

<p align="left">
  <a href="https://github.com/wixplosives/action-generate-release-name/actions/workflows/tests.yml"><img alt="typescript-action status" src="https://github.com/wixplosives/action-generate-release-name/actions/workflows/tests.yml/badge.svg"></a>
</p>

Generates name for releases

## Install dependencies

```
$ npm ci
```

## Build

```
$ npm run build
```

## Test

```
$ npm run test
```

## Publish to a distribution branch

Actions are run from GitHub repos so we will checkin the packed dist folder.

```bash
$ npm run bundle
$ git add dist
$ git commit -a -m "prod dependencies"
$ git push origin releases/v1
```

Your action is now published! :rocket:

See the [versioning documentation](https://github.com/actions/toolkit/blob/master/docs/action-versioning.md)

## Validate

You can now validate the action by referencing `./` in a workflow in your repo (see [test.yml](.github/workflows/test.yml))

```yaml
uses: ./
with:
  name_param: Yosi
```

See the [actions tab](https://github.com/wixplosives/core3-action-template/actions) for runs of this action! :rocket:
