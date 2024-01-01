var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

( function() {

	var toggleButton  = document.getElementById( 'site-nav-toggle' ),
	    body          = document.body,
	    menuContainer = document.getElementById( toggleButton.getAttribute( 'aria-controls' ) );

	if ( ! menuContainer ) {
		return;
	}

	toggleButton.addEventListener( 'click', function( event ) {
		event.preventDefault();

		if ( 'true' === toggleButton.getAttribute( 'aria-expanded' ) ) {
			toggleButton.setAttribute( 'aria-expanded', 'false' );
			body.classList.remove( 'nav-toggled-on' );
		} else {
			toggleButton.setAttribute( 'aria-expanded', 'true' );
			body.classList.add( 'nav-toggled-on' );
		}
	});

	var itemsWithChildren = Array.prototype.slice.call( menuContainer.querySelectorAll( '.menu-item-has-children' ) );
	itemsWithChildren.forEach( function( menuItem ) {
		var subMenu = menuItem.querySelector( '.sub-menu' ),
			subMenuToggle = document.createElement( 'button' ),
			screenReaderText = document.createElement( 'span' );

		screenReaderText.className = 'screen-reader-text';
		screenReaderText.innerText = _btl10n.expand;

		subMenuToggle.className = 'dropdown-toggle';
		subMenuToggle.setAttribute( 'aria-expanded', 'false' );
		subMenuToggle.appendChild( screenReaderText );

		subMenuToggle.addEventListener( 'click', function( event ) {
			event.preventDefault();
			if ( 'true' === subMenuToggle.getAttribute( 'aria-expanded' ) ) {
				subMenuToggle.setAttribute( 'aria-expanded', 'false' );
				subMenu.classList.remove( 'toggled-on' );
				screenReaderText.innerText = _btl10n.expand;
			} else {
				subMenuToggle.setAttribute( 'aria-expanded', 'true' );
				subMenu.classList.add( 'toggled-on' );
				screenReaderText.innerText = _btl10n.collapse;
			}
		});

		menuItem.insertBefore( subMenuToggle, subMenu );
	});

})();


}
/*
     FILE ARCHIVED ON 03:02:01 Jan 02, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:49:31 Jan 01, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 102.483
  exclusion.robots: 0.077
  exclusion.robots.policy: 0.069
  cdx.remote: 0.048
  esindex: 0.009
  LoadShardBlock: 79.191 (3)
  PetaboxLoader3.datanode: 84.305 (4)
  load_resource: 76.373
  PetaboxLoader3.resolve: 45.869
*/