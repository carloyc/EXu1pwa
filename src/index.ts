import app from './config/express';

const main =()=>{
    try{
app.listen(3000);
console.log("server running");
    }catch(error){
        console.log(error);
    }
}