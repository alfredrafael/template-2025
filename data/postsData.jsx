export const postsData = [
  {
    id: "post-example-1",
    title: "Post Example 1 Dog",
    spanishTitle: "Ejemplo de Publicación 1 Perro",
    subtitle: "This is an example post content 1.",
    spanishSubtitle: "Ejemplo de contenido de publicación 1.",
    category: ["Category 1", "Category 2"],
    spanishCategory: ["Categoría 1", "Categoría 2"],
    featuredImage:
      "https://images.unsplash.com/photo-1746950862687-3017c5818710?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Tag 1", "Tag 2", "Tag 3"],
  },
  {
    id: "post-example-2",
    title: "Post Example 2 Cat",
    spanishTitle: "Ejemplo de Publicación 2 Gato",
    subtitle: "This is an example post content 2.",
    spanishSubtitle: "Ejemplo de contenido de publicación 2.",
    category: ["Category 3", "Category 4"],
    spanishCategory: ["Categoría 3", "Categoría 4"],
    featuredImage:
      "https://images.unsplash.com/photo-1626208655973-78ae68dbbc30?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Tag 0", "Tag 1", "Tag 2", "Tag 3"],
  },
  {
    id: "post-example-3",
    title: "Post Example 3 Dove",
    spanishTitle: "Ejemplo de Publicación 3 Paloma",
    subtitle: "This is an example post content 3.",
    spanishSubtitle: "Ejemplo de contenido de publicación 3.",
    category: ["Category 3", "Category 4"],
    spanishCategory: ["Categoría 3", "Categoría 4"],
    featuredImage:
      "https://images.unsplash.com/photo-1533150783171-ce47d5c2b6ef?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Tag 1", "Tag 2", "Tag 3"],
  },
  {
    id: "post-example-4",
    title: "Post Example 4 Fish",
    spanishTitle: "Ejemplo de Publicación 4 Pez",
    subtitle: "This is an example post content 4.",
    spanishSubtitle: "Este es un ejemplo de contenido de publicación 4.",
    category: ["Category 5", "Category 6"],
    spanishCategory: ["Categoría 5", "Categoría 6"],
    featuredImage:
      "https://images.unsplash.com/photo-1745750747228-d7ae37cba3a5?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Tag 1", "Tag 2", "Tag 3"],
  },
];

export const categories = [
  ...new Map(
    postsData.flatMap((post) =>
      post.category.map((category, index) => [
        category, // Use the category name as the key
        { category, spanishCategory: post.spanishCategory[index] },
      ])
    )
  ).values(), // Extract unique objects
];
