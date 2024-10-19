import express from "express";
import { createSingleJob, DeleteSingleJob, getAllJobs, getSingleJob, updateSingleJob } from "../controllers/job.controller.js";

const router = express.Router();


router.route("/").get(getAllJobs).post(createSingleJob);

router.route("/:id").get(getSingleJob).patch(updateSingleJob).delete(DeleteSingleJob)


export default router;