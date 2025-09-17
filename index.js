<<<<<<< HEAD
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'CSS')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let blogPosts = [];

app.get("/", (req,res)=>{
    res.render("home", {
        title: "Create a new post",
        posts: blogPosts
    })
});

app.post("/create-post", (req, res) => {
    const { author, title, content } = req.body;
    
    if (author && title && content) {
        const newPost = {
            id: Date.now().toString(),
            author: author.trim(),
            title: title.trim(),
            content: content.trim(),
            createdAt: new Date().toLocaleString([], {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            })
        };
        
        blogPosts.unshift(newPost); 
    }
    
    res.redirect("/blog");
});

app.get("/blog", (req, res) => {
    res.render("blog", { 
        title: "Blog Posts - My Blog",
        posts: blogPosts 
    });
});


app.listen (port, ()=> {
    console.log(`Server running on port ${port}.`);
=======
import express from "express";
const app = express();
const port = 3000;

app.get("/", (req,res)=>{
    res.send("Hello World!")
});

app.listen (port, ()=> {
    console.log(`Server running on port ${port}.`);
>>>>>>> bcea026db06a9b816283bc85f09e62dedb3300f1
});