db.empresa.insertMany([

    {   _id:1,
        "Nombreempleado": "Rafael",
        "Apellidosempleado": "Gutiérrez",
        "Departamentosempleado": "Ventas",
        "provincia":"Cordoba",
        "Fechanacimiento": new Date("1980-12-23"),
        "diastrabajados": 300,
    },

    {   _id:2,
        "Nombreempleado": "Juan",
        "Apellidosempleado": "Jiménez",
        "Departamentoempleado": "Administración",
        "provincia":"Jaén",
        "Fechanacimiento": new Date("1979-10-12"),
        "diastrabajados": 500,
    },
    {   _id:3,
        "Nombreempleado": "Diego",
        "Apellidosempleado": "Martínez",
        "Departamentoempleado": "Marketing",
        "provincia":"Cordoba",
        "Fechanacimiento": new Date("1990-11-16"),
        "diastrabajados": 1000,
    },
    {   _id:4,
        "Nombreempleado": "Javier",
        "Apellidosempleado": "Maroto",
        "Departamentoempleado": "Marketing",
        "provincia":"Madrid",
        "Fechanacimiento": new Date("1978-09-14"),
        "diastrabajados": 2300,
    },
    {   _id:5,
        "Nombreempleado": "Enrique",
        "Apellidosempleado": "Pastor",
        "Departamentoempleado": "Administración",
        "provincia":"Madrid",
        "Fechanacimiento": new Date("1960-02-11"),
        "diastrabajados": 10000,
    },
    {   _id:6,
        "Nombreempleado": "Fermín",
        "Apellidosempleado": "Trujillo",
        "Departamentoempleado": "Marketing",
        "provincia":"Málaga",
        "Fechanacimiento": new Date("1983-07-18"),
        "diastrabajados": 1200,
    },
    {   _id:7,
        "Nombreempleado": "Amador",
        "Apellidosempleado": "Rivas",
        "Departamentoempleado": "Administración",
        "provincia":"Madrid",
        "Fechanacimiento": new Date("1976-05-12"),
        "diastrabajados": 8,
    },
    {   _id:8,
        "Nombreempleado": "Elena",
        "Apellidosempleado": "Williamson",
        "Departamentoempleado": "Administración",
        "provincia":"Barcelona",
        "Fechanacimiento": new Date("1994-09-22"),
        "diastrabajados": 1000,
    },

    {   _id:9,
        "Nombreempleado": "José",
        "Apellidosempleado": "Torronteras",
        "Departamentoempleado": "Ventas",
        "provincia":"Córdoba",
        "Fechanacimiento": new Date("1990-10-30"),
        "diastrabajados": 1900,
    },
    {   _id:10,
        "Nombreempleado": "Sergio",
        "Apellidosempleado": "Lavezzi",
        "Departamentoempleado": "Marketing",
        "provincia":"Huelva",
        "Fechanacimiento": new Date("1970-01-11"),
        "diastrabajados": 120,
    },

    {   _id:11,
        "Nombreempleado": "Royston",
        "Apellidosempleado": "Drenthe",
        "Departamentoempleado": "Administración",
        "provincia":"Sevilla",
        "Fechanacimiento": new Date("1991-08-17"),
        "diastrabajados": 20,
    },

    {   _id:12,
        "Nombreempleado": "Adolfo",
        "Apellidosempleado": "Johannson",
        "Departamentoempleado": "Ventas",
        "provincia":"Sevilla",
        "Fechanacimiento": new Date("1959-11-10"),
        "diastrabajados": 1000000,
    }
]);


db.departamentos.insertMany([

{
    _id:1,
    "Departamento": "Ventas",
    "Salario": 2000
},

{
    _id:2,
    "Departamento": "Marketing",
    "Salario": 3000
},

{
    _id:3,
    "Departamento": "Administración",
    "Salario":1500
}

]);

db.departamentos.aggregate([
    {
       $lookup:
          {
             from: "empresa",
             localField: "Departamento",
             foreignField: "Departamentoempleado",
             as: "Infoempresa"
         }
    }
 ]).pretty()


 