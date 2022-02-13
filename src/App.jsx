import styles from './public/styles.css'
const student_name = (
  <div class ="name">
          <h2 id = "h2_name">Nour Ali</h2>
  </div>
  );
  
  const pic = (
      <div class = "picture">
          <img src="https://i.ibb.co/Tkg7Prx/nour.png" alt="nour" border="0">
      </div>
  );
  
  const introduction = (
      <div class= "intro">
          <p id = "paragraph">
            My name is Nour Ali. I love watching Anime. Listening to holy music and watching TV in general.
          </p>
      </div>
              
  );
  
  const button = (
      <div class= "button">
          <a href="https://github.com/nouraliCS/Assignment-1"><button id= "button_comp">VIEW MY GITHUB REPO</button></a>
      </div>
  
  );
  
  ReactDOM.render(student_name, document.getElementById('name'));
  ReactDOM.render(pic, document.getElementById('picture'));
  ReactDOM.render(introduction, document.getElementById('introduction'));
  ReactDOM.render(button, document.getElementById('button'));
  


  