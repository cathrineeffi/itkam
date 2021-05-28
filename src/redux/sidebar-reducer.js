let initialState = {
    friends: [
        {id: 1, name: 'LM', img: 'https://www.b17.ru/foto/uploaded/b69a564c47110acefb8c986f768210ac.jpg'},
        {id: 2, name: 'Anna', img: 'http://zabavnik.club/wp-content/uploads/foto_na_avu_3_19111524.jpg'},
        {id: 3, name: 'Maf', img: 'https://i.pinimg.com/564x/5c/39/7c/5c397ca4e6c1c04b08b1e9f01dcd31b1.jpg'},
        {id: 4, name: 'Dimich', img: 'https://i.mycdn.me/image?id=838968512981&ts=00000000190000012c&plc=WEB&tkn=*HgeUJJ9phxm9HWqJX7D7VF1zf5Y&fn=sqr_288'}
    ]
}

const sidebarReducer = (state = initialState, action) => {
    return state;
}

export default sidebarReducer;