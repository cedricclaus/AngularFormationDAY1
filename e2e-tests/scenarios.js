'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

  browser.get('index.html');

  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/view1");
  });

  describe("View1Ctrl",function(){
    var refs,lines;
    beforeEach(function(){
      browser.get("index.html#/view1");
      refs=element.all(by.repeater('article in articles').column("article.['ISBN-10']"));
      lines=element.all(by.repeater('article in articles'));
      expect(refs.count()).toEqual(0);


    });

    it('should add a book',function(){
      var selected = element(by.model('selectedItem')).all(by.tagName('option')).get(2).click();
      element(by.buttonText("add")).click();
      expect(refs.count()).toEqual(0);
    })

  });

  //describe('view1', function() {
  //
  //  beforeEach(function() {
  //    browser.get('index.html#/view1');
  //  });


  //  it('should render view1 when user navigates to /view1', function() {
  //    expect(element.all(by.css('[ng-view] p')).first().getText()).
  //      toMatch(/partial for view 1/);
  //  });
  //
  //});



});
