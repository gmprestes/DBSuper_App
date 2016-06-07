ons.ready(function() {

  var myPage = document.getElementById("page");

  //myPage.onDeviceBackButton = function() {
  // Disable the back button handler
  //};
  //myPage.onDeviceBackButton.disable();

  var infiniteList = document.getElementById('infinite-list');

  infiniteList.delegate = {
    createItemContent: function(i) {
      return ons._util.createElement(
        //'<div><ons-icon spin icon="ion-load-c" size="32px"></ons-icon>' +
        '<ons-list-item tappable onclick="playvideo(' + (i + 1) + ')">Episódio ' + (i + 1) + '</ons-list-item>'
        //+'</div>'
      );
    },
    countItems: function() {
      return 46;
    },
    calculateItemHeight: function() {
      return ons.platform.isAndroid() ? 48 : 44;
    }
  };

  infiniteList.refresh();
});

function showVideoContent(title, index) {
  var myNavigator = document.getElementById('myNavigator');
  myNavigator.pushPage('page2', {
      data: {
        title: title
      }
    })
    .then(function(page) {
      playvideo2(index);
    });
}

function clearAndShowVideoContent(title, index) {
  var myNavigator = document.getElementById('myNavigator');
  myNavigator.popPage();
  showVideoContent("Titulo", index);
}

function playvideo(index, el) {
  showVideoContent('Titulo', index);
}

function playvideo2(index, titulo) {
  var url = 'http://1temp908.ias.fairytaill.com/Dragon%20Ball%20Super/Dragon%20Ball%20Super%20' + (index < 10 ? '0' + index : index) + '.MP4'
  var video = document.getElementById('video');

  video.style.display = "block";

  video.src = url;

  video.play();

  video.addEventListener("ended",
    function() {
      //alert("Proximo video");
      playvideo2(index++, '');
    }, false);

  video.addEventListener("stop",
    function() {
      alert("ok");
      //video.style.display = "none";
    }, false);

  var numep = document.getElementById('numepisodio');
  numep.innerHTML = 'Episodio ' + index;

  var tituloep = document.getElementById('tituloepisodio');
  tituloep.innerHTML = 'Nos salve Goku !!! A vingança de Freeza!';

}
