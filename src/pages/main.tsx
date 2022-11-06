import type { Component } from 'solid-js';
import '../commonstyles.css'
import play1 from '../assets/Play1.png'
import play2 from '../assets/Play2.png'

export default function MainPage() {
  return (
		  <section class="skrollable u-clearfix u-custom-color-1 u-section-1" id="sec-c688">
		  <div class="u-clearfix u-sheet u-valign-middle u-sheet-1">
			  <div class="u-list u-list-1">
				  <div class="u-repeater u-repeater-1">
					  <div class="u-container-style u-gradient u-list-item u-radius-29 u-repeater-item u-shape-round u-list-item-1">
						  <div class="u-container-layout u-similar-container u-container-layout-1">
							  <a href="jp/play" class="u-border-2 u-border-custom-color-3 u-border-hover-custom-color-2 u-btn u-btn-round u-button-style u-custom-item u-hover-palette-1-base u-none u-radius-50 u-btn-1">Play 1</a>
							  <blockquote class="u-border-4 u-border-palette-1-base u-custom-item u-text u-text-body-alt-color u-text-1">Allows you to<br/>guess the English<br/>sound of charaters
							  </blockquote>
							  <img class="u-border-2 u-border-custom-color-3 u-image u-image-round u-radius-20 u-image-1" src={play1} alt="" data-image-width="1920" data-image-height="532"/>
							  </div>
							  </div>
					  <div class="u-container-style u-gradient u-list-item u-radius-29 u-repeater-item u-shape-round u-list-item-2">
						  <div class="u-container-layout u-similar-container u-container-layout-2">
							  <a href="jp/play2" class="u-border-2 u-border-custom-color-3 u-border-hover-custom-color-2 u-btn u-btn-round u-button-style u-custom-item u-hover-palette-1-base u-none u-radius-50 u-btn-2">Play 2</a>
							  <blockquote class="u-border-4 u-border-palette-1-base u-custom-item u-text u-text-body-alt-color u-text-2">Allows you to<br/>guess the English<br/>sound of charaters with a decaying list
							  </blockquote>
							  <img class="u-border-2 u-border-custom-color-3 u-image u-image-round u-radius-20 u-image-2" src={play2} alt="" data-image-width="1920" data-image-height="532"/>
							  </div>
							  </div>
					  <div class="u-container-style u-gradient u-list-item u-radius-29 u-repeater-item u-shape-round u-list-item-3">
						  <div class="u-container-layout u-similar-container u-container-layout-3">
							  <a href="jp/play3" class="u-border-2 u-border-custom-color-3 u-border-hover-custom-color-2 u-btn u-btn-round u-button-style u-custom-item u-hover-palette-1-base u-none u-radius-50 u-btn-3">Play 3<br/>
							  </a>
							  <blockquote class="u-border-4 u-border-palette-1-base u-custom-item u-text u-text-body-alt-color u-text-3">Allows you to<br/>match the English sound to the charater
							  </blockquote>
							  <img class="u-border-2 u-border-custom-color-3 u-image u-image-round u-radius-20 u-image-3" src={play1} alt="" data-image-width="1920" data-image-height="532"/>
							  </div>
							  </div>
						  </div>
					  </div>
						  </div>
			  </section>
    );
};