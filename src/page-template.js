const generateProjects = projectsArr => {
    return `
        <section class="my-3" id="portfolio">
            <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
            <div class="flex-row justify-space-between">
            ${projectsArr
                .filter(({ role }) => role ==='Manager')
                .map(({ name, id, email, role, number }) => {
                    return `
                        <div class="col-12 mb-2 bg-dark text-light p-3">
                            <h3 class="portfolio-item-title text-light">${name}</h3>
                            <h5 class="portfolio-languages">
                                Built With:
                                ${id}
                            </h5>
                            <p>${email}</p>
                            <p>${role}</p>
                            <p>${number}</p>
                            <a href="" class="btn"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
                        </div>
                    `;
                })
            .join('')}

        ${projectsArr
            .filter(({ role }) => role === 'Engineer')
            .map(({ name, id, email, role, github }) => {
                return `
                    <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
                        <h3 class="portfolio-item-title text-light">${name}</h3>
                        <h5 class="portfolio-languages">
                            Built With:
                            ${id}
                        </h5>
                        <p>${email}</p>
                        <p>${role}</p>
                        <p>${github}</p>            
                    </div>
                `;
            })
            .join('')}

            ${projectsArr
            .filter(({ role }) => role === 'Intern')
            .map(({ name, id, email, role, school }) => {
                return `
                    <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
                        <h3 class="portfolio-item-title text-light">${name}</h3>
                        <h5 class="portfolio-languages">
                            Built With:
                            ${id}
                        </h5>
                        <p>${email}</p>
                        <p>${role}</p>
                        <p>${school}</p>            
                    </div>
                `;
            })
            .join('')}
        </div>
        </section>
    `;
};

module.exports = templateData => {
    // destructure page data by section
    // const { templateData } = templateData;
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>My Team</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <header class="bg-danger">
            <div class="container justify-space-between align-center py-3">
                <h1 class="page-title text-white py-2 px-3">My Team</h1>
            </div>
        </header>
        <main class="container my-5">
            ${generateProjects(templateData)}
        </main>
        <footer class="container text-center py-3">
            <h3 class="text-dark">&copy; Anthony Marrocco</h3>
        </footer>
    </body>
    </html>
    `;
};