
class Usuarios {
    constructor (nombre, apellido, User, Pass, fecha) {
        this.nombre = nombre,
        this.apellido = apellido
        this.User = User,
        this.Pass = Pass,
        this.fechaRegistro = fecha
    };

    actualizarPass = (pass) => {
        this.Pass = pass;
    }

    actualizarUser = (user) => {
        this.User = user;
    };
}

class App {
    constructor () {
        this.usuarios = []
        this.User = null
    }

    autenticar = (user, pass) => {
        const usuario = this.usuarios.find( u => u.User === user);
        return usuario?.Pass === pass
    }

    verDatos = () => {
        const datos = `Nombre  ${this.User.nombre} ${this.User.apellido} \nUsuario: ${this.User.User} \nFecha de registro ${this.User.fechaRegistro}`
        alert(datos)
    }

    sesion = ()  => {
        while (this.User) {
            let opcion = prompt(`¡Bienvenido ${this.User.nombre} \nIngrese: \n1 - Ver datos de usuario \n2 - Cambiar nombre de usuario \n3 - Cambiar contraseña \n4 - Cerrar sesión \n5 - Eliminar cuenta`).trim();
            switch (parseInt(opcion)) {
                case 1:
                    this.verDatos()
                    break;
                case 2:
                    this.cambiarNombreUsuario()
                    break;
                case 3:
                    this.cambiarContrasenia()
                    break;
                case 4:
                    alert('Adios ' + this.User.nombre)
                    this.User = null
                    break;
                case 5:
                    this.eliminarUsuario()
                    this.User = null
                    break;
                default:
                    alert('Opción inválida')
                    break;
            }
        }
    }

    cambiarNombreUsuario = () => {
        const objeto = this.usuarios.find( u => u.User == this.User.User);

        const newUser = prompt('Ingrese su nuevo nombre de usuario');

        alert('¡Cambiaste tu nombre de ' + this.User.User + ' a ' + newUser + '!');
        objeto.actualizarUser(newUser);
    }

    cambiarContrasenia = () => {
        const objeto = this.usuarios.find( u => u.User == this.User.User);

        while (true) {
            const newPass = prompt('Ingrese su nueva contraseña');

            const newPassR = prompt('Repita su nueva contraseña');

            if ( newPass === newPassR) {
                alert('¡Cambiaste tu contraseña!');
                objeto.actualizarPass(newPass);
                break;
            } else {
                alert('Las contraseñas no coinciden');
            }
        }

        
    }

    iniciarSesion = () => {
        const user = prompt('Ingrese su nombre de usuario').trim();
        const pass = prompt('Ingrese su nombre de contraseña');
        if (this.autenticar(user, pass)) {
            const usuario = this.usuarios.find( u => u.User === user)
            this.User = usuario;
            this.sesion();
        } else {
            alert('Nombre de usuario o contraeña incorrecto/s');
        }
    }

    registrarse = () => {
        while (true) {
            const nombre = prompt('Ingrese su nombre de pila').trim();
            const apellido = prompt('Ingrese su apellido').trim();
            const user = prompt('Ingrese un nombre de usuario').trim();
            var pass = ''
            var passR = ''
            do {
                if (pass !== passR) {
                    alert('Las contraseñas no coinciden')
                }
                pass = prompt('Ingrese una contraseña');
                passR = prompt('Repita la contraseña');
            } while (pass !== passR);

            const existe = this.usuarios.some( u => u.User == user);

            const fecha = new Date().toLocaleDateString()

            if (existe) {
                alert('El usuario ya existe');
            } else {
                this.usuarios.push(new Usuarios(nombre, apellido, user, pass, fecha))
                alert('¡Usuario ' + user + ' creado!');
                break;
            };
        };
    };

    eliminarUsuario = () => {
        const objeto = this.usuarios.find( u => u.User == this.User.User);

        const {User, Pass} = objeto;

        while (true) {
            const pass = prompt('Ingrese su contraseña para eliminar su cuenta');

            if ( pass === Pass) {
                alert(`Eliminaste tu usario ${User}`)
                this.usuarios = this.usuarios.filter( u => u.User !== User )
                break;
            } else {
                alert('Contaseña incorrecta')
            };
        };
    };

    verUsuarios = () => {
        let listaUsuarios = 'Usuarios registrados: \n'

        if (this.usuarios.length > 0) {
            this.usuarios.forEach( u => {
                listaUsuarios = listaUsuarios + `\nNombre: ${u.nombre} ${u.apellido} \nUsuario: ${u.User} \n`
            });
            alert(listaUsuarios)
        } else {
            alert('No hay usuarios registrados :(')
        }
        
    }

    iniciar = () => {
        let iniciar = true;
        while (iniciar) {
            let opcion = prompt('¡Bienvenido! \n Ingrese: \n 1 - loguearse \n 2 - Registrarse \n 3 - Usuarios registrados \n 4 - Salir').trim();
            switch (parseInt(opcion)) {
                case 1:
                    this.iniciarSesion();
                    break;
                case 2:
                    this.registrarse();
                    break;
                case 3:
                    this.verUsuarios();
                    break;
                case 4:
                    iniciar = false;
                    alert('Adios!!')
                    break;
                default:
                    alert('Opción inválida');
                    break;
            };
        };
    };
};

const app1 = new App()

app1.iniciar()






