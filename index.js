const cron = require("node-cron");

// Schedule a cron job to run at 9:00 AM every day
cron.schedule("0 9 * * *", () => {
  console.log(new Date());
});
