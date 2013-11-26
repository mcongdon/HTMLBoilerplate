// Ensure app namespace
var NewProject = NewProject || {};

(function ($) {

NewProject.Main = {
    
    vars:{},

    init: function () {
		NewProject.Components.init();
	}
};

NewProject.Components = {
	
    vars:{},
    	
	init: function () {
		var o = NewProject.Components,  
            v = o.vars;	
		
    }
    
}; 


$(NewProject.Main.init);

})(jQuery);
