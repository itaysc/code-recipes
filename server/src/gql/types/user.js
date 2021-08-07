export default `

type User {
    _id: String,
    userName: String,
    firstName: String,
    fullName: String,
    lastName: String,
    email: String,
    recipes: [Recipe],
    phone: String,
    isActive: Boolean,
    gender: String,
    createdAt: String,
}

type Query {
    getAllUsers: [User],
    getUserByUserName(userName: String!): User
    getUserByEmail(email: String!): User
}

type Mutation {
    createUser(input: CreateUserInput): User
}

input CreateUserInput {
    userName: String!, 
    firstName: String, 
    lastName: String, 
    email: String!, 
    phone: String, 
    password: String!, 
    gendr: String
}
`