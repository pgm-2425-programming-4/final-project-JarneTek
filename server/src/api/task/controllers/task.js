"use strict";

/**
 * task controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::task.task", ({ strapi }) => ({
  async getStatuses(ctx) {
    try {
      const statuses =
        await strapi.entityService.findMany("api::status.status");
      return ctx.send(statuses);
    } catch (error) {
      ctx.throw(500, error);
    }
  },
}));
