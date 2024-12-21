# sortable

```bash
$ npm i @kakasoo/sortable
```

This is very simple function to create object for make `prisma` orderBy statement.
For example, you can just write `user.articles.created_at` as parameter, like below code.

```ts
getSortable("user.articles.created_at", "desc"); // { user: { articles: { created_at: "desc" } } }
```

Because it is a type inference, it is much easier to use if you create and use a function in advance.

```ts
namespace IUser {
  namespace IRequest {
    type SortbaleColumns =
      | "user.articles.created_at"
      | "user.articles.updated_at";
  }
}

export const orderBy = <T extends IUser.IRequest.SortableColumns>(
  key: T,
  direction: "asc" | "desc"
) => {
  return getSortable(
    key,
    direction
  ) satisfies Prisma.usersOrderByWithRelationInput;
};
```

then, You can use like it, Right?

```ts
prisma.user.findMany({
  orderBy: orderBy("user.articles.created_at", "desc"),
});
```
