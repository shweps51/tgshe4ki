// frontend/data.js
const museumsData = [
    {
        id:1,
        title:"Денчик",
        image:"images/sicko.png",
        description:'<a href="https://t.me/sickorevenge" target="_blank">Ссылочка на тгк</a>'
    },
    {
        id:2,
        title:"Ваня кьюти",
        image:"images/qute.png",
        description:'<a href="https://t.me/qut3e" target="_blank">Ссылочка на тгк</a>'
    },
    {
        id:3,
        title:"Снежа кьюти",
        image:"images/snezha.png",
        description:'<a href="https://t.me/user1ecx1tal0hh" target="_blank">Ссылочка на тгк</a>'

    },
    {
        id:4,
        title:"Патипаблик",
        image:"images/party.png",
        description:'<a href="https://t.me/partyypublic" target="_blank">Ссылочка на тгк</a>'
    },
    {
        id:5,
        title:"Лика",
        image:"images/lika.png",
        description:'<a href="https://t.me/lilshirchirr_meow" target="_blank">Ссылочка на ткг</a>'

    },
    { 
        id:6,
        title:"Леся гг",
        image:"images/lesyagg.png",
        description:'<a href="https://t.me/leesssu" target="_blank">Ссылочка на тгк</a>'
        
    },
    {
        id:7,
        title:"Хоумис",
        image:"images/homis.png",
        description:'<a href="https://t.me/shsbbd228" target="_blank">Ссылочка на тгк</a>'
    },
    {
        id:8,
        title:"Леся Плюшкина",
        image:"images/plushka.png",
        description:'<a href="https://t.me/sinlessnes" target="_blank">Ссылочка на тгк</a>'
    },
    {
        id:9,
        title:"Культурные ребята",
        image:"images/cultreb.png",
        description:'<a href="https://t.me/Kichirow" target="_blank">Ссылочка на тгк</a>'

    },
    {
        id:10,
        title:"Илкин",
        image:"images/ilkin.png",
        description:'<a href="https://t.me/pogibni" target="_blank">Ссылочка на тгк</a>'
    },
    {
        id:11,
        title:"Р0дные",
        image:"images/r0dnie.png",
        description:'<a href="https://t.me/rodniiiiiiii" targe="_blank">Ссылочка на тгк</a>'
    },
    {
        id:12,
        title:"Уставшая",
        image:"images/ustavshaya.png",
        description:'<a href="https://t.me/ustavshaya1" target="_blank">Ссылочка на тгк</a>'
    },
    
];

// Функция поиска
function searchMuseums(query = "") {
    if (!query) return museumsData;
    return museumsData.filter(museum => 
        museum.title.toLowerCase().includes(query.toLowerCase()) ||
        museum.description.toLowerCase().includes(query.toLowerCase())
    );
}
