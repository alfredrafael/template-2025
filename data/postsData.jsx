export const postsData = [
  {
    id: "post-example-1",
    title: "Very Big Dogs",
    spanishTitle: "Perros Muy Grandes",
    subtitle: "Some dogs are big. Huge even. Incredible, right?",
    spanishSubtitle: "Algunos perros son enormes. Gigantes, incluso.",
    category: ["Pets", "Canines"],
    spanishCategory: ["Perros", "Caninos"],
    featuredImage:
      "https://images.unsplash.com/photo-1585563563490-bbab51a9ab77?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageSource: "Unsplash",
    imageSourceLink: "https://unsplash.com/photos/2zDw14yCYU4",
    tags: ["Canines", "Pets", "Dogs", "Dog", "Animals", "Mascotas", "Caninos"],
  },
  {
    id: "post-example-2",
    title: "Very Big Cats",
    spanishTitle: "S",
    subtitle: "This is an example post content 2.",
    spanishSubtitle: "Ejemplo de contenido de publicación 2.",
    category: ["Pets", "Felines"],
    spanishCategory: ["Gatos", "Felinos"],
    featuredImage:
      "https://images.unsplash.com/photo-1524132989408-c8ee48d8f147?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageSource: "Andy Holmes",
    imageSourceLink: "https://unsplash.com/photos/bengal-tiger-sym5TTE2ks0",
    tags: ["Tiger", "Cats", "Cat", "Felines"],
  },
  {
    id: "post-example-3",
    title: "Super Small Dogs",
    spanishTitle: "Perros Muy Pequeños",
    subtitle: "Some dogs are small. Tiny even.",
    spanishSubtitle: "Algunos perros son pequeños. Minúsculos, incluso.",
    category: ["Pets", "Canines"],
    spanishCategory: ["Perros", "Caninos"],
    featuredImage:
      "https://images.unsplash.com/photo-1533150783171-ce47d5c2b6ef?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageSource: "Unsplash",
    imageSourceLink: "https://unsplash.com/photos/2zDw14yCYU4",
    tags: ["Tag 1", "Tag 2", "Tag 3"],
  },
  {
    id: "post-example-4",
    title: "Very Small Cats",
    spanishTitle: "Gatos Muy Pequeños",
    subtitle: "Some cats are small. Tiny even.",
    spanishSubtitle: "Algunos gatos son pequeños. Minúsculos, incluso.",
    category: ["Pets", "Felines"],
    spanishCategory: ["Gatos", "Felinos"],
    featuredImage:
      "https://images.unsplash.com/photo-1745750747228-d7ae37cba3a5?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageSource: "Erik-Jan Leusink",
    imageSourceLink:
      "https://unsplash.com/photos/selective-focus-photo-of-gray-tabby-cat-IbPxGLgJiMI",
    tags: ["Kitty", "Cat", "Gato"],
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
