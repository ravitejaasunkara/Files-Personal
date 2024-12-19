async function getData(){
    let data = await fetch('https://jsonplaceholder.typicode.com/posts');
    let result = await data.json();
    console.log(...data);
    return result;
}

getData().then(res => {
    console.log(res);
})