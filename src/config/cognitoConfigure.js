export default{
    CONFIG: {
        REGION: "us-east-1",
        USER_POOL: process.env.NODE_ENV === 'development' ? "us-east-1_kb559fDKK" : "us-east-1_VlDwxHvwj",
        CLIENT_ID: process.env.NODE_ENV === 'development' ? "7578r9j6p93kabu6u3immctsja" : "4pckvcjp33pldnal8jd96d5cvo"
    },
}