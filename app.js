const express = require("express");
	
	const app = express();
	
	app.get("/", (req, res) => {
	  console.log(`api runnig succesfully`);
	});
	
	const PORT = process.env.PORT || 5000;
	
	app.listen(PORT, () => {
	  console.log(`server running - on ${PORT}`);
	});
 