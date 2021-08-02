export default `
type Recipe {
    _id: String,
    language: String!,
    title: String!,
    description: String!,
    code: String!,
    userName: String!,
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
}

input CreateRecipeInput {
    language: String!,
    title: String!,
    description: String!,
    code: String!,
    userName: String!,
}
`