export default `
enum ThumbDirection {
    up,
    down
  }
type Thumbs {
    userId: String!,
    direction: ThumbDirection!
}

type Recipe {
    _id: String,
    language: String!,
    title: String!,
    description: String!,
    code: String!,
    thumbs: [Thumbs],
    userId: String!,
    createdAt: String,
    updatedAt: String,
}

type Query {
    getAllRecipes: [Recipe],
    getRecipesByUserName(userName: String!): [Recipe]
}

type Mutation {
    createRecipe(input: CreateRecipeInput): Recipe
    deleteRecipeById(id: String!): String
    addThumbUp(id: String!): Recipe
    addThumbDown(id: String!): Recipe
}

input CreateRecipeInput {
    language: String!,
    title: String!,
    description: String!,
    code: String!,
    userId: String!,
}
`