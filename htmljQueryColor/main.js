$(function(){
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  // TODO: your code here!
var $bodyCopy = $('body');
for (var i = 0; i < bodyCopy.children.length; i++){
  var $p = bodyCopy.children()[i];
  var wordArr = p.innerText.split(' ');
    for (var j = 0; j < wordArr.length; j++ ){
      wordArr[j].wrap('<span class="word"></span>')
      // $('<span>' + wordArr[i] + '</span>').appendTo(p);
      p.empty $.each(wordArr, = <span)
    }
}

  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second
add color attr to all spans set to function setInterval( random color generator, 1000)
  // TODO: your code here!

});