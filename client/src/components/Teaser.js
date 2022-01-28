function Teaser({searchContent, setSearch}) {
function handleClick(){
fetch('/test')
.then(res=>res.json())
.then(console.log('clicked'))
}
    return(
        <div>
        <h1 className="font-header text-center mt-8 mb-8 text-4xl font-mono">Double or nothing... but hold the house fees</h1>
{/* Setup degen coin flip style teaser */}
{/* need to fix up button, and add the text at the top (do pixel font if you can.) */}

    <div className="grid place-items-center align-middle" >
    <img onClick={handleClick} className="float-left justify-center lg h-32 w-auto"
                    src="https://i.ibb.co/7Js60Ym/Dcf.png"
                    alt="Degen Coin Flip"/>
        <p className="text-8xl  mx-4 float-left justify-center text-center ">+</p>
                    {/* Add a PLUS sign, then the Matic emblem */}
    <img className="float-left mt-4" src="https://i.ibb.co/Mp2DKwy/polyg2.jpg" alt="polyg2" border="0"/>
        <button className="mt-8 px-4 py-2 border border-transparent text-l font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Select Wallet</button>
    </div>
        </div>

    )
}export default Teaser


// <!doctype html>
// <html lang="en">
// <head><meta charset="utf-8"/><link rel="icon" href="/favicon.ico"/><meta name="viewport" content="width=device-width,initial-scale=1"/><meta name="theme-color" content="#000000"/>
// <link rel="apple-touch-icon" href="/logo192.png"/><link rel="manifest" href="/manifest.json"/><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossorigin="anonymous" referrerpolicy="no-referrer"/>
// <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"><script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

// <title>Degen Coin Flip</title>
// <meta name="description" content="Double your sol instantly. Try it for yourself on Solana."/>
// <script async src="https://www.googletagmanager.com/gtag/js?id=G-DBTRFDJ1M0"></script>
