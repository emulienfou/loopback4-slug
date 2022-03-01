# loopback4-slug

## Stability: ⚠️Experimental⚠️

> Experimental packages provide early access to advanced or experimental
> functionality to get community feedback. Such modules are published to npm
> using `0.x.y` versions. Their APIs and functionality may be subject to
> breaking changes in future releases.

## Installation

Use the package manager [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
to install `loopback4-slug`

```sh
npm install --save loopback4-slug
```

## Basic use

### Updating repository

Change your repository parent class from `DefaultCrudRepository` to `SlugRepositoryMixin()()`

```ts
// Old
export class UserRepository extends DefaultCrudRepository<
    User,
    typeof User.prototype.id,
    UserRelations
> {
    // ...
}

// New
import {SlugRepositoryMixin} from "loopback4-slug";

export class UserRepository extends SlugRepositoryMixin<
    User,
    UserRelations
>()<Constructor<DefaultCrudRepository<User, typeof Artist.prototype.id, UserRelations>>>(
    DefaultCrudRepository
) {
    // ...
}
```

### Use decorator

Easily use the `@slug` decorator to generate and populate model property.

```ts
import {Entity, model, property} from "@loopback/repository";
import {slug} from "loopback4-slug";

@model()
export class User extends Entity {
  @property({
    type: 'string',
    required: true
  })
  name: string

  @slug({
    field: 'name',
    options: {
      lower: true,
      strict: true
    }
  })
  slug: string
}
```

> For available options, check the package `slugify` on [npm](https://www.npmjs.com/package/slugify#options).

## Debug

To display debug messages from this package, you can use the next command:

```shell
DEBUG=loopback:slug npm run start
```

## Tests

Run `npm test` from the root folder.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

This project is licensed under the [MIT](LICENSE.md)
