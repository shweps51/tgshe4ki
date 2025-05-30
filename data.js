// frontend/data.js
const museumsData = [
    {
        id:1,
        title:"Канальчик Денчика",
        image:"images/sicko.png",
        description:'<a href="https://t.me/sickorevenge" target="_blank">Ссылочка на тгк</a>'
    },
    {
        id:2,
        title:"Канальчик кьюти",
        image:"images/qute.png",
        description:'<a href="https://t.me/qut3e" target="_blank">Ссылочка на тгк</a>'
    },
    {
        id:3,
        title:"Канальчик снежаны",
        image:"images/snezha.png",
        description:'<a href="https://t.me/user1ecx1tal0hh" target="_blank">Ссылочка на тгк</a>'

    },
    {
        id:4,
        title:"Патипаблик",
        image:"images/party.png",
        description:'<a href="https://t.me/partyypublic" target="_blank">Ссылочка на тгк</a>'
    }
    // ... остальные музеи
];

// Функция поиска
function searchMuseums(query = "") {
    if (!query) return museumsData;
    return museumsData.filter(museum => 
        museum.title.toLowerCase().includes(query.toLowerCase()) ||
        museum.description.toLowerCase().includes(query.toLowerCase())
    );
}
