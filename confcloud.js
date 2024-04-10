function confCloudJS() { 
 
  var link = document.createElement("LINK");
  link.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
  link.rel = 'stylesheet';
  document.head.appendChild(link);
  function compare( a, b ) {
    if ( a.name.toLowerCase() < b.name.toLowerCase() ){  return -1; }
    if ( a.name.toLowerCase() > b.name.toLowerCase() ){  return 1;  }
    return 0;
  }
  scrollHelpCenter.collection.members = scrollHelpCenter.collection.members.sort( compare );


  function loadScript(src, callback) {
    var script = document.createElement("script");
    script.src = src;
    script.type = "text/javascript";
    script.onload = callback;
    script.onerror = function(src) { console.error('Failed to load ' + src); };
    document.head.appendChild(script);
  }

  loadScript('https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js', function() {
    $('link[rel="icon"]').attr('href','https://esouthers.github.io/infocenter-viewport/assets/favicon.png');
    $('body').attr('data-pageid',$('body').attr('pageid'));

    loadScript('https://esouthers.github.io/infocenter-viewport/config.js', function() {

        loadScript('https://haivision.jira.com/s/d41d8cd98f00b204e9800998ecf8427e-T/-t2deah/b/11/e73395c53c3b10fde2303f4bf74ffbf6/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs.js?locale=en-US&collectorId=99991144', function() {

          loadScript('https://cdnjs.cloudflare.com/ajax/libs/aui/9.10.0/aui/aui-prototyping.min.js', function() {

            // Google Analytics
            window.dataLayer = window.dataLayer || [];
            var gtag = function(){dataLayer.push(arguments);};

        /*** SVG images ***/  
            var svgHamburger = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 250 250" xml:space="preserve" class="HaiIcon" iconname="Hamburger" subtype="hamburger" type="navigation"><path id="Path_1229" d="M219.4,73.7H32.6c-6.2-0.4-10.9-5.9-10.5-12.1C22.5,56,27,51.5,32.6,51.1h186.8c6.2,0.4,10.9,5.9,10.5,12.1 C229.5,68.8,225,73.3,219.4,73.7z"></path><path id="Path_1230" d="M219.4,137H32.6c-6.2-0.4-10.9-5.9-10.5-12.1c0.4-5.6,4.9-10.1,10.5-10.5h186.8c6.2,0.4,10.9,5.9,10.5,12.1 C229.5,132.1,225,136.6,219.4,137z"></path><path id="Path_1231" d="M218.8,199.1H32c-6.2-0.4-10.9-5.9-10.5-12.1c0.4-5.6,4.9-10.1,10.5-10.5h186.8c6.2,0.4,10.9,5.9,10.5,12.1 C228.9,194.2,224.4,198.7,218.8,199.1z"></path></svg>';
            var svgPageTree  = '<svg id="a" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48"><path d="M14,36h20c1.1,0,2-.9,2-2s-.9-2-2-2H14c-1.1,0-2,.9-2,2s.9,2,2,2Z"></path><path d="M14,26h20c1.1,0,2-.9,2-2s-.9-2-2-2H14c-1.1,0-2,.9-2,2s.9,2,2,2Z"></path><path d="M14,16h20c1.1,0,2-.9,2-2s-.9-2-2-2H14c-1.1,0-2,.9-2,2s.9,2,2,2Z"></path><path d="M40,2H8c-2.21,0-4,1.79-4,4V42c0,2.21,1.79,4,4,4H40c2.21,0,4-1.79,4-4V6c0-2.21-1.79-4-4-4Zm-1,40H9c-.55,0-1-.45-1-1V7c0-.55,.45-1,1-1h30c.55,0,1,.45,1,1V41c0,.55-.45,1-1,1Z"></path></svg>';
            var svgProducts  = '<svg class="pagetree-icon HaiIcon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48" style="height: 20px; width: 20px;"><path d="M42,22H6c-2.21,0-4-1.79-4-4V6c0-2.21,1.79-4,4-4H42c2.21,0,4,1.79,4,4v12c0,2.21-1.79,4-4,4ZM6,7v10c0,.55,.45,1,1,1H41c.55,0,1-.45,1-1V7c0-.55-.45-1-1-1H7c-.55,0-1,.45-1,1Z"></path><path d="M42,46H6c-2.21,0-4-1.79-4-4v-12c0-2.21,1.79-4,4-4H42c2.21,0,4,1.79,4,4v12c0,2.21-1.79,4-4,4ZM6,31v10c0,.55,.45,1,1,1H41c.55,0,1-.45,1-1v-10c0-.55-.45-1-1-1H7c-.55,0-1,.45-1,1Z"></path><circle cx="36" cy="36" r="2"></circle><circle cx="36" cy="12" r="2"></circle></svg>';
            var svgPrefs     = '<svg class="pagetree-icon HaiIcon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48"><path d="M10,22.26V4c0-1.1-.9-2-2-2s-2,.9-2,2V22.26c-3.44,.89-6,4.02-6,7.74s2.56,6.85,6,7.74v6.26c0,1.1,.9,2,2,2s2-.9,2-2v-6.26c3.44-.89,6-4.02,6-7.74s-2.56-6.85-6-7.74Zm-2,11.74c-2.21,0-4-1.79-4-4s1.79-4,4-4,4,1.79,4,4-1.79,4-4,4Z"></path><path d="M32,16c0-3.72-2.56-6.85-6-7.74V4c0-1.1-.9-2-2-2s-2,.9-2,2v4.26c-3.44,.89-6,4.02-6,7.74s2.56,6.85,6,7.74v20.26c0,1.1,.9,2,2,2s2-.9,2-2V23.74c3.44-.89,6-4.02,6-7.74Zm-8,4c-2.21,0-4-1.79-4-4s1.79-4,4-4,4,1.79,4,4-1.79,4-4,4Z"></path><path d="M48,34c0-3.72-2.56-6.85-6-7.74V4c0-1.1-.9-2-2-2s-2,.9-2,2V26.26c-3.44,.89-6,4.02-6,7.74s2.56,6.85,6,7.74v2.26c0,1.1,.9,2,2,2s2-.9,2-2v-2.26c3.44-.89,6-4.02,6-7.74Zm-8,4c-2.21,0-4-1.79-4-4s1.79-4,4-4,4,1.79,4,4-1.79,4-4,4Z"></path></svg>';
            var svgSupport   = '<svg class="pagetree-icon HaiIcon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" version="1.1" viewBox="0 0 200 200" xml:space="preserve"><path d="m185.5 60h-18.1c-5.4-33-34.1-58.3-68.6-58.3-34.7 0-63.6 25.6-68.7 58.9h-17.6c-7.2 0-13 5.8-13 13v41.3c0 7.2 5.8 13 13 13h16.8v0.4c0 5.2 4.3 9.5 9.5 9.5s9.5-4.3 9.5-9.5v-57.1c0-27.8 22.7-50.5 50.5-50.5s50.5 22.7 50.5 50.5v57.1c0 27.5-22.1 49.9-49.4 50.5h-0.2-0.7-0.1c-4.8 0.4-8.6 4.5-8.6 9.5s3.8 9 8.6 9.5v0.1c38.3 0 69.5-31.2 69.5-69.5v-0.4h17.2c7.2 0 13-5.8 13-13v-42c-0.1-7.2-5.9-13-13.1-13zm-156.2 48.8h-10.8v-29.3h10.8zm150.2 0h-11.2v-29.8h11.2z"/><path d="m123.5 177.8c-12.8 0-25.1-4-35.5-11.5-4.2-3-5.2-9-2.2-13.2 3-4.3 8.8-5.3 12.9-2.3 7.2 5.3 15.8 8 24.7 8s17.5-2.8 24.7-8c4.2-3 10-2 12.9 2.3 3 4.3 2 10.2-2.2 13.2-10.3 7.5-22.5 11.5-35.3 11.5z"/></svg>';
            var svgSmallLogo = '<svg class="logo-small" style="display: none;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="44" height="36" viewBox="0 0 44 40"><path d="M3.1,0H7.04V-22.4H3.1Zm19.68.384a11.558,11.558,0,0,0,9.088-3.968l-2.528-2.56c-1.92,1.792-3.68,2.88-6.432,2.88-4.288,0-7.392-3.552-7.392-7.936v-.064c0-4.384,3.136-7.872,7.36-7.872a8.951,8.951,0,0,1,6.3,2.752L31.712-19.3a11.7,11.7,0,0,0-8.8-3.488A11.328,11.328,0,0,0,11.392-11.2v.064A11.246,11.246,0,0,0,22.784.384Z" transform="translate(6 32)" fill="#fff"/></svg>';
            var svgChevron   = '<svg data-vp-id="chevron-right-icon-tree-item-36059661" data-vp-component="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M7 5L10 8L7 11" stroke="currentColor" stroke-width="1px" stroke-linecap="square"></path></svg>';
            var svgInfoFilled= '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 48 48" class="HaiIcon" iconname="InformationFilled" subtype="information-filled" theme="argon" type="actions"><path d="M24,0C10.75,0,0,10.75,0,24s10.75,24,24,24,24-10.75,24-24S37.25,0,24,0Zm2,33.97c0,1.12-.9,2.03-2,2.03s-2-.91-2-2.03v-11.94c0-1.12,.9-2.03,2-2.03s2,.91,2,2.03v11.94Zm-2-17.97c-1.1,0-2-.9-2-2s.9-2,2-2,2,.9,2,2-.9,2-2,2Z"></path></svg>';
            var svgCheckFilled = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" class="HaiIcon fixedSize" iconname="CheckmarkCircle" subtype="checkmark-circle" theme="argon" type="toggle"><path d="M8,0C3.58,0,0,3.58,0,8s3.58,8,8,8,8-3.58,8-8S12.42,0,8,0Zm3.9,5.33l-3.48,6.95c-.16,.33-.48,.55-.85,.6-.05,0-.1,0-.15,0-.31,0-.62-.13-.83-.37l-2.82-3.15c-.2-.22-.3-.5-.28-.8s.15-.57,.37-.76c.2-.18,.47-.28,.74-.28,.32,0,.62,.13,.83,.37l1.73,1.93,2.75-5.49c.19-.38,.57-.61,.99-.61,.17,0,.34,.04,.5,.12,.27,.13,.46,.36,.56,.64,.09,.28,.07,.58-.06,.85Z"></path></svg>';
            var svgFeedback = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" class="HaiIcon" iconname="FeedbackFilled" subtype="feedback-filled" theme="argon" type="actions" style="height: 16px; width: 16px;"><path d="M44,0H4C1.79,0,0,1.79,0,4v30c0,2.21,1.79,4,4,4h30.34c1.06,0,2.08,.42,2.83,1.17l7.41,7.41c1.26,1.26,3.41,.37,3.41-1.41V4C48,1.79,46.21,0,44,0ZM24,30c-1.1,0-2-.9-2-2s.9-2,2-2,2,.9,2,2-.9,2-2,2Zm2-10c0,1.1-.9,2-2,2s-2-.9-2-2V10c0-1.1,.9-2,2-2s2,.9,2,2v10Z"></path></svg>';
            var svgSales = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" class="HaiIcon" iconname="HelpCenter" subtype="help-center" theme="argon" type="label" style="height: 16px; width: 16px;"><path d="M42,14h-2.53c-1.78-6.89-8.03-12-15.47-12S10.31,7.11,8.53,14h-2.53c-3.31,0-6,2.69-6,6v4c0,3.31,2.69,6,6,6h2c0,1.1,.9,2,2,2s2-.9,2-2v-12c0-6.62,5.38-12,12-12s12,5.38,12,12v12c0,6.62-5.38,12-12,12-1.1,0-2,.9-2,2s.9,2,2,2c8.82,0,16-7.18,16-16h2c3.31,0,6-2.69,6-6v-4c0-3.31-2.69-6-6-6ZM6,26c-1.1,0-2-.9-2-2v-4c0-1.1,.9-2,2-2h2v8h-2Zm38-2c0,1.1-.9,2-2,2h-2v-8h2c1.1,0,2,.9,2,2v4Z"></path><path d="M31.41,31.41c.77-.77,.77-2.01,.01-2.79-.76-.79-2.02-.8-2.82-.06-.06,.06-1.57,1.44-4.61,1.44s-4.51-1.34-4.61-1.43c-.78-.76-2.04-.76-2.81,.02-.78,.78-.78,2.05,0,2.83,.26,.26,2.72,2.59,7.41,2.59s7.15-2.32,7.41-2.59Z"></path></svg>';
            var svgPrint = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" viewBox="0 0 490 490" style="width: 16px; height:16px;" xml:space="preserve"><path d="M118.6,490h252.8V327.8H118.6V490z M155.6,354.7h178.9c5.4,0,10.1,4.3,10.1,10.1c0,5.8-4.3,10.1-10.1,10.1H155.6     c-5.4,0-10.1-4.3-10.1-10.1C145.4,358.9,150.1,354.7,155.6,354.7z M155.6,395.9h178.9c5.4,0,10.1,4.3,10.1,10.1     c0,5.8-4.7,10.1-10.1,10.1H155.6c-5.4,0-10.1-4.3-10.1-10.1C145.4,400.2,150.1,395.9,155.6,395.9z M155.6,437.5h178.9     c5.4,0,10.1,4.3,10.1,10.1c0,5.8-4.3,10.1-10.1,10.1H155.6c-5.4,0-10.1-4.3-10.1-10.1C145.4,441.8,150.1,437.5,155.6,437.5z"/><path d="M458.5,104.2h-427C14,104.2,0,118.2,0,135.7v189.8C0,343,14,357,31.5,357h67.3v-49h292.4v49h67.3     c17.5,0,31.5-14,31.5-31.5V135.7C490,118.6,476,104.2,458.5,104.2z M365.9,167.6h-17.1c-5.4,0-10.1-4.3-10.1-10.1     s4.3-10.1,10.1-10.1h17.1c5.4,0,10.1,4.3,10.1,10.1S371.4,167.6,365.9,167.6z M425.8,181.6c-13.2,0-23.7-10.9-23.7-23.7     c0-13.2,10.9-23.7,23.7-23.7s23.7,10.9,23.7,23.7C449.9,171.1,439.1,181.6,425.8,181.6z"/><rect x="118.6" width="252.8" height="84.4"/></svg>';
        //    var svgPDF   = '<svg width="16px" height="16px" version="1.1" viewBox="0 0 550.8 550.8" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m160.38 282.22c0-14.832-10.299-23.684-28.474-23.684-7.414 0-12.437 0.715-15.071 1.432v47.627c3.114 0.707 6.942 0.949 12.192 0.949 19.391 0 31.353-9.809 31.353-26.324z"/><path d="m272.88 259.02c-8.145 0-13.397 0.717-16.519 1.435v105.52c3.116 0.729 8.142 0.729 12.69 0.729 33.017 0.231 54.554-17.946 54.554-56.474 0.242-33.513-19.385-51.213-50.725-51.213z"/><path d="m488.43 197.02h-13.226v-63.816c0-0.398-0.063-0.799-0.116-1.202-0.021-2.534-0.827-5.023-2.562-6.995l-106.2-121.31c-0.032-0.031-0.063-0.042-0.085-0.076-0.633-0.707-1.371-1.295-2.151-1.804-0.231-0.155-0.464-0.285-0.706-0.419-0.676-0.369-1.393-0.675-2.131-0.896-0.2-0.056-0.38-0.138-0.58-0.19-0.802-0.19-1.635-0.309-2.479-0.309h-260.99c-11.918 0-21.6 9.693-21.6 21.601v175.41h-13.223c-17.049 0-30.873 13.818-30.873 30.873v160.54c0 17.043 13.824 30.87 30.873 30.87h13.224v109.9c0 11.907 9.682 21.601 21.6 21.601h356.4c11.907 0 21.6-9.693 21.6-21.601v-109.9h13.226c17.044 0 30.871-13.827 30.871-30.87v-160.54c-1e-3 -17.054-13.828-30.873-30.872-30.873zm-391.23-175.41h250.19v110.51c0 5.967 4.841 10.8 10.8 10.8h95.407v54.108h-356.4v-175.42zm265.16 287.42c0 30.876-11.243 52.165-26.82 65.333-16.971 14.117-42.82 20.814-74.396 20.814-18.9 0-32.297-1.197-41.401-2.389v-158.42c13.399-2.149 30.878-3.346 49.304-3.346 30.612 0 50.478 5.508 66.039 17.226 16.743 12.445 27.274 32.302 27.274 60.778zm-281.66 84.476v-159.13c11.241-1.904 27.042-3.346 49.296-3.346 22.491 0 38.527 4.308 49.291 12.928 10.292 8.131 17.215 21.534 17.215 37.328 0 15.799-5.25 29.198-14.829 38.285-12.442 11.728-30.865 16.996-52.407 16.996-4.778 0-9.1-0.243-12.435-0.723v57.67h-36.131v-4e-3zm372.9 129.85h-356.4v-104.05h356.4v104.05zm31.297-261.23h-61.989v36.851h57.913v29.674h-57.913v64.848h-36.593v-161.28h98.582v29.911z"/></svg>';
            var svgPDF   = '<svg id="a" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48"><path d="M22.59,31.44c.39,.39,.9,.59,1.41,.59s1.02-.2,1.41-.59l8.73-8.73c.78-.78,.78-2.05,0-2.83-.78-.78-2.05-.78-2.83,0l-5.32,5.32V4c0-1.1-.9-2-2-2s-2,.9-2,2V25.2l-5.32-5.32c-.78-.78-2.05-.78-2.83,0-.78,.78-.78,2.05,0,2.83l8.73,8.73Z"/><path d="M46,29c-1.1,0-2,.9-2,2v10.06c0,1.62-1.42,2.94-3.17,2.94H7.17c-1.75,0-3.17-1.32-3.17-2.94v-10.06c0-1.1-.9-2-2-2s-2,.9-2,2v10.06c0,3.82,3.22,6.94,7.17,6.94H40.83c3.95,0,7.17-3.11,7.17-6.94v-10.06c0-1.1-.9-2-2-2Z"/></svg>';

            var viewportList = window.scrollHelpCenter.collection;

            // PDF Export variables
            var pdfDialog = '<section role="dialog" id="pdf-dialog" data-aui-modal="true" class="hai-dialog aui-dialog2 card" aria-hidden="true" style="display:none"><header class="aui-dialog2-header card-header">' + svgPDF + '<h2 class="haiui-heading-03-book">Export to PDF</h2><a class="card-close"><span class="aui-icon aui-icon-small hai-icon-download-close dialog-cancel-button">Close</span></a></header><div class="card-body haiui-body-02 options"><label for="paperSize">Paper Size:</label><input type="radio" name="paperSize" id="letter" value="letter"><label for="letter">Letter</label><input type="radio" name="paperSize" id="a4" value="a4"><label for="a4">A4</label><div class="status-error" style="display: none;"><div class="aui-icon aui-icon-large hai-icon-status-error"></div><div class="error-text">Please select a size.</div></div></div><div class="card-body haiui-body-02 status" style="display:none;"><div id="progress-bar" class="aui-progress-indicator" data-value="0"><span class="aui-progress-indicator-value" style="width: 0px;"></span></div><ul class="status-message"><li id="PDFstep1" class="pdfStepWaiting"><span class="aui-icon aui-icon-small"></span>Queuing Export</li><li id="PDFstep2" class="pdfStepPending"><span class="aui-icon aui-icon-small"></span>Collecting Pages</li><li id="PDFstep3" class="pdfStepPending"><span class="aui-icon aui-icon-small"></span>Processing Pages <span class="numPDFDone"></span></li><li id="PDFstep4" class="pdfStepPending"><span class="aui-icon aui-icon-small"></span>Rendering PDF <span class="numPDFDone"></span></li></ul><div class="status-done" style="display:none;"><div class="aui-icon aui-icon-large hai-icon-status-ok"></div><div class="done-text">Your PDF has been created and will start downloading in a few seconds! If the download doesn\'t start, <a id="PDFDonelink">click here</a>.</div></div><div class="status-error" style="display:none;"><div class="aui-icon aui-icon-large hai-icon-status-error"></div><div class="error-text">Error. Something went wrong. Please <a href="mailto:infodev@haivision.com">contact us</a> regarding this issue.</div></div></div><footer class="card-footer"><div class=""><button class="primary dialog-start-button">Start</button><button class="primary dialog-cancel-button" style="display:none;">Cancel</button><button class="primary dialog-close-button" style="display:none;">Close</button></div></footer></section>';
            var overrideTemplateLetter = '';
            var overrideTemplateA4 = '';

            var isBetaSite = window.location.host.split('.')[0].indexOf('beta') >= 0 ? true : false;
            if (isBetaSite) {
              $('body').addClass('beta');
            }

            $(window).resize(function() {
              testWindowSize();
            });
            cookieSetup();

            // Start of processing depending on page type
            let page404 = ($('[i18nkey="page.error.status.404.label"]').length > 0);
            let pageSearch = (window.location.pathname == '/search.html');
            let doNotShowPage = false;
            let redirecting = false;
            // Redirect to homepage
            if (window.location.pathname == '/') {
              window.location.replace('https://' + window.location.hostname + '/Home');
              redirecting = true;
            }
            // Remove instances of index.html
            else if (window.location.pathname.indexOf('/index.html') >= 0) {
              window.location.replace('https://' + window.location.hostname + window.location.pathname.replace('/index.html',''));
              redirecting = true;
            }
            // Redirect to older version if newer versions have the same documentation
            $.each(hvConfig.redirects, function(i,product) {
              $.each(product.newerVersions, function(j,version) {
                if (window.location.pathname.indexOf(product.prefix  + '/' + version) >= 0) {
                  window.location.replace('https://' + window.location.hostname + '/' + product.prefix  + '/' + product.olderVersion);
                  redirecting = true;
                }
              });
            });
            if (redirecting) {
              return false;
            }
            else if (pageSearch || page404) {
              let sidebar = '<div class="vp-article__aside-left no-print"><div id="vp-js-desktop__navigation" class="vp-article__aside-left__inner"><nav id="3ry00fx860k" aria-label="Main" class="vp-desktop-navigation__page-tree vp-scrollable-container"><div class="vp-tree vp-desktop-navigation__page-tree__tree"><ul class="vp-tree__container relative m-0 outline-none" role="tree"></ul></div></nav></div></div>';
              $('#content').before(sidebar);
              if (page404) {
                process404pages();
              }
              function process404pages() {
                let pathname = window.location.pathname;
                // Test if latest in the URL, e.g. /HMP/latest
                let found = forwardIfLatest(pathname);
                // Test if using old product-version path format, e.g. /HMP3.10.2
                if (!found) {  
                  found = forwardIfProdVer(pathname);
                }
                // Test if using a link with a nested URL, e.g. /HMP3.10.2/quick-start-guides/server-quick-start-guide/connecting-the-server
                if (!found) {
                  found = forwardNestedURL(pathname);            
                }
                // Done forwarding functions, so let's just show the 404 page
                if (!found) {              
                  let hvLogoImgSrc = 'https://esouthers.github.io/infocenter-viewport/assets/HaivisionLogo.svg';
                  let page404content = '<div class="ht-error-message">' + 
                    '<img height="50px" src="' + hvLogoImgSrc + '">' +
                    '<h1>This page has been devoured</h1><h2>404 — Page Not Found</h2><h3>The page you are looking for might have been removed,<br> may be temporarily unavailable, or was dragged to a watery demise.</h3>' +
                    '<button onclick="" class="primary">Back to Home</button></div>';
                  $('main h1, main h2, main p, main .error--search').remove();
                  $('main').prepend(page404content).removeClass('px-2 md:px-4 mx-auto max-w-grid w-full');
                  $('.ht-error-message button').attr('onclick','window.location = "https://' + window.location.hostname + '"');
                  updateHeader();
                  updateSidebar();
                  updateFooter();
                }
              }
              function forwardIfLatest(path) {
                path = path.replace('/index.html','');
                let latestIdx = path.indexOf('/latest');
                if (latestIdx >= 0) {
                  let productPrefix = path.split('/')[1];
                  $.each(viewportList.members, function(key, prod) { 
                    if ((prod.prefix == productPrefix) && (prod.versions)) {
                      latestVer = prod.versions.available[0].name;
                    }
                  });
                  let lastofPath = path.split('/').pop();
                  if (lastofPath.indexOf('latest') < 0) {
                    newPath = 'https://' + window.location.hostname + '/' + productPrefix + '/' + latestVer + '/' + lastofPath;
                  }
                  else {
                    newPath = 'https://' + window.location.hostname + '/' + productPrefix + '/' + latestVer;
                  }
                  window.location.replace(newPath);
                  doNotShowPage = true;
                  return true;
                }
              }
              function forwardIfProdVer(path) {
                let found = false;
                $.each(hvConfig.productRedirect, function(oldPrefix,prefixItem) {
                  $('html').removeClass('show');
                  let regexp = new RegExp("/" + oldPrefix + "([^/]+)\/(.+)","g");
                  let newURL = prefixItem.redirect != undefined ? '/' + prefixItem.redirect + '/' : '/' + oldPrefix + '/';
                  for (const match of window.location.pathname.matchAll(regexp)) {
                    newURL += match[1] + '/' + match[2].replace('index.html','').split('/').slice(-1)[0];
                    found = true;
                    doNotShowPage = true;
                    window.location.replace('https://' + window.location.hostname + newURL);
                    return false;
                  }
                  if (!found) {
                    regexp = new RegExp("/" + oldPrefix + "([^/]+)","g");
                    newURL = prefixItem.redirect != undefined ? '/' + prefixItem.redirect + '/' : '/' + oldPrefix + '/';
                    for (const match of window.location.pathname.matchAll(regexp)) {
                      newURL += match[1] + '/';
                      found = true;
                      doNotShowPage = true;
                      window.location.replace('https://' + window.location.hostname + newURL);
                      return false;
                    }
                  }
                }); 
        //        }
                return found;
              }
              function forwardNestedURL(pathname) {
                let found = false;
                let pathnameSplit = window.location.pathname.split('/');
                if (pathnameSplit.length > 1) {
                  $.each(viewportList.members, function(key,val) {
                    if (val.prefix == pathnameSplit[1]) {
                      if (val.versions === undefined) {
                        newPath = '/' + val.prefix + '/' + pathnameSplit.slice(-1)[0];
                      }
                      else {
                        newPath = '/' + val.prefix + '/' + pathnameSplit[2] + '/' + pathnameSplit.slice(-1)[0];
                      }
                      if (newPath != window.location.pathname) {
                        found = true;
                        doNotShowPage = true;
                        window.location.replace('https://' + window.location.hostname + newPath);
                      }
                      return false;
                    }
                  });

                  if (!found) {
                    // For Home space
                    let foundProd = false;
                    $.each(viewportList.members, function(key,val) {
                      if (val.prefix == pathnameSplit[1]) {
                        foundProd = true;
                        doNotShowPage = false;
                        return false;
                      }
                    });
                    if (!foundProd) {
                      window.location.replace('https://' + window.location.hostname + '/Home' + '/' + window.location.pathname.replace('/index.html','').split('/').pop());
                      doNotShowPage = true;
                      found = true;
                    }
                  }
                }
                return found;
              }

              if (pageSearch) {
                $('title').text($('.vp-search-input__input').val() + ' - Search');
                updateHeader();
                updateSidebar();

                processSearchPage();
                updateFooter();
                function processSearchPage() { 
                  // $('[data-vp-id="search-page-results"]').remove();
                  // $('[data-vp-id="search-page-pagination"]').remove();
                  let paramsGetL     = paramsGet('l', false);
                  let paramsGetStart = paramsGet('start', false);
                  let paramsGetMax   = paramsGet('max', false);
                  let paramsGetS     = paramsGet('s', false);
                  let paramsGetV     = paramsGet('v', true);
                  let paramsGetVa    = paramsGet('va', true);
                  let paramsGetQ     = paramsGet('q', false);
                  let newForm = '<form role="search" id="custom-search-form" method="GET" action="/search.html" class=""><input type="hidden" name="s" value="' + paramsGetS + '"><input type="hidden" name="v" value="' + paramsGetV.replace('&v=','') + '"><input type="hidden" name="va" value="' + paramsGetVa.replace('&va=','') + '"><input type="hidden" name="start" value="' + paramsGetStart + '"><input type="hidden" name="max" value="' + paramsGetMax + '"><input type="hidden" name="l" value="' + paramsGetL + '"><input type="hidden" name="q" value="' + paramsGetQ + '"><input type="hidden" name="inAppHelp"><input type="hidden" name="referrer"></form>';
                  $('.hc-main-wrapper').append(newForm);
                  $('.vp-search-page__main-inner').append('<ul aria-label="Search results" id="custom-search-page-results" class="contents m-0 p-0 list-none" style=""></ul>');
                  $('[data-vp-component="search-input"]').remove();
                  let searchInput = '<div data-vp-component="custom-search-input" data-vp-variant="border" class="vp-search-input vp-search-input--border"><input required="" name="q" form="custom-search-form" type="search" autocomplete="off" aria-label="Search" class="vp-search-input__input"><div class="vp-search-input__slot"></div><button type="submit" aria-label="Submit" class="vp-search-input__submit vp-search-input__icon" form="custom-search-form"><svg data-vp-id="magnifier-icon" data-vp-component="icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M8.99452 14.5C10.5121 14.5 11.809 13.9669 12.8854 12.9007C13.9618 11.8345 14.5 10.5361 14.5 9.00548C14.5 7.48794 13.9631 6.19097 12.8893 5.11458C11.8155 4.03819 10.519 3.5 9 3.5C7.46786 3.5 6.16816 4.0369 5.1009 5.11071C4.03363 6.18453 3.5 7.48096 3.5 9C3.5 10.5321 4.0331 11.8318 5.09929 12.8991C6.1655 13.9664 7.46391 14.5 8.99452 14.5ZM9 16C8.02913 16 7.11974 15.816 6.27185 15.4479C5.42395 15.0799 4.68056 14.5799 4.04167 13.9479C3.40278 13.316 2.90278 12.576 2.54167 11.728C2.18056 10.88 2 9.97053 2 8.99956C2 8.04152 2.18403 7.13542 2.55208 6.28125C2.92014 5.42708 3.41864 4.68387 4.04758 4.0516C4.67653 3.41935 5.41569 2.91935 6.26508 2.5516C7.11449 2.18387 8.02548 2 8.99806 2C9.95769 2 10.8646 2.18403 11.7188 2.55208C12.5729 2.92014 13.316 3.42014 13.9479 4.05208C14.5799 4.68403 15.0799 5.42612 15.4479 6.27835C15.816 7.13058 16 8.0381 16 9.00094C16 9.83365 15.8615 10.6213 15.5846 11.3638C15.3078 12.1062 14.9254 12.7836 14.4375 13.3958L18 16.9583L16.9375 18L13.375 14.4583C12.7668 14.9459 12.0939 15.3247 11.3564 15.5948C10.6188 15.8649 9.83333 16 9 16Z" fill="currentColor"></path></svg></button></div>';
                  $('.vp-search-bar__input-container').append(searchInput);
                  $('[data-vp-component="custom-search-input"] input').val(paramsGetQ);

                  $('.vp-search-page__main-inner').prepend('<h1 class="search-header">Search for \'<span id="searchTerm">' + paramsGetS + '</span>\' returned <span id="numResults"></span> result<span id="pluralResults"></span>.');
                  $('.search-header').after('<p class="search-header-text">Showing results <span id="startIdx"></span> to <span id="stopIdx"></span>.</p>');
                  $('.search-header-text').after('<div class="noResults hidden"><p class="mb-4">Your search returned no matches.</p>Please check the spelling of your search terms or try other, more general keywords.</div>');
                  $('.noResults').after('<div class="searchSpinner" style="display:none;"><div class="HaiSpinner" data-theme="argon"><div class="spinner-border" style="animation: 1s linear 0s infinite normal none running spin;"></div></div></div>');
                  $('#searchTerm').text(paramsGetQ);
                  $('#startIdx').text(parseInt(paramsGetStart) + 1);


                  let searchURL = '/__search?l=' + paramsGetL + '&start=' + paramsGetStart + '&max=' + paramsGetMax + '&ol=false&q=' + paramsGetQ;
                  if (paramsGetS != '') { searchURL += '&s='; }
                  searchURL += paramsGetS + paramsGetV + paramsGetVa;
                  newSearch(searchURL);
                  function newSearch(restURL) {
                    $('#custom-search-page-results li').remove();
                    $('.vp-search-page__main-inner .searchSpinner').show();
                    $.get(restURL, function(data, status, jqXHR) {
                      $('.vp-search-page__main-inner .searchSpinner').hide();
                      var numResults = data.total;
                      if (numResults > 0) {
                        $(data.hits).each(function(i,val){
                          if (val.contentSourceName.indexOf(hvConfig.hiddenSpaces) < 0) { 
                            let version = val.versionName === undefined ? '' : ' ' + val.versionName;
                            let searchResult = '<li aria-label="Result '+i+'" id="Result' + i + '"><div class="vp-search-result"><div class="vp-search-result__content-source">';
                            searchResult += val.variantName !== undefined ? val.variantName : val.contentSourceName;
                            searchResult += version + '</div><a class="vp-search-result__title" href="' + val.relativeUrl + '">' + val.title + '</a><p class="vp-search-result__description">' + val.description + '</p></div></li>';
                            $('#custom-search-page-results').append(searchResult);
                          }
                        });
                      }
                      if (numResults > data.max) {
                        let pagination = '<div class="vp-search-page__pagination"><nav id="custom-search-page-pagination" class="vp-pagination" aria-label="Pagination" style=""><div class="vp-pagination__inner"><span class="vp-pagination__action-container"><button type="button" class="vp-button vp-pagination__action vp-pagination__action--prev">Previous page</button></span><ul class="vp-pagination__items list-none m-0 p-0"></ul><span class="vp-pagination__action-container"><button type="button" class="vp-button vp-pagination__action vp-pagination__action--next">Next page</button></span></div></nav></div>';
                        $('#sidebar-dragbar').before(pagination);
                        if (data.start == 0) {
                          $('button.vp-pagination__action--prev').attr('disabled','');
                        }
                        if (data.start + data.max >= data.total) {
                          $('button.vp-pagination__action--next').attr('disabled','');
                        }
                        if (data.start - data.max < 0) { $('button.vp-pagination__action--prev').attr('value','0');  }
                        else {                           $('button.vp-pagination__action--prev').attr('value',data.start - data.max);  }
                        $('button.vp-pagination__action--next').attr('value',data.start + data.max);
                        let count = 0;
                        let pageNum = 1;
                        let pageNumToShow = data.start / data.max + 1;
                        while (count < data.total) {
                          let newPage = '';
                          if (((pageNum < pageNumToShow) && (pageNum > pageNumToShow - 5)) || ((pageNum > pageNumToShow) && (pageNum < pageNumToShow + 5))) {
                            newPage = '<li><button type="button" aria-label="Page '+pageNum+'" class="vp-pagination__item vp-button" value="'+count+'">'+pageNum+'</button></li>';
                          }
                          else if (pageNum == pageNumToShow) {
                            newPage = '<li><button type="button" aria-label="Page '+pageNum+'" aria-current="true" class="vp-pagination__item vp-button" value="'+count+'">'+pageNum+'</button></li>';
                          }
                          else if ((pageNum < pageNumToShow) && ($('.pagination-ellipsis-before').length == 0)) {
                            newPage = '<li><button type="button" class="vp-pagination__item vp-button pagination-ellipsis-before" disabled>...</button></li>';
                          }
                          else if ((pageNum > pageNumToShow) && ($('.pagination-ellipsis-after').length == 0)) {
                            newPage = '<li><button type="button" class="vp-pagination__item vp-button pagination-ellipsis-after" disabled>...</button></li>';
                          }
                          if (newPage != '') {                  
                            $('#custom-search-page-pagination .vp-pagination__items').append(newPage);
                          }
                          count += data.max;
                          pageNum++;
                        }
                        $('#custom-search-page-pagination button:not([aria-current="true"], .pagination-ellipsis-before, .pagination-ellipsis-after)').on('click', function() {
                          $('#custom-search-form input[name="start"]').attr('value',$(this).attr('value'));
                          $('.vp-search-page__pagination').remove();
                          $('html, body').animate({scrollTop:0}, 'fast');
                          const url = new URL(location);
                          url.searchParams.set('start',$(this).attr('value'));
                          history.pushState({}, '', url);
                          let searchURL = buildSearchURL();
                          newSearch(searchURL);
                          addVersionToBreadcrumbs();
                        });
                      }
                      $('#startIdx').text(data.start + 1);
                      if (data.start + data.max > data.total) {
                        $('#stopIdx').text(data.total);
                      }
                      else {
                        $('#stopIdx').text(data.start + data.max);
                      }
                      if ((data.total > 1) || (data.total == 0)) { $('#pluralResults').text('s');}
                      $('#numResults').text(data.total);
                      if (data.total == 0) { $('.search-header-text').hide(); $('.noResults').removeClass('hidden'); }
                      else { $('.search-header-text').show(); $('.noResults').addClass('hidden'); }
                      $('#titleBreadcrumb').text($('.search-header').text());
                    });
                  }

                  $('.vp-search-input__input').on('input', function() {
                    $('#custom-search-form input[name="q"]').attr('value',$('.vp-search-input__input').val().trim());
                  });
                  $('#custom-search-form').on('submit', function() {
                    let searchURL = buildSearchURL();
                    $('.vp-search-page__pagination').remove();
                    let searchTerm = $('.vp-search-input__input').val().trim();
                    $('#searchTerm').text(searchTerm);
                    const url = new URL(location);
                    url.searchParams.set('q', searchTerm);
                    url.searchParams.set('start','0');
                    history.pushState({}, '', url);
                    newSearch(searchURL);
                    return false;
                  });
                  var searchedSpaceKey = $('#search-form [name="s"]').attr('value') !== undefined ? $('#search-form [name="s"]').attr('value') : "";
                  let searchedVersion = $('#search-form [name="v"]').attr('value') !== undefined ? $('#search-form [name="v"]').attr('value') : "";
                  let searchedVariant = $('#search-form [name="va"]').attr('value') !== undefined ? $('#search-form [name="va"]').attr('value') : "";
                  let searchedSpaceName = '';
                  $.each(viewportList.members, function(key,val) {
                    if (val.prefix == searchedSpaceKey) {
                      searchedSpaceName = val.name;
                    }
                  });
                  if (searchedSpaceName == '') { searchedSpaceName = 'InfoCenter'; }

                  let productsFilter = '<div><div data-vp-id="custom-search-page-horizontal-filter-content"  class="vp-dropdown vp-dropdown--simple" data-vp-component="dropdown" data-vp-variant="simple" data-headlessui-state="open"><label class="sr-only" id="headlessui-listbox-label-1" data-headlessui-state="open">Content</label><button data-vp-id="search-page-horizontal-filter-content-button" class="vp-dropdown__button" id="headlessui-listbox-button-2" type="button" aria-haspopup="true" aria-expanded="true" aria-labelledby="headlessui-listbox-label-1 headlessui-listbox-button-2" data-headlessui-state="open" aria-controls="headlessui-listbox-options"><span class="vp-dropdown__button-label">' + searchedSpaceName + '</span><span class="vp-dropdown__button-icon vp-dropdown__button-icon--chevron"><svg data-vp-id="chevron-right-icon" data-vp-component="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M7 5L10 8L7 11" stroke="currentColor" stroke-width="1px" stroke-linecap="square"></path></svg></span></button><ul data-vp-id="search-page-horizontal-filter-content-options" class="vp-dropdown__options direction-down" style="display: none;" aria-labelledby="headlessui-listbox-label-1" aria-orientation="vertical" id="headlessui-listbox-options-113" role="listbox" tabindex="0" data-headlessui-state="open"><li data-vp-id="search-page-horizontal-filter-content-item" data-name="s" data-value="" class="vp-dropdown__option" id="headlessui-listbox-option-prodAll" role="option" tabindex="-1" aria-selected="false" data-headlessui-state=""><span class="vp-dropdown__option-label">Search all</span></li></ul></div><input type="hidden" form="search-form" name="s" value=""><input type="submit" hidden="" aria-hidden="true" form="search-form"></div>';
                  let versionsFilter = '<div><div data-vp-id="custom-search-page-horizontal-filter-versions" class="vp-dropdown vp-dropdown--simple" data-vp-component="dropdown" data-vp-variant="simple" data-headlessui-state="open" style="display:none;"><label class="sr-only" id="headlessui-listbox-label-3" data-headlessui-state="open">Versions</label><button data-vp-id="search-page-horizontal-filter-versions-button" class="vp-dropdown__button" id="headlessui-listbox-button-4" type="button" aria-haspopup="true" aria-expanded="true" aria-labelledby="headlessui-listbox-label-3 headlessui-listbox-button-4" data-headlessui-state="open" aria-controls="headlessui-listbox-options-7"><span class="vp-dropdown__button-label">' + searchedVersion + '</span><span class="vp-dropdown__button-icon vp-dropdown__button-icon--chevron"><svg data-vp-id="chevron-right-icon" data-vp-component="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M7 5L10 8L7 11" stroke="currentColor" stroke-width="1px" stroke-linecap="square"></path></svg></span></button><ul data-vp-id="search-page-horizontal-filter-versions-options" class="vp-dropdown__options direction-down" style="display: none;" aria-labelledby="headlessui-listbox-label-3" aria-orientation="vertical" id="headlessui-listbox-options-7" role="listbox" tabindex="0" data-headlessui-state="open"><li data-vp-id="search-page-horizontal-filter-versions-item" data-name="v" data-value="" class="vp-dropdown__option" id="headlessui-listbox-option-verall" role="option" tabindex="-1" aria-selected="false" data-headlessui-state=""><span class="vp-dropdown__option-label">All versions</span></li></ul></div><input type="hidden" form="search-form" name="v"><input type="submit" hidden="" aria-hidden="true" form="search-form"></div>';
        //          let variantsFilter = '<div><div data-vp-id="custom-search-page-horizontal-filter-variants" class="vp-dropdown vp-dropdown--simple" data-vp-component="dropdown" data-vp-variant="simple" data-headlessui-state="open" style="display:none;"><label class="sr-only" id="headlessui-listbox-label-5" data-headlessui-state="open">Variants</label><button data-vp-id="search-page-horizontal-filter-variants-button" class="vp-dropdown__button" id="headlessui-listbox-button-6" type="button" aria-haspopup="true" aria-expanded="true" aria-labelledby="headlessui-listbox-label-5 headlessui-listbox-button-6" data-headlessui-state="open" aria-controls="headlessui-listbox-options-11"><span class="vp-dropdown__button-label">' + searchedVariant + '</span><span class="vp-dropdown__button-icon vp-dropdown__button-icon--chevron"><svg data-vp-id="chevron-right-icon" data-vp-component="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M7 5L10 8L7 11" stroke="currentColor" stroke-width="1px" stroke-linecap="square"></path></svg></span></button><ul data-vp-id="search-page-horizontal-filter-variants-options" class="vp-dropdown__options direction-down" style="display: none;" aria-labelledby="headlessui-listbox-label-5" aria-orientation="vertical" id="headlessui-listbox-options-11" role="listbox" tabindex="0" data-headlessui-state="open"><li data-vp-id="search-page-horizontal-filter-variants-item" data-name="va" data-value="" class="vp-dropdown__option" id="headlessui-listbox-option-varall" role="option" tabindex="-1" aria-selected="false" data-headlessui-state=""><span class="vp-dropdown__option-label">All variants</span></li></ul></div><input type="hidden" form="search-form" name="va"><input type="submit" hidden="" aria-hidden="true" form="search-form"></div>';
                  $('.vp-search-page__subgrid').prepend('<fieldset data-vp-id="custom-search-page-horizontal-filter" class="vp-search-page__filter-horizontal lg:flex flex flex-row gap-4 p-0 m-0 border-0"><legend class="sr-only">Filter</legend></fieldset');
        //          $('fieldset[data-vp-id="custom-search-page-horizontal-filter"]').append(productsFilter).append(variantsFilter).append(versionsFilter); 
                  $('fieldset[data-vp-id="custom-search-page-horizontal-filter"]').append(productsFilter).append(versionsFilter);

                  // Populate dropdowns
                  $.each(viewportList.members, function(key,val) {
                    let productToAdd = '';
                    if (val.variants?.available.length ?? 0 > 1) {
                      $.each(val.variants.available, function (i,j) {
                        productToAdd += '<li data-vp-id="search-page-horizontal-filter-content-item" data-name="s" data-value="' + val.prefix + '" data-transmitters="true" data-variant="' + j.name + '"class="vp-dropdown__option" aria-selected="false" data-headlessui-state="" id="headlessui-listbox-option-prod' + key + 'fu' + i + '" role="option" tabindex="-1"><span class="vp-dropdown__option-label">' + j.name + '</span></li>';
                      });
                    }
                    else {
                      productToAdd = '<li data-vp-id="search-page-horizontal-filter-content-item" data-name="s" data-value="' + val.prefix + '" class="vp-dropdown__option" aria-selected="false" data-headlessui-state="" id="headlessui-listbox-option-prod' + key + '" role="option" tabindex="-1"><span class="vp-dropdown__option-label">' + val.name + '</span></li>';
                    }
                    $('ul[data-vp-id="search-page-horizontal-filter-content-options"]').append(productToAdd);
                    if (val.prefix == searchedSpaceKey) {
                      if (val.versions !== undefined) {
                        if (val.versions.available.length > 1) {
                          let valVersions = val.versions.available;
                          $.each(valVersions, function(verKey,verVal) {
                            let verToAdd = '<li data-vp-id="search-page-horizontal-filter-versions-item" data-name="v" data-value="' + verVal.name + '" class="vp-dropdown__option" id="headlessui-listbox-option-ver' + verKey + '" role="option" tabindex="-1" aria-selected="false" data-headlessui-state=""><span class="vp-dropdown__option-label">' + verVal.name + '</span></li>';
                            $('[data-vp-id="custom-search-page-horizontal-filter-versions"] ul').append(verToAdd);
                          });
                          $('[data-vp-id="custom-search-page-horizontal-filter-versions"]').show();
                        }
                      }
                      if (val.variants?.available?.length ?? 0 > 1) {
                        let valVariants = val.variants.available;
                        $.each(valVariants, function(varKey,varVal) {
                          $.each(hvConfig.variants.transmitters, function(i,variantToTest) {
                            if (variantToTest.variant == searchedVariant ) {
                              $('[data-vp-id="search-page-horizontal-filter-versions-item"]').hide();
                              $.each(variantToTest.versions, function(i,version) {
                                $('[data-vp-id="search-page-horizontal-filter-versions-item"][data-value="' + version + '"]').show();
                              });
                            }
                          });
                        });
                        
                      }
                    } 
                  });
                  sortSearchDropdown($('ul[data-vp-id="search-page-horizontal-filter-content-options"]'));
                  if (searchedSpaceKey == '') { $('[data-vp-id="search-page-horizontal-filter-content-button"] .vp-dropdown__button-label').text('Search all'); }
                  if (searchedVersion == '') { $('[data-vp-id="search-page-horizontal-filter-versions-button"] .vp-dropdown__button-label').text('All versions'); }
        //          if (searchedVariant == '') { $('[data-vp-id="search-page-horizontal-filter-variants-button"] .vp-dropdown__button-label').text('All variants'); }

                  // Indicate selected product
                  if (searchedVariant != '') { 
                    $('[data-vp-id="search-page-horizontal-filter-content-button"] .vp-dropdown__button-label').text(searchedVariant); 
                    $('ul[data-vp-id="search-page-horizontal-filter-content-options"] [data-value="' + searchedSpaceKey + '"][data-variant="' + searchedVariant + '"]').addClass('is-selected').attr('aria-selected', 'true').attr('data-headlessui-state','selected');
                    $('ul[data-vp-id="search-page-horizontal-filter-content-options"] [data-value="' + searchedSpaceKey + '"][data-variant="' + searchedVariant + '"] .vp-dropdown__option-label').addClass('is-selected');
                    $('.header__navigation--heading').text(searchedVariant + ' ' + searchedVersion);
                  }
                  else {
                    $('ul[data-vp-id="search-page-horizontal-filter-content-options"] [data-value="' + searchedSpaceKey + '"]').addClass('is-selected').attr('aria-selected', 'true').attr('data-headlessui-state','selected');
                    $('ul[data-vp-id="search-page-horizontal-filter-content-options"] [data-value="' + searchedSpaceKey + '"] .vp-dropdown__option-label').addClass('is-selected');
                    $('.header__navigation--heading').text(searchedSpaceName + ' ' + searchedVersion);
                  }
                  // Indicate selected version
                  $('ul[data-vp-id="search-page-horizontal-filter-versions-options"] [data-value="' + searchedVersion + '"]').addClass('is-selected').attr('aria-selected', 'true').attr('data-headlessui-state','selected');
                  $('ul[data-vp-id="search-page-horizontal-filter-versions-options"] [data-value="' + searchedVersion + '"] .vp-dropdown__option-label').addClass('is-selected');
                  // Indicate selected variant
        /*          $('ul[data-vp-id="search-page-horizontal-filter-variants-options"] [data-value="' + searchedVariant + '"]').addClass('is-selected').attr('aria-selected', 'true').attr('data-headlessui-state','selected');
                  $('ul[data-vp-id="search-page-horizontal-filter-variants-options"] [data-value="' + searchedVariant + '"] .vp-dropdown__option-label').addClass('is-selected'); */

                // Products Dropdown
                  // Show product dropdown
                  $('[data-vp-id="custom-search-page-horizontal-filter-content"] button[data-vp-id="search-page-horizontal-filter-content-button"]').on('click', function() {
                    $('ul[data-vp-id="search-page-horizontal-filter-content-options"]').show();
                  });
                  // Hide product dropdown
                  $(document).mouseup(function(e) {
                    hideDropdown($('ul[data-vp-id="search-page-horizontal-filter-content-options"]'), e);
                  });
                  $('ul[data-vp-id="search-page-horizontal-filter-content-options"] li:not(.is-selected)').on('click', function() {
                    // Perform new search
                    var href = new URL(window.location.href);
                    href.searchParams.set('s', $(this).attr('data-value'));
              // ******** EXCEPTION FOR TRANSMITTERS ******* //
                    let transmitterProduct = $(this).attr('data-variant');
                    if ($(this).attr('data-transmitters') == 'true') {
                      href.searchParams.set('va', transmitterProduct);
                    }
                    else {
                      if (href.searchParams.has('va')) {  href.searchParams.set('va', '');  }
                    }
                    if ($(this).attr('data-transmitters') == 'true') {
                      $.each(hvConfig.variants.transmitters, function(i,j) {
                        if (j.variant == transmitterProduct) {
                          href.searchParams.set('v', j.versions[0]);
                        }
                      });
                    }
                    else {
                      if (href.searchParams.has('v')) {  href.searchParams.set('v', '');  }
                    }
                    if (href.searchParams.has('start')) {  href.searchParams.set('start', '0');  }
                    window.location.href = href;
                  });

                // Variants Dropdown
                  // Show variants dropdown
        /*          $('[data-vp-id="custom-search-page-horizontal-filter-variants"] button[data-vp-id="search-page-horizontal-filter-variants-button"]').on('click', function() {
                    $('ul[data-vp-id="search-page-horizontal-filter-variants-options"]').show();
                  }); */
                  // Hide variants dropdown
        /*          $(document).mouseup(function(e) {
                    hideDropdown($('ul[data-vp-id="search-page-horizontal-filter-variants-options"]'), e);
                  });
                  $('ul[data-vp-id="search-page-horizontal-filter-variants-options"] li:not(.is-selected)').on('click', function() {
                    // Perform new search
                    var href = new URL(window.location.href);
                    href.searchParams.set('va', $(this).attr('data-value'));
                    if (href.searchParams.get('s')== 'Transmitters') {
                      $.each(hvConfig.variants.transmitters, function(i,j) {
                        if (href.searchParams.get('va') == j.variant) {
                          href.searchParams.set('v', j.versions[0]);
                        }
                      });
                    }
                    else {
                      if (href.searchParams.has('v')) { href.searchParams.set('v', ''); }
                    }
                    if (href.searchParams.has('start')) {  href.searchParams.set('start', '0');  }
                    window.location.href = href;
                  });
        */
                // Versions Dropdown
                  // Show versions dropdown
                  $('[data-vp-id="custom-search-page-horizontal-filter-versions"] button[data-vp-id="search-page-horizontal-filter-versions-button"]').on('click', function() {
                    $('ul[data-vp-id="search-page-horizontal-filter-versions-options"]').show();
                  });
                  // Hide versions dropdown
                  $(document).mouseup(function(e) {
                    hideDropdown($('ul[data-vp-id="search-page-horizontal-filter-versions-options"]'), e);
                  });
                  $('ul[data-vp-id="search-page-horizontal-filter-versions-options"] li').on('click', function() {
                    if (!$(this).hasClass('is-selected')) {
                      $('#custom-search-form input[name="v"]').attr('value',$(this).attr('data-value'));
                      $('#custom-search-form input[name="start"]').attr('value','0');
                      $('.vp-search-page__pagination').remove();
                      const url = new URL(location);
                      url.searchParams.set('v', $(this).attr('data-value'));
                      url.searchParams.set('start','0');
                      history.pushState({}, '', url);
                      let searchURL = buildSearchURL();
                      newSearch(searchURL);
                      $('ul[data-vp-id="search-page-horizontal-filter-versions-options"]').hide();
                      $('ul[data-vp-id="search-page-horizontal-filter-versions-options"] li.is-selected').removeClass('is-selected');
                      $(this).addClass('is-selected');
                      $('ul[data-vp-id="search-page-horizontal-filter-versions-options"] .vp-dropdown__option-label.is-selected').removeClass('is-selected');
                      $('.vp-dropdown__option-label', this).addClass('is-selected');
                      $('[data-vp-id="custom-search-page-horizontal-filter-versions"] .vp-dropdown__button-label').text($('.vp-dropdown__option-label', this).text());
                      let searchedSpaceName = $('[data-vp-id="custom-search-page-horizontal-filter-content"] .vp-dropdown__button-label').text();
                      let searchedVersion   = $('[data-vp-id="custom-search-page-horizontal-filter-versions"] .vp-dropdown__button-label').text();
                      if (searchedVersion != 'All versions') {
                        $('.header__navigation--heading').text(searchedSpaceName + ' ' + searchedVersion);
                      }
                      else {
                        $('.header__navigation--heading').text(searchedSpaceName);
                      }
                      addVersionToBreadcrumbs();
                    }
                  });

                  function sortSearchDropdown(selector) {
                    var ul = selector;
                    var firstItem = ul.find("li:first-child");
                    var items = ul.children("li:not(:first-child)").get();
                    items.sort(function(a, b) {
                      var textA = $(a).find('.vp-dropdown__option-label').text();
                      var textB = $(b).find('.vp-dropdown__option-label').text();
                      return textA.localeCompare(textB);
                    });
                    ul.empty();
                    ul.append(firstItem); // append first item back to the top
                    $.each(items, function(i, li) {
                      ul.append(li.outerHTML); // preserve attributes and span elements
                    });
                  }

                  function hideDropdown(selector, element) {
                    // if the target of the click isn't the container nor a descendant of the container
                    if (!selector.is(element.target) && selector.has(element.target).length === 0) { 
                      selector.hide();
                    }
                  }

                  let exitSearchText = 'Exit Search Results';
                  if (searchedVariant != '') {
                    if (searchedVersion != '') {
                      exitSearchLink = '/' + searchedSpaceKey + '/' + searchedVersion + '/' + searchedVariant;
                    }
                    else {
                      exitSearchLink = '/' + searchedSpaceKey + '/' + getLatestVariantVersion(searchedVariant) + '/' + searchedVariant;
                    }
                  }
                  else {
                    exitSearchLink = searchedSpaceKey == '' ? '/' : '/' + searchedSpaceKey + '/' + searchedVersion;
                  }
                  $('.header__navigation--heading').attr('href',exitSearchLink);
                  $('.vp-tree__container').append('<li class="vp-tree-item vp-tree-item--type-default vp-tree-item--variant-right-aligned list-none vp-tree-item--with-hover-effect" data-id="" role="treeitem" tabindex="-1" aria-label="Exit Search Results" aria-expanded="false" aria-selected="false" aria-level="1">' +
                    '<div data-item-id="" class="vp-tree-item__header relative flex items-start outline-none flex-row"><a class="vp-tree-item__header__title flex-1 min-w-0 outline-none" tabindex="-1" href="' + exitSearchLink + '">' + exitSearchText + '</a><div class="vp-tree-item__header__icon">' +
                    '<svg data-vp-id="dot-icon-tree-item-7046570" data-vp-component="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><circle cx="8" cy="8" r="1"></circle></svg></div></div></li>');

                  updateBreadcrumbs();

                  function getLatestVariantVersion(variant) {
                    $.each(hvConfig.variants, function(i,product) {
                      $.each(product, function(i,j) {
                        if (j.variant == variant) {
                          return j.versions[0];
                        }
                      });
                    });
                  }
                }
              }
            }
            else {  // Regular page
              var removeBetaSpace = new MutationObserver(function(mutations) {
                $('.vp-picker__menu__item').each(function() {
                  if ($(this).text().indexOf('Beta') >= 0) {
                    $(this).remove();
                  }
                });
              });
              if ($('.vp-version-picker').length > 0) {
                removeBetaSpace.observe(document.querySelector('.vp-version-picker'), {attributes: false, childList: true, characterData: false, subtree:true});
              }

              waitForElm('.vp-picker__menu').then((elm) => {
                $('.vp-picker__menu__item').each(function() {
                  if ($(this).text().indexOf('Beta') >= 0) {
                    $(this).remove();
                  }
                });
              });
              if (viewportList.currentContentSource.name == "Transmitters") {
                updateAirProRack();
              }
              addModifiedDate();
              updateHeader();
              updateSidebar();
              updateFooter();
              updateBreadcrumbs();
              updatePaginationLinks();
              keyboardShortcuts();
              addCustomSearch();
              addPDFButtons();
              function addPDFButtons() {
                $('.pdf-export-button').each(function() {
                  $(this).after('<button class="primary pdf-button" data-templateLetter="' + $('.templateLetter', this).attr('title') + '" data-templateA4="' + $('.templateA4', this).attr('title') + '">Export Guide to PDF</button>');
                  $(this).remove(); 
                });
                $('button.pdf-button').on('click', function(e) {
                  e.preventDefault();
                  overrideTemplateLetter = $(this).attr('data-templateLetter');
                  overrideTemplateA4 = $(this).attr('data-templateA4');
                  startPDFprocess();
                });
              }
              $('#pdf-article').on('click', function(e) { 
                e.preventDefault();
                startPDFprocess();
              });
              function startPDFprocess() {
                $('.hc-main-wrapper .vp-article').append(pdfDialog);
                $('#pdf-dialog').show().animate({top: '20%', opacity: '100%'},500);
                $('.dialog-overlay, #pdf-dialog, #dialog-overlay').attr('aria-hidden','false');
                $('#dialog-overlay').fadeIn(500);
                pdfButtonEventListeners();
              }

              // open pdfs in new tab
              $('a[data-linked-resource-content-type="application/pdf"]').attr('target','_blank');

              var updatePageTitle = new MutationObserver(mutationCallback);
              function mutationCallback(mutations) {
                updatePageTitle.disconnect();
                $('title').text($('.vp-search-input__input').val() + ' - Search');
                updatePageTitle.observe(document.querySelector('title'), {childList: true, characterData: false, subtree:true});
              }

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

              // Expand/collapse buttons
              $('summary').each(function() {
                let expandIcon = $('.vp-disclosure-icon',this);
                let expandTitle = $(this).text();
                $(this).text('');
                $(this).prepend('<span class="expand-title">' + expandTitle + '</span>').append(expandIcon);
              });


              // Fix table cell background colors
              $("[data-highlight-colour='yellow']").css('background-color','lightyellow');
              $("[data-highlight-colour='green']").css('background-color','lightgreen');
              $("[data-highlight-colour='red']").css('background-color','lightred');
              $("[data-highlight-colour='blue']").css('background-color','lightblue');


              $('#main-content figure').each(function() {
                fixImageSizes(this);
                fixInlineImages(this);
              });
              convertExpandsToTabs();
              let verIcon = '<div class="versionIcon" style="display: none;" data-original-title="" original-title="">' + svgInfoFilled + '</div>';
              $('#vp-js-desktop__navigation__picker').before(verIcon);
              warningMessage();

            } // End of processing depending on page type


            let sidebarWidth = getLocalStorageWithExpiry('sidebar-width');
            if (!sidebarWidth) { sidebarWidth = 320; setLocalStorageWithExpiry('sidebar-width',sidebarWidth,14); }
            setDragbar(sidebarWidth);
            if (!doNotShowPage) {  $('html').addClass('show'); }
            if (window.location.hash !== '') { 
              window.scrollTo(0, $(window.location.hash).position().top);
            }      


            function paramsGet(name, prefix) {
              let params = new URLSearchParams(window.location.href.split('?')[1]);
              if (prefix) { return (params.get(name) !== null && params.get(name) !== '') ? '&' + name + '=' + params.get(name) : ""; }
              else {        return params.get(name) !== null ? params.get(name) : ""; }
            }
            function formGet(name, prefix) {
              if (prefix) { return (($('#custom-search-form [name="' + name + '"]').length == 0) || ($('#custom-search-form [name="' + name + '"]').attr('value') == '')) ? '' : '&' + name + '=' + $('#custom-search-form [name="' + name + '"]').attr('value'); }
              else {        return (($('#custom-search-form [name="' + name + '"]').length == 0) || ($('#custom-search-form [name="' + name + '"]').attr('value') == '')) ? '' : $('#custom-search-form [name="' + name + '"]').attr('value'); }
            }
            function buildSearchURL() {
              let searchURL = '/__search?l=en&ol=false&q=' + formGet('q', false) + formGet('s', true) + formGet('v', true) + formGet('va', true) + formGet('start', true) + formGet('max',true);
              return searchURL;
            }
            function addCustomSearch() {
              $('[data-vp-id="vp-search-form"]').remove();
              let searchBox = '<form role="search" id="custom-search-form" method="GET" action="/search.html" data-vp-id="custom-search-form" class="flex w-full justify-center"><div data-vp-component="search-bar" data-vp-variant="" class="vp-search-bar has-suggestions"><div class="vp-search-bar__input-container"><div data-vp-component="search-input" class="vp-search-input"><input role="combobox" aria-controls="suggestionList" aria-expanded="false" aria-autocomplete="list" required="" type="search" autocomplete="off" aria-label="Search" name="search-input" class="vp-search-input__input" placeholder="How can we help you?"><div class="vp-search-input__slot"></div><button type="submit" aria-label="Submit" class="vp-search-input__submit vp-search-input__icon"><svg data-vp-id="magnifier-icon" data-vp-component="icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M8.99452 14.5C10.5121 14.5 11.809 13.9669 12.8854 12.9007C13.9618 11.8345 14.5 10.5361 14.5 9.00548C14.5 7.48794 13.9631 6.19097 12.8893 5.11458C11.8155 4.03819 10.519 3.5 9 3.5C7.46786 3.5 6.16816 4.0369 5.1009 5.11071C4.03363 6.18453 3.5 7.48096 3.5 9C3.5 10.5321 4.0331 11.8318 5.09929 12.8991C6.1655 13.9664 7.46391 14.5 8.99452 14.5ZM9 16C8.02913 16 7.11974 15.816 6.27185 15.4479C5.42395 15.0799 4.68056 14.5799 4.04167 13.9479C3.40278 13.316 2.90278 12.576 2.54167 11.728C2.18056 10.88 2 9.97053 2 8.99956C2 8.04152 2.18403 7.13542 2.55208 6.28125C2.92014 5.42708 3.41864 4.68387 4.04758 4.0516C4.67653 3.41935 5.41569 2.91935 6.26508 2.5516C7.11449 2.18387 8.02548 2 8.99806 2C9.95769 2 10.8646 2.18403 11.7188 2.55208C12.5729 2.92014 13.316 3.42014 13.9479 4.05208C14.5799 4.68403 15.0799 5.42612 15.4479 6.27835C15.816 7.13058 16 8.0381 16 9.00094C16 9.83365 15.8615 10.6213 15.5846 11.3638C15.3078 12.1062 14.9254 12.7836 14.4375 13.3958L18 16.9583L16.9375 18L13.375 14.4583C12.7668 14.9459 12.0939 15.3247 11.3564 15.5948C10.6188 15.8649 9.83333 16 9 16Z" fill="currentColor"></path></svg></button></div></div></div></form>';
              $('.top-bar-right .my-auto').last().append(searchBox);
              let searchOptionsSuggestionsContainer = '<div class="search-options-container" style="display:none;"><li class="search-options-text">Change filter to include:</li><li class="search-options"><label class="soTVer"><input class="soAllVer" type="checkbox" name="so-version" value="all" aria-labelledby="soAllVerSpan"><span id="soAllVerSpan">All Versions</span></label><label class="soTProd"><input class="soAllProd" type="checkbox" name="so-product" value="all" aria-labelledby="soAllProdSpan"><span id="soAllProdSpan">All Products</span></label></li></div><ul id="suggestionList" data-vp-component="search-suggestion" class="vp-search-suggestion-panel" role="listbox" aria-label="Search suggestions" tabindex="-1" style="display:none;"><li class="searchSpinner" style="display:none;"><div class="HaiSpinner" data-theme="argon"><div class="spinner-border" style="animation: 1s linear 0s infinite normal none running spin;"></div></div></li></ul>';
              $('#custom-search-form .has-suggestions').append(searchOptionsSuggestionsContainer);
              let hiddenInputs = '<input type="hidden" name="l" value="en"><input type="hidden" name="max" value="10"><input type="hidden" name="ol" value=""><input type="hidden" name="q" value=""><input type="hidden" name="s" value=""><input type="hidden" name="v" value=""><input type="hidden" name="va" value=""><input type="hidden" name="start" value="0">';
              $('#custom-search-form').append(hiddenInputs);
              $('#custom-search-form [name="s"]').attr('value',viewportList.currentContentSource.prefix);
              $('#custom-search-form [name="va"]').attr('value',getVariantSearched());
              $('#custom-search-form [name="v"]').attr('value',getVersionSearched());

              if (viewportList.currentContentSource.prefix == 'Home') {
                $('input.soAllProd').prop('checked',true);
                $('#custom-search-form [name="s"]').attr('value','');
              }
              if (viewportList.currentContentSource.versions == undefined) {
                $('.soTVer').remove();
              }
              else if (viewportList.currentContentSource.versions.available.length == 1) {
                $('.soTVer').remove();
              }

              $('#custom-search-form input.vp-search-input__input').on('input mouseup', function() {
                $('.search-options-container, #suggestionList').show();
                debouncedSearch($(this).val().trim(), $('#custom-search-form .soAllVer').is(':checked'), $('#custom-search-form .soAllProd').is(':checked'));
              });
              $('#custom-search-form .soTVer, #custom-search-form .soTProd').on('input', function() {
                if ($('#custom-search-form .soAllProd').is(':checked')) {
                  $('#custom-search-form .soAllVer').prop('checked', true).prop('disabled','true');
                  $('#custom-search-form [name="s"]').attr('value','');
                  $('#custom-search-form [name="va"]').attr('value','');
                  $('#custom-search-form [name="v"]').attr('value','');
                }
                else {
                  $('#custom-search-form .soAllVer').prop('disabled', false);
                  $('#custom-search-form [name="s"]').attr('value',viewportList.currentContentSource.prefix);
                  $('#custom-search-form [name="va"]').attr('value',getVariantSearched());
                  if ($('#custom-search-form .soAllVer').is(':checked')) {
                    $('#custom-search-form [name="v"]').attr('value','');
                  }
                  else {
                    $('#custom-search-form [name="v"]').attr('value',getVersionSearched());
                  }
                }
                debouncedSearch($('.vp-search-input__input').val().trim(), $('#custom-search-form .soAllVer').is(':checked'), $('#custom-search-form .soAllProd').is(':checked'));
              });
              $('#custom-search-form').on('submit', function() {
        //        let searchURL = buildSearchURL();

        /*        if ($('input.vp-search-input__input', this).val().trim().length < 3) {
                  // Add tooltip
                  $('input.vp-search-input__input', this).attr('title','Please enter 3 or more characters.');
                  $('body').append('<div id="search-tooltip" class="aui-tooltip" role="tooltip" style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate3d(2248.67px, 51.3333px, 0px);" data-popper-placement="bottom-start"><p class="aui-tooltip-content" style="max-width: 200px;">Please enter 3 or more characters.</p></div>');
                  return false;
                } */
              });
              function getVariantSearched() {
                if (viewportList.currentContentSource.variants == undefined) { variantSearched = ''; }
                else {
                  if (viewportList.currentContentSource.variants.available.length == 0) { variantSearched = ''; }
                  else { variantSearched = viewportList.currentContentSource.variants.current.name; }
                }
                return variantSearched;
              }
              function getVersionSearched() {
                if (viewportList.currentContentSource.versions == undefined) { versionSearched = ''; }
                else {
                  if (viewportList.currentContentSource.versions.available.length == 0) { versionSearched = ''; }
                  else { versionSearched = viewportList.currentContentSource.versions.current.name; }
                }
                return versionSearched;
              }
              $(document).mouseup(function(e) {
                  var container = $('.search-options-container, #suggestionList');
                  // if the target of the click isn't the container nor a descendant of the container
                  if (!container.is(e.target) && container.has(e.target).length === 0 && !$(e.target).hasClass('vp-search-input__input')) { 
                    $('.search-options-container, #suggestionList').hide();
                    $('#suggestionList li:not(.searchSpinner)').remove();
                    $('#search-tooltip').remove();
                  }
              });
              let timeout;
              function debouncedSearch(str, searchAllVersions, searchAllProducts) {
                clearTimeout(timeout);
                if (str.length >= 1) {
                  $('#custom-search-form input[name="q"]').attr('value',$('.vp-search-input__input').val().trim());
        //          $('#search-tooltip').remove();
        //          $('#custom-search-form .input.vp-search-input__input').tooltip('destroy');
                  timeout = setTimeout(function() {
                    doSearch(str, searchAllVersions, searchAllProducts);
                  }.bind(this), 300); // Adjust the delay (in milliseconds) as needed
                }
              }
              function doSearch(str, searchAllVersions, searchAllProducts) {
                $('#suggestionList .searchSpinner').show();
                $('#suggestionList li:not(.searchSpinner)').remove();
                searchAllVersions = searchAllVersions || false;
                searchAllProducts = searchAllProducts || false;
                var searchTerm = str;
                let spaceSearched = viewportList.currentContentSource.prefix;
                $('#custom-search-form input[name="q"]').attr('value',searchTerm);
                var searchURL = '/__search?l=en&start=0&max=10&ol=false&q=' + searchTerm;
                searchURL += formGet('s', true) + formGet('v', true) + formGet('va', true);
                $.get(searchURL, function(data, status, jqXHR) {
                  $('#suggestionList li:not(.searchSpinner)').remove();
                  var numResults = data.total;
                  if (numResults > 0) {
                    $(data.hits).each(function(i,val){
                      if (val.contentSourceName.indexOf(hvConfig.hiddenSpaces) < 0) {
                        let version = val.versionName === undefined ? '' : ' ' + val.versionName;
                        let searchSuggestion = '<li id="suggestion' + i + '" role="option" aria-selected="false" class="vp-search-suggestion-option-container vp-search-form__suggestion"><a class="vp-search-form__suggestion vp-search-suggestion-option vp-search-suggestion-option--default" href="' + val.relativeUrl + '" tabindex="-1"><span class="vp-search-suggestion-option__label">' + val.title + '</span><div class="vp-search-suggestion-option__info-container"><span class="vp-search-suggestion-option__info">';
                        searchSuggestion += val.variantName !== undefined ? val.variantName : val.contentSourceName;
                        searchSuggestion += version + '</span></div></a></li>';
                        $('#suggestionList').append(searchSuggestion);
                      }
                      else { numResults -= 1; }
                    });
                    if (numResults > 0) {
                      if ($('#custom-search-form .soAllVer').is(':checked') || $('#custom-search-form .soAllProd').is(':checked')) {
                        searchSpaceStr = '';
                        searchVersionStr = '';
                      }
                      else if ($('#custom-search-form .soAllVer').is(':checked')) {
                        searchSpaceStr = '&s=' + viewportList.currentContentSource.prefix;
                        searchVersionStr = '';
                      }
                      else {
                        searchSpaceStr = '&s=' + viewportList.currentContentSource.prefix;
                        searchVersionStr = viewportList.currentContentSource.versions == undefined ? '' : '&s=' + viewportList.currentContentSource.versions.current.name;
                      }
        //              let searchPageLink = '/search.html?l=en&max=10&ol=false&q=' + $('#custom-search-form input').val() + searchSpaceStr + searchVersionStr + '&start=0';
                      let searchPageLink = '/search.html?' + searchURL.split('?')[1];
                      let searchSuggestionAll = '<li class="vp-search-suggestion-action-container"><a id="showAll" role="option" aria-selected="false" href="' + searchPageLink + '" rel="noopener" tabindex="-1" class="vp-search-suggestion-action vp-button vp-button--secondary">Show all ' + numResults + ' results</a></li>';
                      $('#suggestionList').append(searchSuggestionAll);
                    }
                  }
                  if (numResults == 0) {
                    let noResults = '<li id="" role="option" aria-selected="false" class="vp-search-suggestion-option-container vp-search-form__suggestion"><div class="vp-search-form__suggestion vp-search-suggestion-option vp-search-suggestion-option--default" tabindex="-1"><span class="vp-search-suggestion-option__label">Your search returned no matches.</span><div class="vp-search-suggestion-option__info-container"></div></div></li>';
                    $('#suggestionList').append(noResults);
                  }
                  $('#suggestionList .searchSpinner').hide();
        //          $('#suggestionList').show();
                }).fail(function() {
                  // error handler
                });
              }        

            }
            function updateAirProRack() {
              $('.vp-variant-picker').remove();
              let currentlyViewing = viewportList.currentContentSource;
              if (!currentlyViewing) { return false;}
              var versionsValid = [];
                let variantViewing = currentlyViewing.variants.current.name;
                let versionViewing = currentlyViewing.versions.current.name;
                $.each(hvConfig.variants.transmitters, function(i,variantToTest) {
                  if (variantToTest.variant == variantViewing ) {
                    if (variantToTest.versions.length == 1) {
                      $('#vp-js-desktop__navigation__picker').remove();
                    }
                    versionsValid = variantToTest.versions;
                    $('.header__navigation--heading').text(variantViewing);
                  }
                });
                var removeUnusedVersions = new MutationObserver(function(mutations) {
                  $('.vp-picker__menu__item').each(function() {
                    if (versionsValid.indexOf($(this).text()) < 0) {
                      $(this).remove();
                    }
                  }); 
                });
                if ($('.vp-version-picker').length > 0) {
                  removeUnusedVersions.observe(document.querySelector('.vp-version-picker'), {attributes: false, childList: true, characterData: false, subtree:true});
                }
            }
            function updatePaginationLinks() {
              waitForElm('.vp-desktop-navigation__page-tree__tree').then((elm) => {

                // Apply styling to next/prev links at bottom of page
                $('vp-article-pagination').each(function() {
                  let style =  document.createElement( 'style' );
                  style.innerHTML = 'a { max-width: unset; } .description, a:is(:hover, :focus-visible) .description { color: var(--haiui-blue-03); } a:is(:hover, :focus-visible, :active) .cta, .cta {color: var(--haiui-blue-03); background-color: transparent;}';
                  $(this)[0].shadowRoot.appendChild(style);
                });
                let baseURL = $('[name="repository-base-url"]').attr('content').replaceAll('../','').replaceAll('/','');
                let path = window.location.pathname.replaceAll('/','');
                if (baseURL === path) {   // we are on the homepage of the space so add next button
                  let firstPage = $('.vp-tree__container li > div').first();
                  if (firstPage.length > 0) {
                    $('vp-article-pagination').removeAttr('hidden');
                    let paginationRoot = $('vp-article-pagination')[0].shadowRoot;
                    let hiddenPage = $(paginationRoot).find('a[rel="next"]');
                    $(hiddenPage).parent().removeAttr('hidden');
                    $(hiddenPage).attr('href',$('a', firstPage).attr('href'));
                    $('div.description',hiddenPage).text($(firstPage).first().text());
                  }
                }
                else {  // we aren't
                  let paginationRoot = $('vp-article-pagination')[0].shadowRoot;
                  let hiddenPage = $(paginationRoot).find('li[hidden]');
                  if (hiddenPage.length > 0) { // We are at the first or last child page of space
                    if ($('a', hiddenPage).attr('rel') == "prev") { // We are the the first child page
                      $('a', hiddenPage).attr('href',$('[name="repository-base-url"]').attr('content'));
                      $('div.description', hiddenPage).text($('.header__navigation--heading').first().text());
                      $(hiddenPage).removeAttr('hidden');

                    }
                    else { // we are at the end with no next page
                      // do nothing
                    }
                  }
                }
              });
            }
            function addBanner(message, hideOption, expireDays) {
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
                if (getLocalStorageWithExpiry('acceptedCookie')=="true") { // Only show if we have accepted cookies.
                  $('.aui-nav-actions-list.flagDoNotShow').removeClass('hidden');
                }
              }
              $('.aui-close-button',cookieFlag).on('click',function() {
                $('.versionIcon').fadeIn(1000);
                let cookieToSet = $('[id^=flag]', $(this).parent()).attr('id');
                if ((isInIframe()) || ((getLocalStorageWithExpiry('acceptedCookie')=="true") && ($(this).siblings('.flagDoNotShow').children('input').is(':checked')))) {
                  expireDays == 'session' ? sessionStorage.setItem(cookieToSet,'true') : setLocalStorageWithExpiry(cookieToSet,'true', expireDays);
                }
              });
            }


            // GDPR cookie popup
            // Show a popup if user hasn't been here before and accepted cookie message
            function cookieSetup() {
              if (!isPlayPro()) {
                if (!(getLocalStorageWithExpiry('acceptedCookie'))) {
                  var cookieViewLink = isBetaSite ? '' : '<li><a href="/Home/privacy-and-cookies">View</a></li>';
                  var cookieViewText = isBetaSite ? '' : 'Click <strong>View</strong> to read more.';
                  var cookieFlag = AJS.flag({
                    type: 'success',
                    body: 'We use cookies and local browser storage to ensure the best web experience. By clicking <strong>Accept</strong>, you agree to their use. ' + cookieViewText + 
                      '<ul class="aui-nav-actions-list">' +
                      '<li><a class="accept">Accept</a></li>' +
                      cookieViewLink + 
                      '<li><a class="cookieReject">Reject Optional Cookies</a></li>' +
                      '</ul>' 
                  });
                  $('#aui-flag-container .accept').on('click', function() {
                    $('.aui-nav-actions-list.flagDoNotShow').removeClass('hidden');
                    cookieFlag.close();
                    setLocalStorageWithExpiry('acceptedCookie', 'true', 3650);
                    $('#vp-js-desktop__navigation').hasClass('sidebar-collapsed') ? setLocalStorageWithExpiry('collapsed-sidebar', 'true', 3650) : setLocalStorageWithExpiry('collapsed-sidebar', 'false', 3650);
                    $('#userprefs .cookieContainer').removeClass('hidden');
                    $('#userprefs .cookieDisabledNote').addClass('hidden');
                    // Setup Google Analytics
                    gaSetup();
                  });
                  $('#aui-flag-container .cookieReject').on('click', function() {
                    $('.aui-nav-actions-list.flagDoNotShow').removeClass('hidden');
                    cookieFlag.close();
                    setLocalStorageWithExpiry('acceptedCookie', 'false', 3650);
                  });
                }
              }
            }
            function updateHeader() {
              $('.top-bar-left ul').removeClass('flex-row mr-4 items-center').addClass('flex-col');
              $('main').prepend($('body > header'));
              $('.header__navigation--heading').removeClass('py-3');
              // Move breadcrumbs to header
              if ($('main>header').length == 0) {
                $('main').prepend('<header data-vp-component="header" class="header hc-header-background-color"></header>');
              }
              $('main>header').prepend($('.vp-breadcrumbs__wrapper'));
        //      $('.vp-search-input__submit').addClass('hidden-mdlg hidden-md hidden-sm');
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
                $('.breadcrumbs-wrapper').addClass('hidden-mdlg hidden-md hidden-sm');
                // Show title in the breadcrumbs if title isn't shown when scrolling
                $('.breadcrumbs li').last().append('<span id="titleBreadcrumbSlash" style="display: none;" aria-hidden="true">/</span>');
                if ($('.search-header').length > 0) { that = $('.search-header'); }
                else                                { that = $('h1.vp-article__heading'); }
                let titleBreadcrumb = '<li id="titleBreadcrumb" style="display: none;">' + that.text() + '</li>';
                $('.breadcrumbs').append(titleBreadcrumb);
                $(window).on('resize scroll', function() {
                  that = $('.search-header').length > 0 ? $('.search-header') : $('header > h1');
                  that.isInViewport($('main > header').height()) ? ($('#titleBreadcrumbSlash, #titleBreadcrumb').hide()) : ($('#titleBreadcrumbSlash, #titleBreadcrumb').show());
                  hideShowBreadcrumbs(parseInt($('#vp-js-desktop__navigation').css('width')));
                });
                var breadcrumbs = $('.breadcrumbs--fit-content li');
                if (breadcrumbs.length > 4) {
                  for (var i = 2; i < breadcrumbs.length-2; i++) {
                    let tempTitle = breadcrumbs.eq(i).children('a').text();
                    breadcrumbs.eq(i).children('a').attr('data-title',tempTitle).attr('title',tempTitle).text('...');
                  }
                }
                addVersionToBreadcrumbs();
                hideShowBreadcrumbs(parseInt($('#vp-js-desktop__navigation').css('width')));
              });
            }
            function addVersionToBreadcrumbs() {
              // Add version number to breadcrumbs
              $('.breadcrumbs li').first().children('a').text($('.header__navigation--heading').text());
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

        /*          if (pageSearch) {
                    $('title').text($('title').text().replace(' — Public Documentation',''));
                  }
                  else {
                    $('title').text($('title').text() + ' - ' + $(this).text());
                  } */
                }

              });

              // Update sidebar sections
              waitForElm('.vp-desktop-navigation__page-tree__tree').then((elm) => {

                // Update page tree section
                $(elm).wrap('<div class="sidebar-section"></div>');
                if (!((isBetaSite) && ($('.vp-tree__container').children().length == 0))) {
                  let pageTreeHTML = '<div id="ic-pagetree" class="heading current">' + svgPageTree + '<h3 class="haiui-label-01-med">Page Tree</h3></div>';
                  $(elm).parent().prepend(pageTreeHTML);
                }
                else {
                  $('[data-vp-id="vp-search-form"]').hide();
                }

                if (!isBetaSite) {
                  // Add Products lists to the sidebar
                  let productsHTML = '<div class="sidebar-section"><div id="ic-products" class="heading">' + svgProducts + '<h3 class="haiui-label-01-med">Products</h3></div><div class="sort-items sort-products hidden"><div class="products-by-type">Type</div><div class="products-by-family">Family</div></div></div>';
                  $('.vp-desktop-navigation__page-tree').append(productsHTML);

                  $.getJSON('https://esouthers.github.io/infocenter-viewport/productsbytype.json', function(data) { processProductsByType(data); })
                    .fail(function(error) { console.error('Error fetching "product by type" JSON:', error);
                  });
                  $.getJSON('https://esouthers.github.io/infocenter-viewport/productsbyfamily.json', function(data) { processProductsByFamily(data); })
                    .fail(function(error) { console.error('Error fetching "product by family" JSON:', error);
                  });
                }
                function processProductsByType(data) {
                  let productsTypeHTML = '<ul class="ic-products-top productlist-type hidden vp-tree__container relative m-0 outline-none" role="tree">';
                  productsTypeHTML = buildSidebarList(data,productsTypeHTML,'type');
                  productsTypeHTML += '</ul>';
                  $('#ic-products').parent().append(productsTypeHTML);
                  productHighlight($('.productlist-type'));
                  if (getLocalStorageWithExpiry('productlist') == 'true') {
                    if (getLocalStorageWithExpiry('productlist-view') != 'family') {
                      $('ul.productlist-type').removeClass('hidden');
                      $('.products-by-type').addClass('current');
                    }
                    else {
                      $('ul.productlist-type').addClass('hidden');
                      $('.products-by-type').removeClass('current');
                    }
                  }

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
                  productHighlight($('.productlist-family'));
                  if (getLocalStorageWithExpiry('productlist') == 'true') {
                    $('.sort-items').removeClass('hidden');
                    $('#ic-products').removeClass('current');
                    $('#ic-pagetree').addClass('current');
                    if (getLocalStorageWithExpiry('productlist-view') == 'family') {
                      $('ul.productlist-family').removeClass('hidden');
                      $('.products-by-family').addClass('current');
                    }
                    else {
                      $('ul.productlist-family').addClass('hidden');
                      $('.products-by-family').removeClass('current');
                    }
                  }

                  $('.ic-products-top.productlist-family .vp-tree-item__header__title, .ic-products-top.productlist-family .vp-tree-item__header__icon').click(function() {
                    if ($(this).hasClass('vp-tree-item__header__title')) { sidebarExpandoListeners($(this).parent().children().children('button')); }
                    else { sidebarExpandoListeners($(this).children('button')); }
                  });
                }
                // Highlight product in sidebar depending on URL
                function productHighlight(productList) {
                  let path = window.location.pathname.split('/')[1];
                  $('.vp-tree-item__header__title', productList).each(function() { 
                    if ($(this).attr('href')) {
        //              if ($(this).attr('href').indexOf(path) >= 0) { 
                        if ($(this).attr('href').split('/')[1] == path) { 
                        $(this).addClass('current');
                        let currentParent = $(this).parents('ul').first();
                        if (currentParent.hasClass('vp-tree-item__children')) {
                          currentParent.removeClass('hidden').attr('aria-label','Collapse item');
                          currentParent.parent().children('div').children('.vp-tree-item__header__icon').children('button').removeClass('rotate-0').addClass('rotate-90');

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
                let userprefs = '<section role="dialog" id="userprefs" data-aui-modal="true" class="hai-dialog aui-dialog2 card" aria-hidden="true" style="display:none"><header class="aui-dialog2-header card-header"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48" class="HaiIcon"><path d="M10,22.26V4c0-1.1-.9-2-2-2s-2,.9-2,2V22.26c-3.44,.89-6,4.02-6,7.74s2.56,6.85,6,7.74v6.26c0,1.1,.9,2,2,2s2-.9,2-2v-6.26c3.44-.89,6-4.02,6-7.74s-2.56-6.85-6-7.74Zm-2,11.74c-2.21,0-4-1.79-4-4s1.79-4,4-4,4,1.79,4,4-1.79,4-4,4Z"></path><path d="M32,16c0-3.72-2.56-6.85-6-7.74V4c0-1.1-.9-2-2-2s-2,.9-2,2v4.26c-3.44,.89-6,4.02-6,7.74s2.56,6.85,6,7.74v20.26c0,1.1,.9,2,2,2s2-.9,2-2V23.74c3.44-.89,6-4.02,6-7.74Zm-8,4c-2.21,0-4-1.79-4-4s1.79-4,4-4,4,1.79,4,4-1.79,4-4,4Z"></path><path d="M48,34c0-3.72-2.56-6.85-6-7.74V4c0-1.1-.9-2-2-2s-2,.9-2,2V26.26c-3.44,.89-6,4.02-6,7.74s2.56,6.85,6,7.74v2.26c0,1.1,.9,2,2,2s2-.9,2-2v-2.26c3.44-.89,6-4.02,6-7.74Zm-8,4c-2.21,0-4-1.79-4-4s1.79-4,4-4,4,1.79,4,4-1.79,4-4,4Z"></path></svg><h2 class="haiui-heading-03-book">User Preferences</h2><a class="card-close"><span class="aui-icon aui-icon-small hai-icon-download-close">Close</span></a></header><div class="card-body haiui-body-02"><form id="brightnessContrast" class="brightnessContrast"><div class="control-container"><label for="brightnessInput" class="slidertext" id="brightnessRangeLabel">Brightness</label><div class="slidecontainer"><input id="brightnessInput" type="range" min="70" max="130" value="100" class="control slider brightnessRange" aria-labelledby="brightnessRangeLabel"></div></div><div class="control-container"><label for="contrastInput" class="slidertext" id="contrastRangeLabel">Contrast</label><div class="slidecontainer"><input id="contrastInput" type="range" min="70" max="130" value="100" class="control slider contrastRange" aria-labelledby="contrastRangeLabel"></div></div></form><div class="control-container control-borderbottom"><button class="secondary btn-sm resetBCButton">Reset</button><p class="cookieDisabledNote"><strong>Note:</strong> Cookies are disabled. Therefore, these settings to do not persist when browsing.</p></div><div class="cookieContainer control-container hidden"><label for="clearCookiesButton" class="control-label">Cookies/Browser Storage</label><div class="combine-items align-left"><button id="clearCookiesButton" class="secondary btn-sm clearCookies">Clear</button><div class="clearCookiesNote"><strong>Note:</strong> <a href="/Home/privacy-and-cookies">View list</a> of cookies/browser storage used.</div></div></div></div><footer class="card-footer"><div class=""><button class="primary dialog-close-button">Close</button></div></footer></section>';
                $('#article-content').after(userprefs);
                $('body').append('<div id="dialog-overlay" aria-hidden="false" style="display: none;"></div>');
                userPreferences();

                // Add sidebar dragbar
                let dragbarToAdd = '<div id="sidebar-dragbar"><div class="sidebar-drag-handle"><span class="drag-handle-1"></span><span class="drag-handle-2"></span><span class="drag-handle-3"></span></div></div>';
                $('main').append(dragbarToAdd);
                $('#sidebar-dragbar').on('mousedown touchstart', function (e) {
                  e.preventDefault();
                  $(document).on('mousemove touchmove', function (e) {
                    if (e.type == 'touchmove') { mousex = e.touches[0].pageX; }
                    else { mousex = e.pageX; }
                    if (mousex < 190 || mousex/$(window).innerWidth() > 0.7)return;
                    if (mousex < 220)$('#vp-js-desktop__navigation').addClass('small');
                    else $('#vp-js-desktop__navigation').removeClass('small');
                    setDragbar(mousex);
                    setLocalStorageWithExpiry('sidebar-width', mousex, 365);
                  });
                  // Disable mouse events for navigation bar iframe
                  $(document).on('mouseup', function (e) {
                      $(document).unbind('mousemove');
                  });
                  $(document).on('touchend', function (e) {
                      $(document).unbind('touchmove');
                  });
                });

                $('body').removeClass('min-h-screen');
                $('.header__navigation--logo img').addClass('logo-large').attr('src','https://esouthers.github.io/infocenter-viewport/assets/InfoCenterLogo.svg');
                $('.header__navigation--logo img').parent().prepend(svgSmallLogo);
                var articleLeft = '';
                if (($(window).width() <= 640) || (getLocalStorageWithExpiry('collapsed-sidebar') == 'true')) {
                  collapseOpenSidebar();
                }

                /* Scroll sidebar to currently viewed page */
                if ($('.vp-tree-item--active').length > 0) {
                  if (!$('.vp-tree-item--active').isInViewport(0)) {
                    $('.vp-desktop-navigation__page-tree').scrollTop($('.vp-tree-item--active').offset().top - $('.vp-desktop-navigation__page-tree').offset().top - $('.vp-desktop-navigation__page-tree').height() + 20);
                  }
                }

                /* Sidebar event listeners */
                $('.ht-menu-button').click(function() {
                  collapseOpenSidebar();
                });
                $('.ic-products-top button').click(function() {
                  sidebarExpandoListeners(this);
                });
                $('.sort-products .products-by-type').click(function() {
                  $('ul.productlist-type').removeClass('hidden');
                  $('.products-by-type').addClass('current');
                  setLocalStorageWithExpiry('productlist-view','type',3650);
                  $('ul.productlist-family').addClass('hidden');
                  $('.products-by-family').removeClass('current');
                });
                $('.sort-products .products-by-family').click(function() {
                  $('ul.productlist-family').removeClass('hidden');
                  $('.products-by-family').addClass('current');
                  setLocalStorageWithExpiry('productlist-view','family',3650);
                  $('ul.productlist-type').addClass('hidden');
                  $('.products-by-type').removeClass('current');
                });

                $('#ic-pagetree').click(function() {
                  if ($('#vp-js-desktop__navigation').hasClass('sidebar-collapsed')) {
                    $('.ht-menu-button').click(); // If sidebar collapsed, open it
        //            $('.vp-desktop-navigation__page-tree__tree').removeClass('hidden');
        //            $(this).addClass('current');
                  }
                  if ($('.vp-desktop-navigation__page-tree__tree').hasClass('hidden')) {
                    $('.vp-desktop-navigation__page-tree__tree').removeClass('hidden');
                    $(this).addClass('current');
                    $('#ic-products').removeClass('current');
                  }
                  else {
                    $('.vp-desktop-navigation__page-tree__tree').addClass('hidden');
                    $(this).removeClass('current');
                    if (!$('.sort-items').hasClass('hidden')) {
                      $('#ic-products').addClass('current');
                    }
                  }
                });
                $('#ic-products').click(function() {
                  if ($('#vp-js-desktop__navigation').hasClass('sidebar-collapsed')) {
                    $('.ht-menu-button').click(); // If sidebar collapsed, open it
                  }
                  if ($('.sort-items').hasClass('hidden')) {
                    $(this).addClass('current');
                    setLocalStorageWithExpiry('productlist','true',3650);
                    $('#ic-pagetree').removeClass('current');
                    $('.sort-items').removeClass('hidden');
                    if ($('.products-by-family').hasClass('current')) {
                      $('ul.productlist-family').removeClass('hidden');
                      $('.products-by-type').removeClass('current');
                    }
                    else {
                      $('.products-by-type').addClass('current');
                      $('ul.productlist-type').removeClass('hidden');
                    }
                  }
                  else {
                    $(this).removeClass('current');
                    setLocalStorageWithExpiry('productlist','false',3650);
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

            function collapseOpenSidebar() {
              $('#vp-js-desktop__navigation').toggleClass('sidebar-collapsed');
              if ($('#vp-js-desktop__navigation').hasClass('sidebar-collapsed')) {
                // close sidebar 96px
                setDragbar(96);
                setLocalStorageWithExpiry('collapsed-sidebar','true', 3650);
                $('#sidebar-dragbar').addClass('hidden');
                $('.header__navigation--logo img.logo-large').hide();
                $('.header__navigation--logo svg.logo-small').show();
                $('#article-content').show();

              }
              else {
                // open sidebar
                setDragbar(getLocalStorageWithExpiry('sidebar-width'));
                setLocalStorageWithExpiry('collapsed-sidebar','false', 3650);
                $('#sidebar-dragbar').removeClass('hidden');
                $('.header__navigation--logo img.logo-large').show();
                $('.header__navigation--logo svg.logo-small').hide();
                if ($(window).width() <= 640) {
                  $('#article-content').hide();
                }
              }
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


            function waitForImageLoad(imgElement, callback) {
                var checkLoaded = setInterval(function() {
                    if (imgElement.complete) {
                        clearInterval(checkLoaded); // Stop checking
                        callback(); // Call the callback function
                    }
                }, 100); // Check every 100 milliseconds
            }
              // Fix inline images
            function fixInlineImages(figureToFix) {

                let maxThumbnailWidth = 30;
                let maxThumbnailHeight = 30; 
                waitForImageLoad($('img', figureToFix)[0], function() {
                  if (($('img', figureToFix).height() < maxThumbnailHeight) || ($('img', figureToFix).attr('width') < maxThumbnailWidth) || ($('img', figureToFix).attr('data-width') < maxThumbnailWidth)) {
                    $(figureToFix).addClass('image-inline');
                    let vpLBToggle = $('vp-lightbox-toggle', figureToFix);
                    if (vpLBToggle.length > 0) {
                      $(vpLBToggle[0].shadowRoot).find('button').remove();
                    }
                    $('a', figureToFix).css('display','inline');
                    if ($(figureToFix)[0].nextSibling) {
                      if ($(figureToFix)[0].nextSibling.nodeType == 3) {
                        if (($(figureToFix)[0].previousSibling) && ($(figureToFix)[0].previousSibling.nodeType == 1) && ($(figureToFix)[0].previousSibling.nodeName != 'BR')) {
                          textNode = $(figureToFix)[0].nextSibling.nodeValue;
                          $(figureToFix)[0].nextSibling.nodeValue = '';
                          $(figureToFix).prev().append($(figureToFix)).append(textNode).contents().unwrap();
                        }
                        else {
                          if ($(figureToFix)[0].nodeName != 'FIGURE') {
                            textNode = $(figureToFix)[0].nextSibling.nodeValue;
                            $(figureToFix)[0].nextSibling.nodeValue = '';
                            $(figureToFix).append(textNode);
                          }
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
                });


            }

            // Fix images Sizes
            function fixImageSizes(figureToFix) {
              let img = $('img', figureToFix);
              if (!$(img).attr('height')) { 
                $(img).css('width',$(img).attr('data-width') + 'px');
              }
              else {
                $(img).css('height',$(img).attr('height') + 'px');
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
              if (!val)val = 320;
              let val10 = val - 22;
              if ($('#vp-js-desktop__navigation').hasClass('sidebar-collapsed')) {
                $('#vp-js-desktop__navigation').width(val + "px");
              }
              else {
                $('#vp-js-desktop__navigation').width(val10 + "px");
              } 
              $('main').css("left", val + "px").css("width", "calc(100% - " + val + "px)");
              hideShowBreadcrumbs(val);
            }
            function hideShowBreadcrumbs(val) {
              let testVal = window.innerWidth - val - $('.header__navigation').width();
              if (testVal <= 500) {
                $('.vp-breadcrumbs').addClass('hidden');
              }
              else if (testVal <= 700) {
                if ($('.breadcrumbs li').length > 3) {
                  let addDots = $('.breadcrumbs li').eq(1);
                  if (!(addDots.hasClass('hidden'))) {
                    addDots.addClass('hidden').attr('data-title',$('a', addDots).text());
                    $('a', addDots).attr('title',$('a', addDots).text());
                    $('a', addDots).text('...');
                  }
                }
                $('.vp-breadcrumbs').removeClass('hidden');
              }
              else {
                $('.breadcrumbs li.hidden').each(function() {
                  $(this).removeClass('hidden');
                  $('a',this).text($(this).attr('data-title'));
                });
                $('.vp-breadcrumbs').removeClass('hidden');
              }
              if ($('#article-content').width() < 500) {
                $('#vp-js-desktop__navigation__picker').addClass('hidebefore');
              }  
              else {
                $('#vp-js-desktop__navigation__picker').removeClass('hidebefore');
              } 
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
                let pageactionsHTML = '<p class="page-actions"><span title="Provide Feedback" id="provide-feedback">' + svgFeedback + '</span><span title="Contact Sales" id="talk-to-sales">' + svgSales + '</span><span title="Print Page" id="print-article">' + svgPrint + '</span><span title="Export PDF" id="pdf-article" style="display:none;">' + svgPDF + '</span></p>';
                $('.article-header').append(modDateHTML).append(pageactionsHTML); 
                $('#pdf-article svg').attr('width','16px').attr('height', '16px');
                window.ATL_JQ_PAGE_PROPS = {
                  "triggerFunction": function(showCollectorDialog) {
                    $('#provide-feedback').click(function(e) {
                      e.preventDefault();
                      showCollectorDialog();
                    });
                  }
                };
                $('.page-actions span').on('mouseenter', function() {
                  waitForElm('.aui-tooltip').then((elm) => {
        //            $('.aui-tooltip').css('margin-top','100px');
                    setTimeout(function() { 
                      $('.aui-tooltip').removeClass('hidden');
                    }, 500);
                  });
                });
                $('.page-actions span').on('mouseleave', function() {
                  $('.aui-tooltip').addClass('hidden');
                });
                $('.page-actions span').each(function() {
                  $(this).tooltip({gravity: 'nw'});
                });
                $('.aui-tooltip').addClass('hidden');
                $('#talk-to-sales').on('click', function() {
                    window.open('https://www.haivision.com/contact/', '_blank');
                });
                $('#print-article').on('click', function() {
                    window.print();
                });
                window.onbeforeprint = (event) => { 
                };
                window.onafterprint = (event) => { 
                  $('.forPrint').remove();

                };
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

            // Adds popup warning if older version, in beta space, maintenance, etc.
            function warningMessage() {
              var curProd = location.pathname.split('/')[1];  // Get product+version # from the URL
              var curVer =  location.pathname.split('/')[2];  // Get current location's version #
              var latestVer = '';
              // Get version numbers used
              $.each(viewportList.members, function(key, prod) { 
                if ((prod.prefix == curProd) && (prod.versions)) {
                  latestVer = prod.versions.available[0].name;
                  spaceName = prod.name;
                }
              });
              var newMsg = '';
             
              
              if ((isBetaSite) || (window.location.pathname.split('/')[2].indexOf('Beta') >= 0)) {
                let flagID = 'flagBeta';
                newMsg = 'BETA VERSION – FOR TEST PURPOSES ONLY';
                addIconNextToVersion(newMsg, flagID, 14);
                $('.vp-picker__button span').first().text("Beta");
                var updateVersionButtonLabel = new MutationObserver(function(mutations) {
                  let buttonLabel = $('.vp-picker__button span').first();
                  if (buttonLabel.text() != "Beta") {
                    buttonLabel.text("Beta");
                  }
                });
                if (document.querySelector('.vp-picker__button span')) {
                  updateVersionButtonLabel.observe(document.querySelector('.vp-picker__button span'), {attributes: false, childList: true, characterData: false, subtree:true});
                }
              }
              else if ((latestVer != '') && (curVer.toLowerCase() != latestVer.toLowerCase())) { // Test if we aren't viewing the latest version
                // Add content to popup window and show it
                let flagID = 'flagOldVer';
                newMsg = 'You are viewing documentation for ' + spaceName + ' ' + curVer + '. However, the latest version is ' + latestVer + '. Documentation is not always updated for older releases.';
                addIconNextToVersion(newMsg, flagID, 14);
              }
  
              // Redirect to older version if newer versions have the same documentation 
              $.each(hvConfig.redirects, function(i,product) {
                if (window.location.pathname.indexOf(product.prefix  + '/' + product.olderVersion) >= 0) {
                  let flagID = 'flag' + product.prefix;
                  newMsg = 'Documentation for ' + viewportList.currentContentSource.name + ' ';

                  newVerText = product.newerVersions.join(', ');
                  if (product.newerVersions.length > 1) { // Replace last comma with an and
                    newVerText = newVerText.replace(/,([^,]*)$/, ', and$1');
                  }

/*                  $.each(product.newerVersions, function(j,version) {
                    var isLastElement = j == product.newerVersions.length - 1;
                    if (j == 0) {
                      newMsg += version;
                    }
                    else if (isLastElement) {
                      newMsg += ' and ' + version;
                    }
                    else {
                      newMsg += ', ' + version;
                    }
                  }); */
                  newMsg = newMsg + newVerText + ' is the same as version ' + product.olderVersion + '.';
                  addIconNextToVersion(newMsg, flagID, 14);
                };
              });
              // Add a server outage message
              maintenanceDate = hvConfig.maintenanceDate;
              var currentTime = new Date();
              if (currentTime < maintenanceDate) {
                let flagID = 'flagMaintenance';
            //    if (!(sessionStorage.getItem(flagID))) {
                const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
                let monthStr = month[maintenanceDate.getMonth()];
                newMsg = 'Server maintenance will occur on ' + monthStr + ' ' + maintenanceDate.getDate() + ', ' + maintenanceDate.getFullYear() +' at approximately ' + hvConfig.maintenanceTime + '. Expect up to ' + hvConfig.maintenanceDuration + ' of downtime.';
                addIconNextToVersion(newMsg, flagID, 'session');
            //    }
              }
            }

            function addIconNextToVersion(newMsg, flagID, expDays) {
              $('.versionIcon').attr('data-original-title', newMsg).attr('title', newMsg);
              $('.versionIcon').on('mouseenter', function() {
                waitForElm('.aui-tooltip').then((elm) => {
                  $('.aui-tooltip').css('margin-top','100px');
                  setTimeout(function() { 
                    $('.aui-tooltip').css('z-index',125).css('margin-top','unset').removeClass('hidden').fadeIn(1000);
                  }, 500);
                });
              });
              $('.versionIcon').on('mouseleave', function() {
                $('.aui-tooltip').css('z-index','unset').css('margin-top','100px').addClass('hidden').fadeOut(1000);
              });
              $('.versionIcon').tooltip({gravity: 'nw'});
              $('.aui-tooltip').addClass('hidden');
              newMsg = '<div id=' + flagID + '>' + newMsg + '</div>';
              if (!isPlayPro()) { 
                if (expDays == 'session' && !sessionStorage.getItem(flagID)) {
                    addBanner(newMsg, true, expDays);
                } else if (!(expDays == 'session') && !getLocalStorageWithExpiry(flagID)) {
                    addBanner(newMsg, true, expDays);
                } else {
                    $('.versionIcon').fadeIn(1000);
                }
              }
            }

            function setLocalStorageWithExpiry(key, value, ttl) {
              if ((key == 'acceptedCookie') || (getLocalStorageWithExpiry('acceptedCookie')=="true")) {
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

            function getSearchIndexes(numResults) {
              let startIdx = parseInt($('#search-form [name="start"]').attr('value')) + 1;
              let maxIdx = parseInt($('#search-form [name="max"]').attr('value'));
              if (startIdx + maxIdx - 1 > numResults) {
                stopIdx = numResults;
              }
              else {
                stopIdx = startIdx + maxIdx - 1;
              }
              return [startIdx, stopIdx];
            }

            function testWindowSize() {
              let width = window.innerWidth;
              let sidebarWidth = $('.vp-article__aside-left').width();
              if (sidebarWidth / width > 0.6) {
                let newWidth = parseInt(0.6 * width);
                setLocalStorageWithExpiry('sidebar-width',newWidth,14);
                setDragbar(newWidth);
              }
              if (width < 800) { 
                if (!($('#vp-js-desktop__navigation').hasClass('sidebar-collapsed'))) {
                  $('.ht-menu-button').click();
                }
              }
              else { 
                if (window.innerWidth - $('.vp-article__aside-left').width() < 445) {
                  let newWidth = window.innerWidth - 445;
                  if (newWidth < 231) {newWidth = 231;}
                  setLocalStorageWithExpiry('sidebar-width',newWidth,14);
                  setDragbar(newWidth);
                }
                if ($('#vp-js-desktop__navigation').hasClass('sidebar-collapsed')) {
                  $('.ht-menu-button').click();
                }          
              }
            }
            function convertExpandsToTabs() {
              $.fn.changeElementType = function(newType) {
                  var attrs = {};
                  $.each(this[0].attributes, function(idx, attr) {
                      attrs[attr.nodeName] = attr.nodeValue;
                  });
                  this.replaceWith(function() {
                      return $("<" + newType + "/>", attrs).append($(this).contents());
                  });
              };
              $('.expand-container').each(function() {
                let thisNext = $(this).next();
                let thisPrev = $(this).prev();
                if ((thisNext.hasClass('expand-container')) || (thisPrev.hasClass('tabs-menu'))) { // Two or more expands together, so lets convert it to tabs
                  if (!thisPrev.hasClass('tabs-menu')) { // Haven't started converting yet
                    $(this).addClass('active-tab');
                    $(this).wrap('<ul class="tabs-menu" role="tablist"></ul>');
                  }
                  else {
                    $(this).appendTo(thisPrev);
                  }
                  if (!(thisNext.hasClass('expand-container'))) { //last tab
                    $(this).parent().wrap('<div class="contentf aui-tabs horizontal-tabs" role="application"></div>');
                  }
                  $(this).addClass('menu-item').removeAttr('id').removeClass('expand-container').changeElementType('li');
                }
              });
              $('.aui-tabs').each(function() {
                $('.menu-item', this).each(function() {
                  title = $('.expand-title', this).text();
                  tabID = $('.expand-control', this).attr('data-vp-id');
                  $(this).append('<a data-tabID="#' + tabID + '">' + title + '</a>');
                  content = $('.expand-content', this);
                  content.attr('id',tabID).attr('data-pane-title',title).addClass('cfm tabs-pane').removeClass('expand-content').attr('role','tabpanel');
                  content.appendTo($(this).parent().parent());
                  $('details', this).remove();
                });
                $('.tabs-pane', this).first().addClass('active-pane').attr('loaded','true');
              });
              $('.aui-tabs .menu-item').on('click', function() {
                $(this).siblings('.active-tab').removeClass('active-tab');
                $(this).addClass('active-tab');
                let tabLink = $('a', this).attr('data-tabID');
                $(this).parent().parent().children().removeClass('active-pane');
                $(tabLink).addClass('active-pane');
              });
            }
            function isInIframe() {
              if ( window.self === window.top ) { return false; }
              else { return true; }
            }
            // Test if viewing from Play Pro. Called by playProFixes and functions in other files
            function isPlayPro() {
              if (navigator.userAgent.indexOf('HaivisionPlayPro') >= 0) { return true; }
              else { return false; }
            }

            // User Preferences - Brightness/Contrast & Image Hover Zoom
            function userPreferences() {
              if (getLocalStorageWithExpiry('acceptedCookie')=='true') {
                gaSetup(); 
                $('#userprefs .cookieContainer').removeClass('hidden');
                $('#userprefs .cookieDisabledNote').addClass('hidden');
              }
              $('#ic-settings *').click(function(e) {
                e.preventDefault();
                $('#ic-products.current,#ic-pagetree.current').removeClass('current').addClass('wascurrent');
                $('#ic-settings').addClass('current');
                  $("#userprefs").show().animate({top: '20%', opacity: '100%'},500);
                  $('.dialog-overlay, #userprefs, #dialog-overlay').attr('aria-hidden','false');
            //      $('.sp-blanket').removeClass('hidden');
                  $('#dialog-overlay').fadeIn(500);
                  addEventTrackingUserPrefs("Open dialog", '');
              });
              // Hides the dialog
              $('#userprefs .dialog-close-button, .card a.card-close').click(function (e) {
                e.preventDefault();
                $('#ic-products.wascurrent,#ic-pagetree.wascurrent').removeClass('wascurrent').addClass('current');
                $('#ic-settings').removeClass('current');
                $('#userprefs').animate({top: '0%', opacity: '0%'},500).fadeOut(0);
                $('#dialog-overlay').fadeOut(500);
                $('#userprefs, #dialog-overlay').attr('aria-hidden','true');
                addEventTrackingUserPrefs("Close dialog", '');
              });
              if (!isPlayPro()) {
                if (getLocalStorageWithExpiry('acceptedCookie')=="true") {
                  $('#ic-settings').css({opacity: 1.0, visibility: "visible"});
                  var userBrightness = getLocalStorageWithExpiry('ICbrightness');
                  var userContrast = getLocalStorageWithExpiry('ICcontrast');
                  if (!userBrightness) {
                    userBrightness = '100';
                    setLocalStorageWithExpiry('ICbrightness',userBrightness, 3650);
                  }
                  if (!userContrast) {
                    userContrast = '100';
                    setLocalStorageWithExpiry('ICcontrast',userContrast, 3650);
                  }
                  $('html').css('filter','brightness(' + userBrightness + '%) contrast(' + userContrast + '%)');
                  $('.brightnessRange').val(userBrightness);
                  $('.contrastRange').val(userContrast);
                  $('.brightnessRange, .contrastRange').each(function() {
                    calcCSS(this);
                  });
                }
              }

              // Update the current slider value (each time you drag the slider handle)
              $('.brightnessRange').on('input', function() {
                changeBrightness(this);
              });
              $('.brightnessRange').mouseup(function() {
                addEventTrackingUserPrefs("Change brightness", this.value + '%');
              });
              $('.contrastRange').on('input', function() {
                changeContrast(this);
              });
              $('.contrastRange').mouseup(function() {
                addEventTrackingUserPrefs("Change contrast", this.value + '%');
              });
              $('button.resetBCButton').click(function() {
                resetBC();
                addEventTrackingUserPrefs("Reset brightness contrast", '');
              });
              
              $('button.clearCookies').click(function() {
                localStorage.clear();
                sessionStorage.clear();
        /*        var cookies = getCookies();
                for(var cookie in cookies) {
                  $.cookie(cookie, null, { path: '/' });
                  $.cookie(cookie, null, { path: '/', domain: 'doc.haivision.com'});
                  $.cookie(cookie, null, { path: '/', domain: '.haivision.com'});
                } */
                $('#userprefs .cookieContainer').addClass('hidden');
                $('#userprefs .cookieDisabledNote').removeClass('hidden');
                addEventTrackingUserPrefs("Clear cookies", '');
              });
              var getCookies = function(){
                let pairs = document.cookie.split(";");
                let cookies = {};
                for (var i=0; i<pairs.length; i++){
                  var pair = pairs[i].split("=");
                  cookies[(pair[0]+'').trim()] = unescape(pair.slice(1).join('='));
                }
                return cookies;
              };
              function calcCSS(that) {
                let minValue = parseInt($(that).attr('min'));
                let maxValue = parseInt($(that).attr('max'));
                let alpha = 100/(maxValue - minValue);
                let beta = -alpha*minValue;
                let leftValue = $(that).val()*alpha + beta;
                let rightValue = 100 - $(that).val();
                let cssToAdd = '-webkit-linear-gradient(left, var(--gradientColor1) 0%, var(--gradientColor2) '+leftValue+'%, var(--defaultBackground) '+leftValue+'%)';
                $(that).css('background-image',cssToAdd);
              }
              function changeBrightness(that) {
                $('html').css('filter','brightness(' + that.value + '%) contrast(' + $('.contrastRange').first().val() + '%)');
                $('.brightnessRange').val(that.value);
                if (getLocalStorageWithExpiry('acceptedCookie')=="true") {
                  setLocalStorageWithExpiry('ICbrightness',that.value,3650);
                }
                $('.brightnessRange').each(function() {
                  calcCSS(this);
                });
              }
              function changeContrast(that) {
                $('html').css('filter','brightness(' + $('.brightnessRange').first().val() + '%) contrast(' + that.value + '%)');
                $('.contrastRange').val(that.value);
                if (getLocalStorageWithExpiry('acceptedCookie')=="true") {
                  setLocalStorageWithExpiry('ICcontrast',that.value,3650);
                }
                $('.contrastRange').each(function() {
                  calcCSS(this);
                });
              }
              function resetBC() {
                $('.brightnessRange').val('100');
                calcCSS($('.brightnessRange'));
                $('.contrastRange').val('100');
                calcCSS($('.contrastRange'));
                $('html').css('filter','');
                if (getLocalStorageWithExpiry('acceptedCookie')=="true") {
                  setLocalStorageWithExpiry('ICbrightness','100',3650);
                  setLocalStorageWithExpiry('ICcontrast','100',3650);
                }
              }
            }

            function addDone(selector) {
              $(selector).removeClass('pdfStepPending').removeClass('pdfStepWaiting').addClass('pdfStepDone');
              $('.aui-icon', selector).addClass('hai-icon-checkmark');
            }
            function addWait(selector) {
              $(selector).removeClass('pdfStepPending').addClass('pdfStepWaiting');
            }
            function updateProgress(value1, value2) {
              let newValue = value1 + (value2 / 3);
              $('#progress-bar').attr('data-value', newValue/100);
              $('#progress-bar .aui-progress-indicator-value').css('width', newValue + '%');
            }

            // Ctrl(17)+Alt(18)+O(79) to go to page in Confl Cloud
            // C: 67, L: 76, O: 79, U: 85, 
            // , or . go to previous or next topic
            function keyboardShortcuts() {
              // For other keycode values: http://www.javascripter.net/faq/keycodes.htm
              var map = {17: false, 18: false, 67: false, 76: false, 79: false, 80: false, 85: false, 188: false, 190: false};
              $(document).keydown(function(e) { 
                if (e.keyCode in map) {
                  map[e.keyCode] = true;
                  if ((e.ctrlKey || e.metaKey) && e.altKey && map[79]) { // Go to the page in Confl Cloud
                    window.open("http://haivisioninfocenter.atlassian.net/wiki/pages/viewpage.action?pageId=" + $('body').attr('data-pageid'), '_blank');
                  }
                  if ((e.ctrlKey || e.metaKey) && e.altKey && map[80]) { // Test PDFing
                    $('#pdf-article').show();
                  }
                  if (e.ctrlKey && e.metaKey && map[79]) { // Go to the page in Confl Cloud for Mac
                    window.open("http://haivisioninfocenter.atlassian.net/wiki/pages/viewpage.action?pageId=" + $('body').attr('data-pageid'), '_blank');
                  }
                  if (map[188] || map[190]) {   // ,/. goes to previous/next topic
                    if ($(e.target).is('section *')) { return; } // Ignore if inside search or text box
                    if ($(e.target).is('form *')) { return; }
                    if (map[188]) { // ,<
                      newlink = $($('vp-article-pagination')[0].shadowRoot).find('a[rel="prev"]').attr('href');
                      if(newlink) { window.location = newlink; }
                    }
                    else if (map[190]) { // .> 
                      newlink = $($('vp-article-pagination')[0].shadowRoot).find('a[rel="next"]').attr('href');
                      if(newlink) { window.location = newlink; }
                    }
                  }
                }
              }).keyup(function(e) {
                  if (e.keyCode in map) {
                    $.each(map, function(i,j) {
                      map[i] = false;
                    });
                  }
              });
            }
            function pdfButtonEventListeners() {
              $('#pdf-dialog .dialog-close-button').on('click', function(e) {
                e.preventDefault();
                $(this).parents('.hai-dialog').remove();
                $('#dialog-overlay').attr('aria-hidden','true').hide();
              });

              $('#pdf-dialog .dialog-cancel-button').on('click', function(e) {
                var jobId = $('#pdf-dialog').attr('data-jobid');
                $('#pdf-dialog').remove();
                $('#dialog-overlay').hide();
                $.ajax({
                    url: 'https://scroll-pdf.us.exporter.k15t.app/api/public/1/exports/' + jobId,
                    headers: {
                        'Authorization':'Bearer ' + hvConfig.pdfBearerToken
                    },
                    method: 'DELETE',
                    success: function(data){
                    }
                });
              });
              $('#pdf-dialog .dialog-start-button').on('click', function(e) {
                e.preventDefault();
                if ($('input[name="paperSize"]:checked').length == 0) {
                  $('.haiui-body-02 .status-error').show();
                }
                else {
                  $('.haiui-body-02 .status-error').hide();
                  $('#pdf-dialog .card-body.options, #pdf-dialog .dialog-start-button').hide();
                  $('#pdf-dialog .card-body.status, #pdf-dialog .dialog-cancel-button').show();
                  let idLetter = overrideTemplateLetter == '' ? hvConfig.pdfTemplateIDLetter : overrideTemplateLetter;
                  let idA4 = overrideTemplateA4 == '' ? hvConfig.pdfTemplateIDA4 : overrideTemplateA4;
                  var pdfTemplateID = $('input[name="paperSize"]:checked').val() == 'a4' ? idA4 : idLetter;
                  var variantToShow = '';
                  if (viewportList.currentContentSource.variants?.available?.length ?? 0) {
                    $.each(hvConfig.variants, function(i,product) {
                      $.each(product, function(i,j) {
                        if (j.variant == viewportList.currentContentSource.variants.current.name) {
                          variantToShow = j.variantId;
                          return false;
                        }
                      });
                    });
                  }
                  var apiData = JSON.stringify({
                    'pageId': $('body').attr('data-pageid'),
                    'scope': 'descendants',
                    'templateId': pdfTemplateID,
                    'locale': 'en-US',
                    'variantId': variantToShow,
                    'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone
                  });
                  $.ajax({
                    url: 'https://scroll-pdf.us.exporter.k15t.app/api/public/1/exports',
                    headers: {
                          'Authorization':'Bearer ' + hvConfig.pdfBearerToken
                    },
                    method: 'POST',
                    dataType: 'json',
                    contentType: 'application/json; charset=utf-8',
                    data: apiData,
                    success: function(data){
                      let jobID = data.jobId;
                      $('#pdf-dialog').attr('data-jobid', jobID);
                      var checkDone = setInterval(function() {
                        $.ajax({
                          url: 'https://scroll-pdf.us.exporter.k15t.app/api/public/1/exports/' + jobID + '/status',
                          headers: {
                            'Authorization':'Bearer ' + hvConfig.pdfBearerToken
                          },
                          method: 'GET',
                          success: function(data, status, jqXHR) {
                            if (data.step == '1') {
                              addDone($('#PDFstep1'));
                              addWait($('#PDFstep2'));
                              updateProgress(15, parseInt(data.stepProgress));
                            }
                            else if (data.step == '2') {
                              addDone($('#PDFstep1, #PDFstep2'));
                              addWait($('#PDFstep3'));
                              updateProgress(33, parseInt(data.stepProgress));
                              let numPages = $('.vp-tree-item--active').length > 0 ? $('.vp-tree-item--active li').length + 1 : $('.vp-desktop-navigation__page-tree__tree li').length + 1;
                              let numPagesDone = Math.round(numPages * parseInt(data.stepProgress) / 100);
                              $('#PDFstep3 .numPDFDone').text('(' + numPagesDone + '/' + numPages + ')');
                            }
                            else if (data.step == '3') {
                              addDone($('#PDFstep1, #PDFstep2, #PDFstep3'));
                              let numPages = $('.vp-tree-item--active').length > 0 ? $('.vp-tree-item--active li').length + 1 : $('.vp-desktop-navigation__page-tree__tree li').length + 1;
                              $('#PDFstep3 .numPDFDone').text('(' + numPages + '/' + numPages + ')');
                              addWait($('#PDFstep4'));
                              updateProgress(66, parseInt(data.stepProgress));
                              $('#PDFstep4 .numPDFDone').text('(' + data.stepProgress + '%)');
                            }
                            if (data.status == 'complete') {
                              clearInterval(checkDone); // Stop checking
                              addDone($('#PDFstep1, #PDFstep2, #PDFstep3, #PDFstep4'));
                              updateProgress(100, 0);
                              $('#PDFstep4 .numPDFDone').text('(100%)');
                              $('#PDFDonelink').attr('href', data.downloadUrl);
                              $('#pdf-dialog .status-done').show();
                              window.open(data.downloadUrl, '_blank');

                              $('#pdf-dialog .dialog-cancel-button').hide();
                              $('#pdf-dialog .dialog-close-button').show();
                            }
                            else if (data.status == 'cancelled') {
                              clearInterval(checkDone);
                            }
                          },
                          error: function() {
                            $('#pdf-dialog .status-error').show();
                          }
                        });
                      }, 1000); // Check every 1 seconds
                    }
                  });
                }
              });
            }
            function gaSetup() {
              loadScript('https://www.googletagmanager.com/gtag/js?id=G-SDDSB8BN8V', function() {
                gtag('js', new Date());
                gtag('config', 'G-SDDSB8BN8V');
                // Add tracking to the PDF button and Create PDF footer link
                setTimeout(function() {
                  // Must have a delay to wait for js library to load the children.
                  let numChildrenPDF = $('.vp-tree-item--active').length > 0 ? $('.vp-tree-item--active li').length + 1 : $('.vp-desktop-navigation__page-tree__tree li').length + 1;
                  $('button.pdf-button').on('click', function() {
                    gtag("event", "Export PDF", {"which_pdf": "guidePDFbutton","which_button": "page_button","Current URL": window.location.href,"number_pages": numChildrenPDF});
                  });
                  $('.pdf-article').on('click', function() {
                    gtag("event", "Export PDF", {"which_pdf": "pageActionButton","which_button": "page_action","Current URL": window.location.href,"number_pages": numChildrenPDF});
                  });
                }, 1000);
                // Add tracking to talk to sales
                $('#talk-to-sales').on('click', function() {
                  gtag("event", "Contact Sales", {"space_name": viewportList.currentContentSource.name,"which_button": "page_action","Current URL": window.location.href,"value": 0});
                });
                // Add tracking to provide feedback
                $('#provide-feedback').on('click', function() {
                  gtag("event", "Provide Feedback", {"space_name": viewportList.currentContentSource.name,"which_button": "page_action","Current URL": window.location.href,"value": 0});
                });
                // Add tracking to printing page
                $('#print-article').on('click', function() {
                  gtag("event", "Print page", {"space_name": viewportList.currentContentSource.name,"which_button": "page_action","Current URL": window.location.href,"value": 0});
                });
                // Add tracking for external links
                gaExternalLinks();
              });
            }
              
            function gaExternalLinks() {
              // Code from http://www.joehessert.com/seo/google-analytics-external-link-tracking
              var hitCallbackHandler = function(url, win) {
                if (win) { window.open(url, win); } 
                else { window.location.href = url; }
              };
              var addEvent = function(el, eventName, handler) {
                if (el.addEventListener) { el.addEventListener(eventName, handler); } 
                else { el.attachEvent('on' + eventName, function() { handler.call(el); }); }
              };
              if (document.getElementsByTagName) {
                var el = document.getElementsByTagName('a');
                var getDomain = document.domain;

                // Look thru each a element
                for (var i = 0; i < el.length; i++) {
                  // Extract its href attribute
                  var href = (typeof(el[i].getAttribute('href')) == 'string') ? el[i].getAttribute('href') : '';
                  // Query the href for the top level domain (xxxxx.com)
                  var myDomain = href.match(getDomain);
                  // If link is outbound and is not to this domain        
                  if ((href.match(/^(https?:|\/\/)/i) && !myDomain) || href.match(/^mailto\:/i)) {
                    // Add an event to click
                    addEvent(el[i], 'click', function(e) {
                      var url = this.getAttribute('href'),
                          win = (typeof(this.getAttribute('target')) == 'string') ? this.getAttribute('target') : '';
                        if (url.match('store.haivision.com')) { var event_category = "link_store"; }
                        else if (url.match('support.haivision.com')) { var event_category = "link_support"; }
                        else if (url.match('haivision.com')) { var event_category = "link_haivision"; }
                        else { var event_category = "link_external"; }

                      // Log event to Analytics, once done, go to the link
                      // Specify the GA specifics here
                        gtag("event", "External Link", {"which_link": event_category,"External URL": url,"Current URL": window.location.href,"event_callback": hitCallbackHandler(url, win)});
                      e.preventDefault();
                    });
                  }
                }
              }
            }
            function addEventTrackingUserPrefs(eventAction, eventLabel) { // Adds event tracking for User Preferences
              if (getLocalStorageWithExpiry('acceptedCookie')=="true") {
                gtag("event", "User Preferences", {"Action": eventAction,"New Value": eventLabel, "Current URL": window.location.href});
              }
            } 
          });
        });
      });
  });
}

/*

 var script = document.createElement("SCRIPT");
 script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js';
 script.type = 'text/javascript';
 script.onload = function() {


  var script = document.createElement("SCRIPT");
  script.src = 'https://esouthers.github.io/infocenter-viewport/config.js';
  script.type = 'text/javascript';
  script.onload = function() {
 
  var script = document.createElement("SCRIPT");
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-SDDSB8BN8V';
  script.type = 'text/javascript';
  script.onerror = function() { console.log('Firefox error loading?')}
  script.onload = function() {


    var script = document.createElement("SCRIPT");
    script.src = 'https://haivision.jira.com/s/d41d8cd98f00b204e9800998ecf8427e-T/-t2deah/b/11/e73395c53c3b10fde2303f4bf74ffbf6/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs.js?locale=en-US&collectorId=99991144';
    script.type = 'text/javascript';
    script.onload = function() {

     var script = document.createElement("SCRIPT");
     script.src = 'https://cdnjs.cloudflare.com/ajax/libs/aui/9.10.0/aui/aui-prototyping.min.js';
     script.type = 'text/javascript';
     script.onload = function() {

     }
    document.head.appendChild(script); 
   }
   document.head.appendChild(script); 
   }
   document.head.appendChild(script); 
  }
  document.head.appendChild(script); 
 }
 document.head.appendChild(script);
}
*/