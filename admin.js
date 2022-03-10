function getAdmins(map) {
    let admins = [];

    for([key, value] of map) {
        if(value === 'Admin')
        admins.push(key);
    }
    return admins;

}

const usuarios = new Map();

usuarios.set('Jacque', 'Admin');
usuarios.set('Ueslei', 'User');
usuarios.set('Juli', 'Admin');
usuarios.set('Carmecita', 'User');

console.log(getAdmins(usuarios));