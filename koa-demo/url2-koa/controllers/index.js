var fn_index = async (ctx, next) => {
    ctx.response.body = `<h1>Login</h1>
    <form action='/postLogin' method='post'>
        <p>Name:<input name='name' value=''></p>
        <p>PassWord:<input name='password' type='password'></p>
        <p><input type='submit' value='Submit'></p>
    </form>`
};

var fn_login = async (ctx, next) => {
    var name = ctx.request.body.name || '',
        password = ctx.request.body.password || '';
    console.log(`Login with name:${name},password:${password}`);
    if (name === 'koa' && password === '12345') {
        ctx.response.body = `<h1>Wecome,${name}</h1>`;
    } else {
        ctx.response.body = `<h1>Login failed!</h1>
        <p><a href='/login'>Try again</a></p>`;

    }
};

module.exports = {
    'GET /login': fn_index,
    'POST /postLogin': fn_login
}