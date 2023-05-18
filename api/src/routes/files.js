const { Router } = require("express");
const router = Router();
const {
  getAllFiles,
  getFilesList
} = require("../controllers/files");

router.get("/data",getAllFiles);
router.get("/list",getFilesList);

module.exports = router;
