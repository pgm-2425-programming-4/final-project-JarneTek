module.exports = {
  routes: [
    {
      method: "GET",
      path: "/statuses",
      handler: "task.getStatuses",
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
  ],
};
