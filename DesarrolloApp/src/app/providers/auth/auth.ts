import { Injectable } from "@angular/core";

export interface User {
    email: string;
    rol: number;
}

@Injectable()
export class AuthProvider {
    usuarioActual: User;

    constructor(){
    }

    login(email: string, password: string) : Promise<boolean> {
        return new Promise((entrar, rechazar) =>{
            if (email === 'profe@duoc.cl' && password === '123'){
                this.usuarioActual = {
                    email: email,
                    rol: 0
                };
                entrar(true);
            } else if (email === 'alumno@duoc.cl' && password === '123'){
                this.usuarioActual = {
                    email: email,
                    rol: 1
                };
                entrar(true);
            } 
            else {
                rechazar(false);
            }
        });
    }

    isLoggedIn() {
        return this.usuarioActual != null;
    }

    logout() {
        this.usuarioActual = null;
    }

    esProfe(){
        return this.usuarioActual.rol === 0;
    }

}