class Usuario {
    constructor( user, pass) {
        this.user = user;
        this.pass = pass;
        this.login = false
    }

    logearse(user, pass) {
        if ( user == this.user && pass == this.pass) {
            this.login = true
            alert('Bienvenido ' + this.user)
        } else {
            alert('Usuario o contraseña incorrectos')
        }
    }

    desloguearse() {
        this.login = false
        alert('Sesión cerrada')
    }

    cambiarUser(newUser) {
        this.user = newUser
    }

    cambiarPass(newPass) {
        this.pass = newPass
    }
}

let usuario1 = new Usuario('Danny', 'dani12345')

const logueo = () => {
    do {
        let user = prompt('Ingrese su usuario')
        let pass = prompt('Ingrese su contraseña')
        usuario1.logearse(user, pass)
        console.log(usuario1.login);
    } while (!usuario1.login);
}

const opciones = () => {
    while(usuario1.login) {
        const accion = prompt('Cambiar usuario: 1 \nCambiar contraseña: 2 \nCerrar sesión: 3');
        switch (accion) {
            case '1':
                let nuevoUser = prompt('ingrese nuevo nombre de usuario');
                usuario1.cambiarUser(nuevoUser);
                alert('¡Cambiaste el usuario con exito!');
                break;
            case '2':
                let nuevoPass = prompt('ingrese nueva contraseña');
                usuario1.cambiarPass(nuevoPass);
                alert('¡Cambiaste la contraseña con exito!');
                break;
            case '3':
                usuario1.desloguearse();
                break;
            default:
                alert('La opcion ingresada no es válida');
                break;
        }
    }
}

const iniciar = () => {
    while (true) {
        logueo()
        opciones()
    }
}

iniciar()