var EMOJIS = [
  ['🍳','Fried egg', '1F373'],
  ['📵', 'No mobile phones', '1F4F5'],
  ['🍄', 'Mushroom', '1F344'],
  ['💃', 'Flamenco dancer', '1F483'],
  ['😍', 'In lurrve', '1F60D'],
  ['👌', "‘OK’ sign", '1F44C'],
  ['💃', 'Flamenco dancer', '1F483'],
  ['💾', 'Floppy disk', '1F4BE'],
  ['🌛', 'Man in the moon', '1F31B'],
  ['👘', 'Kimono', '1F458'],
  ['🚕', 'Taxi', '1F695'],
  ['😽', 'Kissy cat', '1F63D'],
  ['📳','Mobile phones vibration mode', '1F4F3'],
  ['🐡', 'Puffer fish', '1F421'],
  ['👯', 'Bunny girls', '1F46F'],
  ['🐷', 'Piggy', '1F437'],
  ['😈', 'Devilish', '1F608'],
  ['✊', 'Raised fist salute', '270A'],
  ['📇', 'Rolodex', '1F4C7'],
  ['🍤', 'Scampi', '1F364'],
  ['👠', 'Stiletto', '1F460'],
  ['🛂', 'Passport control', '1F6C2'],
  ['💩', 'Smiling pile of poo', '1F4A9'],
  ['💯', 'Top marks', '1F4AF'],
];

function EmojiRotator() {

  this.emoji_element = document.getElementById('emoji');
  this.emoji_name_element = document.getElementById('emoji-name');
  this.emoji_code_element = document.getElementById('emoji-code');
  this.emoji_number = 0;

  emoji_rotator = this;

  window.setInterval(function() {
      emoji_rotator.rotate();
    }, 1000);  
}

EmojiRotator.prototype.rotate = function() {

  this.emoji_element.innerText = EMOJIS[this.emoji_number][0];
  this.emoji_name_element.innerText = EMOJIS[this.emoji_number][1];
  this.emoji_code_element.innerText = '#' + EMOJIS[this.emoji_number][2];

  this.emoji_number = this.emoji_number + 1;

  if (this.emoji_number >= (EMOJIS.length)) {
    this.emoji_number = 0;
  }
}


document.addEventListener('DOMContentLoaded', function() {
  new EmojiRotator;
})