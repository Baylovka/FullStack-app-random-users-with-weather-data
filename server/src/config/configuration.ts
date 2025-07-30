export default () => ({
    port: parseInt(process.env.PORT, 10) || 3001,
    database: {
        uri: process.env.MONGODB_URI,
    },
    apiUrl: process.env.API_URL,
});
