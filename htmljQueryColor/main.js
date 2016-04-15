$(function(){
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  // TODO: your code here!
  var $pArr = $('body').find('p');
  // jQuery each takes index then value
  $pArr.each((i,$el) => {
    var wordArr = $el.innerText.split(' ');
    $el.innerText = '';
    wordArr.forEach((word) => {
      //this was surprising, $el is just a var pointing to a DOM element,
      // not actually a DOM element, so it needs to be located with the $() selector
      $($el).append('<span>' + word + '</span>')
    })
  })

  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second
// add color attr to all spans set to function setInterval( random color generator, 1000)
  // TODO: your code here!
function getRandomColor(){
  let color = '#' + Math.random().toString(16).slice(2,8)
  console.log(color);
  return color;
}
function setColor(){
  $('body').find('span').each((i, el)=>{$(el).css('color', getRandomColor())});
}
setInterval(setColor, 1000);
