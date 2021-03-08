Vue.component("profile", {
    template: `
    <header>
            <div id="header">
                <h1>Daniel Eggimann</h1>
                <button type="submit" id="menu"><i class="fas fa-bars"></i></button>
            </div>
        </header>
        
        <main>
            <div class="about" id="about">
                <img src="photos/buildingfence.JPG" alt="">
                <p>Hello, my name is Dan. It doesn't matter if it's tangible or virtual, I love to build things. 
                I have a unique collection of experiences and skills that is derived from my passionate quest for knowledge.
                When I'm not working, I'm elbow deep in a home improvement project or simply enjoying life with the ones that I love. </p>
            </div>
            <h2>Skills</h2>
            <div class="skills">
                <h2>Programming Languages</h2>
                <ul>
                    <li>Python</li>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Stata</li>
                    <li>R</li>
                </ul>
                <h2>Frameworks</h2>
                <ul>
                    <li>Django</li>
                    <li>Django Rest API</li>
                    <li>Vue.js</li>
                </ul>
                <h2>Miscillaneous</h2>
                <ul>
                    <li>Github</li>
                    <li>iOS/Windows</li>
                    <li>SQLite3</li>
                    <li>Axios</li>
                    <li>PyQt</li>
            </div>
            <div class="projects">
                <h2>Projects</h2>
                <img src="photos/dinnerdateslanding.png" alt="">
                <h2>Dinnerdates</h2>
                <p>phase 1</p>
                <img src="photos/sudoku.png" alt="">
                <h2>Sudoku Board</h2>
            </div>
            <h2>Contact Information</h2>
            <div class="contact"> 
                <a href="https://github.com/eggxact"><img src="photos/github.png" alt=""></a>
                <a href="www.linkedin.com/in/danieleggimann"><img src="photos/linkedIn.png" alt=""></a>
            </div>
        </main>

        <footer>
            <p> Daniel Eggimann Copyright 2021</p>
        </footer>
    `,
    
})