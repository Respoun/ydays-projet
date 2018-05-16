$(document).ready(function(){
	var modalTriggerBts = $('a[data-type="cd-modal-trigger"]'),
		coverLayer = $('.cd-cover-layer');

	var txt = document.querySelector('#modal_txt'),
		map = document.querySelector('#my_map'),
		paths = map.querySelectorAll('path'),
		test;

	modalTriggerBts.each(function(){
		initModal($(this));
	});

	paths.forEach(function(path){
		path.addEventListener('click', function(event){
			// console.log($(this).attr('label'));
			if ($(this).attr('title') != "" || $(this).attr('label') != "")
			{
				txt.innerHTML += $(this).attr('title');
				txt.innerHTML += "<br>";
				txt.innerHTML += $(this).attr('label');
			}
		});
	});

	function initModal(modalTrigger) {
		var modalTriggerId =  modalTrigger.attr('id'),
			modal = $('.cd-modal[data-modal="'+ modalTriggerId +'"]');
		// console.log(modalTriggerId);


		//open modal window
		modalTrigger.on('click', function(event){
			event.preventDefault();
			modal.addClass('modal-is-visible');
			coverLayer.addClass('modal-is-visible');
		});

		//close modal window
		modal.on('click', '.modal-close', function(event){
			event.preventDefault();
			modal.removeClass('modal-is-visible');
			coverLayer.removeClass('modal-is-visible');
			txt.innerHTML = "";
		});
	}

});
//setting map/modal window