module.exports = {
  // method of operation
  get: {
    tags: ["Fav"], // operation's tag.
    description: "Get fav", // operation's desc.
    summary: "Get fav items",
    operationId: "getFav", // unique operation id.
    parameters: [], // expected params.
    security: [
      {
        JWT: [],
      },
    ],
    // expected responses
    responses: {
      // response code
      200: {
        description: "Fav obtained", // response desc.
        content: {
          // content-type
          "application/json": {
            schema: {
              type: "array",
              items: {
                $ref: "#/components/schemas/FavItem",
              },
            },
          },
        },
      },
      401: {
        description: "Unauthorized",
      },
      500: {
        description: "Server error",
      },
    },
  },
};
