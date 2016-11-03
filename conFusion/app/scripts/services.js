'use strict';

angular.module('confusionApp')
        .constant("baseURL","http://localhost:3000/")
      .service('menuFactory', ['$resource', 'baseURL', function($resource,baseURL) {

    
           
    
          this.getDishes = function(){
                                        return $resource(baseURL+"dishes/:id",null,  {'update':{method:'PUT' }});
                                    };
          
                    
         
               
                // implement a function named getPromotion
                // that returns a selected promotion.
                 this.getPromotions = function() {
                  return $resource(baseURL+"promotions/:id",null,  {'update':{method:'PUT' }});
                };
                        
        }])


.service('corporateFactory', ['$resource' ,'baseURL',function($resource, baseURL) {


 this.getLeaders = function () {
    return $resource(baseURL+"leadership/:id",null,  {'update':{method:'PUT' }});
  };

 

}])
.service('feedbackFactory',['$resource','baseURL',function($resource,baseURL){
    this.getFeedbacks=function(){
        return $resource(baseURL+"feedback/:id",null,{
            'add':{method:'POST'}});
    };
    this.submitFeedbacks=function(){
        return $resource(baseURL+"feedback",null,{
            'add':{method:'POST'}});
    };
}])
;
