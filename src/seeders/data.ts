import { dataSeed } from "../interfaces/dataSeed";

export const data:dataSeed = {
    "roles":[
        {
            "nombre": "admin"
        },
        {
            "nombre": "user"
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
                "rol": 'admin',
                "nombre": "admin",
                "email": "magnuscoltello@gmail.com",
                "password": "SAFA2022",
                "edad": 1,
                "discord": "manny1909#4506",
                "estado": 'activado',
                "observaciones": "registrado por medio de los seeders",
            },
            {
                "rol": 'user',
                "nombre": "user",
                "email": "safagestion2022@gmail.com",
                "password": "SAFA2022",
                "edad": 1,
                "discord": "manny1909#4506",
                "estado": 'desactivado',
                "observaciones": "registrado por medio de los seeders",
            }
        ]
}
