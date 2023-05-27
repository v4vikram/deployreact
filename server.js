import express from "express";
import path from 'path';
import {fileURLToPath} from 'url';


const app = express();
const PORT  = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// middleware
app.use(express.json());

// static file
app.use(express.static(path.join(__dirname, './client/build')));

app.use("*",(req, res)=>{
   res.sendFile(path.join(__dirname, './client/build/index.html'))
});


app.listen(PORT, ()=>{
    console.log(`Server running on this PORT ${PORT}`);
})