angular
    .module('app.main')
    .service('mainSvc', mainSvc);

function mainSvc() {
    return {
        title: 'Guía de Estilos y Mejores Prácticas',
        titleParaph: [
            'AngularJs es una tecnología para el desarrollo de aplicaciones enriquecidas para la web, este framework es desarrollado y mantenido por la compañía google, por lo que cuenta con el respaldo de una comunidad activa de desarrolladores elite a nivel mundial.',
            'Este pretende ser una guía de estilos y buenas prácticas para el desarrollo de aplicaciones web utilizando el framework.'
        ],
        objectives: [
            {
                title: 'Objetivo',
                paraph: 'Este framework dispone de un amplio repertorio de herramientas para el desarrollo de aplicaciones. Es ampliamente utilizado y en los últimos años su popularidad aumentó exponencialmente. Pero más allá de las herramientas, existe la necesidad de describir la manera en que el código se crea, sobre todo para grandes proyectos, con trabajo colaborativo, multitud de funcionalidades, grandes repositorios y que al momento de implementar el código permita optimizar los atributos de calidad (escalabilidad, mantenibilidad, rendimiento, seguridad, entre otros) para una aplicación Angular.',
                icon: 'fa fa-dot-circle-o'
            },
            {
                title: 'Dirigido a',
                paraph: 'Este curso está orientado al desarrollador con experiencia en el uso del framework y que desea profundizar sus conocimientos, implementar las guías de estilo y mejores prácticas para el desarrollo de aplicaciones enriquecidas para la web de manera rápida, modular y bajo estándares de calidad.',
                icon: 'fa fa-users'
            },
            {
                title: 'Contenido',
                paraph: 'El contenido del curso estará dividido en secciones, referente a los puntos más relevantes. A su vez, estará acompañado de ejercicios prácticos para reforzar lo aprendido.',
                icon: 'fa fa-pencil-square-o'
            }
        ],
        table: [
            {
                title: '1.- Diapositiva',
                link: 'https://docs.google.com/presentation/d/1j48q6RVNh_17QXwNZvuPzJ3XQhCvIaBGbmopMuRs-6I/edit?usp=sharing'
            },
            {
                title: '2.- Organizando el Código - Modulos',
                link: 'app/pages/examples/1-modules.html'
            },
            {
                title: '3.- Controladores y Servicios - Guías de diseño para Controladores',
                link: 'app/pages/examples/2-Controllers-style-guide.html'
            },
            {
                title: '3.- Controladores y Servicios - Guías de diseño para Servicios',
                link: 'app/pages/examples/3-Services-style-guide.html'
            }
        ]
    };
}
