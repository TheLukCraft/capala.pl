if (window.Element && !Element.prototype.scrollIntoView) {
    Element.prototype.scrollIntoView = function (alignToTop) {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
      var rect = this.getBoundingClientRect();
      var top = rect.top + scrollTop - document.documentElement.clientTop;
      var left = rect.left + scrollLeft - document.documentElement.clientLeft;
  
      if (typeof alignToTop === 'undefined') {
        alignToTop = true;
      }
  
      if (alignToTop) {
        window.scrollTo(left, top);
      } else {
        var windowHeight = window.innerHeight || document.documentElement.clientHeight;
        var windowWidth = window.innerWidth || document.documentElement.clientWidth;
        window.scrollTo(left - windowWidth / 2, top - windowHeight / 2);
      }
    };
  }
  