module.exports = {
  // operation's method.
  delete: {
    tags: ["Fav"], // operation's tag
    description: "Removing a item", // short desc
    summary: "Remove item from cart",
    operationId: "removeItem", // unique operation id
    parameters: [],
    security: [
      {
        JWT: [],
      },
    ],
    requestBody: {
      // expected request body
      content: {
        // content-type
        "application/json": {
          schema: {
            type: "object",
            properties: {
              id: {
                type: "number",
                description: "ID of product to remove from fav",
                example: 34,
              },
            },
          },
        },
      },
    },
    // expected responses
    responses: {
      // response code
      200: {
        description: "Item removed successfully", // response desc
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
      // response code
      500: {
        description: "Server error", // response desc
      },
    },
  },
};
