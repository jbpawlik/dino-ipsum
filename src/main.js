import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import DinoIpsum from './js/dino-ipsum';

$(document).ready(function() {
  $('#generateDinoIpsum').click(function() {

    let numberOfParagraphs = $('#numberOfParagraphs').val();
    let numberOfWords = $('#numberOfWords').val();
    let promise = DinoIpsum.getDinos(numberOfParagraphs, numberOfWords);
    promise.then(function(response) {
      const dinoText = response;
      console.log(response);
      console.log(dinoText)
      $('#dinoText').text(`${dinoText}`);
    }, function(error) {
      $('#dinoText').text(`There is an error with your request:  + ${error}`);
    });
  });
});
