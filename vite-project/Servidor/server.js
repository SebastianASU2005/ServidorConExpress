const { config } = require('./config/config')
const express=require('express')
const path=require('path')
const fs = require("fs");


const app=express()
port=config.port

pathDist=path.join(__dirname,"../dist")

//Comprobar que el archivo dist existe para evitar errores
if (!fs.existsSync(path.join(pathDist, "index.html"))) {
    console.error("ERROR: No se encontró 'dist/index.html'. Ejecuta 'npm run build'.");
    process.exit(1);
}
app.use(express.static(pathDist))


app.listen(port,()=>{
    console.log(`Servidor corriendo en: http://localhost:${port}`)
})

app.get(/.*/, (req, res) => {
    res.sendFile(path.join(distPath, "index.html"), (err) => {
      if (err) {
        console.error("Error al cargar index.html:", err);
      }
    });
  });
  