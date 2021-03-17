
class User{

    getInfo(){
        const User = {
            firstName: 'Mikalai',
            secondName: 'Hil',
            position: 'Front-end, Node.js developer',
            about: 'Proactive, result-orientated developer with over 3 years of experience. Passionate about front-end and related technologies. Seeking a position where I can enchane my development experience.',
            github: 'https://github.com/MikolaGil/Summary',
            contacts: [
                {
                    type: 'Email',
                    data: 'mikolagil@gmail.com'
                },
                {
                    type: 'Adress',
                    data: 'Minsk'
                },
                {
                    type: 'Phone',
                    data: 'Date of birth'
                },
                {
                    type: 'Nationality',
                    data: 'Belarus'
                },
                {
                    type: 'Link',
                    data: 'https://www.linkedin.com/in/nikolaigil/'
                }
            ],
            work: [
                {
                    dateStart: 'June 2018',
                    dateEnd: 'Present',
                    position:'Front-end, Node.js developer',
                    place: 'Multi Parts Supply USA, Minsk',
                    responsibilities: [
                        'Develop highly interactive web applications utilizing JavaScript, ES6, HTML5, CSS, Node.js, SQL.',
                        'Create custom general use modules and components extending the elements and modules',
                        'Experience with GULP toolkit, set up pre-build tasks',
                        'Experience RESTful API design and development for mobile app',
                        'Developed desktop application (Electron.js, Node.js)',
                        'Mobile application development experience(Xamarin, C#)'
                    ]
                },
                {
                    dateStart: 'November 2017',
                    dateEnd: 'June 2018',
                    position: 'Front- end developer',
                    place: 'Educational Center of HTP "IT Academy", Minsk',
                    responsibilities: [
                        'Work on the position "front-end developer"',
                        'Developed and maintained web application for HR department.',
                        'Maintained core functionalities according to defined planning and development quality standards'
                    ]
                }
            ],
            education: [
                {
                    dateStart: 'September 2006',
                    dateEnd: 'July 2011',
                    place: 'BSUIR',
                    country: 'Minsk',
                    type:'Higher education',
                    specialization:'Radio informatics and electronics engineer'
                }
            ],
            skills: [
                'HTML5',
                'Node.js',
                'JavaScript',
                'ES6',
                'RESTful',
                'Git',
                'SQL',
                'TypeScript',
                'Xamarin',
                'Webix'
            ],
            languages: [
                {
                    lang: 'English',
                    level: 'Intermediate'
                },
                {
                    lang: 'Russian',
                    level: 'Advanced'
                }
            ],
            courses: [
                {
                    name: 'C# Development',
                    place: 'Educational center of HTP "IT Academy"',
                    date: '2019'
                },
                {
                    name: 'Web application development on JavaScript',
                    place: 'Educational center of HTP "IT Academy"',
                    date: '2018'
                },
                {
                    name: 'Front-end fundamentals',
                    place: 'Educational center of HTP "IT Academy"',
                    date: '2017'
                }
            ]
        }

        return User;
    }
}

module.exports = User;