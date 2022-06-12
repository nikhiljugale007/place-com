import { Response } from "miragejs";
import { formatDate, requiresAuth } from "../utils/authUtils";

/**
 * All the routes related to user are present here.
 * */

/**
 * This handler handles gets all users in the db.
 * send GET Request at /api/users
 * */

export const getAllUsersHandler = function () {
  return new Response(200, {}, { users: this.db.users });
};

/**
 * This handler handles get a user from userId in the db.
 * send GET Request at /api/users/:userId
 * */

export const getUserHandler = function (schema, request) {
  const userId = request.params.userId;
  try {
    const user = schema.users.findBy({ _id: userId }).attrs;
    return new Response(200, {}, { user });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};
export const editUserHandler = function (schema, request) {
  let user = requiresAuth.call(this, request);
  try {
    if (!user) {
      return new Response(
        404,
        {},
        {
          errors: [
            "The username you entered is not Registered. Not Found error",
          ],
        }
      );
    }
    const { userData } = JSON.parse(request.requestBody);
    user = { ...user, ...userData, updatedAt: formatDate() };
    this.db.users.update({ _id: user._id }, user);
    return new Response(201, {}, { user });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};
