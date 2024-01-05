import { dataSeed } from "../interfaces/dataSeed";

export const data:dataSeed = {
    "users": [
        {
            "name": "admin",
            "email": "magnuscoltello@gmail.com",
            "password": "$2b$10$cYhCSW4aVmyOljtfw5up2.9oLMeTvFVvSd.fjzgi6WOhx6ag7kOW6",
            "token": null,
            "age": 25,
            "discord": "manny19_",
            "state": 1,
            "observations": "Observaciones generales",
            "role_ids": [],
            "roles": []
        },
        {
            "name": "customer",
            "email": "goodfellagalileo@gmail.com",
            "password": "$2b$10$cYhCSW4aVmyOljtfw5up2.9oLMeTvFVvSd.fjzgi6WOhx6ag7kOW6",
            "token": null,
            "age": 18,
            "discord": "7dova_",
            "state": 1,
            "observations": "Observaciones generales",
            "role_ids": [],
            "roles": []
        },
    ],
    "roles": [
        {
            "name": "Administrador",
            "level": 99
        },
        {
            "name": "customer",
            "level": 1
        },
        {
            "name": "Líder general SAPD",
            "level": 20
        },
        {
            "name": "Líder general SAFA",
            "level": 20
        },
        {
            "name": "Líder general FBI",
            "level": 20
        },
    ], 
     
    
}
