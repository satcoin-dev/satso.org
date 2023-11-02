(function() {

	"use strict";

	var	$body = document.querySelector('body');

	// Methods/polyfills.
			!function(){function t(t){this.el=t;for(var n=t.className.replace(/^\s+|\s+$/g,"").split(/\s+/),i=0;i<n.length;i++)e.call(this,n[i])}function n(t,n,i){Object.defineProperty?Object.defineProperty(t,n,{get:i}):t.__defineGetter__(n,i)}if(!("undefined"==typeof window.Element||"classList"in document.documentElement)){var i=Array.prototype,e=i.push,s=i.splice,o=i.join;t.prototype={add:function(t){this.contains(t)||(e.call(this,t),this.el.className=this.toString())},contains:function(t){return-1!=this.el.className.indexOf(t)},item:function(t){return this[t]||null},remove:function(t){if(this.contains(t)){for(var n=0;n<this.length&&this[n]!=t;n++);s.call(this,n,1),this.el.className=this.toString()}},toString:function(){return o.call(this," ")},toggle:function(t){return this.contains(t)?this.remove(t):this.add(t),this.contains(t)}},window.DOMTokenList=t,n(Element.prototype,"classList",function(){return new t(this)})}}();

		// canUse
			window.canUse=function(p){if(!window._canUse)window._canUse=document.createElement("div");var e=window._canUse.style,up=p.charAt(0).toUpperCase()+p.slice(1);return p in e||"Moz"+up in e||"Webkit"+up in e||"O"+up in e||"ms"+up in e};

		// window.addEventListener
			(function(){if("addEventListener"in window)return;window.addEventListener=function(type,f){window.attachEvent("on"+type,f)}})();

	// Play initial animations on page load.
		window.addEventListener('load', function() {
			window.setTimeout(function() {
				$body.classList.remove('is-preload');
			}, 100);
		});

	// Slideshow Background.
		(function() {

			// Settings.
				var settings = {

					// Images (in the format of 'url': 'alignment').
						images: {
							'images/bg01.jpg': 'center',
							'images/bg02.jpg': 'center',
							'images/bg03.jpg': 'center'
						},

					// Delay.
						delay: 6000

				};

			// Vars.
				var	pos = 0, lastPos = 0,
					$wrapper, $bgs = [], $bg,
					k, v;

			// Create BG wrapper, BGs.
				$wrapper = document.createElement('div');
					$wrapper.id = 'bg';
					$body.appendChild($wrapper);

				for (k in settings.images) {

					// Create BG.
						$bg = document.createElement('div');
							$bg.style.backgroundImage = 'url("' + k + '")';
							$bg.style.backgroundPosition = settings.images[k];
							$wrapper.appendChild($bg);

					// Add it to array.
						$bgs.push($bg);

				}

			// Main loop.
				$bgs[pos].classList.add('visible');
				$bgs[pos].classList.add('top');

				// Bail if we only have a single BG or the client doesn't support transitions.
					if ($bgs.length == 1
					||	!canUse('transition'))
						return;

				window.setInterval(function() {

					lastPos = pos;
					pos++;

					// Wrap to beginning if necessary.
						if (pos >= $bgs.length)
							pos = 0;

					// Swap top images.
						$bgs[lastPos].classList.remove('top');
						$bgs[pos].classList.add('visible');
						$bgs[pos].classList.add('top');

					// Hide last image after a short delay.
						window.setTimeout(function() {
							$bgs[lastPos].classList.remove('visible');
						}, settings.delay / 2);

				}, settings.delay);

		})();

		const btnCopy = document.querySelector('.copy');

		btnCopy.addEventListener('click', function() {

			const range = document.createRange();

			const texts = document.querySelector('.token_address');
			range.selectNode(texts);

			const selection = window.getSelection();

			selection.removeAllRanges();

			selection.addRange(range);
			
			document.execCommand('copy');
			selection.removeAllRanges();
			
			let popup = document.querySelector('#popup');

			popup.classList.add('show');

			setInterval(function() {
				popup.classList.remove('show');
			}, 3000);
		});



		var language = { 
			en: { 
				guide_title: "How to use SatSo?",
				guide_step_1: "1. Use <b>Solflare</b> Wallet",
				guide_step_1_desc: "",
			}, 
			cn: { 
				guide_title: "如何使用SatSo?",
				guide_step_1: "1. 使用<b>Solflare</b>钱包",
				guide_step_1_desc: "造访<a href=\"https://solflare.com/onboard\">https://solflare.com/onboard</a> <br> 点击\"I NEED A NEW WALLET\"",
				guide_step_2: "2. 安全保存钱包短语",
				guide_step_2_desc: "请安全保存您的钱包短语，您可以Copy(复制)该短语以快速完成下一步的验证。 <br><span>警告！请保存在安全的地方且不要发送给其他人。</span>",
				guide_step_3: "3. 验证钱包短语",
				guide_step_3_desc: "填写每个短语以验证您保存的短语。 <br> 您可以粘贴上一步复制的内容。<p>",
				guide_step_4: "4. 保护您的钱包",
				guide_step_4_desc: "为钱包设置密码。",
				guide_step_5: "5. 恭喜",
				guide_step_5_desc: "现在你有了 Solana 钱包。",
				guide_step_6: "6. 充值Solana",
				guide_step_6_desc: "我们需要一些 Solana 将 SatSo 添加到钱包中。",
				guide_step_7: "7. 验证钱包短语",
				guide_step_7_desc: "7-1.点击“Add new asset”",
				guide_step_7_desc_2: "7-2.搜索 SatSo（复制并粘贴地址）",
				guide_step_7_desc_3: "7-3.找到 SatSo 并点击“+Add”",
				guide_step_8: "8. 欢迎加入SatSo",
				guide_step_8_desc: "点击“确认”，SatSo将加入您的资产列表。",
			}
		}; 

		if (window.location.hash) { 
			// if (window.location.hash == "#en-us") { 
			// 	document.querySelector('.guide_title').textContent = language.en.guide_title; 
			// 	document.querySelector('.guide_step_1').textContent = language.en.guide_step_1; 
				
			// } 
			// else 
			if (window.location.hash == "#zh-cn") { 
				document.querySelector('.guide_title').innerHTML = language.cn.guide_title; 
				document.querySelector('.guide_step_1').innerHTML = language.cn.guide_step_1;
				document.querySelector('.guide_step_1_desc').innerHTML = language.cn.guide_step_1_desc;
				document.querySelector('.guide_step_2').innerHTML = language.cn.guide_step_2;
				document.querySelector('.guide_step_2_desc').innerHTML = language.cn.guide_step_2_desc;
				document.querySelector('.guide_step_3').innerHTML = language.cn.guide_step_3;
				document.querySelector('.guide_step_3_desc').innerHTML = language.cn.guide_step_3_desc;
				document.querySelector('.guide_step_4').innerHTML = language.cn.guide_step_4;
				document.querySelector('.guide_step_4_desc').innerHTML = language.cn.guide_step_4_desc;
				document.querySelector('.guide_step_5').innerHTML = language.cn.guide_step_5;
				document.querySelector('.guide_step_5_desc').innerHTML = language.cn.guide_step_5_desc;
				document.querySelector('.guide_step_6').innerHTML = language.cn.guide_step_6;
				document.querySelector('.guide_step_6_desc').innerHTML = language.cn.guide_step_6_desc;
				document.querySelector('.guide_step_7').innerHTML = language.cn.guide_step_7;
				document.querySelector('.guide_step_7_desc').innerHTML = language.cn.guide_step_7_desc;
				document.querySelector('.guide_step_7_desc_2').innerHTML = language.cn.guide_step_7_desc_2;
				document.querySelector('.guide_step_7_desc_3').innerHTML = language.cn.guide_step_7_desc_3;
				document.querySelector('.guide_step_8').innerHTML = language.cn.guide_step_8;
				document.querySelector('.guide_step_8_desc').innerHTML = language.cn.guide_step_8_desc;
			} 
		} 
})();

function chlang(lang) { 
	location.hash = lang; 
	location.reload(); 
} 