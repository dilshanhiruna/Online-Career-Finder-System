const express = require("express");
const {
  getJobPost,
  getJobPosts,
  createJobPost,
  updateJobPost,
  deleteJobPost,
  publishJobPost,
  getMyJobPosts,
} = require("../controllers/jobs.js");

const router = express.Router();

router.get("/jobs", getJobPosts);
router.get("/myjobs/:userID", getMyJobPosts);
router.get("/jobs/:id", getJobPost);
router.post("/createjob", createJobPost);
router.put("/jobs/:id", updateJobPost);
router.put("/jobs/publish/:id", publishJobPost);
router.delete("/jobs/:id", deleteJobPost);
module.exports = router;
