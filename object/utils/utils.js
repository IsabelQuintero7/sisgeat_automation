
//Crea  nombres al azar
export function listNameUser() {
    const nombres = [
        "Juan Carlos", "Yan Harold", "Maria Jose", "Luis Miguel", "Ana Maria",
        "Carlos Andres", "Laura Sofia", "Diego Alejandro", "Paula Andrea", "Jose Luis",
        "Camila Fernanda", "Andres Felipe", "Valentina Isabel", "Pedro Antonio", "Daniela Alejandra",
        "Javier Eduardo", "Sara Daniela", "Felipe Ignacio", "Natalia Patricia", "Juan Sebastián",
        "Marcela Beatriz", "Mateo Esteban", "Monica Marcela", "Julio Cesar", "Carolina Andrea",
        "Miguel Angel", "Isabela Sofia", "Germán Alonso", "Verónica Lucia", "Gabriel Alejandro",
        "Adriana Carolina", "Hernando Jose", "Diana Marcela", "Manuel Jose", "Erika Paola",
        "Jorge Ivan", "Fabiola Patricia", "Ricardo Antonio", "Lina Maria", "Mario Alberto",
        "Lucia Fernanda", "Santiago Andres", "Martha Elena", "Cesar Augusto", "Clara Isabel",
        "Fernando Jose", "Paulina Andrea", "Alberto Enrique", "Estefania Alejandra", "Cristian David"
    ];

    const randomName = nombres[Math.floor(Math.random() * nombres.length)];
    const randomNameUser = randomName;
    return randomNameUser;
}


//Crea apellidos al azar
export function listLastnameUser() {
    const apellidos = [
        "Garcia Lopez", "Rodriguez Martinez", "Fernandez Perez", "Gonzalez Sanchez", "Martinez Lopez",
        "Sanchez Perez", "Perez Gomez", "Lopez Martinez", "Martin Sanchez", "Serrano Gutierrez",
        "Romero Alonso", "Suarez Diaz", "Torres Ramos", "Diaz Ruiz", "Perez Muñoz",
        "Gil Romero", "Jimenez Navarro", "Ruiz Vazquez", "Vazquez Guerrero", "Santos Castillo",
        "Castro Rubio", "Herrera Molina", "Molina Gomez", "Ortega Delgado", "Reyes Romero",
        "Ramirez Medina", "Navarro Prieto", "Gutierrez Ruiz", "Vidal Cabrera", "Cabrera Cruz",
        "Cruz Santos", "Sanchez Navarro", "Prieto Ortega", "Iglesias Vidal", "Cabrera Diaz",
        "Delgado Serrano", "Reyes Lopez", "Gomez Ramirez", "Cruz Castro", "Blanco Herrera",
        "Mendez Castro", "Vazquez Jimenez", "Flores Iglesias", "Pascual Mendez", "Vega Blanco",
        "Soto Flores", "Hernandez Vega", "Muñoz Pascual", "Fuentes Soto"
    ];
    const randomLastname = apellidos[Math.floor(Math.random() * apellidos.length)]
    const randomLastnameUser = randomLastname;
    return randomLastnameUser;
}
export function rollUserRandom() {
    const listRollUser = ['Profesional EAT', 'Coordinador EAT', 'Revisor subdirección', 'Subdirector', 'Administrador', 'Coordinador DNP', 'Profesional DNP', 'Profesional DNP']
    const rollUser = listLastnameUser[Math.floor(Math.random() * listRollUser.length)]
    const randomRoll = rollUser;
    return randomRoll
}

export function numeroAleatorio10Digitos() {
    const numeros = Math.floor(Math.random() * 9000000000) + 1000000000;
    const numerosrandom = numeros
    return numerosrandom.toString()
}

export function numeroAleatorio8Digitos() {
    const numeros = Math.floor(Math.random() * 90000000) + 10000000;
    const numerosrandom = numeros
    return numerosrandom.toString()
}
export function numeroAleatorio4Digitos() {
    const numeros = Math.floor(Math.random() * 9000) + 1000;
    const numerosrandom = numeros
    return numerosrandom.toString()
}



//Seleccionar fecha de nacimiento
export function selectBirthDay() {
    const years = [
        '2000',
        '1999', '1998', '1997', '1996', '1995',
        '1994', '1993', '1992', '1991', '1990',
        '1989', '1988', '1987', '1986', '1985',
        '1984', '1983', '1982', '1981', '1980',
        '1979', '1978', '1977', '1976', '1975',
        '1974', '1973', '1972', '1971', '1970',
        '1969', '1968', '1967', '1966', '1965',
        '1964', '1963', '1962', '1961', '1960'
    ];
    const indexYear = years[Math.floor(Math.random() * years.length)]
    const ramdomyear = indexYear;
    const days = [
        '01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
        '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
        '21', '22', '23', '24', '25', '26', '27', '28'
    ];
    const indexDays = days[Math.floor(Math.random() * days.length)]
    const randomDays = indexDays;

    const months = [
        '01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
        '11', '12'
    ];
    const indexMonths = months[Math.floor(Math.random() * months.length)]
    const randomMonths = indexMonths;

    const randomDate = ramdomyear + '-' + randomMonths + '-' + randomDays;
    return randomDate
}


export function selectTypeDirection(){
    const listTypeDirection = [
        'Vía',
        'Transversal',
        'Manzana',
        'Diagonal',
        'Circunvalar',
        'Circular',
        'Avenida',];
    const indexTypeDirection = listTypeDirection[Math.floor(Math.random()* listTypeDirection.length)]
    const randomTypeDirection = indexTypeDirection
    return randomTypeDirection;
}
export function selectTypeDocuments(){
    const listTypeDocument = [
        'Cédula',
        'Cédula de extranjería'];
    const indexTypeDocument = listTypeDocument[Math.floor(Math.random()* listTypeDocument.length)]
    const randomTypeDocument = indexTypeDocument
    return randomTypeDocument;
}

export function selectMunicipalityAmazonas(){
    const listMunicipality = ['El encanto',
        'La chorrera',
        'La pedrera',
        'La victoria',
        'Leticia',
        'Mirití - paraná',
        'Puerto alegría',
        'Puerto arica',
        'Puerto nariño',
        'Puerto santander',
        'Tarapacá']
    const indexMunicipality = listMunicipality[Math.floor(Math.random()* listMunicipality.length)]
    const randomMunicipality = indexMunicipality
    return randomMunicipality;
}
export function selectMunicipalityArauca(){
    const listMunicipality = [
        'Arauquita',
        'Cravo norte',
        'Fortul',
        'Puerto rondón',
        'Saravena',]
    const indexMunicipality = listMunicipality[Math.floor(Math.random()* listMunicipality.length)]
    const randomMunicipality = indexMunicipality
    return randomMunicipality;
}


export function selectEscolarity(){
    const listEscolarity = [
        'Doctorado',
        'Especialización',
        'Maestría',
        'Preescolar',
        'Pregrado',
        'Primaria',
        'Postdoctorado',
        'Secundaria',
        'Técnica',
        'Tecnológia']
    const indexEscolarity = listEscolarity[Math.floor(Math.random()* listEscolarity.length)]
    const randomEscolarity = indexEscolarity
    return randomEscolarity;
}

export function selectGender(){
    const listGender = ['Masculino',
        'Femenino',
        'Prefiero no decirlo']
    const indexGender = listGender[Math.floor(Math.random()* listGender.length)]
    const randomGender = indexGender
    return randomGender;
}

export function selectChargeEAT(){
    const listCharge = ['Contratista',
        'Empleado de planta',
        'Gerente',
        'Otro']
    const indexCharge = listCharge[Math.floor(Math.random()* listCharge.length)]
    const randomCharge = indexCharge
    return randomCharge;
}

export function numeroAleatorioEntre0y20() {
    return Math.floor(Math.random() * 21);
}

