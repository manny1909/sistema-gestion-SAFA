import { dataSeed } from "../interfaces/dataSeed";

export const data:dataSeed = {
    "roles":[
        {
            "nombre": "admin",
            "nivel": 9999
        },
        {
            "nombre": "user",
            "nivel": 0
        },
    ],
    "estados":
        [
            {
                "nombre": "desactivado"
            },
            {
                "nombre": "activado"
            },
        ],
    "usuarios":
        [
            {
                "nombre": "admin",
                "email": "magnuscoltello@gmail.com",
                "password": "SAFA2022",
                "edad": 1,
                "discord": "manny1909#4506",
                "estado": 'activado',
                "observaciones": "registrado por medio de los seeders",
            },
            {
                "nombre": "user",
                "email": "safagestion2022@gmail.com",
                "password": "SAFA2022",
                "edad": 1,
                "discord": "manny1909#4506",
                "estado": 'desactivado',
                "observaciones": "registrado por medio de los seeders",
            }
        ],
    "miembros":
        [
            {
               usuario:'admin',
               rol:'admin' 
            },
            {
               usuario:'admin',
               rol:'user' 
            },
            {
               usuario:'user',
               rol:'user' 
            },
        ]
}
