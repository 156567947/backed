const Koa= require('koa');
const Router = require('koa-router');
const mockList = require('./mock/index');

const app=new Koa();
const router = new Router();

async function getRes(fn){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const res = fn();
            resolve(res);
        }, 1500);
    })
}

mockList.forEach(item => {
    const { url, method, response } = item;
    router[method](url, async (ctx) => {
        const res= await getRes(response);
        ctx.body = res;
    })
})

app.use(router.routes())
app.listen(3001, () => {
    console.log(`server is running at http://localhost:3001`)
})
