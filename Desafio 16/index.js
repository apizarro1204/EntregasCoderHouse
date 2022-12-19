import express from "express"
import routerSession from "./src/routes/web/newConnect.js"
import prodRouter from "./src/routes/api/prodRouter.js"
import yargs from 'yargs';

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static("/public"))
app.use("/", routerSession)
app.use("/api/productos-test", prodRouter);

app.set("view engine", "ejs");
app.set("views", "./views");



//const PORT = process.env.port || 8080
const PORT = parseInt(process.argv[2]) || 8080
// console.log(process.argv);

// escucha de parametros yargs

const args = yargs(process.argv.slice(2)).alias({
	m: "modo",
	p: "puerto",
	d: "debug",
}).default({
	modo: "prod",
	puerto: 8080,
	debug: false
}).argv;


// const server = app.listen(args.p, () => {
// 		console.log(`Http server started on port ${server.address().port}`)
// 	})
// 	server.on("error", (error) => console.log(`Error in server ${error}`))
	
const server = app.listen(PORT, () => {
	console.log(`Http server started on port ${server.address().port}`)
})
server.on("error", (error) => console.log(`Error in server ${error}`))
