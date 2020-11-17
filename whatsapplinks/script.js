//update charLength
document.getElementById('getText').addEventListener('keyup', () => {
   //def length
   let length = 1080 - document.getElementById('getText').value.length;
   let charLength =
    document.getElementById('charLength');
   charLength.innerHTML = `${length} characters more`;

   (length <= 500) ?
   Object.assign(charLength.style, { color: '#ee0000' }):
   
   (length <= 750) ?
   Object.assign(charLength.style, { color: '#e69500' }):

    (length <= 990) ?
    Object.assign(charLength.style, { color: '#ffc14d' }) : 
    Object.assign(charLength.style, { color:  '#f5f5f5'});
    });
  //ref variables 
  let link = document.getElementById('output');
  //define variables
  let trigger = document.querySelectorAll('.container .output-controls button')[1];
  //add event listener 
  trigger.addEventListener('click', function() {
   let message = document.getElementById('getText').value;
   let number = document.getElementById('getNumber').value;
   //proceed to.copy but ==>
   //ERROR HANDLING 
   if (!number && !message) {
    swal({
     title: "Oops\!",
     text: `Empty feeds; there's nothing to copy.`,
     icon: "error",
     dangerMode: true
    }).then(() => {
     link.innerHTML = '';
     document.querySelectorAll('.container .output-controls button')[1].innerHTML = 'Copy link';
    });
   }
   else if (!number) {
    swal({
     title: "Oops\!",
     text: "Empty number feed, please provide a valid number",
     icon: "error",
     dangerMode: true
    }).then(() => {
     link.innerHTML = '';
     document.querySelectorAll('.container .output-controls button')[1].innerHTML = 'Copy link';
    });
   }

   else if (!message) {
    swal({
     title: "Oops\!",
     text: "Empty message feed",
     icon: "error",
     dangerMode: true
    }).then(() => {
     document.getElementById('output').innerHTML = '';
     document.querySelectorAll('.container .output-controls button')[1].innerHTML = 'Copy link';
    });
   }
   else if (number.length < 11) {
    swal({
     title: 'Input error',
     text: `The number "${number}" has fewer characters than expected.
   
   Add up to 11 digits.`,
     icon: 'error',
     dangerMode: true
    });

   }
   else if (number.length > 11) {
    swal({
      title: 'Input error',
      text: `The number "${number}" has more characters than expected`,
      dangerMode: true,
      buttons: ['exit modal', 'reset feed'],
     }).then((resetFeed) => {
      if (resetFeed) {
       document.getElementById('getNumber').value = '';
      }
      swal({
       title: 'Feed cleared.',
       icon: 'success'
      });
     })
     .then(() => {
      swal({
       text: 'Provide a valid number.',
       icon: 'info',
       button: 'Proceed'
      });
     });

   }

   else {
    //reject Invalid characters then
    //generate link

    // else {
    number = number.replace(number[0], '234');
    //append selection to variable link
    link.innerHTML = encodeURI('https:\/\/wa.me/' + number + '\?text=' + message);
    //}

    const selection = window.getSelection();

    //save current selection
    const currentRange = selection.rangeCount === 0 ? null : selection.getRangeAt(0);

    //select the link content
    const range = document.createRange();
    range.selectNodeContents(link);
    selection.removeAllRanges();
    selection.addRange(range);

    //copy to clipboard
    try {
     document.execCommand('copy');
     trigger.innerHTML = 'Copied to clipboard';
     swal({
       title: 'Link copied to clipboard',
       icon: 'success',
       buttons: ['exit modal', 'reset feed'],
       dangerMode: true
      })
      .then((resetFeed) => {
       if (resetFeed) {
        document.getElementById('getText').value = '';
        document.getElementById('getNumber').value = '';
        link.innerHTML = '';
        document.querySelectorAll('.container .output-controls button')[1].innerHTML = 'Copy link';
       }
      });

    }
    //unable to copy 
    catch (err) {
     trigger.innerHTML = 'copy';
    }
    //restore all previous all selection
    selection.removeAllRanges();
    currentRange && selection.addRange(currentRange);
   }

  }); document.querySelectorAll('.container .output-controls button')[0].addEventListener('click', () => {
   //reset f8eilds
   document.getElementById('getText').value = '';
   document.getElementById('getNumber').value = '';
   link.innerHTML = '';
   document.querySelectorAll('.container .output-controls button')[2].innerHTML = 'Copy link';
  });