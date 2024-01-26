function confCloudJS() { 
  var script = document.createElement("SCRIPT");
  script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js';
  script.type = 'text/javascript';
  script.onload = function() {

  var svgHamburger = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 250 250" xml:space="preserve" class="HaiIcon" iconname="Hamburger" subtype="hamburger" type="navigation"><path id="Path_1229" d="M219.4,73.7H32.6c-6.2-0.4-10.9-5.9-10.5-12.1C22.5,56,27,51.5,32.6,51.1h186.8c6.2,0.4,10.9,5.9,10.5,12.1 C229.5,68.8,225,73.3,219.4,73.7z"></path><path id="Path_1230" d="M219.4,137H32.6c-6.2-0.4-10.9-5.9-10.5-12.1c0.4-5.6,4.9-10.1,10.5-10.5h186.8c6.2,0.4,10.9,5.9,10.5,12.1 C229.5,132.1,225,136.6,219.4,137z"></path><path id="Path_1231" d="M218.8,199.1H32c-6.2-0.4-10.9-5.9-10.5-12.1c0.4-5.6,4.9-10.1,10.5-10.5h186.8c6.2,0.4,10.9,5.9,10.5,12.1 C228.9,194.2,224.4,198.7,218.8,199.1z"></path></svg>';
  var svgPageTree  = '<svg id="a" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48"><path d="M14,36h20c1.1,0,2-.9,2-2s-.9-2-2-2H14c-1.1,0-2,.9-2,2s.9,2,2,2Z"></path><path d="M14,26h20c1.1,0,2-.9,2-2s-.9-2-2-2H14c-1.1,0-2,.9-2,2s.9,2,2,2Z"></path><path d="M14,16h20c1.1,0,2-.9,2-2s-.9-2-2-2H14c-1.1,0-2,.9-2,2s.9,2,2,2Z"></path><path d="M40,2H8c-2.21,0-4,1.79-4,4V42c0,2.21,1.79,4,4,4H40c2.21,0,4-1.79,4-4V6c0-2.21-1.79-4-4-4Zm-1,40H9c-.55,0-1-.45-1-1V7c0-.55,.45-1,1-1h30c.55,0,1,.45,1,1V41c0,.55-.45,1-1,1Z"></path></svg>';
  var svgProducts  = '<svg class="pagetree-icon HaiIcon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48" style="height: 20px; width: 20px;"><path d="M42,22H6c-2.21,0-4-1.79-4-4V6c0-2.21,1.79-4,4-4H42c2.21,0,4,1.79,4,4v12c0,2.21-1.79,4-4,4ZM6,7v10c0,.55,.45,1,1,1H41c.55,0,1-.45,1-1V7c0-.55-.45-1-1-1H7c-.55,0-1,.45-1,1Z"></path><path d="M42,46H6c-2.21,0-4-1.79-4-4v-12c0-2.21,1.79-4,4-4H42c2.21,0,4,1.79,4,4v12c0,2.21-1.79,4-4,4ZM6,31v10c0,.55,.45,1,1,1H41c.55,0,1-.45,1-1v-10c0-.55-.45-1-1-1H7c-.55,0-1,.45-1,1Z"></path><circle cx="36" cy="36" r="2"></circle><circle cx="36" cy="12" r="2"></circle></svg>';
  var svgPrefs     = '<svg class="pagetree-icon HaiIcon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48"><path d="M10,22.26V4c0-1.1-.9-2-2-2s-2,.9-2,2V22.26c-3.44,.89-6,4.02-6,7.74s2.56,6.85,6,7.74v6.26c0,1.1,.9,2,2,2s2-.9,2-2v-6.26c3.44-.89,6-4.02,6-7.74s-2.56-6.85-6-7.74Zm-2,11.74c-2.21,0-4-1.79-4-4s1.79-4,4-4,4,1.79,4,4-1.79,4-4,4Z"></path><path d="M32,16c0-3.72-2.56-6.85-6-7.74V4c0-1.1-.9-2-2-2s-2,.9-2,2v4.26c-3.44,.89-6,4.02-6,7.74s2.56,6.85,6,7.74v20.26c0,1.1,.9,2,2,2s2-.9,2-2V23.74c3.44-.89,6-4.02,6-7.74Zm-8,4c-2.21,0-4-1.79-4-4s1.79-4,4-4,4,1.79,4,4-1.79,4-4,4Z"></path><path d="M48,34c0-3.72-2.56-6.85-6-7.74V4c0-1.1-.9-2-2-2s-2,.9-2,2V26.26c-3.44,.89-6,4.02-6,7.74s2.56,6.85,6,7.74v2.26c0,1.1,.9,2,2,2s2-.9,2-2v-2.26c3.44-.89,6-4.02,6-7.74Zm-8,4c-2.21,0-4-1.79-4-4s1.79-4,4-4,4,1.79,4,4-1.79,4-4,4Z"></path></svg>';
  var svgSupport   = '<svg class="pagetree-icon HaiIcon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" version="1.1" viewBox="0 0 200 200" xml:space="preserve"><path d="m185.5 60h-18.1c-5.4-33-34.1-58.3-68.6-58.3-34.7 0-63.6 25.6-68.7 58.9h-17.6c-7.2 0-13 5.8-13 13v41.3c0 7.2 5.8 13 13 13h16.8v0.4c0 5.2 4.3 9.5 9.5 9.5s9.5-4.3 9.5-9.5v-57.1c0-27.8 22.7-50.5 50.5-50.5s50.5 22.7 50.5 50.5v57.1c0 27.5-22.1 49.9-49.4 50.5h-0.2-0.7-0.1c-4.8 0.4-8.6 4.5-8.6 9.5s3.8 9 8.6 9.5v0.1c38.3 0 69.5-31.2 69.5-69.5v-0.4h17.2c7.2 0 13-5.8 13-13v-42c-0.1-7.2-5.9-13-13.1-13zm-156.2 48.8h-10.8v-29.3h10.8zm150.2 0h-11.2v-29.8h11.2z"/><path d="m123.5 177.8c-12.8 0-25.1-4-35.5-11.5-4.2-3-5.2-9-2.2-13.2 3-4.3 8.8-5.3 12.9-2.3 7.2 5.3 15.8 8 24.7 8s17.5-2.8 24.7-8c4.2-3 10-2 12.9 2.3 3 4.3 2 10.2-2.2 13.2-10.3 7.5-22.5 11.5-35.3 11.5z"/></svg>';
  var svgSmallLogo = '<svg class="logo-small" style="display: none;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="44" height="40" viewBox="0 0 44 40"><path d="M3.1,0H7.04V-22.4H3.1Zm19.68.384a11.558,11.558,0,0,0,9.088-3.968l-2.528-2.56c-1.92,1.792-3.68,2.88-6.432,2.88-4.288,0-7.392-3.552-7.392-7.936v-.064c0-4.384,3.136-7.872,7.36-7.872a8.951,8.951,0,0,1,6.3,2.752L31.712-19.3a11.7,11.7,0,0,0-8.8-3.488A11.328,11.328,0,0,0,11.392-11.2v.064A11.246,11.246,0,0,0,22.784.384Z" transform="translate(6 32)" fill="#fff"/></svg>';
  var svgChevron   = '<svg data-vp-id="chevron-right-icon-tree-item-36059661" data-vp-component="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M7 5L10 8L7 11" stroke="currentColor" stroke-width="1px" stroke-linecap="square"></path></svg>';
  var svgInfoFilled= '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 48 48" class="HaiIcon" iconname="InformationFilled" subtype="information-filled" theme="argon" type="actions"><path d="M24,0C10.75,0,0,10.75,0,24s10.75,24,24,24,24-10.75,24-24S37.25,0,24,0Zm2,33.97c0,1.12-.9,2.03-2,2.03s-2-.91-2-2.03v-11.94c0-1.12,.9-2.03,2-2.03s2,.91,2,2.03v11.94Zm-2-17.97c-1.1,0-2-.9-2-2s.9-2,2-2,2,.9,2,2-.9,2-2,2Z"></path></svg>';

  $('link[rel="icon"]').attr('href','https://esouthers.github.io/infocenter-viewport/assets/favicon.png');

  // Start of processing depending on page type
  if (window.location.pathname == '/search.html') {
    console.log('search results page');
    let sidebar = '<div class="vp-article__aside-left no-print"><div id="vp-js-desktop__navigation" class="vp-article__aside-left__inner"><nav id="3ry00fx860k" aria-label="Main" class="vp-desktop-navigation__page-tree vp-scrollable-container"><div class="vp-tree vp-desktop-navigation__page-tree__tree"><ul class="vp-tree__container relative m-0 outline-none" role="tree"></ul></div></nav></div></div>';
    $('#content').before(sidebar);
    updateHeader();
    updateSidebar();
    updateFooter();
    updateBreadcrumbs();

    waitForElm('.search-results__results__label').then((elm) => {
      let searchTerm = $('.vp-search-input__input').val();
      let numResults = $(elm).text().split(' result')[0];
      let plural = '';
      if (numResults > 1) { plural = 's';}
      $(elm).before('<h1 class="search-header">Search for \'' + searchTerm + '\' returned <span id="numResults">' + numResults + '</span> result' + plural + '.');
      $('#titleBreadcrumb').text($('.search-header').text());

      let searchIdx = getSearchIndexes(numResults);
      $('.search-header').after('<p>Showing results <span id="startIdx">' + searchIdx[0] + '</span> to <span id="stopIdx">' + searchIdx[1] + '</span>.</p>');
      $(elm).remove();
    });
    $('.vp-pagination__inner button').on('click', function(e){
      waitForElm('.search-results__results__label').then((elm) => {
        let searchIdx = getSearchIndexes($('#numResults').text());
        $('#startIdx').text(searchIdx[0]);
        $('#stopIdx').text(searchIdx[1]);
        $(elm).remove();
      });
    });

  }
  // Redirect to homepage
  else if (window.location.pathname == '/') {
    window.location.replace('https://' + window.location.hostname + '/Home');
  }
  else {
    addModifiedDate();
    updateHeader();
    updateSidebar();
    updateFooter();
    updateBreadcrumbs();
    // Search box placeholder
    $('.vp-search-input > input').attr('placeholder','How can we help you?');
    // Fix alerts
      // Remove built-in icon
    $('.panel-macro--tip .panel-macro__icon, .panel-macro--note .panel-macro__icon, .panel-macro--info .panel-macro__icon, .panel-macro--caution .panel-macro__icon, .panel-macro--warning .panel-macro__icon').children('img').remove();
      // For Warning alerts with Caution title, update its class to caution
    $('.panel-macros--warning__content--heading').each(function() {
      if ($(this).text() == 'Caution') {
        $(this).closest('.panel-macro--warning').removeClass('panel-macro--warning').addClass('panel-macro--caution');
      }
    });

    // Apply styling to next/prev links at bottom of page
    $('vp-article-pagination').each(function() {
      let style =  document.createElement( 'style' );
      style.innerHTML = 'a { max-width: unset; } .description, a:is(:hover, :focus-visible) .description { color: var(--haiui-blue-03); } a:is(:hover, :focus-visible, :active) .cta, .cta {color: var(--haiui-blue-03); background-color: transparent;}';
      $(this)[0].shadowRoot.appendChild(style);
    });

    // Expand/collapse buttons
    $('summary').each(function() {
      let expandIcon = $('.vp-disclosure-icon',this);
      let expandTitle = $(this).text();
      $(this).text('');
      $(this).prepend('<span class="expand-title">' + expandTitle + '</span>').append(expandIcon);
    });

    $('body').show();

    // Fix table cell background colors
    $("[data-highlight-colour='yellow']").css('background-color','lightyellow');

    $('#main-content figure').each(function() {
      fixInlineImages(this);
    });
//            fixTabs(); Do not use due to Cors proxy security issues

    let verIcon = '<div class="versionIcon" style="display: none;" data-original-title="" original-title="">' + svgInfoFilled + '</div>';
    $('#vp-js-desktop__navigation__picker').before(verIcon);

    let newMsg = '<div id="flagOldVer">You are viewing documentation for Haivision Media Platform 3.6. However, the latest version is 3.9. Documentation is not always updated for older releases.</div>';
  //        addIconNextToVersion(newMsg, flagID, 14);

  } // End of processing depending on page type



    function updateHeader() {
      $('.top-bar-left ul').removeClass('flex-row mr-4 items-center').addClass('flex-col');
      $('main').prepend($('body > header'));
      $('.header__navigation--heading').removeClass('py-3');
      // Move breadcrumbs to header
      $('main>header').prepend($('.vp-breadcrumbs__wrapper'));
    }

    function updateBreadcrumbs() {
      waitForElm('.vp-desktop-navigation__page-tree__tree').then((elm) => {
        // Home page of space doesn't include breadcrumbs, so add them:
        spaceName = $('#vp-js-desktop__navigation .header__navigation--heading').text();
        if ($('.breadcrumbs').length == 0) {
          let breacrumbsToAdd = '<i18n-message i18nkey="breadcrumb.label" attribute="aria-label" class="vp-breadcrumbs__wrapper"><nav class="vp-breadcrumbs" aria-label="Breadcrumb" role="navigation"><div class="breadcrumbs-wrapper"><vp-scroll-shadow> \
          <ol class="breadcrumbs breadcrumbs--fit-content"><li><a href="' + $('#vp-js-desktop__navigation .header__navigation--heading').attr('href') + 
          '" rel="prev">' + spaceName + '</a></li></ol> \
          </vp-scroll-shadow></div></nav></i18n-message>';
          $('main > header').prepend(breacrumbsToAdd);
        }
        // Show title in the breadcrumbs if title isn't shown when scrolling
        $('.breadcrumbs li').last().append('<span id="titleBreadcrumbSlash" style="display: none;" aria-hidden="true">/</span>')
          if ($('.search-header').length > 0) { that = $('.search-header'); }
          else                                { that = $('h1.vp-article__heading'); }
        let titleBreadcrumb = '<li id="titleBreadcrumb" style="display: none;">' + that.text() + '</li>'
        $('.breadcrumbs').append(titleBreadcrumb);
        $(window).on('resize scroll', function() {
          if ($('.search-header').length > 0) { that = $('.search-header');   }
          else                                { that = $('header > h1');      }
          if (that.isInViewport($('main > header').height())) {
            $('#titleBreadcrumbSlash').hide();
            $('#titleBreadcrumb').hide();
          } else {
            $('#titleBreadcrumbSlash').show();
            $('#titleBreadcrumb').show();
          }
        });
        var breadcrumbs = $('.breadcrumbs--fit-content li');
        if (breadcrumbs.length > 4) {
          for (var i = 2; i < breadcrumbs.length-2; i++) {
            let tempTitle = breadcrumbs.eq(i).children('a').text();
            breadcrumbs.eq(i).children('a').attr('title',tempTitle).text('...');
          }
        }
        // Add version number to breadcrumbs
        $('.breadcrumbs li').first().children('a').text($('.header__navigation--heading').text());
      });
    }
    function updateSidebar() {

      $('.vp-desktop-navigation__page-tree').addClass('vp-scrollable-container--show-scrollbars').removeClass('vp-scrollable-container--hidden-scrollbars');
//            let bgImgSrc = $('footer img').attr('src');
      let bgImgSrc = 'https://esouthers.github.io/infocenter-viewport/assets/info-center-nav-bg.png';
      $('.vp-article__aside-left').css('background-image','linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("'+bgImgSrc+'")');
      $('#vp-js-desktop__navigation').prepend($('.top-bar-left'));

      // Add Hamburger button
      let hambutton = '<li class="ht-menu-button">' + svgHamburger + '</li>';
      $('.top-bar-left .header__navigation--logo').after(hambutton);

      // Remove built-in sidebar collapse button
      $('.vp-desktop-navigation__page-tree__collapser').remove();
      $('.vp-collapse-button').remove();

      // Work with spacename in sidebar
      $('#vp-js-desktop__navigation .header__navigation--heading').each(function() {
        let spaceName = $(this).text();
        // Add version # to space name if version # exists
        let versionNum = $(this).attr('href').split('/')[4];
        if (versionNum !== undefined) {
          if ((versionNum.split('.').length > 1) && (!isNaN(versionNum.split('.')[0]))) {
            $(this).text(spaceName + ' ' + versionNum);
          }
          // Update page title to include space name and version
          $('title').text($('title').text() + ' - ' + $(this).text());
        }

      });

      // Update sidebar sections
      waitForElm('.vp-desktop-navigation__page-tree__tree').then((elm) => {

        // Update page tree section
        $(elm).wrap('<div class="sidebar-section"></div>');
        let pageTreeHTML = '<div id="ic-pagetree" class="heading current">' + svgPageTree + '<h3 class="haiui-label-01-med">Page Tree</h3></div>';
        $(elm).parent().prepend(pageTreeHTML);

        // Add Products lists to the sidebar
        let productsHTML = '<div class="sidebar-section"><div id="ic-products" class="heading">' + svgProducts + '<h3 class="haiui-label-01-med">Products</h3></div><div class="sort-items sort-products hidden"><div class="products-by-type">Type</div><div class="products-by-family">Family</div></div></div>';
        $('.vp-desktop-navigation__page-tree').append(productsHTML);

        $.getJSON('https://esouthers.github.io/infocenter-viewport/productsbytype.json', function(data) { processProductsByType(data); })
          .fail(function(error) { console.error('Error fetching "product by type" JSON:', error);
        });
        $.getJSON('https://esouthers.github.io/infocenter-viewport/productsbyfamily.json', function(data) { processProductsByFamily(data); })
          .fail(function(error) { console.error('Error fetching "product by family" JSON:', error);
        });
        function processProductsByType(data) {
          let productsTypeHTML = '<ul class="ic-products-top productlist-type hidden vp-tree__container relative m-0 outline-none" role="tree">';
          productsTypeHTML = buildSidebarList(data,productsTypeHTML,'type');
          productsTypeHTML += '</ul>';
          $('#ic-products').parent().append(productsTypeHTML);
          productHighlight();
          $('.ic-products-top.productlist-type .vp-tree-item__header__title, .ic-products-top.productlist-type .vp-tree-item__header__icon').click(function() {
            if ($(this).hasClass('vp-tree-item__header__title')) { sidebarExpandoListeners($(this).parent().children().children('button')); }
            else { sidebarExpandoListeners($(this).children('button')); }
          });
        }
        function processProductsByFamily(data) {
          let productsFamilyHTML = '<ul class="ic-products-top productlist-family hidden vp-tree__container relative m-0 outline-none" role="tree">';
          productsFamilyHTML = buildSidebarList(data,productsFamilyHTML,'family');
          productsFamilyHTML += '</ul>';
          $('#ic-products').parent().append(productsFamilyHTML);
          productHighlight();
          $('.ic-products-top.productlist-family .vp-tree-item__header__title, .ic-products-top.productlist-family .vp-tree-item__header__icon').click(function() {
            if ($(this).hasClass('vp-tree-item__header__title')) { sidebarExpandoListeners($(this).parent().children().children('button')); }
            else { sidebarExpandoListeners($(this).children('button')); }
          });
        }
        // Highlight product in sidebar depending on URL
        function productHighlight() {
          let path = window.location.pathname.split('/')[1];
          $('.ic-products-top .vp-tree-item__header__title').each(function() { 
            if ($(this).attr('href')) {
              if ($(this).attr('href').indexOf(path) > 0) { 
                $(this).addClass('current');
                let currentParent = $(this).parents('ul').first();
                if (currentParent.hasClass('vp-tree-item__children')) {
                  currentParent.removeClass('hidden').attr('aria-label','Collapse item');
                  currentParent.parent().prev().children('.vp-tree-item__header__icon').children('button').removeClass('rotate-0').addClass('rotate-90');

                }
              }
            }
          });
        }

        // Add User Preferences, and Support to sidebar
        let prefSupportHTML = '<div class="sidebar-section"> \
              <div id="ic-settings" class="heading">' + svgPrefs + '<h3 class="haiui-label-01-med ic-settings">User Preferences</h3></div></div> \
            <div class="sidebar-section"> \
              <div id="ic-support" class="heading"> \
                <a href="https://www.haivision.com/support" target="_blank" style="display: flex;">' + svgSupport + '<h3 class="haiui-label-01-med">Haivision Support</h3> \
                </a></div></div></div>';
        $('.vp-desktop-navigation__page-tree').append(prefSupportHTML);

        // Add sidebar dragbar
        let dragbarToAdd = '<div id="sidebar-dragbar"><div class="sidebar-drag-handle"><span class="drag-handle-1"></span><span class="drag-handle-2"></span><span class="drag-handle-3"></span></div></div>';
        $('main').append(dragbarToAdd);
        $('#sidebar-dragbar').on('mousedown touchstart', function (e) {
          e.preventDefault();
          $(document).on('mousemove touchmove', function (e) {
            if (e.type == 'touchmove') { mousex = e.touches[0].pageX + 2; }
            else { mousex = e.pageX + 2; }
            if (mousex < 190 || mousex/$(window).innerWidth() > 0.7)return;
            if (mousex < 220)$('#vp-js-desktop__navigation').addClass('small');
            else $('#vp-js-desktop__navigation').removeClass('small');
            setDragbar(mousex);
//                  setLocalStorageWithExpiry('sidebar-width', mousex, 365);
          });
          // Disable mouse events for navigation bar iframe
          $(document).on('mouseup', function (e) {
              $(document).unbind('mousemove');
          });
          $(document).on('touchend', function (e) {
              $(document).unbind('touchmove');
          });
        });
        /* Sidebar event listeners */
        $('main').css('left','320px').css('width','calc(100% - 320px)');
        $('#vp-js-desktop__navigation').css('width','320px').removeClass('vp-article__aside-left__inner--collapsed');
        $('.header__navigation--logo img').addClass('logo-large').attr('src','https://esouthers.github.io/infocenter-viewport/assets/InfoCenterLogo.svg');
        $('.header__navigation--logo img').parent().prepend(svgSmallLogo);
        var articleLeft = '';
        $('.ht-menu-button').click(function() {
          $('#vp-js-desktop__navigation').toggleClass('vp-article__aside-left__inner--collapsed');
          if ($('#vp-js-desktop__navigation').hasClass('vp-article__aside-left__inner--collapsed')) {
            // close sidebar 96px
            articleLeft = $('main').css('left');
            $('main').css('left','96px').css('width','calc(100% - 96px)');
            $('#vp-js-desktop__navigation').css('width','96px');
            $('#sidebar-dragbar').addClass('hidden');
            $('.header__navigation--logo img.logo-large').hide();
            $('.header__navigation--logo svg.logo-small').show();
          }
          else {
            // open sidebar 320px
            $('main').css('left',articleLeft).css('width','calc(100% - ' + articleLeft + ')');
            $('#vp-js-desktop__navigation').css('width',articleLeft);
            $('#sidebar-dragbar').removeClass('hidden');
            $('.header__navigation--logo img.logo-large').show();
            $('.header__navigation--logo svg.logo-small').hide();
          }
        });
        $('.ic-products-top button').click(function() {
          sidebarExpandoListeners(this);
        });
        $('.sort-products .products-by-type').click(function() {
          $('ul.productlist-type').removeClass('hidden');
          $('.products-by-type').addClass('current');
          $('ul.productlist-family').addClass('hidden');
          $('.products-by-family').removeClass('current');
        });
        $('.sort-products .products-by-family').click(function() {
          $('ul.productlist-family').removeClass('hidden');
          $('.products-by-family').addClass('current');
          $('ul.productlist-type').addClass('hidden');
          $('.products-by-type').removeClass('current');
        });

        $('#ic-pagetree').click(function() {
          if ($('#vp-js-desktop__navigation').hasClass('vp-article__aside-left__inner--collapsed')) {
            $('.ht-menu-button').click(); // If sidebar collapsed, open it
          }
          if ($('.vp-tree').hasClass('hidden')) {
            $('.vp-tree').removeClass('hidden');
            $(this).addClass('current');
            $('#ic-products').removeClass('current')
          }
          else {
            $('.vp-tree').addClass('hidden');
            $(this).removeClass('current');
            if (!$('.sort-items').hasClass('hidden')) {
              $('#ic-products').addClass('current');
            }
          }
        });
        $('#ic-products').click(function() {
          if ($('.sort-items').hasClass('hidden')) {
            $(this).addClass('current');
            $('#ic-pagetree').removeClass('current');
            $('.sort-items').removeClass('hidden');
            if ($('.products-by-family').hasClass('current')) {
              $('ul.productlist-family').removeClass('hidden');
            }
            else {
              $('.products-by-type').addClass('current');
              $('ul.productlist-type').removeClass('hidden');
            }
          }
          else {
            $(this).removeClass('current');
            if (!$('.vp-tree').hasClass('hidden')) {
              $('#ic-pagetree').addClass('current');
            }
            $('.sort-items').addClass('hidden');
            $('ul.productlist-family').addClass('hidden');
            $('ul.productlist-type').addClass('hidden');
          }
        });


        function sidebarExpandoListeners(sidebarButton) {
          if ($(sidebarButton).hasClass('rotate-0')) {
            $(sidebarButton).removeClass('rotate-0').addClass('rotate-90').attr('aria-label','Collapse item');
            $(sidebarButton).closest('li').children('ul').first().removeClass('hidden');
          }
          else {
            $(sidebarButton).removeClass('rotate-90').addClass('rotate-0').attr('aria-label','Expand item');
            $(sidebarButton).closest('li').children('ul').first().addClass('hidden');
          }
        }
      });
    }

    function updateFooter() {
      $('article').append($('.footer__attribution-line--copyright'));
      // Add K15t footer
      $('footer').remove();
      let footerToAdd = '<footer id="ht-footer"> \
      <small><span class="scroll-viewport-attribution">Powered by <a href="https://www.atlassian.com" target="_blank">Atlassian Confluence</a> and <a href="https://www.k15t.com/go/scroll-viewport" target="_blank">Scroll Viewport</a>.</span></small> \
      <a href="#" id="ht-jump-top" class="sp-aui-icon-small sp-aui-iconfont-arrows-up"></a></footer>';
      $('main').append(footerToAdd);
    }

      // Fix inline images
    function fixInlineImages(figureToFix) {
      let maxThumbnailWidth = 30;
      let maxThumbnailHeight = 30; 

      if (($('img', figureToFix).height() < maxThumbnailHeight) || ($('img', figureToFix).attr('width') < maxThumbnailWidth)) {
        $(figureToFix).css('display','inline');
        let vpLBToggle = $('vp-lightbox-toggle', figureToFix);
        if (vpLBToggle.length > 0) {
          $(vpLBToggle[0].shadowRoot).find('button').remove();
        }
        $('a', figureToFix).css('display','inline');
        if ($(figureToFix)[0].nextSibling) {
          if ($(figureToFix)[0].nextSibling.nodeType == 3) {
            if (($(figureToFix)[0].previousSibling) && ($(figureToFix)[0].previousSibling.nodeType == 1)) {
              textNode = $(figureToFix)[0].nextSibling.nodeValue;
              $(figureToFix)[0].nextSibling.nodeValue = '';
              $(figureToFix).prev().append($(figureToFix)).append(textNode).contents().unwrap();
            }
            else {
              textNode = $(figureToFix)[0].nextSibling.nodeValue;
              $(figureToFix)[0].nextSibling.nodeValue = '';
              $(figureToFix).append(textNode);
            }
          }
        }
        else {
          if (($(figureToFix)[0].previousSibling) && ($(figureToFix)[0].previousSibling.nodeType == 1)) {
            $(figureToFix).prev().append($(figureToFix)).contents().unwrap();
          }
        }
      }
      else {
//                let style =  document.createElement( 'style' );
//                style.innerHTML = 'button:is(:hover, :focus-visible), button { background-color: var(--haiui-gray-11); }';
//                $('vp-lightbox-toggle', figureToFix)[0].shadowRoot.appendChild(style);
      }
    }


    $.fn.isInViewport = function(elementOffset) {
      var elementTop = $(this).offset().top - elementOffset;
      var elementBottom = elementTop + $(this).outerHeight();
      var viewportTop = $(window).scrollTop();
      var viewportBottom = viewportTop + $(window).height();
      return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    function setDragbar(val) {
      if (val == NaN)val = 320;
      let val10 = val - 10;
      $('#vp-js-desktop__navigation').width(val10 + "px");
      $('main').css("left", val + "px").css("width", "calc(100% - " + val + "px)");
    //          hideShowBreadcrumbs(val);
    }

    // Adds modified date under page title
    function addModifiedDate() {
      let modDate = $('meta[name="source-last-modified"]').attr('content');
      if (modDate !== undefined) {
        let modYear = modDate.split('-')[0];
        let modMonth = modDate.split('-')[1];
        let modDay = modDate.split('-')[2].split('T')[0];
        let monthArray = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        let modDateHTML = '<p class="modified-date">Last updated on '+monthArray[modMonth-1]+' '+modDay+', '+modYear+'</p>';
        $('.article-header').append(modDateHTML);
      }
    }
    function buildSidebarList(jsonObject,htmltoBuild,listType) {
      $.each(jsonObject, function(sectionTitle,product) {
        htmltoBuild += '<li class="vp-tree-item vp-tree-item--type-default list-none vp-tree-item--with-hover-effect" data-id="" role="treeitem" tabindex="-1" aria-setsize="4" aria-label="' + sectionTitle + '" aria-expanded="false" aria-selected="false" aria-level="1"><div class="vp-tree-item__header relative flex flex-row items-start outline-none flex-row">';
        if ((listType == 'family') && (product.length == 1)) {
          htmltoBuild += '<a class="vp-tree-item__header__title flex-1 min-w-0 outline-none" tabindex="-1" href="' + product[0].url + '">' + sectionTitle + '</a><div class="vp-tree-item__header__icon"><button style="display:none;" class="vp-tree-item__header__expand-button cursor-pointer color-inherit transform rotate-0" type="button" aria-hidden="true" aria-label="Expand item" tabindex="-1">' + svgChevron + '</button></div></div></li>';
        }
        else {
          htmltoBuild += '<a class="vp-tree-item__header__title flex-1 min-w-0 outline-none" tabindex="-1">' + sectionTitle + '</a><div class="vp-tree-item__header__icon"><button class="vp-tree-item__header__expand-button cursor-pointer color-inherit transform rotate-0" type="button" aria-hidden="true" aria-label="Expand item" tabindex="-1">' + svgChevron + '</button></div></div><ul class="vp-tree-item__children hidden" role="group">';
          $.each(product, function(key,value) {
            htmltoBuild += '<li class="vp-tree-item vp-tree-item--type-default vp-tree-item--variant-right-aligned list-none vp-tree-item--with-hover-effect" data-id="" role="treeitem" tabindex="-1" aria-label="' + value.name + '" aria-expanded="false" aria-selected="false" aria-level="2"><div data-item-id="" class="vp-tree-item__header relative flex flex-row items-start outline-none flex-row"><a class="vp-tree-item__header__title flex-1 min-w-0 outline-none" tabindex="-1" href="' + value.url + '">' + value.name + '</a><div class="vp-tree-item__header__icon"></div></div></li>';
          });
          htmltoBuild += '</ul></li>';
        }
      });
      return htmltoBuild;
    }
    /*
    function addMsg(message, hideOption, expireDays) {
      let dnsMsg = '';
      if (expireDays == 'session') {
        dnsMsg = '<div class="aui-nav-actions-list flagDoNotShow hidden"><input type="checkbox" name="doNotShow" value="show"><label for="doNotShow"> Remind me later.</label></div>';
      }
      else if (hideOption) {
        dnsMsg = '<div class="aui-nav-actions-list flagDoNotShow hidden"><input type="checkbox" name="doNotShow" value="show"><label for="doNotShow"> Hide for ' + expireDays + ' days?</label></div>';
      }
      var cookieFlag = AJS.flag({
        type: 'info',
        body: message + dnsMsg
      });
      if (!isPlayPro()) {
        if (localStorage.getItem('acceptedCookie')=="true") { // Only show if we have accepted cookies.
          $('.aui-nav-actions-list.flagDoNotShow').removeClass('hidden');
        }
      }
      $('.aui-close-button',cookieFlag).on('click',function() {
        let cookieToSet = $('[id^=flag]', $(this).parent()).attr('id');
        if ((isInIframe()) || ((localStorage.getItem('acceptedCookie')=="true") && ($(this).siblings('.flagDoNotShow').children('input').is(':checked')))) {
          if (expireDays == 'session') {
            sessionStorage.setItem(cookieToSet, 'true');
    //        setLocalStorageWithExpiry(cookieToSet,'true',0);
          }
          else {
            setLocalStorageWithExpiry(cookieToSet,'true', expireDays);
          }
        }
        if ((cookieToSet == 'flagOldVer') || (cookieToSet == 'flagBeta') || (cookieToSet == 'flagMaintenance') || (cookieToSet == 'flagMakito')) {
          $('.versionIcon').removeClass('hideIcon');
        }
      });
    }
    */

    function addIconNextToVersion(newMsg, flagID, expDays) {
      $('.versionIcon').attr('data-original-title', newMsg).attr('title', newMsg);
    //          $('.versionIcon').tooltip({gravity: 'nw'});
      newMsg = '<div id=' + flagID + '>' + newMsg + '</div>';
      if (!isPlayPro()) { 
        if (expDays == 'session' && !sessionStorage.getItem(flagID)) {
            addBanner(newMsg, true, expDays);
        } else if (!(expDays == 'session') && !getLocalStorageWithExpiry(flagID)) {
            addBanner(newMsg, true, expDays);
        } else {
            $('.versionIcon').removeClass('hideIcon');
        }
      }
    }

    function addBanner(newMsg, flagID, expDays) {
      let auiflag = '<div id="aui-flag-container"><div class="aui-flag" aria-live="polite" open="open"><div class="aui-message closeable aui-message-info">' + message + hideForMsg + '<button type="button" class="aui-close-button" aria-label="Close"></button></div></div></div>';
      $('body').prepend(auiflag);
      $('#aui-flag-container .aui-close-button').click(function() {
        $(this).closeFlag();
    //            if $('.', this)
      });
      $.fn.closeFlag = function(elementOffset) {
        $('> .aui-flag', this).removeAttr('open')
      }
      $.fn.openFlag = function(elementOffset) {
        $('> .aui-flag', this).attr('open','open');
      }
    }


    function setLocalStorageWithExpiry(key, value, ttl) {
      if (localStorage.getItem('acceptedCookie')=="true") {
        const now = new Date();
        const item = {
          value: value,
          expiry: now.getTime() + 864E5 * ttl,
        };
        localStorage.setItem(key, JSON.stringify(item));
      }
    }
    function getLocalStorageWithExpiry(key) {
      const itemStr = localStorage.getItem(key);
      if (!itemStr) {
        return null;
      }
      const item = JSON.parse(itemStr);
      const now = new Date();
      if (now.getTime() > item.expiry) {
        localStorage.removeItem(key);
        return null;
      }
      return item.value;
    }
    function waitForElm(selector) {
      return new Promise(resolve => {
        if (document.querySelector(selector)) {
          return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
          if (document.querySelector(selector)) {
            observer.disconnect();
            resolve(document.querySelector(selector));
          }
        });

        observer.observe(document.body, {
          childList: true,
          subtree: true
        });
      });
    }


    /* Searching */
    /* https://haivision-infocenter.scrollhelp.site/__search?l=en&max=6&ol=false&q=config&s=HMP&start=0&v=3.7 */
    // https://haivision-infocenter.scrollhelp.site/__search?l=en&max=6&ol=false&q=config&s=HMP&start=0&v=3.7&v=3.8

    // Do not use due to Cors proxy security issues
    // Temp fix for Adaptavist's Tabs macros
    function fixTabs() {
      // Aui tabs
      // 1. Search page for auitabs jscript.
      // 2. If found get page id and macro ids
      var pageID = $('body').attr('pageid');
      $('.ap-container script').each( function(index) {
        var that = this;
        var tabsIndex = index;
        pageID = $(that).text().split('page.id\\":\\"')[1].split('\\')[0];
        var macroID = $(that).text().split('macro.id\\":\\"')[1].split('\\')[0];
        $(that).parent('.ap-container').after('<div id="aui-tabs' + tabsIndex + '" class="contentf aui-tabs horizontal-tabs" role="application"><ul class="tabs-menu" role="tablist"></ul></div>');
        // https://haivisioninfocenter.atlassian.net/wiki/rest/api/content/36049353/history/0/macro/id/834c47c9-9e12-4588-94ae-db701689f010/convert/view 
        $.get("https://corsproxy.io/?https://haivisioninfocenter.atlassian.net/wiki/rest/api/content/" + pageID + "/history/0/macro/id/" + macroID + "/convert/view", function( data ) {
          // Gets the tabs container content. Must loop through this content looking for macro-id's for the tabs page macros
          var tabMacroIDs = data.value.split('data-macro-id=\"');
          var tabPageTitles = [];
          for (var i = 1; i < tabMacroIDs.length; i++) {
            tabMacroIDs[i] = tabMacroIDs[i].split('\"')[0];
            var tabMacroID = tabMacroIDs[i];
            $('#aui-tabs' + tabsIndex + ' .tabs-menu').append('<li class="menu-item"><a id="' + tabMacroID + '-tab"></a></li>');
            $.get("https://corsproxy.io/?https://haivisioninfocenter.atlassian.net/wiki/rest/api/content/" + pageID + "/history/0/macro/id/" + tabMacroID, function( data ) {
              var tabPageTitle = data.parameters.title.value;
              var tabPageTitleNoSpaces = data.parameters.title.value.replaceAll(' ','').replaceAll('/','');
              var tabMacroID = $(this)[0].url.split('macro/id/')[1].split('/')[0];
//                  $('#aui-tabs' + tabsIndex + ' .tabs-menu').append('<li class="menu-item"><a id="' + tabPageTitleNoSpaces + '-tab" href="#' + tabPageTitleNoSpaces + '">' + tabPageTitle + '</a></li>');
//                  href="#' + tabPageTitleNoSpaces + 
              $('#' + tabMacroID + '-tab').attr('id',tabPageTitleNoSpaces + '-tab').attr('data-href','#' + tabPageTitleNoSpaces).text(tabPageTitle);
              $('#aui-tabs' + tabsIndex + ' .menu-item').first().addClass('active-tab');
              $('#aui-tabs' + tabsIndex).append('<div id="' + tabPageTitleNoSpaces + '" data-pane-title="' + tabPageTitle + '" class="cfm tabs-pane" role="tabpanel" loaded="true" style="display: none;"></div>');
/* Update these 2 lines to add support for tabs in URL feature */
              let firstTab = $('#aui-tabs' + tabsIndex + ' .tabs-menu .menu-item').first().children('a').attr('data-href');
              $('#aui-tabs' + tabsIndex + ' ' + firstTab).addClass('active-pane').show();

              addTabEventListener($('#' + tabPageTitleNoSpaces + '-tab'));
              $.get("https://corsproxy.io/?https://haivisioninfocenter.atlassian.net/wiki/rest/api/content/" + pageID + "/history/0/macro/id/" + tabMacroID + "/convert/view", function( data ) {
                $('#' + tabPageTitleNoSpaces).append(data.value);
                renderTab($('#' + tabPageTitleNoSpaces));
              });
            });
          }
        });
      });
      function addTabEventListener(tab) {
        $(tab).click(function() {
          $(tab).parents('.tabs-menu').first().children('li').removeClass('active-tab');
          $(tab).parent().addClass('active-tab');
          $(tab).parents('.aui-tabs').first().children('.tabs-pane').removeClass('active-pane').hide();
          $($(tab).attr('data-href')).addClass('active-pane').show();
        });
      }
      function renderTab(tabContent) {
        $('.confluence-embedded-file-wrapper', tabContent).each(function() {
          fixInlineImages(this);
        });
        $('a', tabContent).each(function() {
          let pageID = $(this).attr('data-linked-resource-id');
          let pageHREF  = $('.vp-desktop-navigation__page-tree__tree [data-id=' + pageID + '] a').attr('href');
          let pageTitle = $('.vp-desktop-navigation__page-tree__tree [data-id=' + pageID + '] a').text();
          $(this).attr('data-href', pageHREF).text(pageTitle);
          /**************
           * Issue here with links that don't appear yet in the sidebar. See P2P Analytics tab at https://haivision-infocenter.scrollhelp.site/HMP/3.9/reports-and-logs
           * ************/
        });
        $('img', tabContent).each(function() {
          let imgPageID = $(this).attr('data-linked-resource-container-id');
          let imgID = $(this).attr('data-media-id');
          let imgNameTemp = $(this).attr('src').split('/');
          let imgName = imgNameTemp[imgNameTemp.length - 1].split('?')[0];
          $(this).attr('src','../../__attachments/' + imgPageID + '/' + imgName + '?' + imgID);
          $(this).attr('width',$(this).attr('height'));
          /*********** 
           * Add inline image fix for icons in tabs: https://haivision-infocenter.scrollhelp.site/HMP/3.9/security-settings#Appliance
           * /
        });
        $('table-wrap', tabContent).each(function() {
/* Add enlarge functionality to tables in tabs
          $(this).prepend('<button type="button" aria-hidden="true" class="button enlarge-table-button" data-open="js-table-overlay"><svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 11.7 11.7" xml:space="preserve"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.239 2.963h1.4v1.5M4.539 8.663h-1.5v-1.6M8.739 7.163v1.5h-1.6M3.039 4.563v-1.5h1.6"></path></svg></button>');
          '<div class="table-overlay full reveal article__content" data-vp-id="js-table-overlay" style="display: block;"> \
          <i18n-message i18nkey="modal.cta.close.label" attribute="title"><button class="close-button table-overlay__close" data-close="" title="Close modal" type="button"> \
          <span aria-hidden="true">×</span></button></i18n-message><div class="table-overlay__content"><div class="article">' + + '</div></div></div>';
          $('vp-article-pagination').before(this);
          $('button', this).click(function() {

          });
*/
        });
        /* Add fix for draw.io images */
          $('[data-macro-name="drawio"]', tabContent).each(function() {
            let macroID = $(this).attr('data-macro-id');
            let that = this;
            $.get("https://corsproxy.io/?https://haivisioninfocenter.atlassian.net/wiki/rest/api/content/" + pageID + "/history/0/macro/id/" + macroID, function( data ) {
              let imgName = data.parameters.diagramName.value + '.png';
              let imgSize = data.parameters.size?.value;
              let imgWidth = '';
              if (imgSize !== undefined) {
                imgWidth = ' width="' + imgSize + '"';
              }
              let img = '<img' + imgWidth + ' src="https://haivisioninfocenter.atlassian.net/wiki/download/attachments/' + pageID + '/' + imgName + '?api=v2">';
              $(that).append(img);
            });
          });

      }
    }

    function getSearchIndexes(numResults) {
      const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
      });
      let startIdx = parseInt(params.start) + 1;
      let maxIdx = parseInt(params.max);
      if (startIdx + maxIdx - 1 > numResults) {
        stopIdx = numResults;
      }
      else {
        stopIdx = startIdx + maxIdx - 1
      }
      return [startIdx, stopIdx];
    }
  };
  document.head.appendChild(script);
}
