(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-header></app-header>\n<router-outlet></router-outlet>\n<!-- <app-footer></app-footer> -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/addfamily/addfamily.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/addfamily/addfamily.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"main-wrapper mt-4\">\n        <div class=\"container\">\n            <div class=\"row\">\n<div class=\"col-md-6 offset-md-3  col-12 text-center\">\n    <div class=\"row\">\n        <div class=\"col-md-12 pb-3\">\n    <h1 class=\"app-title\"><i class=\"fas fa-plus mr-2\"></i>ADD FAMILY MEMBERS</h1>\n    <span class=\"border-devider\"></span>\n</div>\n</div>\n<div class=\"row\">\n\n<div class=\"col-md-12\">\n\n    <div class=\"form-group\">\n    <select  class=\"form-control border-0   shadow-sm bg-light\">\n<option selected>Relationship </option>\n<option>Relationship </option>\n\n        </select>\n    </div>\n</div>\n<div class=\"col-md-12\">\n\n    <div class=\"form-group\">\n    <select  class=\"form-control border-0   shadow-sm bg-light\">\n<option selected>Salutation </option>\n<option>Salutation </option>\n\n        </select>\n</div>\n</div>\n<div class=\"col-md-12\">\n    <div class=\"form-group\">\n        <input type=\"text\" placeholder=\"First Name\" class=\"form-control border-0   shadow-sm bg-light\"/>\n</div>\n</div>\n<div class=\"col-md-12\">\n    <div class=\"form-group\">\n        <input type=\"text\" placeholder=\"Last Name\" class=\"form-control border-0   shadow-sm bg-light\"/>\n</div>\n</div>\n<div class=\"col-md-12\">\n\n    <div class=\"form-group\">\n    <select  class=\"form-control border-0   shadow-sm bg-light\">\n<option selected>Select Gender</option>\n<option>Male</option>\n<option>Female</option>\n<option>Other</option>\n        </select>\n</div>\n</div>\n\n\n\n<div class=\"col-md-12\">\n\n    <div class=\"form-group\">\n    <select  class=\"form-control border-0   shadow-sm bg-light\">\n<option selected>Age Group </option>\n<option>Age Group </option>\n\n        </select>\n</div>\n</div>\n<div class=\"col-md-12\">\n\n    <div class=\"form-group\">\n    <select  class=\"form-control border-0   shadow-sm bg-light\">\n<option selected>Clinician </option>\n<option>Age Group </option>\n\n        </select>\n</div>\n</div>\n\n\n<div class=\"col-md-12\">\n\n    <div class=\"form-group text-left\">\n<p class=\"text-center\">\n\n    Do you want us to send them an SMS with\na link so that they can make their own\nappointments\n</p>\n<span class=\"app-radio mr-4\"><input type=\"radio\" name=\"option\" class=\"l border-0 shadow-sm bg-light mr-2\"  />YES</span>\n<span class=\"app-radio\"><input type=\"radio\" name=\"option\" class=\"l border-0 shadow-sm bg-light mr-2\"  />NO</span>\n</div>\n</div>\n<div class=\"col-md-12\">\n\n    <div class=\"row no-gutters mb-4\">\n\n        <div class=\"col-md-3 col-3 pr-2\">\n            <input type=\"text\" class=\"form-control border-0 shadow-sm bg-light\" placeholder=\"+91\"  />\n        </div>\n        <div class=\"col-md-9 col-9 text-center\">\n            <input type=\"text\" class=\"form-control border-0 shadow-sm bg-light\" placeholder=\"Mobile Number\"  /> \n        </div>\n    </div>  \n</div>\n</div>\n\n\n<div class=\"row\">\n   <div class=\"col-md-12 mb-3\">\n   <a [routerLink]=\"['/familylist']\" class=\"btn btn-lg br-3 w-100 btn-success text-white\">Submit</a>\n</div>\n</div>\n\n    </div>\n    </div>\n    </div>\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/appointment/appointment.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/appointment/appointment.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"main-wrapper mt-4\">\n        <div class=\"container\">\n            <div class=\"row\">\n<div class=\"col-md-6 offset-md-3  col-12 text-center\">\n    <div class=\"row\">\n        <div class=\"col-md-12 pb-3\">\n    <h1 class=\"app-title\"><i class=\"far fa-calendar-check mr-2\"></i> First Appointment</h1>\n    <span class=\"border-devider\"></span>\n</div>\n</div>\n<div class=\"row\">\n\n<div class=\"col-md-12\">\n\n    <div class=\"form-group\">\n    <select  class=\"form-control border-0   shadow-sm bg-light\">\n<option selected>Select Category</option>\n<option>Teenager Issue (13-19)</option>\n\n        </select>\n    </div>\n</div>\n<div class=\"col-md-12\">\n\n    <div class=\"form-group\">\n    <select  class=\"form-control border-0   shadow-sm bg-light\">\n<option selected>Select Gender</option>\n<option>Male</option>\n<option>Female</option>\n<option>Other</option>\n        </select>\n</div>\n</div>\n\n<div class=\"col-md-12\">\n\n    <div class=\"form-group\">\n    <select  class=\"form-control border-0   shadow-sm bg-light\">\n<option selected>Select Concern</option>\n<option>Depression</option>\n\n        </select>\n</div>\n</div>\n\n<div class=\"col-md-12\">\n\n    <div class=\"form-group\">\n    <select  class=\"form-control border-0   shadow-sm bg-light\">\n<option selected>Select Session Type (Face to Face / Video)</option>\n<option>Choose Category</option>\n<option>Choose Category</option>\n        </select>\n</div>\n</div>\n\n</div>\n<div class=\"row\">\n   <div class=\"col-md-6 col-6 text-left\"><b>2020</b></div>\n   <div class=\"col-md-6 col-6 text-right\"><span class=\"week-action\">Next 7 days</span></div>\n</div>\n\n\n    <div class=\"row text-left first-appointment-d \">\n      \n        <div class=\"col-md-12 p-0 col-lg-12 text-right\">\n           <div id=\"tracking-pre\"></div>\n           <div id=\"tracking\">\n\n              <div class=\"tracking-list\">\n                 <div class=\"tracking-item\">\n                    <div class=\"tracking-icon status-intransit\">\n                      <i class=\"fas fa-circle\"></i> \n                    </div>\n                    <div class=\"tracking-date text-dark\"><span>Fri, 02 Jun </span></div>\n                    <div class=\"tracking-content\">\n                       <div class=\"col-md-12 p-1\">\n                        <span class=\"time-slot mr-1 mb-1\">09:00 AM</span>\n                        <span class=\"time-slot mr-1 mb-1\">09:00 AM</span>\n                        <span class=\"time-slot mr-1 mb-1\">09:00 AM</span>\n                        <span class=\"time-slot\">09:00 AM</span>\n                        <span class=\"time-slot mr-1 mb-1\">09:00 AM</span>\n                        <span class=\"time-slot mr-1 mb-1\">09:00 AM</span>\n                        <span class=\"time-slot mr-1 mb-1\">09:00 AM</span>\n                        <span class=\"time-slot\">09:00 AM</span>\n                       </div>\n                    </div>\n                 </div>\n                 <div class=\"tracking-item\">\n                  <div class=\"tracking-icon status-intransit\">\n                    <i class=\"fas fa-circle\"></i> \n                  </div>\n                  <div class=\"tracking-date text-dark\"><span>Sat, 03 Jun </span></div>\n                  <div class=\"tracking-content\">\n                     <div class=\"col-md-12 p-1\">\n                      <span class=\"time-slot mr-1 mb-1\">09:00 AM</span>\n                      <span class=\"time-slot mr-1 mb-1\">09:00 AM</span>\n                      <span class=\"time-slot mr-1 mb-1\">09:00 AM</span>\n                      <span class=\"time-slot\">09:00 AM</span>\n                      <span class=\"time-slot mr-1 mb-1\">09:00 AM</span>\n                      <span class=\"time-slot mr-1 mb-1\">09:00 AM</span>\n                      <span class=\"time-slot mr-1 mb-1\">09:00 AM</span>\n                      <span class=\"time-slot\">09:00 AM</span>\n                     </div>\n                  </div>\n               </div>\n               <div class=\"tracking-item\">\n                  <div class=\"tracking-icon status-intransit\">\n                    <i class=\"fas fa-circle\"></i> \n                  </div>\n                  <div class=\"tracking-date text-danger\"><span>Sun, 04 Jun </span></div>\n                  <div class=\"tracking-content\">\n                     <div class=\"col-md-12 p-1\">\n                      <span class=\"time-slot mr-1 mb-1\">09:00 AM</span>\n                      <span class=\"time-slot mr-1 mb-1\">09:00 AM</span>\n                      <span class=\"time-slot mr-1 mb-1\">09:00 AM</span>\n                      <span class=\"time-slot\">09:00 AM</span>\n                      <span class=\"time-slot mr-1 mb-1\">09:00 AM</span>\n                      <span class=\"time-slot mr-1 mb-1\">09:00 AM</span>\n                      <span class=\"time-slot mr-1 mb-1\">09:00 AM</span>\n                      <span class=\"time-slot\">09:00 AM</span>\n                     </div>\n                  </div>\n               </div>\n               <div class=\"tracking-item\">\n                  <div class=\"tracking-icon status-intransit\">\n                    <i class=\"fas fa-circle\"></i> \n                  </div>\n                  <div class=\"tracking-date text-dark\"><span>Mon, 05Jun </span></div>\n                  <div class=\"tracking-content\">\n                     <div class=\"col-md-12 p-1\">\n                      <span class=\"time-slot mr-1 mb-1\">09:00 AM</span>\n                      <span class=\"time-slot mr-1 mb-1\">09:00 AM</span>\n                      <span class=\"time-slot mr-1 mb-1\">09:00 AM</span>\n                      <span class=\"time-slot\">09:00 AM</span>\n                      <span class=\"time-slot mr-1 mb-1\">09:00 AM</span>\n                      <span class=\"time-slot mr-1 mb-1\">09:00 AM</span>\n                      <span class=\"time-slot mr-1 mb-1\">09:00 AM</span>\n                      <span class=\"time-slot\">09:00 AM</span>\n                     </div>\n                  </div>\n               </div>\n           </div>\n        </div>\n     </div>\n\n\n</div>\n<div class=\"row\">\n   <div class=\"col-md-12 mb-5\">\n   <a [routerLink]=\"['/appointmentstep']\" class=\"btn btn-lg br-3 w-100 btn-success text-white\">Continue</a>\n</div>\n</div>\n\n    </div>\n    </div>\n    </div>\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/appointmentstep/appointmentstep.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/appointmentstep/appointmentstep.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"main-wrapper mt-4\">\n        <div class=\"container\">\n            <div class=\"row\">\n<div class=\"col-md-6 offset-md-3  col-12 text-center\">\n    <div class=\"row\">\n        <div class=\"col-md-12 pb-3\">\n    <h1 class=\"app-title\"><i class=\"far fa-calendar-check mr-2\"></i> CANCELLATION POLICY</h1>\n    <span class=\"border-devider\"></span>\n\n</div>\n</div>\n\n<div class=\"row\">\n<div class=\"col-md-12 text-left\">\n<p>You are requested to cancel or postpone the\n    session in advance so the slot will be made\n    available to others in need</p>\n</div>\n</div>\n<div class=\"row mb-3\">\n<div class=\"col-md-6 col-6 text-left\">\n\n    Before 48 Hours <br>\nBefore 24 Hours <br>\nWithin 24 Hours <br>\nWithin 8 Hours <br>\n</div>\n<div class=\"col-md-6 col-6 text-left\">\n\n  : No Charges<br>\n: 25% of the Fee<br>\n: 50% of the Fee<br>\n: No Refund<br>\n</div>\n<div class=\"col-md-12 mt-2 text-left\">\n<p><input type=\"checkbox\" class=\"mr-1\">I Accept</p>\n\n</div>\n</div>\n<div class=\"row mb-3\">\n    <div class=\"col-md-12 pb-1\">\n<h1 class=\"app-title text-danger\"><i class=\"far fa-calendar-check mr-2\"></i> DATA PROTECTION</h1>\n<span class=\"border-devider bg-danger mb-3\"></span>\n<p><b >\n    Your information is protected under Personal\n    Data Protection Act, Singapore</b></p>\n</div>\n\n</div>\n\n<div class=\"row\">\n    <div class=\"col-md-12 pb-3\">\n<h1 class=\"app-title\"><i class=\"far fa-calendar-check mr-2\"></i> YOUR APPOINTMENT</h1>\n<span class=\"border-devider\"></span>\n\n</div>\n</div>\n\n<div class=\"row mb-3\">\n    <div class=\"col-md-4 col-4 text-left\">\n    \n        Category <br>\n        Gender <br>\n        Concern <br>\n        Date <br>\n    </div>\n    <div class=\"col-md-8 col-8 text-left\">\n    \n      : Teenager Issue (13-19)<br>\n    : Male<br>\n    : Sun, 03 Jun<br>\n    : 07:30 PM<br>\n    </div>\n    <div class=\"col-md-12 mt-2 text-left\">\n    <input type=\"checkbox\" class=\"mr-1\">I Accept\n    \n    </div>\n    </div>\n<div class=\"row\">\n\n<div class=\"col-md-12\">\n\n    <div class=\"form-group\">\n    <input type=\"text\" class=\"form-control border-0 shadow-sm bg-light\" placeholder=\"First Name\"  />\n\n</div>\n<div class=\"form-group\">\n    <input type=\"text\" class=\"form-control border-0 shadow-sm bg-light\" placeholder=\"Last Name\"  />\n\n</div>\n</div>\n\n</div>\n<div class=\"row no-gutters mb-4\">\n\n    <div class=\"col-md-3 col-3 pr-2\">\n        <input type=\"text\" class=\"form-control border-0 shadow-sm bg-light\" placeholder=\"+91\"  />\n    </div>\n    <div class=\"col-md-9 col-9 text-center\">\n        <input type=\"text\" class=\"form-control border-0 shadow-sm bg-light\" placeholder=\"Mobile Number\"  /> \n    </div>\n</div>\n<div class=\"row\">\n\n    <div class=\"col-md-12 mb-5\">\n        <a [routerLink]=\"['/profile']\"  class=\"btn btn-lg br-3 w-100 btn-success text-white\">Add Appointment</a>\n              </div>\n\n</div>\n\n\n\n    </div>\n    </div>\n    </div>\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/clientinvoice/clientinvoice.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/clientinvoice/clientinvoice.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"main-wrapper mb-5 mt-4\">\n        <div class=\"container\">\n            <div class=\"row\">\n<div class=\"col-md-6 offset-md-3  col-12 text-center\">\n    <div class=\"row\">\n        <div class=\"col-md-12 pb-3\">\n    <h1 class=\"app-title\"><i class=\"fas fa-plus mr-2\"></i>CREATE INVOICE\n    </h1>\n    <span class=\"border-devider\"></span>\n</div>\n</div>\n<div class=\"row\">\n\n<div class=\"col-md-12\">\n\n    <div class=\"form-group\">\n    <select  class=\"form-control border-0   shadow-sm bg-light\">\n<option selected>Select Client </option>\n<option>Relationship </option>\n\n        </select>\n    </div>\n</div>\n\n<div class=\"col-md-12\">\n    <div class=\"form-group\">\n        <input type=\"text\" placeholder=\"First Name\" class=\"form-control border-0   shadow-sm bg-light\"/>\n</div>\n</div>\n<div class=\"col-md-12\">\n    <div class=\"form-group\">\n        <input type=\"text\" placeholder=\"Last Name\" class=\"form-control border-0   shadow-sm bg-light\"/>\n</div>\n</div>\n<div class=\"col-md-12\">\n    <div class=\"form-group\">\n        <input type=\"email\" placeholder=\"Email\" class=\"form-control border-0   shadow-sm bg-light\"/>\n</div>\n</div>\n<div class=\"col-md-12\">\n\n    <div class=\"row no-gutters mb-4\">\n\n        <div class=\"col-md-3 col-3 pr-2\">\n            <input type=\"text\" class=\"form-control border-0 shadow-sm bg-light\" placeholder=\"+91\"  />\n        </div>\n        <div class=\"col-md-9 col-9 text-center\">\n            <input type=\"text\" class=\"form-control border-0 shadow-sm bg-light\" placeholder=\"Mobile Number\"  /> \n        </div>\n    </div>  \n</div>\n<div class=\"col-md-12\">\n\n    <div class=\"form-group\">\n    <select  class=\"form-control border-0   shadow-sm bg-light\">\n<option selected>Category </option>\n<option>Salutation </option>\n\n        </select>\n</div>\n</div>\n<div class=\"col-md-12\">\n    <div class=\"form-group\">\n        <input type=\"text\" placeholder=\"Concern\" class=\"form-control border-0   shadow-sm bg-light\"/>\n</div>\n</div>\n\n\n\n<div class=\"col-md-12\">\n\n    <div class=\"form-group\">\n    <select  class=\"form-control border-0   shadow-sm bg-light\">\n<option selected>Duration </option>\n<option>1 Hour </option>\n\n        </select>\n</div>\n</div>\n<div class=\"col-md-12\">\n\n    <div class=\"form-group\">\n    <select  class=\"form-control border-0   shadow-sm bg-light\">\n<option selected>Facility </option>\n<option>Facility 1 </option>\n\n        </select>\n</div>\n</div>\n</div>\n\n\n<div class=\"row\">\n   <div class=\"col-md-12 mb-3\">\n   <a [routerLink]=\"['/familylist']\" class=\"btn btn-lg br-3 w-100 btn-success text-white\">Submit</a>\n</div>\n</div>\n\n    </div>\n    </div>\n    </div>\n    </div>\n    <app-appfooter></app-appfooter>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/clientnotes/clientnotes.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/clientnotes/clientnotes.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"col-md-6 offset-md-3  col-12\">\n<div class=\"row\">\n\n<div class=\"col-md-12 bg-yellow-d py-2\">\n\n<div class=\"row no-gutters\">\n    <div class=\"col-md-2 col-2\">\n        <img class=\"client-image\" src=\"http://emilcarlsson.se/assets/mikeross.png\" alt=\"\" />\n    </div>\n    <div class=\"col-md-10 col-10 text-white text-left pt-2\">\n        Joh Don\n        </div>\n</div>\n\n</div>\n</div>\n\n\n<div class=\"row my-3\">\n\n    <div class=\"col-md-12\">\n        <div class=\"card text-left\">\n                    <div class=\"card-body\">\n              <h5 class=\"card-title\">Special title treatment</h5>\n              <p class=\"card-text\">This is a sample note text for development\n                purposes only. This is a sample note text\n                for development purposes only.\n                This is a sample note text for development\n                purposes only.\n                This is a sample note text for development .</p>\n            \n            </div>\n            <div class=\"card-footer text-muted text-right\">\n                Thu, 2 Jun 2020, 09:00 AM\n            </div>\n          </div>\n\n    </div>\n</div>\n<div class=\"row my-3\">\n\n    <div class=\"col-md-12\">\n        <div class=\"card text-left border-0\">\n             <div class=\"card-body border-0 p-0\">\n              <textarea class=\"form-control notes-c\" placeholder=\"Type Notes..\"></textarea>\n            <span class=\"attachment d-block text-right pt-2\"><i class=\"fa fa-paperclip mr-1\" aria-hidden=\"true\"></i> Attach File</span>\n            </div>\n         \n          </div>\n\n    </div>\n</div>\n    </div>\n\n    <app-appfooter></app-appfooter>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/counsellor-client/counsellor-client.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/counsellor-client/counsellor-client.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n    <div class=\"col-md-6 offset-md-3  col-12 text-center\">\n      \n        <div class=\"row no-gutters pt-3\">\n            <div class=\"col-md-4 col-4 pr-0\">\n                <img src=\"./assets/images/sam.jpg\" alt=\"...\" class=\"rounded-circle w-100 mb-2\">\n               <h6 class=\"mb-1\"><b>Client</b></h6>\n               <p>CL-2006-039</p>\n               \n\n            </div>\n            <div class=\"col-md-8 col-8 text-left pt-1 fs-14\">\n              <div class=\"row text-center no-gutters\">\n                  <div class=\"col-md-4 col-4 mb-2 px-3 line-height-sm\">\n                      <a href=\"#\" class=\"text-dark text-decoration-none\">\n                      <div class=\"mb-1\">\n                      <a href=\"#\" class=\"app-icon btn btn-outline-success \"><i class=\"fas fa-home\"></i></a>\n                  </div>\n                      <small>Home</small>\n                  </a>\n                      </div>\n                      <div class=\"col-md-4 mb-2 col-4 line-height-sm \">\n                          <a href=\"#\" class=\"text-dark text-decoration-none\">\n                          <div class=\"mb-1\">\n                            <a [routerLink]=\"['/counsellorclientprofile']\"  class=\"app-icon btn btn-outline-success \"><i class=\"fas fa-user-tie\"></i></a>\n                      </div>\n                         <small>Profile</small> \n                         </a>\n                          </div>\n                          <div class=\"col-md-4 col-4 mb-2  px-3 line-height-sm\">\n                              <a href=\"#\" class=\"text-dark text-decoration-none\">\n                              <div class=\"mb-1\">\n                                <a [routerLink]=\"['/counsellorclientmessage']\"class=\"app-icon btn btn-outline-success \"><i class=\"fas fa-comment-dots\"></i></a>\n                          </div>\n                            <small>Message </small> \n                                 </a> \n                          </div>\n                              <div class=\"col-md-4 col-4 px-3 mb-2 line-height-sm\">\n                                  <a  [routerLink]=\"['/familylist']\"  class=\"text-dark text-decoration-none\">\n                                  <div class=\"mb-1\">\n                                    <a href=\"#\"  class=\"app-icon btn btn-outline-success \"><i class=\"far fa-address-card\"></i></a>\n                              </div>\n                                <small>Contact</small>  \n                                  </a>\n                                  </div>\n                                  <div class=\"col-md-4 col-4 px-3 mb-2 line-height-sm\">\n                                      <a  [routerLink]=\"['/familylist']\"  class=\"text-dark text-decoration-none\">\n                                      <div class=\"mb-1\">\n                                        <a href=\"#\"  class=\"app-icon btn btn-outline-success \"><i class=\"fas fa-dumbbell\"></i></a>\n                                  </div>\n                                    <small>Gym</small>  \n                                      </a>\n                                      </div>\n                                      <div class=\"col-md-4 col-4 px-3 mb-2 line-height-sm\">\n                                          <a  [routerLink]=\"['/ClientnotesComponent']\"  class=\"text-dark text-decoration-none\">\n                                          <div class=\"mb-1\">\n                                            <a href=\"#\"  class=\"app-icon btn btn-outline-success \"><i class=\"far fa-file-alt\"></i></a>\n                                      </div>\n                                        <small>Notes</small>  \n                                          </a>\n                                          </div>\n                                          <div class=\"col-md-4 col-4 px-3 line-height-sm\">\n                                              <a [routerLink]=\"['/ClientinvoiceComponent']\"   class=\"text-dark text-decoration-none\">\n                                              <div class=\"mb-1\">\n                                                <a href=\"#\"  class=\"app-icon btn btn-outline-success \"><i class=\"fas fa-file-invoice\"></i></a>\n                                          </div>\n                                            <small>Invoice</small>  \n                                              </a>\n                                              </div>\n                                              <div class=\"col-md-4 col-4 px-3line-height-sm\">\n                                                  <a  [routerLink]=\"['/familylist']\"  class=\"text-dark text-decoration-none\">\n                                                  <div class=\"mb-1\">\n                                                    <a href=\"#\" class=\"app-icon btn btn-outline-success \"><i class=\"fas fa-comment-dots\"></i></a>\n                                              </div>\n                                                <small>Reset</small>  \n                                                  </a>\n                                                  </div>\n                                                  <div class=\"col-md-4 col-4 px-3  line-height-sm\">\n                                                      <a  [routerLink]=\"['/familylist']\"  class=\"text-dark text-decoration-none\">\n                                                      <div class=\"mb-1\">\n                                                        <a href=\"#\" class=\"app-icon btn btn-success \"><i class=\"fas fa-plus\"></i></a>\n                                                  </div>\n                                                    <small>Session</small>  \n                                                      </a>\n                                                      </div>\n                      </div>\n            </div>\n            </div>\n\n                <hr>\n                <div class=\"row\">\n                    <div class=\"col-md-6 col-6 text-left pl-4\"><b>2020</b></div>\n                    \n                 </div>\n                <div class=\"row text-left\">\n      \n                  <div class=\"col-md-10 col-10 p-0 col-lg-10 text-left\">\n                     <div id=\"tracking-pre\"></div>\n                     <div id=\"tracking\">\n          \n                        <div class=\"tracking-list\">\n                           <div class=\"tracking-item pb-5\">\n                              <div class=\"tracking-icon status-intransit\">\n                                <i class=\"fas fa-circle text-primary\"></i> \n                              </div>\n                              <div class=\"tracking-date text-dark text-left\">\n                                <span class=\"d-block text-primary\">Fri, 02 Jun </span>\n                                <span class=\"d-block\">  03:00 PM</span>\n                                <span class=\"d-block\">   Room – 1</span>\n                                <span class=\"d-block\"> Mountbatten</span>\n                               \n\n                                <span class=\"d-block text-primary\">Sam Roberts </span>\n                               <div class=\"actions\">  \n                                 <span class=\"text-primary mr-2\"><i class=\"fas fa-video\"></i></span>\n                                 <span class=\"text-danger\"><i class=\"fas fa-box-open\"></i></span>\n                                 <span class=\"text-danger\"><i class=\"fas fa-box-open\"></i></span>\n                                 <span class=\"text-danger\"><i class=\"fas fa-box-open\"></i></span>\n                              </div>\n                         \n                              </div>\n\n                              <div class=\"tracking-content\">\n                                 <div class=\"col-md-12 pl-3\">\n                                  <span class=\"d-block font-weight-bold\"> John Tan</span>\n                                  <span class=\"d-block\"> Couple Session</span>\n                                  <span class=\"d-block text-primary\">Pending </span>\n                                  <span class=\"d-block\">$ 120.00 <span class=\"text-danger\">(3/8)</span></span>\n                              \n                                 </div>\n                              </div>\n                           </div>\n            \n                           <div class=\"tracking-item\">\n                            <div class=\"tracking-icon status-intransit\">\n                              <i class=\"fas fa-circle text-success\"></i> \n                            </div>\n                            <div class=\"tracking-date text-dark text-left\">\n                              <span class=\"d-block text-danger\">Sat, 03 Jun </span>\n                              <span class=\"d-block\">  03:00 PM</span>\n                              <span class=\"d-block text-primary\">Sam Roberts </span>\n                    \n                       \n                            </div>\n                            <div class=\"tracking-content\">\n                               <div class=\"col-md-12 pl-3\">\n                                <span class=\"d-block font-weight-bold\"> John Tan</span>\n                                <span class=\"d-block\"> Couple Session</span>\n                                <span class=\"d-block text-success\">Confirmed </span>\n                               \n                            \n                               </div>\n                            </div>\n                         </div>\n               <div class=\"tracking-item\">\n                            <div class=\"tracking-icon status-intransit\">\n                              <i class=\"fas fa-circle text-danger\"></i> \n                            </div>\n                            <div class=\"tracking-date text-dark text-left\">\n                              <span class=\"d-block text-danger\">Sun, 04 Jun </span>\n                              <span class=\"d-block\">  03:00 PM</span>\n                              <span class=\"d-block text-primary\">Sam Roberts </span>\n                    \n                       \n                            </div>\n                            <div class=\"tracking-content\">\n                               <div class=\"col-md-12 pl-3\">\n                                <span class=\"d-block font-weight-bold\"> John Tan</span>\n                                <span class=\"d-block\"> Couple Session</span>\n                                <span class=\"d-block text-danger\">Cancelled </span>\n                               \n                            \n                               </div>\n                            </div>\n                         </div>\n                         <div class=\"tracking-item\">\n                          <div class=\"tracking-icon status-intransit\">\n                            <i class=\"fas fa-circle text-warning\"></i> \n                          </div>\n                          <div class=\"tracking-date text-dark text-left\">\n                            <span class=\"d-block text-primary\">Mon, 05 Jun </span>\n                            <span class=\"d-block\">  03:00 PM</span>\n                            <span class=\"d-block text-primary\">Sam Roberts </span>\n                    \n                     \n                          </div>\n\n                          <div class=\"tracking-content\">\n                             <div class=\"col-md-12 pl-3\">\n                              <span class=\"d-block font-weight-bold\"> John Tan</span>\n                              <span class=\"d-block\"> Couple Session</span>\n                              <span class=\"d-block text-warning\">Completed </span>\n                           \n                          \n                             </div>\n                          </div>\n                       </div>\n                     </div>\n                  </div>\n               </div>\n          <div class=\"col-md-2 col-2\">\n            <div class=\"actions\">  \n              <span class=\"text-primary  d-block mb-2\"><a href=\"#\"><i class=\"fas fa-exchange-alt\"></i></a></span>\n              <span class=\"text-danger  d-block mb-2 \"><a href=\"#\" class=\"text-dark\"><i class=\"far fa-credit-card\"></i></a></span>\n              <span class=\"text-danger  d-block mb-2 \"><a href=\"#\" class=\"text-dark\"><i class=\"far fa-comment-alt\"></i></a></span>\n              <span class=\"text-danger  d-block mb-2 \"><a href=\"#\" class=\"text-dark\"><i class=\"far fa-edit\"></i></a></span>\n           </div> \n          </div>\n          \n          </div>\n            </div>\n\n<app-appfooter></app-appfooter>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/counsellorclientmessage/counsellorclientmessage.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/counsellorclientmessage/counsellorclientmessage.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"col-md-6 offset-md-3  col-12\">\n<div id=\"frame\">\n\t<div class=\"content\">\n\t\t<div class=\"contact-profile\">\n\t\t\t<img src=\"http://emilcarlsson.se/assets/harveyspecter.png\" alt=\"\" />\n\t\t\t<p class=\"text-white\">Harvey Specter</p>\n\t\t\t<div class=\"social-media\">\n\t\t\t\t<i class=\"fa fa-facebook\" aria-hidden=\"true\"></i>\n\t\t\t\t<i class=\"fa fa-twitter\" aria-hidden=\"true\"></i>\n\t\t\t\t <i class=\"fa fa-instagram\" aria-hidden=\"true\"></i>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"messages w-100\">\n\t\t\t<ul>\n\t\t\t\t<li class=\"sent\">\n\t\t\t\t\t<img src=\"http://emilcarlsson.se/assets/mikeross.png\" alt=\"\" />\n\t\t\t\t\t<p>How the hell am I supposed to get a jury to believe you when I am not even sure that I do?!</p>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"replies\">\n\t\t\t\t\t<img src=\"http://emilcarlsson.se/assets/harveyspecter.png\" alt=\"\" />\n\t\t\t\t\t<p>When you're backed against the wall, break the god damn thing down.</p>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"replies\">\n\t\t\t\t\t<img src=\"http://emilcarlsson.se/assets/harveyspecter.png\" alt=\"\" />\n\t\t\t\t\t<p>Excuses don't win championships.</p>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"sent\">\n\t\t\t\t\t<img src=\"http://emilcarlsson.se/assets/mikeross.png\" alt=\"\" />\n\t\t\t\t\t<p>Oh yeah, did Michael Jordan tell you that?</p>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"replies\">\n\t\t\t\t\t<img src=\"http://emilcarlsson.se/assets/harveyspecter.png\" alt=\"\" />\n\t\t\t\t\t<p>No, I told him that.</p>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"replies\">\n\t\t\t\t\t<img src=\"http://emilcarlsson.se/assets/harveyspecter.png\" alt=\"\" />\n\t\t\t\t\t<p>What are your choices when someone puts a gun to your head?</p>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"sent\">\n\t\t\t\t\t<img src=\"http://emilcarlsson.se/assets/mikeross.png\" alt=\"\" />\n\t\t\t\t\t<p>What are you talking about? You do what they say or they shoot you.</p>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"replies\">\n\t\t\t\t\t<img src=\"http://emilcarlsson.se/assets/harveyspecter.png\" alt=\"\" />\n\t\t\t\t\t<p>Wrong. You take the gun, or you pull out a bigger one. Or, you call their bluff. Or, you do any one of a hundred and forty six other things.</p>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<div class=\"message-input\">\n\t\t\t<div class=\"wrap\">\n\t\t\t<input type=\"text\" placeholder=\"Write your message...\" />\n\t\t\t<i class=\"fa fa-paperclip attachment\" aria-hidden=\"true\"></i>\n\t\t\t<button class=\"submit\"><i class=\"fa fa-paper-plane\" aria-hidden=\"true\"></i></button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/counsellorclientprofile/counsellorclientprofile.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/counsellorclientprofile/counsellorclientprofile.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n    <div class=\"col-md-6 offset-md-3  col-12 text-center\">\n      \n        <div class=\"row no-gutters pt-3\">\n            <div class=\"col-md-4 col-4 pr-0\">\n                <img src=\"./assets/images/sam.jpg\" alt=\"...\" class=\"rounded-circle w-100 mb-2\">\n               <h6 class=\"mb-1\"><b>Client</b></h6>\n               <p>CL-2006-039</p>\n               \n\n            </div>\n            <div class=\"col-md-8 col-8 text-left pt-1 fs-14\">\n              <div class=\"row text-center no-gutters\">\n                  <div class=\"col-md-4 col-4 mb-2 px-3 line-height-sm\">\n                      <a href=\"#\" class=\"text-dark text-decoration-none\">\n                      <div class=\"mb-1\">\n                      <a href=\"#\" class=\"app-icon btn btn-outline-success \"><i class=\"fas fa-home\"></i></a>\n                  </div>\n                      <small>Home</small>\n                  </a>\n                      </div>\n                      <div class=\"col-md-4 mb-2 col-4 line-height-sm \">\n                          <a href=\"#\" class=\"text-dark text-decoration-none\">\n                          <div class=\"mb-1\">\n                            <a [routerLink]=\"['/counsellorclientprofile']\"   class=\"app-icon btn btn-outline-success \"><i class=\"fas fa-user-tie\"></i></a>\n                      </div>\n                         <small>Profile</small> \n                         </a>\n                          </div>\n                          <div class=\"col-md-4 col-4 mb-2  px-3 line-height-sm\">\n                            \n                              <div class=\"mb-1\">\n                                <a  [routerLink]=\"['/counsellorclientmessage']\"  class=\"app-icon btn btn-outline-success \"><i class=\"fas fa-comment-dots\"></i></a>\n                          </div>\n                            <small>Message </small> \n                               \n                          </div>\n                              <div class=\"col-md-4 col-4 px-3 mb-2 line-height-sm\">\n                                  <a  [routerLink]=\"['/familylist']\"  class=\"text-dark text-decoration-none\">\n                                  <div class=\"mb-1\">\n                                    <a href=\"#\"  class=\"app-icon btn btn-outline-success \"><i class=\"far fa-address-card\"></i></a>\n                              </div>\n                                <small>Contact</small>  \n                                  </a>\n                                  </div>\n                                  <div class=\"col-md-4 col-4 px-3 mb-2 line-height-sm\">\n                                      <a  [routerLink]=\"['/familylist']\"  class=\"text-dark text-decoration-none\">\n                                      <div class=\"mb-1\">\n                                        <a href=\"#\"  class=\"app-icon btn btn-outline-success \"><i class=\"fas fa-dumbbell\"></i></a>\n                                  </div>\n                                    <small>Gym</small>  \n                                      </a>\n                                      </div>\n                                      <div class=\"col-md-4 col-4 px-3 mb-2 line-height-sm\">\n                                          <a  [routerLink]=\"['/ClientnotesComponent']\"  class=\"text-dark text-decoration-none\">\n                                          <div class=\"mb-1\">\n                                            <a [routerLink]=\"['/ClientnotesComponent']\"   class=\"app-icon btn btn-outline-success \"><i class=\"far fa-file-alt\"></i></a>\n                                      </div>\n                                        <small>Notes</small>  \n                                          </a>\n                                          </div>\n                                          <div class=\"col-md-4 col-4 px-3 line-height-sm\">\n                                              <a  [routerLink]=\"['/ClientinvoiceComponent']\"   class=\"text-dark text-decoration-none\">\n                                              <div class=\"mb-1\">\n                                                <a href=\"#\"  class=\"app-icon btn btn-outline-success \"><i class=\"fas fa-file-invoice\"></i></a>\n                                          </div>\n                                            <small>Invoice</small>  \n                                              </a>\n                                              </div>\n                                              <div class=\"col-md-4 col-4 px-3line-height-sm\">\n                                                  <a  [routerLink]=\"['/familylist']\"  class=\"text-dark text-decoration-none\">\n                                                  <div class=\"mb-1\">\n                                                    <a href=\"#\" class=\"app-icon btn btn-outline-success \"><i class=\"fas fa-comment-dots\"></i></a>\n                                              </div>\n                                                <small>Reset</small>  \n                                                  </a>\n                                                  </div>\n                                                  <div class=\"col-md-4 col-4 px-3  line-height-sm\">\n                                                      <a  [routerLink]=\"['/familylist']\"  class=\"text-dark text-decoration-none\">\n                                                      <div class=\"mb-1\">\n                                                        <a href=\"#\" class=\"app-icon btn btn-success \"><i class=\"fas fa-plus\"></i></a>\n                                                  </div>\n                                                    <small>Session</small>  \n                                                      </a>\n                                                      </div>\n                      </div>\n            </div>\n            </div>\n\n                <hr>\n           \n                <div class=\"row my-3 mb-5\">\n                    <div class=\"col-md-12\">\n                        <table class=\"table table-borderless\">\n                         <tr>\n                             <td></td>\n                             \n                             <td>Intake <br> Form</td>\n                             <td>Confidentiality <br> Consent</td>\n                             <td>Video <br> Consent</td>\n                         </tr>  \n                   <tr>\n                            <td class=\"text-left\">\n                               <div> <b>Mr. John Tan</b></div>\n                               Mn45\n                            </td>\n                            <td> <i class=\"far fs-20 text-danger fa-file-pdf\"></i></td>\n                            <td>  <i class=\"far fs-20 text-danger fa-file-pdf\"></i></td>\n                            <td>  <i class=\"far fs-20 fa-file-pdf\"></i></td>\n                           \n                            </tr>\n                            <tr>\n                                <td class=\"text-left\"> \n                                   <div> <b>Joanne Tan</b></div>\n                                   F 42 , <span class=\"text-primary\">Wife</span>\n                                </td>\n                                <td> <i class=\"far fs-20 text-danger fa-file-pdf\"></i></td>\n                                <td>  <i class=\"far fs-20 text-danger fa-file-pdf\"></i></td>\n                                <td>  <i class=\"far fs-20 fa-file-pdf\"></i></td>\n                              \n                                </tr>\n                                <tr>\n                                    <td class=\"text-left\">\n                                       <div> <b>Daniel Tan</b></div>\n                                       M 11, <span class=\"text-primary\">Son</span>\n                                    </td>\n                                    <td> </td>\n                                    <td>  </td>\n                                    <td> </td>\n                                  \n                                    </tr>\n                    \n                           \n                        </table>\n                    </div>\n                </div>\n            </div>\n\n<app-appfooter></app-appfooter>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/counsellorprofile/counsellorprofile.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/counsellorprofile/counsellorprofile.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n    <div class=\"col-md-6 offset-md-3  col-12 text-center\">\n      \n              <div class=\"row no-gutters pt-3\">\n                  <div class=\"col-md-4 col-4 pr-0\">\n                      <img src=\"./assets/images/sam.jpg\" alt=\"...\" class=\"rounded-circle w-100\">\n                     <h6><b>Counsellor</b></h6>\n                  </div>\n                  <div class=\"col-md-8 col-8 text-left pt-1 fs-14\">\n                    <div class=\"row text-center no-gutters\">\n                        <div class=\"col-md-4 col-4 mb-2 px-3 line-height-sm\">\n                            <a href=\"#\" class=\"text-dark text-decoration-none\">\n                            <div class=\"mb-1\">\n                            <a href=\"#\"  class=\"app-icon btn btn-outline-success \"><i class=\"fas fa-home\"></i></a>\n                        </div>\n                            <small>Home</small>\n                        </a>\n                            </div>\n                            <div class=\"col-md-4 mb-2 col-4 line-height-sm \">\n                                <a href=\"#\" class=\"text-dark text-decoration-none\">\n                                <div class=\"mb-1\">\n                                  <a [routerLink]=\"['/counsellorclients']\"  class=\"app-icon btn btn-outline-success \"><i class=\"fas fa-user-tie\"></i></a>\n                            </div>\n                               <small>Clients</small> \n                               </a>\n                                </div>\n                                <div class=\"col-md-4 col-4 mb-2  px-3 line-height-sm\">\n                                    <a [routerLink]=\"['/ClientinvoiceComponent']\"  class=\"text-dark text-decoration-none\">\n                                    <div class=\"mb-1\">\n                                      <a href=\"#\"  class=\"app-icon btn btn-outline-success \"><i class=\"fas fa-file-invoice\"></i></a>\n                                </div>\n                                  <small>Invoice </small> \n                                       </a> \n                                </div>\n                                    <div class=\"col-md-4 col-4 px-3 mb-2 line-height-sm\">\n                                        <a  [routerLink]=\"['/familylist']\"  class=\"text-dark text-decoration-none\">\n                                        <div class=\"mb-1\">\n                                          <a href=\"#\"  class=\"app-icon btn btn-outline-success \"><i class=\"fas fa-hotel\"></i></a>\n                                    </div>\n                                      <small>Facility</small>  \n                                        </a>\n                                        </div>\n                                        <div class=\"col-md-4 col-4 px-3 mb-2 line-height-sm\">\n                                            <a  [routerLink]=\"['/familylist']\"  class=\"text-dark text-decoration-none\">\n                                            <div class=\"mb-1\">\n                                              <a href=\"#\"  class=\"app-icon btn btn-outline-success \"><i class=\"fas fa-check\"></i></a>\n                                        </div>\n                                          <small>Availability</small>  \n                                            </a>\n                                            </div>\n                                            <div class=\"col-md-4 col-4 px-3 mb-2 line-height-sm\">\n                                                <a  [routerLink]=\"['/familylist']\"  class=\"text-dark text-decoration-none\">\n                                                <div class=\"mb-1\">\n                                                  <a href=\"#\"  class=\"app-icon btn btn-outline-success \"><i class=\"fas fa-cubes\"></i></a>\n                                            </div>\n                                              <small>Leads</small>  \n                                                </a>\n                                                </div>\n                                                <div class=\"col-md-4 col-4 px-3 line-height-sm\">\n                                                    <a  [routerLink]=\"['/familylist']\"  class=\"text-dark text-decoration-none\">\n                                                    <div class=\"mb-1\">\n                                                      <a href=\"#\"  class=\"app-icon btn btn-outline-success \"><i class=\"far fa-file-alt\"></i></a>\n                                                </div>\n                                                  <small>Reports</small>  \n                                                    </a>\n                                                    </div>\n                                                    <div class=\"col-md-4 col-4 px-3line-height-sm\">\n                                                        <a  [routerLink]=\"['/familylist']\"  class=\"text-dark text-decoration-none\">\n                                                        <div class=\"mb-1\">\n                                                          <a  [routerLink]=\"['/counsellorclientmessage']\"  class=\"app-icon btn btn-outline-success \"><i class=\"fas fa-comment-dots\"></i></a>\n                                                    </div>\n                                                      <small>Messages</small>  \n                                                        </a>\n                                                        </div>\n                                                        <div class=\"col-md-4 col-4 px-3  line-height-sm\">\n                                                            <a  [routerLink]=\"['/familylist']\"  class=\"text-dark text-decoration-none\">\n                                                            <div class=\"mb-1\">\n                                                              <a href=\"#\"  class=\"app-icon btn btn-success \"><i class=\"fas fa-plus\"></i></a>\n                                                        </div>\n                                                          <small>Session</small>  \n                                                            </a>\n                                                            </div>\n                            </div>\n                  </div>\n                  </div>\n      \n                      <hr>\n                      <div class=\"row\">\n                        <div class=\"col-md-6 col-6 text-left pl-4\"><b>2020</b></div>\n                        \n                     </div>\n                      <div class=\"row text-left\">\n            \n                        <div class=\"col-md-10 col-10 p-0 col-lg-10 text-left\">\n                           <div id=\"tracking-pre\"></div>\n                           <div id=\"tracking\">\n                \n                              <div class=\"tracking-list\">\n                                 <div class=\"tracking-item pb-5\">\n                                    <div class=\"tracking-icon status-intransit\">\n                                      <i class=\"fas fa-circle text-primary\"></i> \n                                    </div>\n                                    <div class=\"tracking-date text-dark text-left\">\n                                      <span class=\"d-block text-primary\">Fri, 02 Jun </span>\n                                      <span class=\"d-block\">  03:00 PM</span>\n                                      <span class=\"d-block\">   Room – 1</span>\n                                      <span class=\"d-block\"> Mountbatten</span>\n                                     \n\n                                      <span class=\"d-block text-primary\">Sam Roberts </span>\n                                     <div class=\"actions\">  \n                                       <span class=\"text-primary mr-2\"><i class=\"fas fa-video\"></i></span>\n                                       <span class=\"text-danger\"><i class=\"fas fa-box-open\"></i></span>\n                                       <span class=\"text-danger\"><i class=\"fas fa-box-open\"></i></span>\n                                       <span class=\"text-danger\"><i class=\"fas fa-box-open\"></i></span>\n                                    </div>\n                               \n                                    </div>\n      \n                                    <div class=\"tracking-content\">\n                                       <div class=\"col-md-12 pl-3\">\n                                        <span class=\"d-block font-weight-bold\"> John Tan</span>\n                                        <span class=\"d-block\"> Couple Session</span>\n                                        <span class=\"d-block text-primary\">Pending </span>\n                                        <span class=\"d-block\">$ 120.00 <span class=\"text-danger\">(3/8)</span></span>\n                                    \n                                       </div>\n                                    </div>\n                                 </div>\n                  \n                                 <div class=\"tracking-item\">\n                                  <div class=\"tracking-icon status-intransit\">\n                                    <i class=\"fas fa-circle text-success\"></i> \n                                  </div>\n                                  <div class=\"tracking-date text-dark text-left\">\n                                    <span class=\"d-block text-danger\">Sat, 03 Jun </span>\n                                    <span class=\"d-block\">  03:00 PM</span>\n                                    <span class=\"d-block text-primary\">Sam Roberts </span>\n                          \n                             \n                                  </div>\n                                  <div class=\"tracking-content\">\n                                     <div class=\"col-md-12 pl-3\">\n                                      <span class=\"d-block font-weight-bold\"> John Tan</span>\n                                      <span class=\"d-block\"> Couple Session</span>\n                                      <span class=\"d-block text-success\">Confirmed </span>\n                                     \n                                  \n                                     </div>\n                                  </div>\n                               </div>\n                     <div class=\"tracking-item\">\n                                  <div class=\"tracking-icon status-intransit\">\n                                    <i class=\"fas fa-circle text-danger\"></i> \n                                  </div>\n                                  <div class=\"tracking-date text-dark text-left\">\n                                    <span class=\"d-block text-danger\">Sun, 04 Jun </span>\n                                    <span class=\"d-block\">  03:00 PM</span>\n                                    <span class=\"d-block text-primary\">Sam Roberts </span>\n                          \n                             \n                                  </div>\n                                  <div class=\"tracking-content\">\n                                     <div class=\"col-md-12 pl-3\">\n                                      <span class=\"d-block font-weight-bold\"> John Tan</span>\n                                      <span class=\"d-block\"> Couple Session</span>\n                                      <span class=\"d-block text-danger\">Cancelled </span>\n                                     \n                                  \n                                     </div>\n                                  </div>\n                               </div>\n                               <div class=\"tracking-item\">\n                                <div class=\"tracking-icon status-intransit\">\n                                  <i class=\"fas fa-circle text-warning\"></i> \n                                </div>\n                                <div class=\"tracking-date text-dark text-left\">\n                                  <span class=\"d-block text-primary\">Mon, 05 Jun </span>\n                                  <span class=\"d-block\">  03:00 PM</span>\n                                  <span class=\"d-block text-primary\">Sam Roberts </span>\n                          \n                           \n                                </div>\n      \n                                <div class=\"tracking-content\">\n                                   <div class=\"col-md-12 pl-3\">\n                                    <span class=\"d-block font-weight-bold\"> John Tan</span>\n                                    <span class=\"d-block\"> Couple Session</span>\n                                    <span class=\"d-block text-warning\">Completed </span>\n                                 \n                                \n                                   </div>\n                                </div>\n                             </div>\n                           </div>\n                        </div>\n                     </div>\n                <div class=\"col-md-2 col-2\">\n                  <div class=\"actions\">  \n                    <span class=\"text-primary  d-block mb-2\"><a href=\"#\"><i class=\"fas fa-exchange-alt\"></i></a></span>\n                    <span class=\"text-danger  d-block mb-2 \"><a href=\"#\" class=\"text-dark\"><i class=\"far fa-credit-card\"></i></a></span>\n                    <span class=\"text-danger  d-block mb-2 \"><a href=\"#\" class=\"text-dark\"><i class=\"far fa-comment-alt\"></i></a></span>\n                    <span class=\"text-danger  d-block mb-2 \"><a href=\"#\" class=\"text-dark\"><i class=\"far fa-edit\"></i></a></span>\n                 </div> \n                </div>\n                \n                </div>\n                  </div>\n      \n      <app-appfooter></app-appfooter>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/familymemberlist/familymemberlist.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/familymemberlist/familymemberlist.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"main-wrapper mt-4\">\n        <div class=\"container\">\n            <div class=\"row\">\n<div class=\"col-md-6 offset-md-3  col-12 text-center\">\n    <div class=\"row\">\n        <div class=\"col-md-12 col-12 pt-2\">\n    <h1 class=\"app-title\"><i class=\"fas fa-users mr-2\"></i> FAMILY MEMBERS</h1> \n     <a [routerLink]=\"['/addfamily']\" class=\"rounded-circle position-absolute rt-0 app-icon bg-success shadow text-decoration-none text-white\"><i class=\"fas fa-plus\"></i></a>\n    <span class=\"border-devider\"></span>\n</div>\n<hr/>\n</div>\n<div class=\"row my-3\">\n    <div class=\"col-md-12\">\n        <table class=\"table table-borderless\">\n            <tr>\n            <td>\n               <div> <b>John Tan</b></div>\nSelf, M 24\n            </td>\n            <td> <i class=\"far fs-20 text-danger fa-file-pdf\"></i></td>\n            <td>  <i class=\"far fs-20 text-danger fa-file-pdf\"></i></td>\n            <td>  <i class=\"far fs-20 fa-file-pdf\"></i></td>\n            <td><i class=\"far fs-20 fa-edit text-primary\"></i></td>\n            </tr>\n            <tr>\n                <td>\n                   <div> <b>Susan Tan</b></div>\n                   Wife, F 21\n                </td>\n                <td> <i class=\"far fs-20 text-danger fa-file-pdf\"></i></td>\n                <td>  <i class=\"far fs-20 text-danger fa-file-pdf\"></i></td>\n                <td>  <i class=\"far fs-20 fa-file-pdf\"></i></td>\n                <td><i class=\"far fs-20 fa-edit text-primary\"></i></td>\n                </tr>\n                <tr>\n                    <td>\n                       <div> <b>Daniel Tan</b></div>\n                       Son, M 12\n                    </td>\n                    <td> <i class=\"far fs-20 text-danger fa-file-pdf\"></i></td>\n                    <td>  <i class=\"far fs-20 text-danger fa-file-pdf\"></i></td>\n                    <td>  <i class=\"far fs-20 fa-file-pdf\"></i></td>\n                    <td><i class=\"far fs-20 fa-edit text-primary\"></i></td>\n                    </tr>\n    \n           \n        </table>\n    </div>\n</div>\n    </div>\n    </div>\n    </div>\n    </div>\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/home.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"main-wrapper mt-md-4\">\n          <div class=\"container\">\n\n             <div class=\"row mt\">\n                <div class=\"col-md-6 mt-2 order-2 order-md-1 p-md-5 p-0\">\n                   <div class=\"row\">\n\n\n                  <div class=\"col-md-12 px-0 h-75 text-center mb-3\">\n\n\n                     <div class=\"title-bg-box \">\n                     <h1 class=\"app-title\"><i class=\"far fa-calendar-check mr-2\"></i> First Appointment</h1>\n                     <span class=\"border-devider\"></span>\n                     </div>\n                  </div>\n                </div>\n<div class=\"row\">\n<div class=\"col-md-12\">\n<div class=\"input-group   shadow-sm bg-light mb-3\">\n   <div class=\"input-group-prepend\">\n     <span class=\"input-group-text bg-light  pl-4 border-0 text-success  border-right-0\" id=\"basic-addon1\"><i class=\"fas fa-mobile-alt\"></i></span>\n   </div>\n   <input type=\"text\" class=\"form-control bg-light  border-0   border-left-0 \" placeholder=\"Email/Mobile\">\n </div>\n</div>\n<div class=\"col-md-12\">\n   <div class=\"input-group    shadow-sm  mb-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text  pl-4 bg-light border-0  border-right-0\" id=\"basic-addon1\"><i class=\"fas fa-key text-success\"></i></span>\n      </div>\n      <input type=\"password\" class=\"form-control bg-light  border-0   border-left-0\" placeholder=\"Password\">\n    </div>\n   \n   </div>\n   <div class=\"col-md-12 mb-3 text-right\">\n     <a class=\"text-dark \" href=\"\">Forgot Password?</a>\n            </div>\n   <div class=\"col-md-12\">\n      <a [routerLink]=\"['otp']\"  class=\"btn btn-lg br-3 w-100 btn-success text-white\">LOG IN</a>\n            </div>\n</div>\n\n   \n\n                   <div class=\"row mt-4\">\n                      <div class=\"col-md-3 pl-0 text-center col-3\">\n                         <div class=\"m-box call-action-box \">\n                            <a href=\"#\">\n                               <div class=\"box-call\">\n                               \n                                  <div class=\"icon-box-action-sm icon-box-orange\"> \t\n                                     <i class=\"fas fa-phone-alt\"></i></div>\n                                  <div class=\"text-box-action\">\tCall  </div>\n                               </div>\n                            </a>\n                         </div>\n                      </div>\n                      <div class=\"col-md-3 pl-0 text-center col-3\">\n                         <div class=\"m-box call-action-box \">\n                            <a href=\"#\">\n                               <div class=\"box-call\">\n                                  <div class=\"icon-box-action-sm icon-box-yellow \">  <i class=\"far fa-comment-dots\"></i></div>\n                                  <div class=\"text-box-action\">SMS  </div>\n                               </div>\n                            </a>\n                         </div>\n                      </div>\n                      <div class=\"col-md-3 pl-0 text-center col-3\">\n                         <div class=\"m-box call-action-box \">\n                            <a href=\"#\">\n                               <div class=\"box-call\">\n                                  <div class=\"icon-box-action-sm icon-box-green-dark\"> \t <i class=\"far fa-calendar-check\"></i></div>\n                                  <div class=\"text-box-action\"> Appointment </div>\n                               </div>\n                            </a>\n                         </div>\n                      </div>\n                      <div class=\"col-md-3 pl-0 text-center col-3\">\n                         <div class=\"m-box call-action-box \">\n                            <a href=\"#\">\n                               <div class=\"box-call\">\n                                  <div class=\"icon-box-action-sm icon-box-green\"> \t<i class=\"fab fa-whatsapp\"></i></div>\n                                  <div class=\"text-box-action\">\tWhatsApp  </div>\n                               </div>\n                            </a>\n                         </div>\n                      </div>\n                   </div>\n                </div>\n                <div class=\"col-md-6 pt-5 order-1 order-md-2 mt-md-4 mt-2 pb-5 d-flex align-items-center justify-content-center text-center\" style=\"min-height:400px; \">\n                   <div class=\"icongroupbox1 text-center\">\n                      <div class=\"icon-image\"><img width=\"100%\" src=\"./assets/images/children.jpg\" class=\"icon-cat\" alt=\"Cinque Terre\"></div>\n                      <div class=\"cat-name green\">Children</div>\n                   </div>\n                   <div class=\"familygroup text-center\">\n                      <div class=\"icon-image\"><img width=\"100%\" src=\"./assets/images/family.jpg\" class=\"icon-cat\" alt=\"Cinque Terre\"></div>\n                      <div class=\"cat-name family-g\">Family</div>\n                   </div>\n                   <div class=\"adult text-center\">\n                      <div class=\"icon-image\"><img width=\"100%\" src=\"./assets/images/adult.jpg\" class=\"icon-cat\" alt=\"Cinque Terre\">\n                      </div>\n                      <div class=\"cat-name adult-c\">Adults</div>\n                   </div>\n                   <img class=\"h-image-g\"  src=\"./assets/images/olive-4.png\"/>\n                   <div class=\"icongroupbox2 text-center\">\n                      <div class=\"icon-image\"><img width=\"100%\" src=\"./assets/images/teenager.jpg\" class=\"icon-cat\" alt=\"Cinque Terre\"></div>\n                      <div class=\"cat-name teenagers-c\">Teenagers</div>\n                   </div>\n                   <div class=\"couple text-center\">\n                      <div class=\"icon-image\"><img width=\"100%\" src=\"./assets/images/couple.jpg\" class=\"icon-cat\" alt=\"Cinque Terre\">\n                      </div>\n                      <div class=\"cat-name\">Couples</div>\n                   </div>\n                </div>\n             </div>\n             \n          </div>\n       </div>\n    </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/otp/otp.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/otp/otp.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"main-wrapper mt-4\">\n        <div class=\"container\">\n            <div class=\"row\">\n<div class=\"col-md-6 offset-md-3  col-12 text-center\">\n    <h1 class=\"app-title\">OTP VERIFICATION</h1>\n    <p>ent a verification code to verify your mobile number</p>\n    <p class=\"text-muted\"><small>Sent to +91 7837965003</small></p>\n        <div class=\"row text-center mb-3\">\n        <div class=\"col-md-3 col-3\">\n            <input type=\"text\" class=\"form-control border-0  shadow-sm bg-light\"/>\n        </div>\n        <div class=\"col-md-3 col-3\">\n            <input type=\"text\" class=\"form-control border-0   shadow-sm bg-light\"/>\n        </div>\n        <div class=\"col-md-3 col-3\">\n            <input type=\"text\" class=\"form-control border-0   shadow-sm bg-light\"/>\n        </div>\n        <div class=\"col-md-3 col-3\">\n            <input type=\"text\" class=\"form-control  border-0  shadow-sm bg-light\"/>\n        </div>\n        </div>\n        <div class=\"row mb-3\">\n            <div class=\"col-md-12\">\n                <small class=\"text-muted\">Didn't get code yet?</small> <a href=\"#\" class=\"text-success ml-1\">Resend OTP</a>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <a [routerLink]=\"['/appointment']\"  class=\"btn btn-lg br-3 w-100 text-white btn-success\">VERIFY</a>\n                      </div>\n        </div>\n\n</div>\n\n            </div>\n       </div>\n    </div>\n </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/profile/profile.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/profile/profile.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n    <div class=\"col-md-6 offset-md-3  col-12 text-center\">\n  <a href =\"#\" class=\"add-appointment-icon bg-success shadow text-decoration-none text-white\"><i class=\"fas fa-plus\"></i></a>\n        <div class=\"row no-gutters py-3\">\n            <div class=\"col-md-3 col-3 pr-3\">\n                <img src=\"./assets/images/sam.jpg\" alt=\"...\" class=\"rounded-circle w-100\">\n               \n            </div>\n            <div class=\"col-md-8 col-9 text-left pt-1 fs-14\">\n                <h1 class=\"mb-0 fs-20 font-weight-bold text-capitalize\">John Tan</h1>\n               <p class=\"mb-0\">John.tan@gmail.com</p>\n               <p class=\"mb-0\">+65 1234 5678</p>\n            </div>\n            </div>\n            <div class=\"row text-center no-gutters\">\n            <div class=\"col-md-3 col-3 px-3 line-height-sm\">\n                \n                <div class=\"mb-1\">\n                  <a href=\"#\"  class=\"app-icon btn btn-outline-success\">\n                <span class=\"app-icon\"><i class=\"far fa-file-pdf\"></i></span>\n              </a>\n            </div>\n                <small>Intake Form</small>\n           \n                </div>\n                <div class=\"col-md-3 col-3 line-height-sm \">\n                   \n                    <div class=\"mb-1\">\n                      <a href=\"#\" class=\"app-icon btn btn-outline-dark \">\n                    <i class=\"far fa-file-pdf\"></i>\n                  </a>\n                </div>\n                   <small>Confidentiality Consent</small> \n                  \n                    </div>\n                    <div class=\"col-md-3 col-3  px-3 line-height-sm\">\n                        \n                        <div class=\"mb-1\">\n                          <a href=\"#\" class=\"app-icon btn btn-outline-primary \"><i class=\"fas fa-video\"></i>    </a> \n                    </div>\n                      <small>Video Consent  </small> \n                       \n                    </div>\n                        <div class=\"col-md-3 col-3 px-3 line-height-sm\">\n                            \n                            <div class=\"mb-1\">\n                              <a [routerLink]=\"['/familylist']\" class=\"app-icon btn btn-outline-success \"><i class=\"fas fa-users\"></i></a>\n                        </div>\n                          <small>Add Family</small>  \n                           \n                            </div>\n                </div>\n                <hr>\n                <div class=\"row text-left\">\n      \n                  <div class=\"col-md-10 col-10 p-0 col-lg-10 text-left\">\n                     <div id=\"tracking-pre\"></div>\n                     <div id=\"tracking\">\n          \n                        <div class=\"tracking-list\">\n                           <div class=\"tracking-item\">\n                              <div class=\"tracking-icon status-intransit\">\n                                <i class=\"fas fa-circle text-primary\"></i> \n                              </div>\n                              <div class=\"tracking-date text-dark text-left\">\n                                <span class=\"d-block text-primary\">Fri, 02 Jun </span>\n                                <span class=\"d-block\">  03:00 PM</span>\n                                <span class=\"d-block text-primary\">Sam Roberts </span>\n                               <div class=\"actions\">  \n                                 <span class=\"text-primary mr-2\"><i class=\"fas fa-video\"></i></span>\n                                 <span class=\"text-danger\"><i class=\"fas fa-box-open\"></i></span>\n                              </div>\n                         \n                              </div>\n\n                              <div class=\"tracking-content\">\n                                 <div class=\"col-md-12 pl-3\">\n                                  <span class=\"d-block font-weight-bold\"> John Tan</span>\n                                  <span class=\"d-block\"> Couple Session</span>\n                                  <span class=\"d-block text-primary\">Pending </span>\n                                  <span class=\"d-block\">$ 120.00 <span class=\"text-danger\">(3/8)</span></span>\n                              \n                                 </div>\n                              </div>\n                           </div>\n            \n                           <div class=\"tracking-item\">\n                            <div class=\"tracking-icon status-intransit\">\n                              <i class=\"fas fa-circle text-success\"></i> \n                            </div>\n                            <div class=\"tracking-date text-dark text-left\">\n                              <span class=\"d-block text-danger\">Sat, 03 Jun </span>\n                              <span class=\"d-block\">  03:00 PM</span>\n                              <span class=\"d-block text-primary\">Sam Roberts </span>\n                    \n                       \n                            </div>\n                            <div class=\"tracking-content\">\n                               <div class=\"col-md-12 pl-3\">\n                                <span class=\"d-block font-weight-bold\"> John Tan</span>\n                                <span class=\"d-block\"> Couple Session</span>\n                                <span class=\"d-block text-success\">Confirmed </span>\n                               \n                            \n                               </div>\n                            </div>\n                         </div>\n               <div class=\"tracking-item\">\n                            <div class=\"tracking-icon status-intransit\">\n                              <i class=\"fas fa-circle text-danger\"></i> \n                            </div>\n                            <div class=\"tracking-date text-dark text-left\">\n                              <span class=\"d-block text-danger\">Sun, 04 Jun </span>\n                              <span class=\"d-block\">  03:00 PM</span>\n                              <span class=\"d-block text-primary\">Sam Roberts </span>\n                    \n                       \n                            </div>\n                            <div class=\"tracking-content\">\n                               <div class=\"col-md-12 pl-3\">\n                                <span class=\"d-block font-weight-bold\"> John Tan</span>\n                                <span class=\"d-block\"> Couple Session</span>\n                                <span class=\"d-block text-danger\">Cancelled </span>\n                               \n                            \n                               </div>\n                            </div>\n                         </div>\n                         <div class=\"tracking-item\">\n                          <div class=\"tracking-icon status-intransit\">\n                            <i class=\"fas fa-circle text-warning\"></i> \n                          </div>\n                          <div class=\"tracking-date text-dark text-left\">\n                            <span class=\"d-block text-primary\">Mon, 05 Jun </span>\n                            <span class=\"d-block\">  03:00 PM</span>\n                            <span class=\"d-block text-primary\">Sam Roberts </span>\n                    \n                     \n                          </div>\n\n                          <div class=\"tracking-content\">\n                             <div class=\"col-md-12 pl-3\">\n                              <span class=\"d-block font-weight-bold\"> John Tan</span>\n                              <span class=\"d-block\"> Couple Session</span>\n                              <span class=\"d-block text-warning\">Completed </span>\n                           \n                          \n                             </div>\n                          </div>\n                       </div>\n                     </div>\n                  </div>\n               </div>\n          <div class=\"col-md-2 col-2\">\n            <div class=\"actions\">  \n              <span class=\"text-primary  d-block mr-2\"><i class=\"fas fa-exchange-alt\"></i></span>\n              <span class=\"text-danger  d-block  \"><i class=\"far fa-credit-card\"></i></span>\n           </div> \n          </div>\n          \n          </div>\n            </div>\n\n<app-appfooter></app-appfooter>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/setting/setting.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/setting/setting.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>setting works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/appfooter/appfooter.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/appfooter/appfooter.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"app-bootom-footer shadow\">\n    <div class=\"container-fluid\">\n<div class=\"row\">\n    <div class=\"col-md-6 offset-md-3  col-12 text-center\">\n\n        <div class=\"row\">\n\n            <div class=\"col-md-3 col-3 text-center py-2 fs-sm\">\n                <i class=\"fas fa-home\"></i><br>\nhome\n            </div>\n\n            <div class=\"col-md-3 col-3 active-menu py-2 fs-sm\">\n                <i class=\"fas fa-user\"></i><br>\nProfile\n            </div>\n\n            <div class=\"col-md-3 col-3 py-2 fs-sm\">\n                <i class=\"fas fa-user-cog\"></i><br>\nsetting\n            </div>\n\n            <div class=\"col-md-3 col-3 py-2 fs-sm\">\n                <i class=\"far fa-comment-dots\"></i><br>\nmessage\n            </div>\n        </div>\n        </div>\n</div>\n</div>\n\n</section>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/footer/footer.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/footer/footer.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>footer works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/header/header.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/header/header.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-expand-lg navbar-light bg-white shadow-sm\">\n    <a class=\"navbar-brand\" href=\"#\"><img width=\"130px\" src=\"./assets/images/Olive-Branch-logo-h75.png\"></a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n          <a class=\"nav-link\" [routerLink]=\"['home']\">Home </a>\n        </li>\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n          <a class=\"nav-link\" [routerLink]=\"['counsellorprofile']\">Clients</a>\n        </li>\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n          <a class=\"nav-link\" [routerLink]=\"['#']\">Payments</a>\n        </li>\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n          <a class=\"nav-link\" [routerLink]=\"['#']\">Book Facility</a>\n        </li>\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n          <a class=\"nav-link\" [routerLink]=\"['#']\">Block My Timings</a>\n        </li>\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n          <a class=\"nav-link\" [routerLink]=\"['#']\">Leads</a>\n        </li>\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n          <a class=\"nav-link\" [routerLink]=\"['#']\">Reports</a>\n        </li>\n  \n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n          <a class=\"nav-link\" [routerLink]=\"['profile']\">Profile</a>\n        </li>\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n          <a class=\"nav-link\" [routerLink]=\"['counsellorclientmessage']\">Messages</a>\n        </li>\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n          <a class=\"nav-link\" [routerLink]=\"['#']\">Settings</a>\n        </li>\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n          <a class=\"nav-link\" [routerLink]=\"['#']\">Log Out</a>\n        </li>\n\n        <!-- <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n          <a class=\"nav-link\" [routerLink]=\"['setting']\">Settings</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\" tabindex=\"-1\" aria-disabled=\"true\">Log out</a>\n        </li> -->\n      </ul>\n    \n    </div>\n  </nav>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_setting_setting_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/setting/setting.component */ "./src/app/components/setting/setting.component.ts");
/* harmony import */ var _components_otp_otp_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/otp/otp.component */ "./src/app/components/otp/otp.component.ts");
/* harmony import */ var _components_appointment_appointment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/appointment/appointment.component */ "./src/app/components/appointment/appointment.component.ts");
/* harmony import */ var _components_appointmentstep_appointmentstep_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/appointmentstep/appointmentstep.component */ "./src/app/components/appointmentstep/appointmentstep.component.ts");
/* harmony import */ var _components_addfamily_addfamily_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/addfamily/addfamily.component */ "./src/app/components/addfamily/addfamily.component.ts");
/* harmony import */ var _components_familymemberlist_familymemberlist_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/familymemberlist/familymemberlist.component */ "./src/app/components/familymemberlist/familymemberlist.component.ts");
/* harmony import */ var _components_counsellorprofile_counsellorprofile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/counsellorprofile/counsellorprofile.component */ "./src/app/components/counsellorprofile/counsellorprofile.component.ts");
/* harmony import */ var _components_counsellor_client_counsellor_client_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/counsellor-client/counsellor-client.component */ "./src/app/components/counsellor-client/counsellor-client.component.ts");
/* harmony import */ var _components_counsellorclientprofile_counsellorclientprofile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/counsellorclientprofile/counsellorclientprofile.component */ "./src/app/components/counsellorclientprofile/counsellorclientprofile.component.ts");
/* harmony import */ var _components_counsellorclientmessage_counsellorclientmessage_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/counsellorclientmessage/counsellorclientmessage.component */ "./src/app/components/counsellorclientmessage/counsellorclientmessage.component.ts");
/* harmony import */ var _components_clientnotes_clientnotes_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/clientnotes/clientnotes.component */ "./src/app/components/clientnotes/clientnotes.component.ts");
/* harmony import */ var _components_clientinvoice_clientinvoice_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/clientinvoice/clientinvoice.component */ "./src/app/components/clientinvoice/clientinvoice.component.ts");

















const routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"] },
    { path: 'setting', component: _components_setting_setting_component__WEBPACK_IMPORTED_MODULE_5__["SettingComponent"] },
    { path: 'otp', component: _components_otp_otp_component__WEBPACK_IMPORTED_MODULE_6__["OtpComponent"] },
    { path: 'appointment', component: _components_appointment_appointment_component__WEBPACK_IMPORTED_MODULE_7__["AppointmentComponent"] },
    { path: 'appointmentstep', component: _components_appointmentstep_appointmentstep_component__WEBPACK_IMPORTED_MODULE_8__["AppointmentstepComponent"] },
    { path: 'addfamily', component: _components_addfamily_addfamily_component__WEBPACK_IMPORTED_MODULE_9__["AddfamilyComponent"] },
    { path: 'familylist', component: _components_familymemberlist_familymemberlist_component__WEBPACK_IMPORTED_MODULE_10__["FamilymemberlistComponent"] },
    { path: 'counsellorprofile', component: _components_counsellorprofile_counsellorprofile_component__WEBPACK_IMPORTED_MODULE_11__["CounsellorprofileComponent"] },
    { path: 'counsellorclients', component: _components_counsellor_client_counsellor_client_component__WEBPACK_IMPORTED_MODULE_12__["CounsellorClientComponent"] },
    { path: 'counsellorclientprofile', component: _components_counsellorclientprofile_counsellorclientprofile_component__WEBPACK_IMPORTED_MODULE_13__["CounsellorclientprofileComponent"] },
    { path: 'counsellorclientmessage', component: _components_counsellorclientmessage_counsellorclientmessage_component__WEBPACK_IMPORTED_MODULE_14__["CounsellorclientmessageComponent"] },
    { path: 'ClientnotesComponent', component: _components_clientnotes_clientnotes_component__WEBPACK_IMPORTED_MODULE_15__["ClientnotesComponent"] },
    { path: 'ClientinvoiceComponent', component: _components_clientinvoice_clientinvoice_component__WEBPACK_IMPORTED_MODULE_16__["ClientinvoiceComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'oliveapp';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/header/header.component */ "./src/app/layout/header/header.component.ts");
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/footer/footer.component */ "./src/app/layout/footer/footer.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_setting_setting_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/setting/setting.component */ "./src/app/components/setting/setting.component.ts");
/* harmony import */ var _components_otp_otp_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/otp/otp.component */ "./src/app/components/otp/otp.component.ts");
/* harmony import */ var _components_appointment_appointment_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/appointment/appointment.component */ "./src/app/components/appointment/appointment.component.ts");
/* harmony import */ var _components_appointmentstep_appointmentstep_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/appointmentstep/appointmentstep.component */ "./src/app/components/appointmentstep/appointmentstep.component.ts");
/* harmony import */ var _layout_appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layout/appfooter/appfooter.component */ "./src/app/layout/appfooter/appfooter.component.ts");
/* harmony import */ var _components_addfamily_addfamily_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/addfamily/addfamily.component */ "./src/app/components/addfamily/addfamily.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components_familymemberlist_familymemberlist_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/familymemberlist/familymemberlist.component */ "./src/app/components/familymemberlist/familymemberlist.component.ts");
/* harmony import */ var _components_counsellorprofile_counsellorprofile_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/counsellorprofile/counsellorprofile.component */ "./src/app/components/counsellorprofile/counsellorprofile.component.ts");
/* harmony import */ var _components_counsellor_client_counsellor_client_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/counsellor-client/counsellor-client.component */ "./src/app/components/counsellor-client/counsellor-client.component.ts");
/* harmony import */ var _components_counsellorclientprofile_counsellorclientprofile_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/counsellorclientprofile/counsellorclientprofile.component */ "./src/app/components/counsellorclientprofile/counsellorclientprofile.component.ts");
/* harmony import */ var _components_counsellorclientmessage_counsellorclientmessage_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/counsellorclientmessage/counsellorclientmessage.component */ "./src/app/components/counsellorclientmessage/counsellorclientmessage.component.ts");
/* harmony import */ var _components_clientnotes_clientnotes_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/clientnotes/clientnotes.component */ "./src/app/components/clientnotes/clientnotes.component.ts");
/* harmony import */ var _components_clientinvoice_clientinvoice_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/clientinvoice/clientinvoice.component */ "./src/app/components/clientinvoice/clientinvoice.component.ts");























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _layout_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
            _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"],
            _components_setting_setting_component__WEBPACK_IMPORTED_MODULE_9__["SettingComponent"],
            _components_otp_otp_component__WEBPACK_IMPORTED_MODULE_10__["OtpComponent"],
            _components_appointment_appointment_component__WEBPACK_IMPORTED_MODULE_11__["AppointmentComponent"],
            _components_appointmentstep_appointmentstep_component__WEBPACK_IMPORTED_MODULE_12__["AppointmentstepComponent"],
            _layout_appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_13__["AppfooterComponent"],
            _components_addfamily_addfamily_component__WEBPACK_IMPORTED_MODULE_14__["AddfamilyComponent"],
            _components_familymemberlist_familymemberlist_component__WEBPACK_IMPORTED_MODULE_16__["FamilymemberlistComponent"],
            _components_counsellorprofile_counsellorprofile_component__WEBPACK_IMPORTED_MODULE_17__["CounsellorprofileComponent"],
            _components_counsellor_client_counsellor_client_component__WEBPACK_IMPORTED_MODULE_18__["CounsellorClientComponent"],
            _components_counsellorclientprofile_counsellorclientprofile_component__WEBPACK_IMPORTED_MODULE_19__["CounsellorclientprofileComponent"],
            _components_counsellorclientmessage_counsellorclientmessage_component__WEBPACK_IMPORTED_MODULE_20__["CounsellorclientmessageComponent"],
            _components_clientnotes_clientnotes_component__WEBPACK_IMPORTED_MODULE_21__["ClientnotesComponent"],
            _components_clientinvoice_clientinvoice_component__WEBPACK_IMPORTED_MODULE_22__["ClientinvoiceComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ],
        providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_15__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_15__["HashLocationStrategy"] }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/addfamily/addfamily.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/addfamily/addfamily.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkZmFtaWx5L2FkZGZhbWlseS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/addfamily/addfamily.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/addfamily/addfamily.component.ts ***!
  \*************************************************************/
/*! exports provided: AddfamilyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddfamilyComponent", function() { return AddfamilyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AddfamilyComponent = class AddfamilyComponent {
    constructor() { }
    ngOnInit() {
    }
};
AddfamilyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addfamily',
        template: __webpack_require__(/*! raw-loader!./addfamily.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/addfamily/addfamily.component.html"),
        styles: [__webpack_require__(/*! ./addfamily.component.scss */ "./src/app/components/addfamily/addfamily.component.scss")]
    })
], AddfamilyComponent);



/***/ }),

/***/ "./src/app/components/appointment/appointment.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/appointment/appointment.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXBwb2ludG1lbnQvYXBwb2ludG1lbnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/appointment/appointment.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/appointment/appointment.component.ts ***!
  \*****************************************************************/
/*! exports provided: AppointmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentComponent", function() { return AppointmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppointmentComponent = class AppointmentComponent {
    constructor() { }
    ngOnInit() {
    }
};
AppointmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-appointment',
        template: __webpack_require__(/*! raw-loader!./appointment.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/appointment/appointment.component.html"),
        styles: [__webpack_require__(/*! ./appointment.component.scss */ "./src/app/components/appointment/appointment.component.scss")]
    })
], AppointmentComponent);



/***/ }),

/***/ "./src/app/components/appointmentstep/appointmentstep.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/appointmentstep/appointmentstep.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXBwb2ludG1lbnRzdGVwL2FwcG9pbnRtZW50c3RlcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/appointmentstep/appointmentstep.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/appointmentstep/appointmentstep.component.ts ***!
  \*************************************************************************/
/*! exports provided: AppointmentstepComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentstepComponent", function() { return AppointmentstepComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppointmentstepComponent = class AppointmentstepComponent {
    constructor() { }
    ngOnInit() {
    }
};
AppointmentstepComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-appointmentstep',
        template: __webpack_require__(/*! raw-loader!./appointmentstep.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/appointmentstep/appointmentstep.component.html"),
        styles: [__webpack_require__(/*! ./appointmentstep.component.scss */ "./src/app/components/appointmentstep/appointmentstep.component.scss")]
    })
], AppointmentstepComponent);



/***/ }),

/***/ "./src/app/components/clientinvoice/clientinvoice.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/clientinvoice/clientinvoice.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2xpZW50aW52b2ljZS9jbGllbnRpbnZvaWNlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/clientinvoice/clientinvoice.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/clientinvoice/clientinvoice.component.ts ***!
  \*********************************************************************/
/*! exports provided: ClientinvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientinvoiceComponent", function() { return ClientinvoiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ClientinvoiceComponent = class ClientinvoiceComponent {
    constructor() { }
    ngOnInit() {
    }
};
ClientinvoiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-clientinvoice',
        template: __webpack_require__(/*! raw-loader!./clientinvoice.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/clientinvoice/clientinvoice.component.html"),
        styles: [__webpack_require__(/*! ./clientinvoice.component.scss */ "./src/app/components/clientinvoice/clientinvoice.component.scss")]
    })
], ClientinvoiceComponent);



/***/ }),

/***/ "./src/app/components/clientnotes/clientnotes.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/clientnotes/clientnotes.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2xpZW50bm90ZXMvY2xpZW50bm90ZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/clientnotes/clientnotes.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/clientnotes/clientnotes.component.ts ***!
  \*****************************************************************/
/*! exports provided: ClientnotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientnotesComponent", function() { return ClientnotesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ClientnotesComponent = class ClientnotesComponent {
    constructor() { }
    ngOnInit() {
    }
};
ClientnotesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-clientnotes',
        template: __webpack_require__(/*! raw-loader!./clientnotes.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/clientnotes/clientnotes.component.html"),
        styles: [__webpack_require__(/*! ./clientnotes.component.scss */ "./src/app/components/clientnotes/clientnotes.component.scss")]
    })
], ClientnotesComponent);



/***/ }),

/***/ "./src/app/components/counsellor-client/counsellor-client.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/counsellor-client/counsellor-client.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY291bnNlbGxvci1jbGllbnQvY291bnNlbGxvci1jbGllbnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/counsellor-client/counsellor-client.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/counsellor-client/counsellor-client.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CounsellorClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounsellorClientComponent", function() { return CounsellorClientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CounsellorClientComponent = class CounsellorClientComponent {
    constructor() { }
    ngOnInit() {
    }
};
CounsellorClientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-counsellor-client',
        template: __webpack_require__(/*! raw-loader!./counsellor-client.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/counsellor-client/counsellor-client.component.html"),
        styles: [__webpack_require__(/*! ./counsellor-client.component.scss */ "./src/app/components/counsellor-client/counsellor-client.component.scss")]
    })
], CounsellorClientComponent);



/***/ }),

/***/ "./src/app/components/counsellorclientmessage/counsellorclientmessage.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/counsellorclientmessage/counsellorclientmessage.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  min-height: 100vh;\n  background: #27ae60;\n  font-family: \"proxima-nova\", \"Source Sans Pro\", sans-serif;\n  font-size: 1em;\n  letter-spacing: 0.1px;\n  color: #32465a;\n  text-rendering: optimizeLegibility;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\n  -webkit-font-smoothing: antialiased;\n}\n\n#frame {\n  width: 100%;\n  height: 92vh;\n  min-height: 300px;\n  max-height: 720px;\n  background: #E6EAEA;\n}\n\n@media screen and (max-width: 360px) {\n  #frame {\n    width: 100%;\n    height: 100vh;\n  }\n}\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel {\n    width: 58px;\n    min-width: 58px;\n  }\n}\n\n#frame #sidepanel #profile {\n  width: 100%;\n  margin: 25px auto;\n}\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #profile {\n    width: 100%;\n    margin: 0 auto;\n    padding: 5px 0 0 0;\n    background: #32465a;\n  }\n}\n\n#frame #sidepanel #profile.expanded .wrap {\n  height: 210px;\n  line-height: initial;\n}\n\n#frame #sidepanel #profile.expanded .wrap p {\n  margin-top: 20px;\n}\n\n#frame #sidepanel #profile.expanded .wrap i.expand-button {\n  -webkit-transform: scaleY(-1);\n  transform: scaleY(-1);\n  -webkit-filter: FlipH;\n          filter: FlipH;\n  -ms-filter: \"FlipH\";\n}\n\n#frame #sidepanel #profile .wrap {\n  height: 60px;\n  line-height: 60px;\n  overflow: hidden;\n  -webkit-transition: 0.3s height ease;\n  transition: 0.3s height ease;\n}\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #profile .wrap {\n    height: 55px;\n  }\n}\n\n#frame #sidepanel #profile .wrap img {\n  width: 50px;\n  border-radius: 50%;\n  padding: 3px;\n  border: 2px solid #e74c3c;\n  height: auto;\n  float: left;\n  cursor: pointer;\n  -webkit-transition: 0.3s border ease;\n  transition: 0.3s border ease;\n}\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #profile .wrap img {\n    width: 40px;\n    margin-left: 4px;\n  }\n}\n\n#frame #sidepanel #profile .wrap img.online {\n  border: 2px solid #2ecc71;\n}\n\n#frame #sidepanel #profile .wrap img.away {\n  border: 2px solid #f1c40f;\n}\n\n#frame #sidepanel #profile .wrap img.busy {\n  border: 2px solid #e74c3c;\n}\n\n#frame #sidepanel #profile .wrap img.offline {\n  border: 2px solid #95a5a6;\n}\n\n#frame #sidepanel #profile .wrap p {\n  float: left;\n  margin-left: 15px;\n}\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #profile .wrap p {\n    display: none;\n  }\n}\n\n#frame #sidepanel #profile .wrap i.expand-button {\n  float: right;\n  margin-top: 23px;\n  font-size: 0.8em;\n  cursor: pointer;\n  color: #435f7a;\n}\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #profile .wrap i.expand-button {\n    display: none;\n  }\n}\n\n#frame #sidepanel #profile .wrap #status-options {\n  position: absolute;\n  opacity: 0;\n  visibility: hidden;\n  width: 150px;\n  margin: 70px 0 0 0;\n  border-radius: 6px;\n  z-index: 99;\n  line-height: initial;\n  background: #435f7a;\n  -webkit-transition: 0.3s all ease;\n  transition: 0.3s all ease;\n}\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #profile .wrap #status-options {\n    width: 58px;\n    margin-top: 57px;\n  }\n}\n\n#frame #sidepanel #profile .wrap #status-options.active {\n  opacity: 1;\n  visibility: visible;\n  margin: 75px 0 0 0;\n}\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #profile .wrap #status-options.active {\n    margin-top: 62px;\n  }\n}\n\n#frame #sidepanel #profile .wrap #status-options:before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-bottom: 8px solid #435f7a;\n  margin: -8px 0 0 24px;\n}\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #profile .wrap #status-options:before {\n    margin-left: 23px;\n  }\n}\n\n#frame #sidepanel #profile .wrap #status-options ul {\n  overflow: hidden;\n  border-radius: 6px;\n}\n\n#frame #sidepanel #profile .wrap #status-options ul li {\n  padding: 15px 0 30px 18px;\n  display: block;\n  cursor: pointer;\n}\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #profile .wrap #status-options ul li {\n    padding: 15px 0 35px 22px;\n  }\n}\n\n#frame #sidepanel #profile .wrap #status-options ul li:hover {\n  background: #496886;\n}\n\n#frame #sidepanel #profile .wrap #status-options ul li span.status-circle {\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  margin: 5px 0 0 0;\n}\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #profile .wrap #status-options ul li span.status-circle {\n    width: 14px;\n    height: 14px;\n  }\n}\n\n#frame #sidepanel #profile .wrap #status-options ul li span.status-circle:before {\n  content: \"\";\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  margin: -3px 0 0 -3px;\n  background: transparent;\n  border-radius: 50%;\n  z-index: 0;\n}\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #profile .wrap #status-options ul li span.status-circle:before {\n    height: 18px;\n    width: 18px;\n  }\n}\n\n#frame #sidepanel #profile .wrap #status-options ul li p {\n  padding-left: 12px;\n}\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #profile .wrap #status-options ul li p {\n    display: none;\n  }\n}\n\n#frame #sidepanel #profile .wrap #status-options ul li#status-online span.status-circle {\n  background: #2ecc71;\n}\n\n#frame #sidepanel #profile .wrap #status-options ul li#status-online.active span.status-circle:before {\n  border: 1px solid #2ecc71;\n}\n\n#frame #sidepanel #profile .wrap #status-options ul li#status-away span.status-circle {\n  background: #f1c40f;\n}\n\n#frame #sidepanel #profile .wrap #status-options ul li#status-away.active span.status-circle:before {\n  border: 1px solid #f1c40f;\n}\n\n#frame #sidepanel #profile .wrap #status-options ul li#status-busy span.status-circle {\n  background: #e74c3c;\n}\n\n#frame #sidepanel #profile .wrap #status-options ul li#status-busy.active span.status-circle:before {\n  border: 1px solid #e74c3c;\n}\n\n#frame #sidepanel #profile .wrap #status-options ul li#status-offline span.status-circle {\n  background: #95a5a6;\n}\n\n#frame #sidepanel #profile .wrap #status-options ul li#status-offline.active span.status-circle:before {\n  border: 1px solid #95a5a6;\n}\n\n#frame #sidepanel #profile .wrap #expanded {\n  padding: 100px 0 0 0;\n  display: block;\n  line-height: initial !important;\n}\n\n#frame #sidepanel #profile .wrap #expanded label {\n  float: left;\n  clear: both;\n  margin: 0 8px 5px 0;\n  padding: 5px 0;\n}\n\n#frame #sidepanel #profile .wrap #expanded input {\n  border: none;\n  margin-bottom: 6px;\n  background: #32465a;\n  border-radius: 3px;\n  color: #f5f5f5;\n  padding: 7px;\n  width: calc(100% - 43px);\n}\n\n#frame #sidepanel #profile .wrap #expanded input:focus {\n  outline: none;\n  background: #435f7a;\n}\n\n#frame #sidepanel #search {\n  border-top: 1px solid #32465a;\n  border-bottom: 1px solid #32465a;\n  font-weight: 300;\n}\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #search {\n    display: none;\n  }\n}\n\n#frame #sidepanel #search label {\n  position: absolute;\n  margin: 10px 0 0 20px;\n}\n\n#frame #sidepanel #search input {\n  font-family: \"proxima-nova\", \"Source Sans Pro\", sans-serif;\n  padding: 10px 0 10px 46px;\n  width: calc(100% - 25px);\n  border: none;\n  background: #32465a;\n  color: #f5f5f5;\n}\n\n#frame #sidepanel #search input:focus {\n  outline: none;\n  background: #435f7a;\n}\n\n#frame #sidepanel #search input::-webkit-input-placeholder {\n  color: #f5f5f5;\n}\n\n#frame #sidepanel #search input::-moz-placeholder {\n  color: #f5f5f5;\n}\n\n#frame #sidepanel #search input:-ms-input-placeholder {\n  color: #f5f5f5;\n}\n\n#frame #sidepanel #search input:-moz-placeholder {\n  color: #f5f5f5;\n}\n\n#frame #sidepanel #contacts {\n  height: calc(100% - 177px);\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #contacts {\n    height: calc(100% - 149px);\n    overflow-y: scroll;\n    overflow-x: hidden;\n  }\n\n  #frame #sidepanel #contacts::-webkit-scrollbar {\n    display: none;\n  }\n}\n\n#frame #sidepanel #contacts.expanded {\n  height: calc(100% - 334px);\n}\n\n#frame #sidepanel #contacts::-webkit-scrollbar {\n  width: 8px;\n  background: #2c3e50;\n}\n\n#frame #sidepanel #contacts::-webkit-scrollbar-thumb {\n  background-color: #243140;\n}\n\n#frame #sidepanel #contacts ul li.contact {\n  position: relative;\n  padding: 10px 0 15px 0;\n  font-size: 0.9em;\n  cursor: pointer;\n}\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #contacts ul li.contact {\n    padding: 6px 0 46px 8px;\n  }\n}\n\n#frame #sidepanel #contacts ul li.contact:hover {\n  background: #32465a;\n}\n\n#frame #sidepanel #contacts ul li.contact.active {\n  background: #32465a;\n  border-right: 5px solid #435f7a;\n}\n\n#frame #sidepanel #contacts ul li.contact.active span.contact-status {\n  border: 2px solid #32465a !important;\n}\n\n#frame #sidepanel #contacts ul li.contact .wrap {\n  width: 88%;\n  margin: 0 auto;\n  position: relative;\n}\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #contacts ul li.contact .wrap {\n    width: 100%;\n  }\n}\n\n#frame #sidepanel #contacts ul li.contact .wrap span {\n  position: absolute;\n  left: 0;\n  margin: -2px 0 0 -2px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  border: 2px solid #2c3e50;\n  background: #95a5a6;\n}\n\n#frame #sidepanel #contacts ul li.contact .wrap span.online {\n  background: #2ecc71;\n}\n\n#frame #sidepanel #contacts ul li.contact .wrap span.away {\n  background: #f1c40f;\n}\n\n#frame #sidepanel #contacts ul li.contact .wrap span.busy {\n  background: #e74c3c;\n}\n\n#frame #sidepanel #contacts ul li.contact .wrap img {\n  width: 40px;\n  border-radius: 50%;\n  float: left;\n  margin-right: 10px;\n}\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #contacts ul li.contact .wrap img {\n    margin-right: 0px;\n  }\n}\n\n#frame #sidepanel #contacts ul li.contact .wrap .meta {\n  padding: 5px 0 0 0;\n}\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #contacts ul li.contact .wrap .meta {\n    display: none;\n  }\n}\n\n#frame #sidepanel #contacts ul li.contact .wrap .meta .name {\n  font-weight: 600;\n}\n\n#frame #sidepanel #contacts ul li.contact .wrap .meta .preview {\n  margin: 5px 0 0 0;\n  padding: 0 0 1px;\n  font-weight: 400;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  -webkit-transition: 1s all ease;\n  transition: 1s all ease;\n}\n\n#frame #sidepanel #contacts ul li.contact .wrap .meta .preview span {\n  position: initial;\n  border-radius: initial;\n  background: none;\n  border: none;\n  padding: 0 2px 0 0;\n  margin: 0 0 0 1px;\n  opacity: 0.5;\n}\n\n#frame #sidepanel #bottom-bar {\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n}\n\n#frame #sidepanel #bottom-bar button {\n  float: left;\n  border: none;\n  width: 50%;\n  padding: 10px 0;\n  background: #32465a;\n  color: #f5f5f5;\n  cursor: pointer;\n  font-size: 0.85em;\n  font-family: \"proxima-nova\", \"Source Sans Pro\", sans-serif;\n}\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #bottom-bar button {\n    float: none;\n    width: 100%;\n    padding: 15px 0;\n  }\n}\n\n#frame #sidepanel #bottom-bar button:focus {\n  outline: none;\n}\n\n#frame #sidepanel #bottom-bar button:nth-child(1) {\n  border-right: 1px solid #2c3e50;\n}\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #bottom-bar button:nth-child(1) {\n    border-right: none;\n    border-bottom: 1px solid #2c3e50;\n  }\n}\n\n#frame #sidepanel #bottom-bar button:hover {\n  background: #435f7a;\n}\n\n#frame #sidepanel #bottom-bar button i {\n  margin-right: 3px;\n  font-size: 1em;\n}\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #bottom-bar button i {\n    font-size: 1.3em;\n  }\n}\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #bottom-bar button span {\n    display: none;\n  }\n}\n\n#frame .content {\n  float: right;\n  width: 100% !important;\n  height: 100%;\n  overflow: hidden;\n  position: relative;\n}\n\n@media screen and (max-width: 735px) {\n  #frame .content {\n    width: 100%;\n    min-width: 300px !important;\n  }\n}\n\n@media screen and (min-width: 900px) {\n  #frame .content {\n    width: calc(100% - 340px);\n  }\n}\n\n#frame .content .contact-profile {\n  width: 100%;\n  height: 60px;\n  line-height: 60px;\n  background: #c2b230;\n}\n\n#frame .content .contact-profile img {\n  width: 40px;\n  border-radius: 50%;\n  float: left;\n  margin: 9px 12px 0 9px;\n}\n\n#frame .content .contact-profile p {\n  float: left;\n}\n\n#frame .content .contact-profile .social-media {\n  float: right;\n}\n\n#frame .content .contact-profile .social-media i {\n  margin-left: 14px;\n  cursor: pointer;\n}\n\n#frame .content .contact-profile .social-media i:nth-last-child(1) {\n  margin-right: 20px;\n}\n\n#frame .content .contact-profile .social-media i:hover {\n  color: #435f7a;\n}\n\n#frame .content .messages {\n  height: auto;\n  min-height: calc(100% - 93px);\n  max-height: calc(100% - 93px);\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n\n@media screen and (max-width: 735px) {\n  #frame .content .messages {\n    max-height: calc(100% - 105px);\n  }\n}\n\n#frame .content .messages::-webkit-scrollbar {\n  width: 8px;\n  background: transparent;\n}\n\n#frame .content .messages::-webkit-scrollbar-thumb {\n  background-color: rgba(0, 0, 0, 0.3);\n}\n\n#frame .content .messages ul li {\n  display: inline-block;\n  clear: both;\n  float: left;\n  margin: 15px 15px 5px 15px;\n  font-size: 0.9em;\n}\n\n#frame .content .messages ul li:nth-last-child(1) {\n  margin-bottom: 50px;\n}\n\n#frame .content .messages ul li.sent img {\n  margin: 6px 8px 0 0;\n}\n\n#frame .content .messages ul li.sent p {\n  background: #535f2a;\n  color: #f5f5f5;\n}\n\n#frame .content .messages ul li.replies img {\n  float: right;\n  margin: 6px 0 0 8px;\n}\n\n#frame .content .messages ul li.replies p {\n  background: #f5f5f5;\n  float: right;\n}\n\n#frame .content .messages ul li img {\n  width: 22px;\n  border-radius: 50%;\n  float: left;\n}\n\n#frame .content .messages ul li p {\n  display: inline-block;\n  padding: 10px 15px;\n  border-radius: 20px;\n  line-height: 130%;\n}\n\n@media screen and (min-width: 735px) {\n  #frame .content .messages ul li p {\n    max-width: 300px;\n  }\n}\n\n#frame .content .message-input {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  z-index: 99;\n  background: #fffdfd;\n  border: 1px solid #f5f5f5;\n}\n\n#frame .content .message-input .wrap {\n  position: relative;\n}\n\n#frame .content .message-input .wrap input {\n  font-family: \"proxima-nova\", \"Source Sans Pro\", sans-serif;\n  float: left;\n  border: none;\n  width: calc(100% - 90px);\n  padding: 11px 32px 10px 8px;\n  font-size: 0.8em;\n  color: #32465a;\n}\n\n@media screen and (max-width: 735px) {\n  #frame .content .message-input .wrap input {\n    padding: 15px 32px 16px 8px;\n  }\n}\n\n#frame .content .message-input .wrap input:focus {\n  outline: none;\n}\n\n#frame .content .message-input .wrap .attachment {\n  position: absolute;\n  right: 60px;\n  z-index: 4;\n  margin-top: 10px;\n  font-size: 1.1em;\n  color: #435f7a;\n  opacity: 0.5;\n  cursor: pointer;\n}\n\n@media screen and (max-width: 735px) {\n  #frame .content .message-input .wrap .attachment {\n    margin-top: 17px;\n    right: 65px;\n  }\n}\n\n#frame .content .message-input .wrap .attachment:hover {\n  opacity: 1;\n}\n\n#frame .content .message-input .wrap button {\n  float: right;\n  border: none;\n  width: 50px;\n  padding: 12px 0;\n  cursor: pointer;\n  background: #28a745;\n  color: #f5f5f5;\n}\n\n@media screen and (max-width: 735px) {\n  #frame .content .message-input .wrap button {\n    padding: 16px 0;\n  }\n}\n\n#frame .content .message-input .wrap button:hover {\n  background: #435f7a;\n}\n\n#frame .content .message-input .wrap button:focus {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3Vuc2VsbG9yY2xpZW50bWVzc2FnZS9EOlxcYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjb3Vuc2VsbG9yY2xpZW50bWVzc2FnZVxcY291bnNlbGxvcmNsaWVudG1lc3NhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY291bnNlbGxvcmNsaWVudG1lc3NhZ2UvY291bnNlbGxvcmNsaWVudG1lc3NhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwREFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLDZDQUFBO0VBQ0EsbUNBQUE7QUNDSjs7QURFRTtFQUNFLFdBQUE7RUFFQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDQUo7O0FERUU7RUFDRTtJQUNFLFdBQUE7SUFDQSxhQUFBO0VDQ0o7QUFDRjs7QURFRTtFQUNFO0lBQ0UsV0FBQTtJQUNBLGVBQUE7RUNBSjtBQUNGOztBREVFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FDQUo7O0FERUU7RUFDRTtJQUNFLFdBQUE7SUFDQSxjQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtFQ0NKO0FBQ0Y7O0FEQ0U7RUFDRSxhQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURDRTtFQUNFLGdCQUFBO0FDRUo7O0FEQUU7RUFHRSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7VUFBQSxhQUFBO0VBQ0EsbUJBQUE7QUNHSjs7QURERTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBR0Esb0NBQUE7RUFDQSw0QkFBQTtBQ0lKOztBREZFO0VBQ0U7SUFDRSxZQUFBO0VDS0o7QUFDRjs7QURIRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUdBLG9DQUFBO0VBQ0EsNEJBQUE7QUNLSjs7QURIRTtFQUNFO0lBQ0UsV0FBQTtJQUNBLGdCQUFBO0VDTUo7QUFDRjs7QURKRTtFQUNFLHlCQUFBO0FDTUo7O0FESkU7RUFDRSx5QkFBQTtBQ09KOztBRExFO0VBQ0UseUJBQUE7QUNRSjs7QURORTtFQUNFLHlCQUFBO0FDU0o7O0FEUEU7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUNVSjs7QURSRTtFQUNFO0lBQ0UsYUFBQTtFQ1dKO0FBQ0Y7O0FEVEU7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDV0o7O0FEVEU7RUFDRTtJQUNFLGFBQUE7RUNZSjtBQUNGOztBRFZFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBR0EsaUNBQUE7RUFDQSx5QkFBQTtBQ1lKOztBRFZFO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsZ0JBQUE7RUNhSjtBQUNGOztBRFhFO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNhSjs7QURYRTtFQUNFO0lBQ0UsZ0JBQUE7RUNjSjtBQUNGOztBRFpFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQkFBQTtBQ2NKOztBRFpFO0VBQ0U7SUFDRSxpQkFBQTtFQ2VKO0FBQ0Y7O0FEYkU7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FDZUo7O0FEYkU7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDZ0JKOztBRGRFO0VBQ0U7SUFDRSx5QkFBQTtFQ2lCSjtBQUNGOztBRGZFO0VBQ0UsbUJBQUE7QUNpQko7O0FEZkU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ2tCSjs7QURoQkU7RUFDRTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VDbUJKO0FBQ0Y7O0FEakJFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDbUJKOztBRGpCRTtFQUNFO0lBQ0UsWUFBQTtJQUNBLFdBQUE7RUNvQko7QUFDRjs7QURsQkU7RUFDRSxrQkFBQTtBQ29CSjs7QURsQkU7RUFDRTtJQUNFLGFBQUE7RUNxQko7QUFDRjs7QURuQkU7RUFDRSxtQkFBQTtBQ3FCSjs7QURuQkU7RUFDRSx5QkFBQTtBQ3NCSjs7QURwQkU7RUFDRSxtQkFBQTtBQ3VCSjs7QURyQkU7RUFDRSx5QkFBQTtBQ3dCSjs7QUR0QkU7RUFDRSxtQkFBQTtBQ3lCSjs7QUR2QkU7RUFDRSx5QkFBQTtBQzBCSjs7QUR4QkU7RUFDRSxtQkFBQTtBQzJCSjs7QUR6QkU7RUFDRSx5QkFBQTtBQzRCSjs7QUQxQkU7RUFDRSxvQkFBQTtFQUNBLGNBQUE7RUFDQSwrQkFBQTtBQzZCSjs7QUQzQkU7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQzhCSjs7QUQ1QkU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtBQytCSjs7QUQ3QkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNnQ0o7O0FEOUJFO0VBQ0UsNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0FDaUNKOztBRC9CRTtFQUNFO0lBQ0UsYUFBQTtFQ2tDSjtBQUNGOztBRGhDRTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7QUNrQ0o7O0FEaENFO0VBQ0UsMERBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ21DSjs7QURqQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNvQ0o7O0FEbENFO0VBQ0UsY0FBQTtBQ3FDSjs7QURuQ0U7RUFDRSxjQUFBO0FDc0NKOztBRHBDRTtFQUNFLGNBQUE7QUN1Q0o7O0FEckNFO0VBQ0UsY0FBQTtBQ3dDSjs7QUR0Q0U7RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUN5Q0o7O0FEdkNFO0VBQ0U7SUFDRSwwQkFBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7RUMwQ0o7O0VEeENFO0lBQ0UsYUFBQTtFQzJDSjtBQUNGOztBRHpDRTtFQUNFLDBCQUFBO0FDMkNKOztBRHpDRTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtBQzRDSjs7QUQxQ0U7RUFDRSx5QkFBQTtBQzZDSjs7QUQzQ0U7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDOENKOztBRDVDRTtFQUNFO0lBQ0UsdUJBQUE7RUMrQ0o7QUFDRjs7QUQ3Q0U7RUFDRSxtQkFBQTtBQytDSjs7QUQ3Q0U7RUFDRSxtQkFBQTtFQUNBLCtCQUFBO0FDZ0RKOztBRDlDRTtFQUNFLG9DQUFBO0FDaURKOztBRC9DRTtFQUNFLFVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNrREo7O0FEaERFO0VBQ0U7SUFDRSxXQUFBO0VDbURKO0FBQ0Y7O0FEakRFO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ21ESjs7QURqREU7RUFDRSxtQkFBQTtBQ29ESjs7QURsREU7RUFDRSxtQkFBQTtBQ3FESjs7QURuREU7RUFDRSxtQkFBQTtBQ3NESjs7QURwREU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUN1REo7O0FEckRFO0VBQ0U7SUFDRSxpQkFBQTtFQ3dESjtBQUNGOztBRHRERTtFQUNFLGtCQUFBO0FDd0RKOztBRHRERTtFQUNFO0lBQ0UsYUFBQTtFQ3lESjtBQUNGOztBRHZERTtFQUNFLGdCQUFBO0FDeURKOztBRHZERTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUdBLCtCQUFBO0VBQ0EsdUJBQUE7QUMwREo7O0FEeERFO0VBQ0UsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDMkRKOztBRHpERTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUM0REo7O0FEMURFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDBEQUFBO0FDNkRKOztBRDNERTtFQUNFO0lBQ0UsV0FBQTtJQUNBLFdBQUE7SUFDQSxlQUFBO0VDOERKO0FBQ0Y7O0FENURFO0VBQ0UsYUFBQTtBQzhESjs7QUQ1REU7RUFDRSwrQkFBQTtBQytESjs7QUQ3REU7RUFDRTtJQUNFLGtCQUFBO0lBQ0EsZ0NBQUE7RUNnRUo7QUFDRjs7QUQ5REU7RUFDRSxtQkFBQTtBQ2dFSjs7QUQ5REU7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUNpRUo7O0FEL0RFO0VBQ0U7SUFDRSxnQkFBQTtFQ2tFSjtBQUNGOztBRGhFRTtFQUNFO0lBQ0UsYUFBQTtFQ2tFSjtBQUNGOztBRGhFRTtFQUNFLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDa0VKOztBRGhFRTtFQUNFO0lBQ0UsV0FBQTtJQUNBLDJCQUFBO0VDbUVKO0FBQ0Y7O0FEakVFO0VBQ0U7SUFDRSx5QkFBQTtFQ21FSjtBQUNGOztBRGpFRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ21FSjs7QURqRUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUNvRUo7O0FEbEVFO0VBQ0UsV0FBQTtBQ3FFSjs7QURuRUU7RUFDRSxZQUFBO0FDc0VKOztBRHBFRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQ3VFSjs7QURyRUU7RUFDRSxrQkFBQTtBQ3dFSjs7QUR0RUU7RUFDRSxjQUFBO0FDeUVKOztBRHZFRTtFQUNFLFlBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQzBFSjs7QUR4RUU7RUFDRTtJQUNFLDhCQUFBO0VDMkVKO0FBQ0Y7O0FEekVFO0VBQ0UsVUFBQTtFQUNBLHVCQUFBO0FDMkVKOztBRHpFRTtFQUNFLG9DQUFBO0FDNEVKOztBRDFFRTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUVBLGdCQUFBO0FDNEVKOztBRDFFRTtFQUNFLG1CQUFBO0FDNkVKOztBRDNFRTtFQUNFLG1CQUFBO0FDOEVKOztBRDVFRTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQytFSjs7QUQ3RUU7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUNnRko7O0FEOUVFO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FDaUZKOztBRC9FRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNrRko7O0FEaEZFO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNtRko7O0FEakZFO0VBQ0U7SUFDRSxnQkFBQTtFQ29GSjtBQUNGOztBRGxGRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQ29GSjs7QURsRkU7RUFDRSxrQkFBQTtBQ3FGSjs7QURuRkU7RUFDRSwwREFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ3NGSjs7QURwRkU7RUFDRTtJQUNFLDJCQUFBO0VDdUZKO0FBQ0Y7O0FEckZFO0VBQ0UsYUFBQTtBQ3VGSjs7QURyRkU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ3dGSjs7QUR0RkU7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsV0FBQTtFQ3lGSjtBQUNGOztBRHZGRTtFQUNFLFVBQUE7QUN5Rko7O0FEdkZFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUMwRko7O0FEeEZFO0VBQ0U7SUFDRSxlQUFBO0VDMkZKO0FBQ0Y7O0FEekZFO0VBQ0UsbUJBQUE7QUMyRko7O0FEekZFO0VBQ0UsYUFBQTtBQzRGSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY291bnNlbGxvcmNsaWVudG1lc3NhZ2UvY291bnNlbGxvcmNsaWVudG1lc3NhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZDogIzI3YWU2MDtcbiAgICBmb250LWZhbWlseTogXCJwcm94aW1hLW5vdmFcIiwgXCJTb3VyY2UgU2FucyBQcm9cIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xcHg7XG4gICAgY29sb3I6ICMzMjQ2NWE7XG4gICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjAwNCk7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIH1cbiAgXG4gICNmcmFtZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgXG4gICAgaGVpZ2h0OiA5MnZoO1xuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICAgIG1heC1oZWlnaHQ6IDcyMHB4O1xuICAgIGJhY2tncm91bmQ6ICNFNkVBRUE7XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcbiAgICAjZnJhbWUge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNXB4KSB7XG4gICAgI2ZyYW1lICNzaWRlcGFuZWwge1xuICAgICAgd2lkdGg6IDU4cHg7XG4gICAgICBtaW4td2lkdGg6IDU4cHg7XG4gICAgfVxuICB9XG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDI1cHggYXV0bztcbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzVweCkge1xuICAgICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICBwYWRkaW5nOiA1cHggMCAwIDA7XG4gICAgICBiYWNrZ3JvdW5kOiAjMzI0NjVhO1xuICAgIH1cbiAgfVxuICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZS5leHBhbmRlZCAud3JhcCB7XG4gICAgaGVpZ2h0OiAyMTBweDtcbiAgICBsaW5lLWhlaWdodDogaW5pdGlhbDtcbiAgfVxuICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZS5leHBhbmRlZCAud3JhcCBwIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlLmV4cGFuZGVkIC53cmFwIGkuZXhwYW5kLWJ1dHRvbiB7XG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlWSgtMSk7XG4gICAgLW8tdHJhbnNmb3JtOiBzY2FsZVkoLTEpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoLTEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGVZKC0xKTtcbiAgICBmaWx0ZXI6IEZsaXBIO1xuICAgIC1tcy1maWx0ZXI6IFwiRmxpcEhcIjtcbiAgfVxuICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCB7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLW1vei10cmFuc2l0aW9uOiAwLjNzIGhlaWdodCBlYXNlO1xuICAgIC1vLXRyYW5zaXRpb246IDAuM3MgaGVpZ2h0IGVhc2U7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzIGhlaWdodCBlYXNlO1xuICAgIHRyYW5zaXRpb246IDAuM3MgaGVpZ2h0IGVhc2U7XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcbiAgICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCB7XG4gICAgICBoZWlnaHQ6IDU1cHg7XG4gICAgfVxuICB9XG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwIGltZyB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBhZGRpbmc6IDNweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZTc0YzNjO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBmbG9hdDogbGVmdDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLW1vei10cmFuc2l0aW9uOiAwLjNzIGJvcmRlciBlYXNlO1xuICAgIC1vLXRyYW5zaXRpb246IDAuM3MgYm9yZGVyIGVhc2U7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzIGJvcmRlciBlYXNlO1xuICAgIHRyYW5zaXRpb246IDAuM3MgYm9yZGVyIGVhc2U7XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcbiAgICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCBpbWcge1xuICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgIH1cbiAgfVxuICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCBpbWcub25saW5lIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMmVjYzcxO1xuICB9XG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwIGltZy5hd2F5IHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZjFjNDBmO1xuICB9XG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwIGltZy5idXN5IHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZTc0YzNjO1xuICB9XG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwIGltZy5vZmZsaW5lIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjOTVhNWE2O1xuICB9XG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwIHAge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNXB4KSB7XG4gICAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgcCB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCBpLmV4cGFuZC1idXR0b24ge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tdG9wOiAyM3B4O1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiAjNDM1ZjdhO1xuICB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNXB4KSB7XG4gICAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgaS5leHBhbmQtYnV0dG9uIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNzdGF0dXMtb3B0aW9ucyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBtYXJnaW46IDcwcHggMCAwIDA7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIHotaW5kZXg6IDk5O1xuICAgIGxpbmUtaGVpZ2h0OiBpbml0aWFsO1xuICAgIGJhY2tncm91bmQ6ICM0MzVmN2E7XG4gICAgLW1vei10cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlO1xuICAgIC1vLXRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2U7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlO1xuICAgIHRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2U7XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcbiAgICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjc3RhdHVzLW9wdGlvbnMge1xuICAgICAgd2lkdGg6IDU4cHg7XG4gICAgICBtYXJnaW4tdG9wOiA1N3B4O1xuICAgIH1cbiAgfVxuICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjc3RhdHVzLW9wdGlvbnMuYWN0aXZlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgbWFyZ2luOiA3NXB4IDAgMCAwO1xuICB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNXB4KSB7XG4gICAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI3N0YXR1cy1vcHRpb25zLmFjdGl2ZSB7XG4gICAgICBtYXJnaW4tdG9wOiA2MnB4O1xuICAgIH1cbiAgfVxuICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjc3RhdHVzLW9wdGlvbnM6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlci1sZWZ0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkICM0MzVmN2E7XG4gICAgbWFyZ2luOiAtOHB4IDAgMCAyNHB4O1xuICB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNXB4KSB7XG4gICAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI3N0YXR1cy1vcHRpb25zOmJlZm9yZSB7XG4gICAgICBtYXJnaW4tbGVmdDogMjNweDtcbiAgICB9XG4gIH1cbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI3N0YXR1cy1vcHRpb25zIHVsIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgfVxuICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjc3RhdHVzLW9wdGlvbnMgdWwgbGkge1xuICAgIHBhZGRpbmc6IDE1cHggMCAzMHB4IDE4cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNXB4KSB7XG4gICAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI3N0YXR1cy1vcHRpb25zIHVsIGxpIHtcbiAgICAgIHBhZGRpbmc6IDE1cHggMCAzNXB4IDIycHg7XG4gICAgfVxuICB9XG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNzdGF0dXMtb3B0aW9ucyB1bCBsaTpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzQ5Njg4NjtcbiAgfVxuICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjc3RhdHVzLW9wdGlvbnMgdWwgbGkgc3Bhbi5zdGF0dXMtY2lyY2xlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBtYXJnaW46IDVweCAwIDAgMDtcbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzVweCkge1xuICAgICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNzdGF0dXMtb3B0aW9ucyB1bCBsaSBzcGFuLnN0YXR1cy1jaXJjbGUge1xuICAgICAgd2lkdGg6IDE0cHg7XG4gICAgICBoZWlnaHQ6IDE0cHg7XG4gICAgfVxuICB9XG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNzdGF0dXMtb3B0aW9ucyB1bCBsaSBzcGFuLnN0YXR1cy1jaXJjbGU6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDE0cHg7XG4gICAgaGVpZ2h0OiAxNHB4O1xuICAgIG1hcmdpbjogLTNweCAwIDAgLTNweDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgei1pbmRleDogMDtcbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzVweCkge1xuICAgICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNzdGF0dXMtb3B0aW9ucyB1bCBsaSBzcGFuLnN0YXR1cy1jaXJjbGU6YmVmb3JlIHtcbiAgICAgIGhlaWdodDogMThweDtcbiAgICAgIHdpZHRoOiAxOHB4O1xuICAgIH1cbiAgfVxuICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjc3RhdHVzLW9wdGlvbnMgdWwgbGkgcCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuICB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNXB4KSB7XG4gICAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI3N0YXR1cy1vcHRpb25zIHVsIGxpIHAge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI3N0YXR1cy1vcHRpb25zIHVsIGxpI3N0YXR1cy1vbmxpbmUgc3Bhbi5zdGF0dXMtY2lyY2xlIHtcbiAgICBiYWNrZ3JvdW5kOiAjMmVjYzcxO1xuICB9XG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNzdGF0dXMtb3B0aW9ucyB1bCBsaSNzdGF0dXMtb25saW5lLmFjdGl2ZSBzcGFuLnN0YXR1cy1jaXJjbGU6YmVmb3JlIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMmVjYzcxO1xuICB9XG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNzdGF0dXMtb3B0aW9ucyB1bCBsaSNzdGF0dXMtYXdheSBzcGFuLnN0YXR1cy1jaXJjbGUge1xuICAgIGJhY2tncm91bmQ6ICNmMWM0MGY7XG4gIH1cbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI3N0YXR1cy1vcHRpb25zIHVsIGxpI3N0YXR1cy1hd2F5LmFjdGl2ZSBzcGFuLnN0YXR1cy1jaXJjbGU6YmVmb3JlIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFjNDBmO1xuICB9XG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNzdGF0dXMtb3B0aW9ucyB1bCBsaSNzdGF0dXMtYnVzeSBzcGFuLnN0YXR1cy1jaXJjbGUge1xuICAgIGJhY2tncm91bmQ6ICNlNzRjM2M7XG4gIH1cbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI3N0YXR1cy1vcHRpb25zIHVsIGxpI3N0YXR1cy1idXN5LmFjdGl2ZSBzcGFuLnN0YXR1cy1jaXJjbGU6YmVmb3JlIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTc0YzNjO1xuICB9XG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNzdGF0dXMtb3B0aW9ucyB1bCBsaSNzdGF0dXMtb2ZmbGluZSBzcGFuLnN0YXR1cy1jaXJjbGUge1xuICAgIGJhY2tncm91bmQ6ICM5NWE1YTY7XG4gIH1cbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI3N0YXR1cy1vcHRpb25zIHVsIGxpI3N0YXR1cy1vZmZsaW5lLmFjdGl2ZSBzcGFuLnN0YXR1cy1jaXJjbGU6YmVmb3JlIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTVhNWE2O1xuICB9XG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNleHBhbmRlZCB7XG4gICAgcGFkZGluZzogMTAwcHggMCAwIDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbGluZS1oZWlnaHQ6IGluaXRpYWwgIWltcG9ydGFudDtcbiAgfVxuICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjZXhwYW5kZWQgbGFiZWwge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGNsZWFyOiBib3RoO1xuICAgIG1hcmdpbjogMCA4cHggNXB4IDA7XG4gICAgcGFkZGluZzogNXB4IDA7XG4gIH1cbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI2V4cGFuZGVkIGlucHV0IHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICAgIGJhY2tncm91bmQ6ICMzMjQ2NWE7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGNvbG9yOiAjZjVmNWY1O1xuICAgIHBhZGRpbmc6IDdweDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNDNweCk7XG4gIH1cbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI2V4cGFuZGVkIGlucHV0OmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJhY2tncm91bmQ6ICM0MzVmN2E7XG4gIH1cbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3NlYXJjaCB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMzMjQ2NWE7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMjQ2NWE7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzVweCkge1xuICAgICNmcmFtZSAjc2lkZXBhbmVsICNzZWFyY2gge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3NlYXJjaCBsYWJlbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbjogMTBweCAwIDAgMjBweDtcbiAgfVxuICAjZnJhbWUgI3NpZGVwYW5lbCAjc2VhcmNoIGlucHV0IHtcbiAgICBmb250LWZhbWlseTogXCJwcm94aW1hLW5vdmFcIiwgIFwiU291cmNlIFNhbnMgUHJvXCIsIHNhbnMtc2VyaWY7XG4gICAgcGFkZGluZzogMTBweCAwIDEwcHggNDZweDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjVweCk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6ICMzMjQ2NWE7XG4gICAgY29sb3I6ICNmNWY1ZjU7XG4gIH1cbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3NlYXJjaCBpbnB1dDpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiAjNDM1ZjdhO1xuICB9XG4gICNmcmFtZSAjc2lkZXBhbmVsICNzZWFyY2ggaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjZjVmNWY1O1xuICB9XG4gICNmcmFtZSAjc2lkZXBhbmVsICNzZWFyY2ggaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjZjVmNWY1O1xuICB9XG4gICNmcmFtZSAjc2lkZXBhbmVsICNzZWFyY2ggaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogI2Y1ZjVmNTtcbiAgfVxuICAjZnJhbWUgI3NpZGVwYW5lbCAjc2VhcmNoIGlucHV0Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjZjVmNWY1O1xuICB9XG4gICNmcmFtZSAjc2lkZXBhbmVsICNjb250YWN0cyB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxNzdweCk7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzVweCkge1xuICAgICNmcmFtZSAjc2lkZXBhbmVsICNjb250YWN0cyB7XG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDE0OXB4KTtcbiAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICB9XG4gICAgI2ZyYW1lICNzaWRlcGFuZWwgI2NvbnRhY3RzOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuICAjZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHMuZXhwYW5kZWQge1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMzM0cHgpO1xuICB9XG4gICNmcmFtZSAjc2lkZXBhbmVsICNjb250YWN0czo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiA4cHg7XG4gICAgYmFja2dyb3VuZDogIzJjM2U1MDtcbiAgfVxuICAjZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQzMTQwO1xuICB9XG4gICNmcmFtZSAjc2lkZXBhbmVsICNjb250YWN0cyB1bCBsaS5jb250YWN0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMTBweCAwIDE1cHggMDtcbiAgICBmb250LXNpemU6IDAuOWVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzVweCkge1xuICAgICNmcmFtZSAjc2lkZXBhbmVsICNjb250YWN0cyB1bCBsaS5jb250YWN0IHtcbiAgICAgIHBhZGRpbmc6IDZweCAwIDQ2cHggOHB4O1xuICAgIH1cbiAgfVxuICAjZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHMgdWwgbGkuY29udGFjdDpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzMyNDY1YTtcbiAgfVxuICAjZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHMgdWwgbGkuY29udGFjdC5hY3RpdmUge1xuICAgIGJhY2tncm91bmQ6ICMzMjQ2NWE7XG4gICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgIzQzNWY3YTtcbiAgfVxuICAjZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHMgdWwgbGkuY29udGFjdC5hY3RpdmUgc3Bhbi5jb250YWN0LXN0YXR1cyB7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzMyNDY1YSAhaW1wb3J0YW50O1xuICB9XG4gICNmcmFtZSAjc2lkZXBhbmVsICNjb250YWN0cyB1bCBsaS5jb250YWN0IC53cmFwIHtcbiAgICB3aWR0aDogODglO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzVweCkge1xuICAgICNmcmFtZSAjc2lkZXBhbmVsICNjb250YWN0cyB1bCBsaS5jb250YWN0IC53cmFwIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuICAjZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHMgdWwgbGkuY29udGFjdCAud3JhcCBzcGFuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICBtYXJnaW46IC0ycHggMCAwIC0ycHg7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMmMzZTUwO1xuICAgIGJhY2tncm91bmQ6ICM5NWE1YTY7XG4gIH1cbiAgI2ZyYW1lICNzaWRlcGFuZWwgI2NvbnRhY3RzIHVsIGxpLmNvbnRhY3QgLndyYXAgc3Bhbi5vbmxpbmUge1xuICAgIGJhY2tncm91bmQ6ICMyZWNjNzE7XG4gIH1cbiAgI2ZyYW1lICNzaWRlcGFuZWwgI2NvbnRhY3RzIHVsIGxpLmNvbnRhY3QgLndyYXAgc3Bhbi5hd2F5IHtcbiAgICBiYWNrZ3JvdW5kOiAjZjFjNDBmO1xuICB9XG4gICNmcmFtZSAjc2lkZXBhbmVsICNjb250YWN0cyB1bCBsaS5jb250YWN0IC53cmFwIHNwYW4uYnVzeSB7XG4gICAgYmFja2dyb3VuZDogI2U3NGMzYztcbiAgfVxuICAjZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHMgdWwgbGkuY29udGFjdCAud3JhcCBpbWcge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcbiAgICAjZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHMgdWwgbGkuY29udGFjdCAud3JhcCBpbWcge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgfVxuICB9XG4gICNmcmFtZSAjc2lkZXBhbmVsICNjb250YWN0cyB1bCBsaS5jb250YWN0IC53cmFwIC5tZXRhIHtcbiAgICBwYWRkaW5nOiA1cHggMCAwIDA7XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcbiAgICAjZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHMgdWwgbGkuY29udGFjdCAud3JhcCAubWV0YSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuICAjZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHMgdWwgbGkuY29udGFjdCAud3JhcCAubWV0YSAubmFtZSB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxuICAjZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHMgdWwgbGkuY29udGFjdCAud3JhcCAubWV0YSAucHJldmlldyB7XG4gICAgbWFyZ2luOiA1cHggMCAwIDA7XG4gICAgcGFkZGluZzogMCAwIDFweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAtbW96LXRyYW5zaXRpb246IDFzIGFsbCBlYXNlO1xuICAgIC1vLXRyYW5zaXRpb246IDFzIGFsbCBlYXNlO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMXMgYWxsIGVhc2U7XG4gICAgdHJhbnNpdGlvbjogMXMgYWxsIGVhc2U7XG4gIH1cbiAgI2ZyYW1lICNzaWRlcGFuZWwgI2NvbnRhY3RzIHVsIGxpLmNvbnRhY3QgLndyYXAgLm1ldGEgLnByZXZpZXcgc3BhbiB7XG4gICAgcG9zaXRpb246IGluaXRpYWw7XG4gICAgYm9yZGVyLXJhZGl1czogaW5pdGlhbDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiAwIDJweCAwIDA7XG4gICAgbWFyZ2luOiAwIDAgMCAxcHg7XG4gICAgb3BhY2l0eTogLjU7XG4gIH1cbiAgI2ZyYW1lICNzaWRlcGFuZWwgI2JvdHRvbS1iYXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3R0b206IDA7XG4gIH1cbiAgI2ZyYW1lICNzaWRlcGFuZWwgI2JvdHRvbS1iYXIgYnV0dG9uIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgYmFja2dyb3VuZDogIzMyNDY1YTtcbiAgICBjb2xvcjogI2Y1ZjVmNTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAwLjg1ZW07XG4gICAgZm9udC1mYW1pbHk6IFwicHJveGltYS1ub3ZhXCIsICBcIlNvdXJjZSBTYW5zIFByb1wiLCBzYW5zLXNlcmlmO1xuICB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNXB4KSB7XG4gICAgI2ZyYW1lICNzaWRlcGFuZWwgI2JvdHRvbS1iYXIgYnV0dG9uIHtcbiAgICAgIGZsb2F0OiBub25lO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nOiAxNXB4IDA7XG4gICAgfVxuICB9XG4gICNmcmFtZSAjc2lkZXBhbmVsICNib3R0b20tYmFyIGJ1dHRvbjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuICAjZnJhbWUgI3NpZGVwYW5lbCAjYm90dG9tLWJhciBidXR0b246bnRoLWNoaWxkKDEpIHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMmMzZTUwO1xuICB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNXB4KSB7XG4gICAgI2ZyYW1lICNzaWRlcGFuZWwgI2JvdHRvbS1iYXIgYnV0dG9uOm50aC1jaGlsZCgxKSB7XG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzJjM2U1MDtcbiAgICB9XG4gIH1cbiAgI2ZyYW1lICNzaWRlcGFuZWwgI2JvdHRvbS1iYXIgYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjNDM1ZjdhO1xuICB9XG4gICNmcmFtZSAjc2lkZXBhbmVsICNib3R0b20tYmFyIGJ1dHRvbiBpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzVweCkge1xuICAgICNmcmFtZSAjc2lkZXBhbmVsICNib3R0b20tYmFyIGJ1dHRvbiBpIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgfVxuICB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNXB4KSB7XG4gICAgI2ZyYW1lICNzaWRlcGFuZWwgI2JvdHRvbS1iYXIgYnV0dG9uIHNwYW4ge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbiAgI2ZyYW1lIC5jb250ZW50IHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgd2lkdGg6IDEwMCUhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzVweCkge1xuICAgICNmcmFtZSAuY29udGVudCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1pbi13aWR0aDogMzAwcHggIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTAwcHgpIHtcbiAgICAjZnJhbWUgLmNvbnRlbnQge1xuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDM0MHB4KTtcbiAgICB9XG4gIH1cbiAgI2ZyYW1lIC5jb250ZW50IC5jb250YWN0LXByb2ZpbGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNjBweDtcbiAgICBsaW5lLWhlaWdodDogNjBweDtcbiAgICBiYWNrZ3JvdW5kOiAjYzJiMjMwO1xuICB9XG4gICNmcmFtZSAuY29udGVudCAuY29udGFjdC1wcm9maWxlIGltZyB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbjogOXB4IDEycHggMCA5cHg7XG4gIH1cbiAgI2ZyYW1lIC5jb250ZW50IC5jb250YWN0LXByb2ZpbGUgcCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cbiAgI2ZyYW1lIC5jb250ZW50IC5jb250YWN0LXByb2ZpbGUgLnNvY2lhbC1tZWRpYSB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICB9XG4gICNmcmFtZSAuY29udGVudCAuY29udGFjdC1wcm9maWxlIC5zb2NpYWwtbWVkaWEgaSB7XG4gICAgbWFyZ2luLWxlZnQ6IDE0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gICNmcmFtZSAuY29udGVudCAuY29udGFjdC1wcm9maWxlIC5zb2NpYWwtbWVkaWEgaTpudGgtbGFzdC1jaGlsZCgxKSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICB9XG4gICNmcmFtZSAuY29udGVudCAuY29udGFjdC1wcm9maWxlIC5zb2NpYWwtbWVkaWEgaTpob3ZlciB7XG4gICAgY29sb3I6ICM0MzVmN2E7XG4gIH1cbiAgI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlcyB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwJSAtIDkzcHgpO1xuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDkzcHgpO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcbiAgICAjZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2VzIHtcbiAgICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDEwNXB4KTtcbiAgICB9XG4gIH1cbiAgI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlczo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiA4cHg7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlczo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgfVxuICAjZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2VzIHVsIGxpIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luOiAxNXB4IDE1cHggNXB4IDE1cHg7XG4gXG4gICAgZm9udC1zaXplOiAwLjllbTtcbiAgfVxuICAjZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2VzIHVsIGxpOm50aC1sYXN0LWNoaWxkKDEpIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICB9XG4gICNmcmFtZSAuY29udGVudCAubWVzc2FnZXMgdWwgbGkuc2VudCBpbWcge1xuICAgIG1hcmdpbjogNnB4IDhweCAwIDA7XG4gIH1cbiAgI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlcyB1bCBsaS5zZW50IHAge1xuICAgIGJhY2tncm91bmQ6ICM1MzVmMmE7XG4gICAgY29sb3I6ICNmNWY1ZjU7XG4gIH1cbiAgI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlcyB1bCBsaS5yZXBsaWVzIGltZyB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbjogNnB4IDAgMCA4cHg7XG4gIH1cbiAgI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlcyB1bCBsaS5yZXBsaWVzIHAge1xuICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICB9XG4gICNmcmFtZSAuY29udGVudCAubWVzc2FnZXMgdWwgbGkgaW1nIHtcbiAgICB3aWR0aDogMjJweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cbiAgI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlcyB1bCBsaSBwIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEzMCU7XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzM1cHgpIHtcbiAgICAjZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2VzIHVsIGxpIHAge1xuICAgICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICB9XG4gIH1cbiAgI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlLWlucHV0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDk5O1xuICAgIGJhY2tncm91bmQ6ICNmZmZkZmQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Y1ZjVmNTtcbiAgfVxuICAjZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2UtaW5wdXQgLndyYXAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAjZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2UtaW5wdXQgLndyYXAgaW5wdXQge1xuICAgIGZvbnQtZmFtaWx5OiBcInByb3hpbWEtbm92YVwiLCAgXCJTb3VyY2UgU2FucyBQcm9cIiwgc2Fucy1zZXJpZjtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDkwcHgpO1xuICAgIHBhZGRpbmc6IDExcHggMzJweCAxMHB4IDhweDtcbiAgICBmb250LXNpemU6IDAuOGVtO1xuICAgIGNvbG9yOiAjMzI0NjVhO1xuICB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNXB4KSB7XG4gICAgI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlLWlucHV0IC53cmFwIGlucHV0IHtcbiAgICAgIHBhZGRpbmc6IDE1cHggMzJweCAxNnB4IDhweDtcbiAgICB9XG4gIH1cbiAgI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlLWlucHV0IC53cmFwIGlucHV0OmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG4gICNmcmFtZSAuY29udGVudCAubWVzc2FnZS1pbnB1dCAud3JhcCAuYXR0YWNobWVudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA2MHB4O1xuICAgIHotaW5kZXg6IDQ7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBmb250LXNpemU6IDEuMWVtO1xuICAgIGNvbG9yOiAjNDM1ZjdhO1xuICAgIG9wYWNpdHk6IC41O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzVweCkge1xuICAgICNmcmFtZSAuY29udGVudCAubWVzc2FnZS1pbnB1dCAud3JhcCAuYXR0YWNobWVudCB7XG4gICAgICBtYXJnaW4tdG9wOiAxN3B4O1xuICAgICAgcmlnaHQ6IDY1cHg7XG4gICAgfVxuICB9XG4gICNmcmFtZSAuY29udGVudCAubWVzc2FnZS1pbnB1dCAud3JhcCAuYXR0YWNobWVudDpob3ZlciB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAjZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2UtaW5wdXQgLndyYXAgYnV0dG9uIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIHBhZGRpbmc6IDEycHggMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZDogIzI4YTc0NTtcbiAgICBjb2xvcjogI2Y1ZjVmNTtcbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzVweCkge1xuICAgICNmcmFtZSAuY29udGVudCAubWVzc2FnZS1pbnB1dCAud3JhcCBidXR0b24ge1xuICAgICAgcGFkZGluZzogMTZweCAwO1xuICAgIH1cbiAgfVxuICAjZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2UtaW5wdXQgLndyYXAgYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjNDM1ZjdhO1xuICB9XG4gICNmcmFtZSAuY29udGVudCAubWVzc2FnZS1pbnB1dCAud3JhcCBidXR0b246Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH0iLCJib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiAjMjdhZTYwO1xuICBmb250LWZhbWlseTogXCJwcm94aW1hLW5vdmFcIiwgXCJTb3VyY2UgU2FucyBQcm9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjFweDtcbiAgY29sb3I6ICMzMjQ2NWE7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDA0KTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbiNmcmFtZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDkydmg7XG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICBtYXgtaGVpZ2h0OiA3MjBweDtcbiAgYmFja2dyb3VuZDogI0U2RUFFQTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcbiAgI2ZyYW1lIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzVweCkge1xuICAjZnJhbWUgI3NpZGVwYW5lbCB7XG4gICAgd2lkdGg6IDU4cHg7XG4gICAgbWluLXdpZHRoOiA1OHB4O1xuICB9XG59XG4jZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDI1cHggYXV0bztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmc6IDVweCAwIDAgMDtcbiAgICBiYWNrZ3JvdW5kOiAjMzI0NjVhO1xuICB9XG59XG4jZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZS5leHBhbmRlZCAud3JhcCB7XG4gIGhlaWdodDogMjEwcHg7XG4gIGxpbmUtaGVpZ2h0OiBpbml0aWFsO1xufVxuXG4jZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZS5leHBhbmRlZCAud3JhcCBwIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUuZXhwYW5kZWQgLndyYXAgaS5leHBhbmQtYnV0dG9uIHtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlWSgtMSk7XG4gIC1vLXRyYW5zZm9ybTogc2NhbGVZKC0xKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgtMSk7XG4gIHRyYW5zZm9ybTogc2NhbGVZKC0xKTtcbiAgZmlsdGVyOiBGbGlwSDtcbiAgLW1zLWZpbHRlcjogXCJGbGlwSFwiO1xufVxuXG4jZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCB7XG4gIGhlaWdodDogNjBweDtcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC1tb3otdHJhbnNpdGlvbjogMC4zcyBoZWlnaHQgZWFzZTtcbiAgLW8tdHJhbnNpdGlvbjogMC4zcyBoZWlnaHQgZWFzZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzIGhlaWdodCBlYXNlO1xuICB0cmFuc2l0aW9uOiAwLjNzIGhlaWdodCBlYXNlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzVweCkge1xuICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCB7XG4gICAgaGVpZ2h0OiA1NXB4O1xuICB9XG59XG4jZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCBpbWcge1xuICB3aWR0aDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiAzcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNlNzRjM2M7XG4gIGhlaWdodDogYXV0bztcbiAgZmxvYXQ6IGxlZnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLW1vei10cmFuc2l0aW9uOiAwLjNzIGJvcmRlciBlYXNlO1xuICAtby10cmFuc2l0aW9uOiAwLjNzIGJvcmRlciBlYXNlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3MgYm9yZGVyIGVhc2U7XG4gIHRyYW5zaXRpb246IDAuM3MgYm9yZGVyIGVhc2U7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNXB4KSB7XG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwIGltZyB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgfVxufVxuI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgaW1nLm9ubGluZSB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMyZWNjNzE7XG59XG5cbiNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwIGltZy5hd2F5IHtcbiAgYm9yZGVyOiAycHggc29saWQgI2YxYzQwZjtcbn1cblxuI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgaW1nLmJ1c3kge1xuICBib3JkZXI6IDJweCBzb2xpZCAjZTc0YzNjO1xufVxuXG4jZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCBpbWcub2ZmbGluZSB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM5NWE1YTY7XG59XG5cbiNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwIHAge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNXB4KSB7XG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwIHAge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbiNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwIGkuZXhwYW5kLWJ1dHRvbiB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXRvcDogMjNweDtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogIzQzNWY3YTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgaS5leHBhbmQtYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4jZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjc3RhdHVzLW9wdGlvbnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgd2lkdGg6IDE1MHB4O1xuICBtYXJnaW46IDcwcHggMCAwIDA7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgei1pbmRleDogOTk7XG4gIGxpbmUtaGVpZ2h0OiBpbml0aWFsO1xuICBiYWNrZ3JvdW5kOiAjNDM1ZjdhO1xuICAtbW96LXRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2U7XG4gIC1vLXRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2U7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZTtcbiAgdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI3N0YXR1cy1vcHRpb25zIHtcbiAgICB3aWR0aDogNThweDtcbiAgICBtYXJnaW4tdG9wOiA1N3B4O1xuICB9XG59XG4jZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjc3RhdHVzLW9wdGlvbnMuYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgbWFyZ2luOiA3NXB4IDAgMCAwO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzVweCkge1xuICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjc3RhdHVzLW9wdGlvbnMuYWN0aXZlIHtcbiAgICBtYXJnaW4tdG9wOiA2MnB4O1xuICB9XG59XG4jZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjc3RhdHVzLW9wdGlvbnM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkICM0MzVmN2E7XG4gIG1hcmdpbjogLThweCAwIDAgMjRweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI3N0YXR1cy1vcHRpb25zOmJlZm9yZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDIzcHg7XG4gIH1cbn1cbiNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNzdGF0dXMtb3B0aW9ucyB1bCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI3N0YXR1cy1vcHRpb25zIHVsIGxpIHtcbiAgcGFkZGluZzogMTVweCAwIDMwcHggMThweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI3N0YXR1cy1vcHRpb25zIHVsIGxpIHtcbiAgICBwYWRkaW5nOiAxNXB4IDAgMzVweCAyMnB4O1xuICB9XG59XG4jZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjc3RhdHVzLW9wdGlvbnMgdWwgbGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNDk2ODg2O1xufVxuXG4jZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjc3RhdHVzLW9wdGlvbnMgdWwgbGkgc3Bhbi5zdGF0dXMtY2lyY2xlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogNXB4IDAgMCAwO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzVweCkge1xuICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjc3RhdHVzLW9wdGlvbnMgdWwgbGkgc3Bhbi5zdGF0dXMtY2lyY2xlIHtcbiAgICB3aWR0aDogMTRweDtcbiAgICBoZWlnaHQ6IDE0cHg7XG4gIH1cbn1cbiNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNzdGF0dXMtb3B0aW9ucyB1bCBsaSBzcGFuLnN0YXR1cy1jaXJjbGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTRweDtcbiAgaGVpZ2h0OiAxNHB4O1xuICBtYXJnaW46IC0zcHggMCAwIC0zcHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHotaW5kZXg6IDA7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNXB4KSB7XG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNzdGF0dXMtb3B0aW9ucyB1bCBsaSBzcGFuLnN0YXR1cy1jaXJjbGU6YmVmb3JlIHtcbiAgICBoZWlnaHQ6IDE4cHg7XG4gICAgd2lkdGg6IDE4cHg7XG4gIH1cbn1cbiNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNzdGF0dXMtb3B0aW9ucyB1bCBsaSBwIHtcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzVweCkge1xuICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjc3RhdHVzLW9wdGlvbnMgdWwgbGkgcCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI3N0YXR1cy1vcHRpb25zIHVsIGxpI3N0YXR1cy1vbmxpbmUgc3Bhbi5zdGF0dXMtY2lyY2xlIHtcbiAgYmFja2dyb3VuZDogIzJlY2M3MTtcbn1cblxuI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI3N0YXR1cy1vcHRpb25zIHVsIGxpI3N0YXR1cy1vbmxpbmUuYWN0aXZlIHNwYW4uc3RhdHVzLWNpcmNsZTpiZWZvcmUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMmVjYzcxO1xufVxuXG4jZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjc3RhdHVzLW9wdGlvbnMgdWwgbGkjc3RhdHVzLWF3YXkgc3Bhbi5zdGF0dXMtY2lyY2xlIHtcbiAgYmFja2dyb3VuZDogI2YxYzQwZjtcbn1cblxuI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI3N0YXR1cy1vcHRpb25zIHVsIGxpI3N0YXR1cy1hd2F5LmFjdGl2ZSBzcGFuLnN0YXR1cy1jaXJjbGU6YmVmb3JlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxYzQwZjtcbn1cblxuI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI3N0YXR1cy1vcHRpb25zIHVsIGxpI3N0YXR1cy1idXN5IHNwYW4uc3RhdHVzLWNpcmNsZSB7XG4gIGJhY2tncm91bmQ6ICNlNzRjM2M7XG59XG5cbiNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNzdGF0dXMtb3B0aW9ucyB1bCBsaSNzdGF0dXMtYnVzeS5hY3RpdmUgc3Bhbi5zdGF0dXMtY2lyY2xlOmJlZm9yZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNzRjM2M7XG59XG5cbiNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNzdGF0dXMtb3B0aW9ucyB1bCBsaSNzdGF0dXMtb2ZmbGluZSBzcGFuLnN0YXR1cy1jaXJjbGUge1xuICBiYWNrZ3JvdW5kOiAjOTVhNWE2O1xufVxuXG4jZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjc3RhdHVzLW9wdGlvbnMgdWwgbGkjc3RhdHVzLW9mZmxpbmUuYWN0aXZlIHNwYW4uc3RhdHVzLWNpcmNsZTpiZWZvcmUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjOTVhNWE2O1xufVxuXG4jZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjZXhwYW5kZWQge1xuICBwYWRkaW5nOiAxMDBweCAwIDAgMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGxpbmUtaGVpZ2h0OiBpbml0aWFsICFpbXBvcnRhbnQ7XG59XG5cbiNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNleHBhbmRlZCBsYWJlbCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBjbGVhcjogYm90aDtcbiAgbWFyZ2luOiAwIDhweCA1cHggMDtcbiAgcGFkZGluZzogNXB4IDA7XG59XG5cbiNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNleHBhbmRlZCBpbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICBiYWNrZ3JvdW5kOiAjMzI0NjVhO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGNvbG9yOiAjZjVmNWY1O1xuICBwYWRkaW5nOiA3cHg7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA0M3B4KTtcbn1cblxuI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI2V4cGFuZGVkIGlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogIzQzNWY3YTtcbn1cblxuI2ZyYW1lICNzaWRlcGFuZWwgI3NlYXJjaCB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMzI0NjVhO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMyNDY1YTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3NlYXJjaCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuI2ZyYW1lICNzaWRlcGFuZWwgI3NlYXJjaCBsYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luOiAxMHB4IDAgMCAyMHB4O1xufVxuXG4jZnJhbWUgI3NpZGVwYW5lbCAjc2VhcmNoIGlucHV0IHtcbiAgZm9udC1mYW1pbHk6IFwicHJveGltYS1ub3ZhXCIsIFwiU291cmNlIFNhbnMgUHJvXCIsIHNhbnMtc2VyaWY7XG4gIHBhZGRpbmc6IDEwcHggMCAxMHB4IDQ2cHg7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyNXB4KTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjMzI0NjVhO1xuICBjb2xvcjogI2Y1ZjVmNTtcbn1cblxuI2ZyYW1lICNzaWRlcGFuZWwgI3NlYXJjaCBpbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICM0MzVmN2E7XG59XG5cbiNmcmFtZSAjc2lkZXBhbmVsICNzZWFyY2ggaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2Y1ZjVmNTtcbn1cblxuI2ZyYW1lICNzaWRlcGFuZWwgI3NlYXJjaCBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjZjVmNWY1O1xufVxuXG4jZnJhbWUgI3NpZGVwYW5lbCAjc2VhcmNoIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjZjVmNWY1O1xufVxuXG4jZnJhbWUgI3NpZGVwYW5lbCAjc2VhcmNoIGlucHV0Oi1tb3otcGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2Y1ZjVmNTtcbn1cblxuI2ZyYW1lICNzaWRlcGFuZWwgI2NvbnRhY3RzIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxNzdweCk7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzVweCkge1xuICAjZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHMge1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTQ5cHgpO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIH1cblxuICAjZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4jZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHMuZXhwYW5kZWQge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMzNHB4KTtcbn1cblxuI2ZyYW1lICNzaWRlcGFuZWwgI2NvbnRhY3RzOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA4cHg7XG4gIGJhY2tncm91bmQ6ICMyYzNlNTA7XG59XG5cbiNmcmFtZSAjc2lkZXBhbmVsICNjb250YWN0czo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQzMTQwO1xufVxuXG4jZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHMgdWwgbGkuY29udGFjdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMTBweCAwIDE1cHggMDtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzVweCkge1xuICAjZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHMgdWwgbGkuY29udGFjdCB7XG4gICAgcGFkZGluZzogNnB4IDAgNDZweCA4cHg7XG4gIH1cbn1cbiNmcmFtZSAjc2lkZXBhbmVsICNjb250YWN0cyB1bCBsaS5jb250YWN0OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzMyNDY1YTtcbn1cblxuI2ZyYW1lICNzaWRlcGFuZWwgI2NvbnRhY3RzIHVsIGxpLmNvbnRhY3QuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzMyNDY1YTtcbiAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgIzQzNWY3YTtcbn1cblxuI2ZyYW1lICNzaWRlcGFuZWwgI2NvbnRhY3RzIHVsIGxpLmNvbnRhY3QuYWN0aXZlIHNwYW4uY29udGFjdC1zdGF0dXMge1xuICBib3JkZXI6IDJweCBzb2xpZCAjMzI0NjVhICFpbXBvcnRhbnQ7XG59XG5cbiNmcmFtZSAjc2lkZXBhbmVsICNjb250YWN0cyB1bCBsaS5jb250YWN0IC53cmFwIHtcbiAgd2lkdGg6IDg4JTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI2NvbnRhY3RzIHVsIGxpLmNvbnRhY3QgLndyYXAge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4jZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHMgdWwgbGkuY29udGFjdCAud3JhcCBzcGFuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBtYXJnaW46IC0ycHggMCAwIC0ycHg7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAycHggc29saWQgIzJjM2U1MDtcbiAgYmFja2dyb3VuZDogIzk1YTVhNjtcbn1cblxuI2ZyYW1lICNzaWRlcGFuZWwgI2NvbnRhY3RzIHVsIGxpLmNvbnRhY3QgLndyYXAgc3Bhbi5vbmxpbmUge1xuICBiYWNrZ3JvdW5kOiAjMmVjYzcxO1xufVxuXG4jZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHMgdWwgbGkuY29udGFjdCAud3JhcCBzcGFuLmF3YXkge1xuICBiYWNrZ3JvdW5kOiAjZjFjNDBmO1xufVxuXG4jZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHMgdWwgbGkuY29udGFjdCAud3JhcCBzcGFuLmJ1c3kge1xuICBiYWNrZ3JvdW5kOiAjZTc0YzNjO1xufVxuXG4jZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHMgdWwgbGkuY29udGFjdCAud3JhcCBpbWcge1xuICB3aWR0aDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzVweCkge1xuICAjZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHMgdWwgbGkuY29udGFjdCAud3JhcCBpbWcge1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICB9XG59XG4jZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHMgdWwgbGkuY29udGFjdCAud3JhcCAubWV0YSB7XG4gIHBhZGRpbmc6IDVweCAwIDAgMDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI2NvbnRhY3RzIHVsIGxpLmNvbnRhY3QgLndyYXAgLm1ldGEge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbiNmcmFtZSAjc2lkZXBhbmVsICNjb250YWN0cyB1bCBsaS5jb250YWN0IC53cmFwIC5tZXRhIC5uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuI2ZyYW1lICNzaWRlcGFuZWwgI2NvbnRhY3RzIHVsIGxpLmNvbnRhY3QgLndyYXAgLm1ldGEgLnByZXZpZXcge1xuICBtYXJnaW46IDVweCAwIDAgMDtcbiAgcGFkZGluZzogMCAwIDFweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIC1tb3otdHJhbnNpdGlvbjogMXMgYWxsIGVhc2U7XG4gIC1vLXRyYW5zaXRpb246IDFzIGFsbCBlYXNlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDFzIGFsbCBlYXNlO1xuICB0cmFuc2l0aW9uOiAxcyBhbGwgZWFzZTtcbn1cblxuI2ZyYW1lICNzaWRlcGFuZWwgI2NvbnRhY3RzIHVsIGxpLmNvbnRhY3QgLndyYXAgLm1ldGEgLnByZXZpZXcgc3BhbiB7XG4gIHBvc2l0aW9uOiBpbml0aWFsO1xuICBib3JkZXItcmFkaXVzOiBpbml0aWFsO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDAgMnB4IDAgMDtcbiAgbWFyZ2luOiAwIDAgMCAxcHg7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuI2ZyYW1lICNzaWRlcGFuZWwgI2JvdHRvbS1iYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3R0b206IDA7XG59XG5cbiNmcmFtZSAjc2lkZXBhbmVsICNib3R0b20tYmFyIGJ1dHRvbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiA1MCU7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgYmFja2dyb3VuZDogIzMyNDY1YTtcbiAgY29sb3I6ICNmNWY1ZjU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAwLjg1ZW07XG4gIGZvbnQtZmFtaWx5OiBcInByb3hpbWEtbm92YVwiLCBcIlNvdXJjZSBTYW5zIFByb1wiLCBzYW5zLXNlcmlmO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzVweCkge1xuICAjZnJhbWUgI3NpZGVwYW5lbCAjYm90dG9tLWJhciBidXR0b24ge1xuICAgIGZsb2F0OiBub25lO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDE1cHggMDtcbiAgfVxufVxuI2ZyYW1lICNzaWRlcGFuZWwgI2JvdHRvbS1iYXIgYnV0dG9uOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuI2ZyYW1lICNzaWRlcGFuZWwgI2JvdHRvbS1iYXIgYnV0dG9uOm50aC1jaGlsZCgxKSB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMyYzNlNTA7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNXB4KSB7XG4gICNmcmFtZSAjc2lkZXBhbmVsICNib3R0b20tYmFyIGJ1dHRvbjpudGgtY2hpbGQoMSkge1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzJjM2U1MDtcbiAgfVxufVxuI2ZyYW1lICNzaWRlcGFuZWwgI2JvdHRvbS1iYXIgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzQzNWY3YTtcbn1cblxuI2ZyYW1lICNzaWRlcGFuZWwgI2JvdHRvbS1iYXIgYnV0dG9uIGkge1xuICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNXB4KSB7XG4gICNmcmFtZSAjc2lkZXBhbmVsICNib3R0b20tYmFyIGJ1dHRvbiBpIHtcbiAgICBmb250LXNpemU6IDEuM2VtO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzVweCkge1xuICAjZnJhbWUgI3NpZGVwYW5lbCAjYm90dG9tLWJhciBidXR0b24gc3BhbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuI2ZyYW1lIC5jb250ZW50IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcbiAgI2ZyYW1lIC5jb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDMwMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDkwMHB4KSB7XG4gICNmcmFtZSAuY29udGVudCB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDM0MHB4KTtcbiAgfVxufVxuI2ZyYW1lIC5jb250ZW50IC5jb250YWN0LXByb2ZpbGUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MHB4O1xuICBsaW5lLWhlaWdodDogNjBweDtcbiAgYmFja2dyb3VuZDogI2MyYjIzMDtcbn1cblxuI2ZyYW1lIC5jb250ZW50IC5jb250YWN0LXByb2ZpbGUgaW1nIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogOXB4IDEycHggMCA5cHg7XG59XG5cbiNmcmFtZSAuY29udGVudCAuY29udGFjdC1wcm9maWxlIHAge1xuICBmbG9hdDogbGVmdDtcbn1cblxuI2ZyYW1lIC5jb250ZW50IC5jb250YWN0LXByb2ZpbGUgLnNvY2lhbC1tZWRpYSB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuI2ZyYW1lIC5jb250ZW50IC5jb250YWN0LXByb2ZpbGUgLnNvY2lhbC1tZWRpYSBpIHtcbiAgbWFyZ2luLWxlZnQ6IDE0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI2ZyYW1lIC5jb250ZW50IC5jb250YWN0LXByb2ZpbGUgLnNvY2lhbC1tZWRpYSBpOm50aC1sYXN0LWNoaWxkKDEpIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4jZnJhbWUgLmNvbnRlbnQgLmNvbnRhY3QtcHJvZmlsZSAuc29jaWFsLW1lZGlhIGk6aG92ZXIge1xuICBjb2xvcjogIzQzNWY3YTtcbn1cblxuI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlcyB7XG4gIGhlaWdodDogYXV0bztcbiAgbWluLWhlaWdodDogY2FsYygxMDAlIC0gOTNweCk7XG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDkzcHgpO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcbiAgI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlcyB7XG4gICAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gMTA1cHgpO1xuICB9XG59XG4jZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2VzOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA4cHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4jZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2VzOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxuI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlcyB1bCBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY2xlYXI6IGJvdGg7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDE1cHggMTVweCA1cHggMTVweDtcbiAgZm9udC1zaXplOiAwLjllbTtcbn1cblxuI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlcyB1bCBsaTpudGgtbGFzdC1jaGlsZCgxKSB7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbiNmcmFtZSAuY29udGVudCAubWVzc2FnZXMgdWwgbGkuc2VudCBpbWcge1xuICBtYXJnaW46IDZweCA4cHggMCAwO1xufVxuXG4jZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2VzIHVsIGxpLnNlbnQgcCB7XG4gIGJhY2tncm91bmQ6ICM1MzVmMmE7XG4gIGNvbG9yOiAjZjVmNWY1O1xufVxuXG4jZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2VzIHVsIGxpLnJlcGxpZXMgaW1nIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW46IDZweCAwIDAgOHB4O1xufVxuXG4jZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2VzIHVsIGxpLnJlcGxpZXMgcCB7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlcyB1bCBsaSBpbWcge1xuICB3aWR0aDogMjJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmbG9hdDogbGVmdDtcbn1cblxuI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlcyB1bCBsaSBwIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxMzAlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MzVweCkge1xuICAjZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2VzIHVsIGxpIHAge1xuICAgIG1heC13aWR0aDogMzAwcHg7XG4gIH1cbn1cbiNmcmFtZSAuY29udGVudCAubWVzc2FnZS1pbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogOTk7XG4gIGJhY2tncm91bmQ6ICNmZmZkZmQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmNWY1ZjU7XG59XG5cbiNmcmFtZSAuY29udGVudCAubWVzc2FnZS1pbnB1dCAud3JhcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlLWlucHV0IC53cmFwIGlucHV0IHtcbiAgZm9udC1mYW1pbHk6IFwicHJveGltYS1ub3ZhXCIsIFwiU291cmNlIFNhbnMgUHJvXCIsIHNhbnMtc2VyaWY7XG4gIGZsb2F0OiBsZWZ0O1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA5MHB4KTtcbiAgcGFkZGluZzogMTFweCAzMnB4IDEwcHggOHB4O1xuICBmb250LXNpemU6IDAuOGVtO1xuICBjb2xvcjogIzMyNDY1YTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcbiAgI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlLWlucHV0IC53cmFwIGlucHV0IHtcbiAgICBwYWRkaW5nOiAxNXB4IDMycHggMTZweCA4cHg7XG4gIH1cbn1cbiNmcmFtZSAuY29udGVudCAubWVzc2FnZS1pbnB1dCAud3JhcCBpbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbiNmcmFtZSAuY29udGVudCAubWVzc2FnZS1pbnB1dCAud3JhcCAuYXR0YWNobWVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDYwcHg7XG4gIHotaW5kZXg6IDQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIGNvbG9yOiAjNDM1ZjdhO1xuICBvcGFjaXR5OiAwLjU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcbiAgI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlLWlucHV0IC53cmFwIC5hdHRhY2htZW50IHtcbiAgICBtYXJnaW4tdG9wOiAxN3B4O1xuICAgIHJpZ2h0OiA2NXB4O1xuICB9XG59XG4jZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2UtaW5wdXQgLndyYXAgLmF0dGFjaG1lbnQ6aG92ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuXG4jZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2UtaW5wdXQgLndyYXAgYnV0dG9uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiA1MHB4O1xuICBwYWRkaW5nOiAxMnB4IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogIzI4YTc0NTtcbiAgY29sb3I6ICNmNWY1ZjU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNXB4KSB7XG4gICNmcmFtZSAuY29udGVudCAubWVzc2FnZS1pbnB1dCAud3JhcCBidXR0b24ge1xuICAgIHBhZGRpbmc6IDE2cHggMDtcbiAgfVxufVxuI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlLWlucHV0IC53cmFwIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM0MzVmN2E7XG59XG5cbiNmcmFtZSAuY29udGVudCAubWVzc2FnZS1pbnB1dCAud3JhcCBidXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/counsellorclientmessage/counsellorclientmessage.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/counsellorclientmessage/counsellorclientmessage.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: CounsellorclientmessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounsellorclientmessageComponent", function() { return CounsellorclientmessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CounsellorclientmessageComponent = class CounsellorclientmessageComponent {
    constructor() { }
    ngOnInit() {
    }
};
CounsellorclientmessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-counsellorclientmessage',
        template: __webpack_require__(/*! raw-loader!./counsellorclientmessage.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/counsellorclientmessage/counsellorclientmessage.component.html"),
        styles: [__webpack_require__(/*! ./counsellorclientmessage.component.scss */ "./src/app/components/counsellorclientmessage/counsellorclientmessage.component.scss")]
    })
], CounsellorclientmessageComponent);



/***/ }),

/***/ "./src/app/components/counsellorclientprofile/counsellorclientprofile.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/counsellorclientprofile/counsellorclientprofile.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY291bnNlbGxvcmNsaWVudHByb2ZpbGUvY291bnNlbGxvcmNsaWVudHByb2ZpbGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/counsellorclientprofile/counsellorclientprofile.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/counsellorclientprofile/counsellorclientprofile.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: CounsellorclientprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounsellorclientprofileComponent", function() { return CounsellorclientprofileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CounsellorclientprofileComponent = class CounsellorclientprofileComponent {
    constructor() { }
    ngOnInit() {
    }
};
CounsellorclientprofileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-counsellorclientprofile',
        template: __webpack_require__(/*! raw-loader!./counsellorclientprofile.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/counsellorclientprofile/counsellorclientprofile.component.html"),
        styles: [__webpack_require__(/*! ./counsellorclientprofile.component.scss */ "./src/app/components/counsellorclientprofile/counsellorclientprofile.component.scss")]
    })
], CounsellorclientprofileComponent);



/***/ }),

/***/ "./src/app/components/counsellorprofile/counsellorprofile.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/counsellorprofile/counsellorprofile.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY291bnNlbGxvcnByb2ZpbGUvY291bnNlbGxvcnByb2ZpbGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/counsellorprofile/counsellorprofile.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/counsellorprofile/counsellorprofile.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CounsellorprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounsellorprofileComponent", function() { return CounsellorprofileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CounsellorprofileComponent = class CounsellorprofileComponent {
    constructor() { }
    ngOnInit() {
    }
};
CounsellorprofileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-counsellorprofile',
        template: __webpack_require__(/*! raw-loader!./counsellorprofile.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/counsellorprofile/counsellorprofile.component.html"),
        styles: [__webpack_require__(/*! ./counsellorprofile.component.scss */ "./src/app/components/counsellorprofile/counsellorprofile.component.scss")]
    })
], CounsellorprofileComponent);



/***/ }),

/***/ "./src/app/components/familymemberlist/familymemberlist.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/familymemberlist/familymemberlist.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmFtaWx5bWVtYmVybGlzdC9mYW1pbHltZW1iZXJsaXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/familymemberlist/familymemberlist.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/familymemberlist/familymemberlist.component.ts ***!
  \***************************************************************************/
/*! exports provided: FamilymemberlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilymemberlistComponent", function() { return FamilymemberlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FamilymemberlistComponent = class FamilymemberlistComponent {
    constructor() { }
    ngOnInit() {
    }
};
FamilymemberlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-familymemberlist',
        template: __webpack_require__(/*! raw-loader!./familymemberlist.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/familymemberlist/familymemberlist.component.html"),
        styles: [__webpack_require__(/*! ./familymemberlist.component.scss */ "./src/app/components/familymemberlist/familymemberlist.component.scss")]
    })
], FamilymemberlistComponent);



/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/components/otp/otp.component.scss":
/*!***************************************************!*\
  !*** ./src/app/components/otp/otp.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3RwL290cC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/otp/otp.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/otp/otp.component.ts ***!
  \*************************************************/
/*! exports provided: OtpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpComponent", function() { return OtpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OtpComponent = class OtpComponent {
    constructor() { }
    ngOnInit() {
    }
};
OtpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-otp',
        template: __webpack_require__(/*! raw-loader!./otp.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/otp/otp.component.html"),
        styles: [__webpack_require__(/*! ./otp.component.scss */ "./src/app/components/otp/otp.component.scss")]
    })
], OtpComponent);



/***/ }),

/***/ "./src/app/components/profile/profile.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProfileComponent = class ProfileComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/profile/profile.component.html"),
        styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/components/profile/profile.component.scss")]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/components/setting/setting.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/setting/setting.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2V0dGluZy9zZXR0aW5nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/setting/setting.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/setting/setting.component.ts ***!
  \*********************************************************/
/*! exports provided: SettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingComponent", function() { return SettingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SettingComponent = class SettingComponent {
    constructor() { }
    ngOnInit() {
    }
};
SettingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-setting',
        template: __webpack_require__(/*! raw-loader!./setting.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/setting/setting.component.html"),
        styles: [__webpack_require__(/*! ./setting.component.scss */ "./src/app/components/setting/setting.component.scss")]
    })
], SettingComponent);



/***/ }),

/***/ "./src/app/layout/appfooter/appfooter.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/layout/appfooter/appfooter.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hcHBmb290ZXIvYXBwZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/appfooter/appfooter.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/layout/appfooter/appfooter.component.ts ***!
  \*********************************************************/
/*! exports provided: AppfooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppfooterComponent", function() { return AppfooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppfooterComponent = class AppfooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
AppfooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-appfooter',
        template: __webpack_require__(/*! raw-loader!./appfooter.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/appfooter/appfooter.component.html"),
        styles: [__webpack_require__(/*! ./appfooter.component.scss */ "./src/app/layout/appfooter/appfooter.component.scss")]
    })
], AppfooterComponent);



/***/ }),

/***/ "./src/app/layout/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/layout/footer/footer.component.scss")]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/layout/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/header/header.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/layout/header/header.component.scss")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map