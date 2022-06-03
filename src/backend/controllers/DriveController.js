import { Response } from "miragejs";

/**
 * All the routes related to Videos are present here.
 * These are Publicly accessible routes.
 * */

/**
 * This handler handles gets all videos in the db.
 * send GET Request at /api/videos
 * */

export const getAllDrivesHandler = function () {
  try {
    return new Response(200, {}, { drives: this.db.drives });
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

/**
 * This handler handles uploads a new video to the db.
 * send POST Request at /api/user/videos/
 * */

// TODO: postVideoHandler

/**
 * This handler handles gets all videos in the db.
 * send GET Request at /api/user/videos/:videoId
 * */

export const getDriveHandler = function (schema, request) {
  const { driveId } = request.params;
  try {
    const drive = schema.drives.findBy({ _id: driveId }).attrs;
    return new Response(200, {}, { drive });
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
