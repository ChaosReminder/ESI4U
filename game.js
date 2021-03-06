const textElement = document.getElementById("text")
const optionButtonsElement = document.getElementById("option-buttons")

let state = {}

let audio = new Audio('');
decision = new Audio ('https://soundbible.com/mp3/Shake%20And%20Roll%20Dice-SoundBible.com-591494296.mp3');

function startGame(){
    state={}
    showTextNode(1)

}

function showTextNode(textNodeIndex){
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
}

textNode.options.forEach(option => {
    if (showOption(option)) {
            const button = document.createElement("button")
            button.innerText = option.text
            button.classList.add("btn")
            button.addEventListener("click", () => selectOption(option))
            optionButtonsElement.appendChild(button)
            decision.play()
        }
    })
}

function showOption(option){
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0){
        return startGame() + audio.play()
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
}

const textNodes = [
    {
        id:1,
        text:"Bienvenidx al recorrido por la Educación Sexual Integral. Aquí se encuentra información primordial para educarse en lo que se necesite respecto a diversos temas. Dejá tu vergüenza por algún lado antes de entrar y preparate.",
        options: [
            {
                text:"Estoy preparadx, sigamos.",
                nextText: 2
            },
            {
                text:"¿Necesito algo para seguir?",
                nextText: 5
            }
        ]
    },
    {
        id: 2,
        text: "El término ‘sexualidad’ se refiere a una dimensión fundamental del hecho de ser humano. Se expresa en forma de pensamientos, fantasías, deseos, creencias, actitudes, valores, actividades, prácticas, roles y relaciones. La sexualidad es el resultado de la interacción de factores biológicos, psicológicos, socioeconómicos, culturales, éticos y religiosos o espirituales.En resumen, la sexualidad se practica y se expresa en todo lo que somos, sentimos, pensamos y hacemos ",
        options: [
            {
                text: "Sigamos",
                nextText: 3
            },
            {
                text: "Pensé que tenía que ver con mis genitales o relaciones sexuales ¿No es así?",
                nextText: 4
            }
        ]
    },
    {
        id: 3,
        text: "Ya definido éste término, quisiera saber qué es lo que te interesa saber primero.",
        options: [
            {
                text: "¿Qué son los 'roles de género'?",
                nextText: 7
            },
            {
                text: "¿Qué me está pasando?(unredacted)",
                nextText: 8
            },
            {
                text: "¿Qué es el 'consentimiento'?",
                nextText: 9
            }
        ]
    },  
    {
        id: 4,
        text: "Consideramos a la sexualidad como una de las dimensiones constitutivas de la persona, relevante para su despliegue y bienestar durante toda la vida",
        options: [
            {
                text: "Entendido, sigamos, por favor.",
                nextText: 3,
            
            }
        ]

    },
    {
        id: 5,
        text: "Sólo atención y ganas de aprender. Recordá seguir sólo hasta donde te sientas cómodx.",
        options: [
            {
                text: "Sigamos",
                nextText: 3
            },
            {
                text: "Dejémoslo para más tarde",
                nextText: 6
            }
        ]

    },
    {
        id: 6,
        text: "¡Espero que vuelvas en otra ocasión! ¡Mucha suerte!",
        options: [
            {
                text: "Cierra la ventana o vuelve al inicio desde aquí.",
                nextText: -1,
                
            }
        ]

    },
    {
        id: 9,
        text: "Consentir es poder aceptar libremente sin que se ponga en juego ninguna opresión. Cuando hablamos de consentimiento debemos tener en cuenta que éste debe ser:",
        options: [
            {
                text: "Libre: Elegido voluntariamente sin presión de ningún tipo y estando en un estado físico y mental perfectamente lúcido",
                nextText: 10
            },
            {
                text: "Afirmativo: Hay consentimiento cuando éste es expresado de forma positiva, explícita y concordante (el lenguaje corporal tiene tanta importancia como el verbal). Caso contrario, siempre se asume un 'no'",
                nextText: 10    
            },
            {
                text: "Específico: Se otorga para una práctica concreta, no es transferible a cualquier otra.",
                nextText: 10
            },
            {
                text: "Reversible: La persona siempre tiene derecho a retirar su consentimiento de forma parcial o total en cualquier momento y sin sufrir consecuencias derivadas del cambio de opinión, ni tener la necesidad de justificarse. ",
                nextText: 10
            }
        ]

    },
    {
        id: 22,
        text: "",
        options: [
            {
                text: "",
                nextText: 3
            }
        ]

    },
    {
        id: 7,
        text: "Los roles de género son normas no escritas en las que históricamente se han establecido una serie de comportamientos como propios o adecuados para un determinado género, mientras que era menos probable observarlos en el contrario. La base de los roles de género, por lo tanto, es la creencia de que, en función de si una persona es de género masculino o género femenino, tendrá unos determinados comportamientos.",
        options: [
            {
                text: "Me gustaría conocer ejemplos",
                nextText: 12
            },
            {
                text: "Suena interesante pero ¿Podemos dejarlo para otra ocasión?",
                nextText: 6
            }
            
        ]

    },
    {
        id: 10,
        text: "Ahora que ya sabés qué es el consentimiento ¿Qué te gustaría saber?",
        options: [
            {
                text: "¿Qué son los 'roles de género'?",
                nextText: 7
            },
            {
                text: "¿Qué me está pasando?(unredacted)",
                nextText: 8
            },
            {   
                text: "Ya es suficiente por hoy",
                nextText: 6
            }
        ]

    },
    {
        id: 11,
        text: "Ahora que ya sabés qué son los roles de género y algunos ejemplos ¿Qué te gustaría saber?",
        options: [
            {
                text: "¿Qué me está pasando?(unredacted)",
                nextText: 8
            },
            {
                text: "¿Qué es el 'consentimiento'?",
                nextText: 9
            },
            {   
                text: "Ya es suficiente por hoy",
                nextText: 6
            }
        ]

    },
    {
        id: 12,
        text: "Es importante recordar que estos ejemplos de roles de género han sido habituales en nuestra sociedad hasta hace algunos años, pero la tendencia hace pensar que estamos en camino de eliminar o al menos modificar sustancialmente algunos de ellos, haciendo que pasen a ser roles independientes del género.",
        options: [
            {
                text: "Tradicionalmente, en nuestra sociedad se ha tendido que la tarea de cuidar de lxs hijxs dentro del matrimonio, fuera asumida por la mujer. Del hombre lo que se esperaba es que trabajase y ganase un salario con el que sustentar a la familia. La mujer no solo debía cuidar de los hijos, sino también encargarse de las tareas del hogar.",
                nextText: 11
            },
            {
                text: "Los estilos de crianza tradicionales han incidido mucho en enseñar a los niños que no deben llorar, que son fuertes y que ese comportamiento no les corresponde; muchas personas consideran correcto que las mujeres expresen sus emociones abiertamente, haciendo saber a los demás cómo se sienten e incluso llorando si lo necesitan.",
                nextText: 11
            },
            {
                text: " Históricamente se ha promovido la idea de que el hombre tenía ciertas tendencias al liderazgo y a la dominancia, mientras que las mujeres, por el contrario, eran más empáticas y más conciliadoras. Se entendía que era más fácil que los hombres alcanzasen ciertos puestos de responsabilidad, pues su carácter llevaba implícito una serie de características apropiadas para ejercer esas tareas. Por el contrario, de las mujeres se esperaba que se mantuvieran en puestos subordinados.",
                nextText: 11
            },
            {
                text: "La distinción establecida entre los tipos de estudios apropiados para un hombre y para una mujer, afirmando que los hombres tienen una mayor propensión para matricularse en carreras de ciencias exactas e ingenierías, mientras que las mujeres prefieren las humanidades, las ciencias sociales y las disciplinas de cuidado a los demás (medicina, enfermería o psicología)",
                nextText: 11
            },
            {
                text: "El aspecto físico es otro de los ejemplos de roles de género que la sociedad ha desarollado. Históricamente, muchas personas esperan de la mujer, por el hecho de ser mujer, que mantenga un aspecto físico impecable, recurriendo para ello a elementos como el maquillaje, determinadas prendas de vestir, cosméticos, depilación, peluquería, etc.",
                nextText: 11
            }
        ]

    },
    {
        id: 21,
        text: "",
        options: [
            {
                text: "",
                nextText: -1,
                
            },
            {
                text: "",
                nextText: -1,
                
            }
        ]

    },
    {
        id: 13,
        text: "",
        options: [
            {
                text: "",
                nextText: 17
            },
            {
                text: "",
                nextText: 18
            },
            {
                text: "",
                nextText: 19
            }
        ]

    }
]

startGame()