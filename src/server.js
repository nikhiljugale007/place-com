import { Server, Model, RestSerializer } from "miragejs";
import {
  loginHandler,
  signupHandler,
} from "./backend/controllers/AuthController";
import {
  getAllDrivesHandler,
  getDriveHandler,
} from "./backend/controllers/DriveController";
import { addItemToAppliedDrive } from "./backend/controllers/AppliedController";
import { drives } from "./backend/db/drive";
import { categories } from "./backend/db/categories";
import { users } from "./backend/db/users";
import {
  editUserHandler,
  getAllUsersHandler,
  getUserHandler,
} from "./backend/controllers/UserController";

export function makeServer({ environment = "development" } = {}) {
  return new Server({
    serializers: {
      application: RestSerializer,
    },
    environment,
    // TODO: Use Relationships to have named relational Data
    models: {
      drive: Model,
      category: Model,
      user: Model,
      like: Model,
      history: Model,
      playlist: Model,
      watchlater: Model,
    },

    // Runs on the start of the server
    seeds(server) {
      server.logging = false;
      drives.forEach((item) => {
        server.create("drive", { ...item });
      });
      categories.forEach((item) => server.create("category", { ...item }));
      users.forEach((item) =>
        server.create("user", {
          ...item,
        })
      );
    },

    routes() {
      this.namespace = "api";
      // auth routes (public)
      this.post("/auth/signup", signupHandler.bind(this));
      this.post("/auth/login", loginHandler.bind(this));

      // drive routes (public)
      this.get("/drives", getAllDrivesHandler.bind(this));
      this.get("drives/:driveId", getDriveHandler.bind(this));

      this.post("/user/applied", addItemToAppliedDrive.bind(this));

      //admin routes
      this.get("/users", getAllUsersHandler.bind(this));
      this.get("/users/:userId", getUserHandler.bind(this));
      this.post("users/edit", editUserHandler.bind(this));
    },
  });
}
