import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options:swaggerJSDoc.Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "university API",
            version: "1.0.0",
            description: "To Do List API Information",
        },
    },
    apis: ["src/../dist/routes/*.js"],
};

const specs = swaggerJSDoc(options);

export { specs, swaggerUi }