
//載入畫面
(function preloading(){
	const preloading = document.querySelector('.preloading');

	window.addEventListener('load',function(){
		preloading.style.display = 'none'
	});

})();

// 顯示選單
(function navShow(){
	const navBtn = document.querySelector('.navBtn');

	navBtn.addEventListener('click',function(){
		document.querySelector('.navBar').classList.toggle('nav-show')
	});
})();

// 影片播放、暫停
(function videoSwitch(){
	const videoSwitch = document.querySelector('.video-switch');

	videoSwitch.addEventListener('click',function(){

		let switchBtn = document.querySelector('.video-switch-btn');

		switchBtn.classList.toggle('btnSlide')

		if (switchBtn.classList.contains('btnSlide')){
			document.querySelector('.video-item').pause()
		}else {
			document.querySelector('.video-item').play()
		}
	});
})();

// 提交表單
(function submitForm(){

	const inputSubmit = document.querySelector('.drink-form');
	inputSubmit.addEventListener('submit',function(e){

		e.preventDefault();
		const inputName = document.querySelector('.input-name').value;
		const inputLastName = document.querySelector('.input-lastname').value;
		const inputEmail =	document.querySelector('.input-email').value;

		let value = checkEmpty(inputName,inputLastName,inputEmail);
		
		if (value){
			let customer = new CustomerInfo(inputName,inputLastName,inputEmail);
			showFeedback('表單已成功送出','success')					
			addCustomer(customer)
			clearForm()
			removeFeedback('success')
		}
		else{
			showFeedback('表單填寫不完整','error')
			removeFeedback('error')
		}
	})

	// 確認表單有無填寫完整
	function checkEmpty(name,lastname,email){
		if ( name === '' || lastname === '' || email === ''){
			return false
		}
		else{
			return true
		}
	}

	// 顯示表單的結果
	function showFeedback(text,result){
		const form_feedback = document.querySelector('.drink-form-feedback');
		if (result === 'success'){
			form_feedback.classList.add('success');
			form_feedback.textContent = text;
		}
		else{
			form_feedback.classList.add('error');
			form_feedback.textContent = text;
		}
	}

	// 移除表單的結果
	function removeFeedback(remove){
		setTimeout(function(){
			document.querySelector('.drink-form-feedback').classList.remove(remove)
		},3000)
	}

	// 客人的資訊
	function CustomerInfo(name,lastname,email){
		this.name = name;
		this.lastname = lastname;
		this.email = email;
	}

	// 新增幸運得主
	function addCustomer(cus){
		const div = document.createElement('div');
		const random = Math.floor(Math.random() * 5)
		div.classList.add('person');
		div.innerHTML = `	<img src="img/person-${random}.jpeg" alt="" class="person-thumbnail">
							<h4 class="person-name">${cus.name}</h4>
							<h4 class="person-lastname">${cus.lastname}</h4>`

		document.querySelector('.drink-card-list').appendChild(div);
	}

	// 清空表單
	function clearForm(){
		document.querySelector('.input-name').value = '';
		document.querySelector('.input-lastname').value = '';
		document.querySelector('.input-email').value = '';
	}

})();

// 顯示餐點圖片
(function displayModal(){

	const link = document.querySelectorAll('.work-item-icon');

	link.forEach(function(link){
		link.addEventListener('click',function(e){
			e.preventDefault();
			showModal(e)
		});
	});

	function showModal(e){
		if (e.target.parentElement.classList.contains('work-item-icon')){
			let iconId = e.target.parentElement.dataset.id;
			const modal = document.querySelector('.work-modal');
			const modalItem = document.querySelector('.work-modal-item');

			modal.classList.add('work-modal-show');
			modalItem.style.backgroundImage = `url(img/work-${iconId}.jpeg)`
		}
	};

})();

// 隱藏餐點圖片
(function hideModal(){
		const modalClose = document.querySelector('.work-modal-close');
		modalClose.addEventListener('click',function(){
		document.querySelector('.work-modal').classList.remove('work-modal-show')
	})
})();