const Koa=require('koa');

const app=new Koa();

app.use(ctx=>{
    if(ctx.path=='/'){
        ctx.body='<h1>Welcome to our website</h1>'
    }
    else if(ctx.path=='/about'){
        ctx.body='<h1>ABOUT PAGE</h1>'
    }
    else if(ctx.path=='/contact'){
        ctx.body='<h1>CONTACT PAGE</h1>'
    }
    else{
        ctx.body='<h1>ERROR 404 : Page not found</h1>'
    }
})



app.listen(3000)