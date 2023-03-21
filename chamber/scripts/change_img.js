var myArray = ['./images/logan_canyon.webp', './images/logan_valley.webp', './images/Downtown_logan.webp']

var count = 0;
setInterval(function() {

  if (count >= myArray.length) count = 0; // if it is last image then show the first image.
  // use this below line if you want images in order.
  var rand = myArray[count];
  document.getElementById('heroImage').src = rand;
  document.getElementById('heroImage').alt = rand; // use 'alt' to display the image name if image is not found
  count++;
}, 15000); // 1000 = 1 second