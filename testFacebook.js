// spec.js
describe('Protractor Test Facebook', function() {

   
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('https://www.facebook.com/');
    
  });

//Test 1
  it('Should have a title', function() {
  
  var firstName = element(by.xpath(".//*[@id='u_0_1']"));
   
   firstName.sendKeys("Tarun");
   });


//Test 2
   it('Title color should be red', function() {
     
      var TitleColor = element(by.xpath(".//*[@id='u_0_e']"));
   expect(TitleColor.getCssValue("color")).toEqual("rgba(255, 255, 255, 1)");
   
     TitleColor.getCssValue('color').then(function(inputValue) {
  
  		console.log(inputValue);
  		
});

     });
    
//Test 3     
     it('Test if a link exists', function() {
     
      var TitleFont = element(by.xpath(".//*[@id='reg_pages_msg']/a"));
	expect(TitleFont.getAttribute('href')).toEqual("https://www.facebook.com/pages/create/?ref_type=registration_form");
	TitleFont.getAttribute('href').then(function(inputValue) {
  
  		console.log(inputValue);
  	
});

     });

  

});