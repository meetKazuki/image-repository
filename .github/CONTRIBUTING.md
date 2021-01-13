# Contributing Guides

- [Git Naming Conventions](#git-naming-conventions)
  - [Branch Naming](#branch-naming)
  - [Commit Message Naming](#commit-message-naming)
  - [PR Naming](#pr-naming)
    - [Pull Request Template (Markdown)](#pr-template-md)

## Git Naming Conventions

### [Branch Naming](#branch-naming)

```
{story type}/{2-3-word-summary}
```

`story-type` - Indicates the context of the branch and should be one of:

- `feature`
- `bug`
- `chore`
- `hotfix`
- `refactor`

**Example**

```
feature/resources-rest-endpoints
```

### [Commit Message Naming](#commit-message-naming)

Atomic commits should be made with the format:

```
<type>: <subject>

<BLANK LINE>

<body>

```

Any line cannot be longer than 100 characters, meaning be concise.

```<type>``` should be:

 * feat
 * bug
 * chore
 * release
 * refactor
 * documentation
 * style
 * test

```<subject>``` text should:

 * use present tense: "save" not "saved" or "saving"
 * not capitalize first letter i.e no "Carry to safety"
 * not end with a dot (.)

**Message body (optional)** If a body is to be written, it should:

 * written in present tense.
 * include the reason for change and difference in the previous behaviour.

**Example**

```
feat: implement endpoint for user registration

Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus minus, quia soluta, minima iste ex eaque natus distinctio quis molestias obcaecati unde animi consequatur molestiae! Nobis molestiae qui quas autem.

Lorem ipsum dolor sit amet consectetur adipisicing elit:

- amet consectetur adipisicing elit
- amet consectetur adipisicing elit
- amet consectetur adipisicing elit
```

### [PR Naming](#pr-naming)

The PR title should be named using the following format:

```
Story Description
```

**Example**

```
Build out REST Endpoints for Resources (CRUD)
```

#### [PR Description Template (Markdown)](#pr-template-md)

Please review [PULL_REQUEST_TEMPLATE.md](PULL_REQUEST_TEMPLATE.md) for details on how to raise a pull request (PR).

**Example**

![devcareers_get_intern_0](https://user-images.githubusercontent.com/12225152/98141244-b4c37b80-1ec6-11eb-93df-ccedda17bbbf.png)
