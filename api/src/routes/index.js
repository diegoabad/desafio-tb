const { Router } = require("express");
const router = Router();

const filesRoutes = require("./files");

router.use("/files", filesRoutes);

module.exports = router;
