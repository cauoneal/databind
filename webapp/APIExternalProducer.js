(function(){var _open = XMLHttpRequest.prototype.open;XMLHttpRequest.prototype.open = function(){_open.apply(this, arguments);var sUrl = arguments[1];if(sUrl && sUrl.indexOf("/apihub_sandbox/") > -1 ) {this.setRequestHeader("APIKey", "OeOyg8hjdXyGzeWQ7ROLdHoxPLZgJAjX");}};}());