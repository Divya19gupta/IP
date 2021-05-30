function scrollAppear(){
    var moveTextUp = document.querySelector('.moveTextUp');
    var sectiononeh1Post = moveTextUp.getBoundingClientRect().top;
    var screenpos = window.innerHeight;

    if(sectiononeh1Post < screenpos){
      moveTextUp.classList.add('moveTextUp-appear');
    }
}
window.addEventListener('scroll',scrollAppear);


function scrollAppear1(){
    var moveTextUp1 = document.querySelector('.moveTextUp1');
    var sectiononeh1Post1 = moveTextUp1.getBoundingClientRect().top;
    var screenpos1 = window.innerHeight;

    if(sectiononeh1Post1 < screenpos1){
      moveTextUp1.classList.add('moveTextUp1-appear');
    }
}
window.addEventListener('scroll',scrollAppear1);


function scrollAppear2(){
    var moveTextUp2 = document.querySelector('.moveTextUp2');
    var sectiononeh1Post2 = moveTextUp2.getBoundingClientRect().top;
    var screenpos1 = window.innerHeight;

    if(sectiononeh1Post2 < screenpos1){
      moveTextUp2.classList.add('moveTextUp2-appear');
    }
}
window.addEventListener('scroll',scrollAppear2);


$(document).ready(function()
{
$(window).scroll(function()
  {
    if($(this).scrollTop() > 5)
    {
      $("#im").css("width","50px").css("height","50px");
    }
    else
    {
        $("#im").css("width","100px").css("height","100px");
    }
});
});



var type= new Typed('.typed',{

    stringsElement:'.typed-strings',
    typeSpeed: 100,

  });

  (function ($) {
	$.fn.countTo = function (options) {
		options = options || {};
		
		return $(this).each(function () {
			// set options for current element
			var settings = $.extend({}, $.fn.countTo.defaults, {
				from:            $(this).data('from'),
				to:              $(this).data('to'),
				speed:           $(this).data('speed'),
				refreshInterval: $(this).data('refresh-interval'),
				decimals:        $(this).data('decimals')
			}, options);
			
			// how many times to update the value, and how much to increment the value on each update
			var loops = Math.ceil(settings.speed / settings.refreshInterval),
				increment = (settings.to - settings.from) / loops;
			
			// references & variables that will change with each update
			var self = this,
				$self = $(this),
				loopCount = 0,
				value = settings.from,
				data = $self.data('countTo') || {};
			
			$self.data('countTo', data);
			
			// if an existing interval can be found, clear it first
			if (data.interval) {
				clearInterval(data.interval);
			}
			data.interval = setInterval(updateTimer, settings.refreshInterval);
			
			// initialize the element with the starting value
			render(value);
			
			function updateTimer() {
				value += increment;
				loopCount++;
				
				render(value);
				
				if (typeof(settings.onUpdate) == 'function') {
					settings.onUpdate.call(self, value);
				}
				
				if (loopCount >= loops) {
					// remove the interval
					$self.removeData('countTo');
					clearInterval(data.interval);
					value = settings.to;
					
					if (typeof(settings.onComplete) == 'function') {
						settings.onComplete.call(self, value);
					}
				}
			}
			
			function render(value) {
				var formattedValue = settings.formatter.call(self, value, settings);
				$self.html(formattedValue);
			}
		});
	};
	
	$.fn.countTo.defaults = {
		from: 0,               // the number the element should start at
		to: 0,                 // the number the element should end at
		speed: 1000,           // how long it should take to count between the target numbers
		refreshInterval: 100,  // how often the element should be updated
		decimals: 0,           // the number of decimal places to show
		formatter: formatter,  // handler for formatting the value before rendering
		onUpdate: null,        // callback method for every time the element is updated
		onComplete: null       // callback method for when the element finishes updating
	};
	
	function formatter(value, settings) {
		return value.toFixed(settings.decimals);
	}
}(jQuery));

jQuery(function ($) {
  // custom formatting example
  $('.count-number').data('countToOptions', {
	formatter: function (value, options) {
	  return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
	}
  });
  
  // start all the timers
  $('.timer').each(count);  
  
  function count(options) {
	var $this = $(this);
	options = $.extend({}, options || {}, $this.data('countToOptions') || {});
	$this.countTo(options);
  }
});