 class Footer extends HTMLElement{
     constructor() {
         super();
     }

     connectedCallback() {
         
         this.classList.add("w-full")
         this.innerHTML =` 
         <div class="footer-container items-center bg-black p-10">
         <div class="w-full max-w-[1440px]  gap-10">
 
 <!-- Footer Top--> 
             <div class="flex flex-col md:flex-row w-full">
                 <div class="flex flex-col md:flex-row flex-1 justify-center gap-12 text-xs">
                     <!-- Resources -->
                     <ul class="flex flex-col gap-3 font-bold text-white pt-2">
                         <li class="main">RESOURCES</li>
                         <li class="main">GIFT</li>
                         <li class="main">FIND A STORE</li>
                         <li class="main">BECOME A MEMBER</li>
                         <li class="main">NIKE X NBA</li>
                         <li class="main">NIKE JOURNAL</li>
                         <li class="main">SITE Feedback</li>
                     </ul>
                     <hr class="md:hidden mt-4 opacity-30">
 
                     <!-- Help -->
                     <ul class="hidden md:block">
                         <h3 class="font-bold md:flex md:py-2 text-white">HELP</h3>
                         <div class="flex flex-col gap-3 text-gray-400">
                             <li>Get Help</li>
                             <li>Order Status</li>
                             <li>Shipping and Delivery</li>
                             <li>Returns</li>
                             <li>Order Cancellation</li>     
                             <li>Payment Options</li>
                             <li>Gift Card Balance</li>
                             <li>Contact Us</li>
                         </div>
                     </ul>
                     <!-- detail Help -->
                     <details class="md:hidden py-2 shadow-lg">
                         <summary class="font-bold flex justify-between items-center text-white py-3 px-5 rounded-t-lg cursor-pointer">
                           HELP
                         </summary>
                         <div class="flex flex-col gap-3 text-white p-5 rounded-b-lg">
                           <p>Get Help</p>
                           <p>Order Status</p>
                           <p>Shipping and Delivery</p>
                           <p>Returns</p>
                           <p>Order Cancellation</p>
                           <p>Payment Options</p>
                           <p>Gift Card Balance</p>
                           <p>Contact Us</p>
                         </div>
                         <br>
                         <hr class="opacity-30 mx-5">
                     </details>
 
                     <!-- Company -->
                     <ul class="hidden md:block">
                         <h3 class="font-bold md:flex md:py-2 text-white"> COMPANY</h3>
                         <div class="flex flex-col gap-3 text-gray-400">
                         <li>About Nike</li>
                         <li>News</li>
                         <li>Careers</li>
                         <li>Investors</li> 
                         <li>Purpose</li>
                         <li>Substainability</li>
                         </div>
                     </ul>
 
                     <!-- Company detail -->
                     <details class="md:hidden py-2  shadow-lg">
                         <summary class="font-bold flex justify-between items-center text-white py-3 px-5 rounded-t-lg cursor-pointer">
                             COMPANY
                         </summary>
                         <div class="flex flex-col gap-3 text-white  p-5  rounded-b-lg">
                             <p>About Nike</p>
                             <p>News</p>
                             <p>Careers</p>
                             <p>Investors</p>
                             <p>Purpose</p>
                             <p>Substainability</p>
                         </div>
                         <br>
                         <hr class="opacity-30 mx-5">
                     </details>
 
 
                     <!-- Promotion & Discounts -->
                     <ul class="hidden md:block">
                         <h3 class=" md:flex md:py-2 font-bold text-white">PROMOTION & DISCOUNTS</h3>
                         <div class="flex flex-col gap-3 text-gray-400">
                         <li>Student</li>
                         <li>Military</li>
                         <li>Teacher</li>
                         <li>First Responders & Medical</li>
                         <li>Professionals</li>
                         <li>Birthday</li>
                         </div>
                     </ul>
 
                     <!-- Promotion & Discounts Detail-->
                     <details class="md:hidden py-2 shadow-lg">
                         <summary class="font-bold flex justify-between items-center text-white py-3 px-5 rounded-t-lg cursor-pointer">
                             PROMOTION & DISCOUNTS
                         </summary>
                         <div class="flex flex-col gap-3 text-white p-5 rounded-b-lg">
                             <p>Student</p>
                             <p>Military</p>
                             <p>Teacher</p>
                             <p>First Responders & Medical</p>
                             <p>Professionals</p>
                             <p>Birthday</p>
                         </div>
                         <br>
                         <hr class="opacity-30 mx-5">
                     </details>
 
                     <!-- social-icons -->
                     <div class="flex basis-1/4 md:justify-end gap-2 md:py-0 py-4 text-white">
                         <div class=" px-4">
                             <svg class="social-link-icon" width="30px" fill="gray" height="30px" viewBox="0 0 24 24"><path d="M12 0C9.813 0 7.8.533 5.96 1.6A11.793 11.793 0 0 0 1.6 5.96C.533 7.8 0 9.813 0 12s.533 4.2 1.6 6.04a11.793 11.793 0 0 0 4.36 4.36C7.8 23.467 9.813 24 12 24s4.2-.533 6.04-1.6a11.793 11.793 0 0 0 4.36-4.36C23.467 16.2 24 14.187 24 12s-.533-4.2-1.6-6.04a11.793 11.793 0 0 0-4.36-4.36C16.2.533 14.187 0 12 0zm6 9.28v.4c0 1.387-.333 2.72-1 4a8.186 8.186 0 0 1-2.84 3.12c-1.333.853-2.827 1.28-4.48 1.28a8.535 8.535 0 0 1-4.56-1.28h.72c1.387 0 2.613-.427 3.68-1.28-.64 0-1.213-.2-1.72-.6-.507-.4-.867-.92-1.08-1.56l.56.16c.373 0 .64-.053.8-.16a2.67 2.67 0 0 1-1.72-1 2.913 2.913 0 0 1-.68-1.88c.427.267.88.4 1.36.4-.907-.533-1.36-1.36-1.36-2.48 0-.533.133-1.04.4-1.52.8.96 1.72 1.707 2.76 2.24a8.133 8.133 0 0 0 3.4.88c-.107-.16-.16-.4-.16-.72 0-.8.293-1.493.88-2.08s1.28-.88 2.08-.88 1.547.293 2.24.88c.48-.107 1.12-.347 1.92-.72-.213.747-.64 1.28-1.28 1.6H18c.747-.16 1.28-.32 1.6-.48-.533.693-1.067 1.253-1.6 1.68z"></path></svg>
                         </div>
     
                         <div class=" px-2">
                             <svg class="social-link-icon" width="30px" fill="gray" height="30px" viewBox="0 0 24 24"><path d="M12 0C9.813 0 7.8.533 5.96 1.6A11.793 11.793 0 0 0 1.6 5.96C.533 7.8 0 9.813 0 12s.533 4.2 1.6 6.04a11.793 11.793 0 0 0 4.36 4.36C7.8 23.467 9.813 24 12 24s4.2-.533 6.04-1.6a11.793 11.793 0 0 0 4.36-4.36C23.467 16.2 24 14.187 24 12s-.533-4.2-1.6-6.04a11.793 11.793 0 0 0-4.36-4.36C16.2.533 14.187 0 12 0zm3.12 12h-2v7.2H10.4V12H8.64V9.52h1.76V8c0-1.12.187-1.92.56-2.4.427-.587 1.2-.88 2.32-.88h2V7.2h-1.2c-.427 0-.693.067-.8.2-.107.133-.16.387-.16.76v1.2h2.16L15.12 12z"></path></svg>
                         </div>
     
                         <div class=" px-2">
                             <svg class="social-link-icon" width="30px" fill="gray" height="30px" viewBox="0 0 24 24"><path d="M11.28 17.6a.604.604 0 0 1-.2.24.43.43 0 0 1-.24.08c-.08 0-.133-.027-.16-.08a.557.557 0 0 1-.04-.24v-2.96h-.72v3.28a1 1 0 0 0 .12.52c.08.133.2.2.36.2.16 0 .307-.053.44-.16.133-.107.28-.24.44-.4v.48H12v-3.92h-.72v2.96zM6.96 14v-.8H9.6v.8h-.88v4.56h-.88V14h-.88zm4.96-4.72c-.107 0-.2-.04-.28-.12a.384.384 0 0 1-.12-.28v-2.4c0-.053.027-.107.08-.16.053-.053.147-.08.28-.08.133 0 .24.027.32.08a.27.27 0 0 1 .12.24v2.32c0 .107-.04.2-.12.28a.384.384 0 0 1-.28.12zm2 8.32c0-.64.027-1.307.08-2 0-.107-.04-.2-.12-.28-.08-.08-.16-.12-.24-.12h-.12l-.24.16v2.4l.24.16.16.08c.107 0 .173-.027.2-.08.027-.053.04-.16.04-.32zm.08-3.04c.213 0 .387.08.52.24.133.16.2.4.2.72v2.24c0 .267-.053.48-.16.64a.422.422 0 0 1-.44.2 2.1 2.1 0 0 1-.48-.12.506.506 0 0 1-.28-.24v.32h-.8V13.2h.8v1.76c.107-.107.213-.2.32-.28a.532.532 0 0 1 .32-.12zm3.92 5.12c.267-.213.427-.907.48-2.08.053-.587.107-1.147.16-1.68 0-.48-.053-1.013-.16-1.6-.107-1.173-.28-1.893-.52-2.16-.24-.267-1.267-.453-3.08-.56l-2.64-.08-2.72.08c-1.813.107-2.84.293-3.08.56-.24.267-.413.987-.52 2.16a16.07 16.07 0 0 0-.08 1.6c0 .533.027 1.093.08 1.68.107 1.173.28 1.88.52 2.12.24.24 1.267.44 3.08.6l2.72.08 2.64-.08c1.813-.16 2.853-.347 3.12-.56v-.08zM8.4 4h-.96l1.12 3.6v2.24h.96v-2.4L10.64 4h-.96l-.56 2.32h-.08L8.4 4zm2.32 2.56V8.8c0 .373.107.667.32.88.213.213.507.32.88.32s.667-.107.88-.32c.213-.213.32-.507.32-.88V6.56c0-.32-.107-.587-.32-.8-.213-.213-.507-.32-.88-.32s-.667.107-.88.32c-.213.213-.32.48-.32.8zm3.12-.96v3.6a1 1 0 0 0 .12.52c.08.133.213.2.4.2.187 0 .36-.04.52-.12.16-.08.32-.2.48-.36v.48h.88V5.6h-.88v3.2a.523.523 0 0 1-.24.24.645.645 0 0 1-.28.08c-.08 0-.133-.013-.16-.04-.027-.027-.04-.093-.04-.2V5.52h-.8v.08zM12 0c2.187 0 4.2.533 6.04 1.6a11.793 11.793 0 0 1 4.36 4.36C23.467 7.8 24 9.813 24 12s-.533 4.2-1.6 6.04a11.793 11.793 0 0 1-4.36 4.36C16.2 23.467 14.187 24 12 24s-4.2-.533-6.04-1.6a11.793 11.793 0 0 1-4.36-4.36C.533 16.2 0 14.187 0 12s.533-4.2 1.6-6.04A11.793 11.793 0 0 1 5.96 1.6C7.8.533 9.813 0 12 0zm4.56 16.08l-.08-.4c0-.16-.027-.28-.08-.36a.27.27 0 0 0-.24-.12.27.27 0 0 0-.24.12c-.053.08-.08.2-.08.36v.4h.72zm-.32-1.52c.32 0 .573.093.76.28.187.187.28.467.28.84v.96h-1.44v.8c0 .16.027.28.08.36.053.08.147.12.28.12.133 0 .227-.04.28-.12.053-.08.08-.227.08-.44v-.16h.72v.24c0 .373-.093.667-.28.88-.187.213-.453.32-.8.32-.347 0-.613-.107-.8-.32-.187-.213-.28-.507-.28-.88v-1.76c0-.32.107-.587.32-.8.213-.213.48-.32.8-.32z"></path></svg>
                         </div>
                     
                         <div class="  px-2">
                             <svg class="social-link-icon" width="30px" fill="gray" height="30px" viewBox="0 0 24 24"><path d="M16 12.48a4.723 4.723 0 0 1-.56 1.48 3.93 3.93 0 0 1-1.04 1.16 3.428 3.428 0 0 1-1.92.68 3.628 3.628 0 0 1-1.96-.48 3.414 3.414 0 0 1-1.4-1.48c-.48-.96-.587-1.973-.32-3.04H7.68l.08 5.52c0 .107.04.213.12.32.08.107.173.16.28.16h8.32c.107 0 .213-.053.32-.16.107-.107.16-.213.16-.32V10.8h-1.12c.16.533.213 1.093.16 1.68zm-3.68 2c.64 0 1.2-.24 1.68-.72s.72-1.053.72-1.72a2.56 2.56 0 0 0-.68-1.76c-.453-.507-1.013-.76-1.68-.76s-1.24.24-1.72.72-.72 1.053-.72 1.72.227 1.253.68 1.76c.453.507 1 .76 1.64.76h.08zm4.16-7.6h-1.12c-.107 0-.213.053-.32.16-.107.107-.16.213-.16.32v1.36c.107.213.267.32.48.32h1.12c.16 0 .28-.053.36-.16a.532.532 0 0 0 .12-.32v-1.2c0-.107-.053-.213-.16-.32-.107-.107-.213-.16-.32-.16zM12 0C9.813 0 7.8.533 5.96 1.6A11.793 11.793 0 0 0 1.6 5.96C.533 7.8 0 9.813 0 12s.533 4.2 1.6 6.04a11.793 11.793 0 0 0 4.36 4.36C7.8 23.467 9.813 24 12 24s4.2-.533 6.04-1.6a11.793 11.793 0 0 0 4.36-4.36C23.467 16.2 24 14.187 24 12s-.533-4.2-1.6-6.04a11.793 11.793 0 0 0-4.36-4.36C16.2.533 14.187 0 12 0zm6.24 16.88l-.08.08v.08a.926.926 0 0 1-.28.68 1.3 1.3 0 0 1-.68.36H7.52a.871.871 0 0 1-.68-.32 1.536 1.536 0 0 1-.36-.72l-.08-.16.08-9.84c0-.267.093-.507.28-.72.187-.213.413-.347.68-.4h9.68a1.3 1.3 0 0 1 .68.36 1.3 1.3 0 0 1 .36.68l.08 9.92z"></path></svg>
                         </div>
                     </div>
                 </div>
             </div>
 
 <!-- bottom footer -->
 <div class="footer-container items-center bg-black">
     <div class="footer-main items-center">
         <div class="footer-buttom flex flex-wrap justify-between">
             <div class="footer-buttom-left mb-4 lg:mb-0">
                 <!-- Country Selector -->
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     class="bi bi-geo-alt" viewBox="0 0 16 16">
                     <path
                         d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                     <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                 </svg>
                 <span>United States</span>
                 <!-- Copyright -->

                 <span>© 2024 Nike, Inc. All Rights Reserved</span>
             </div>
             <!-- Footer Bottom Right Section -->
             <div class="footer-buttom-right flex flex-wrap pr-12">
                 <ul class="w-full lg:w-1/2 mb-4 lg:mb-0">
                     <li>Guides</li>
                     <li>Terms of Sale</li>
                     <li>Terms of Use</li>
                 </ul>
                 <ul class="w-full lg:w-1/2">
                     <li>Nike Privacy Policy</li>
                     <li>hghgg</li>
                     <li>Your Privacy Choices</li>
                     <li>CA Supply Chains Act</li>
                 </ul>
             </div>
         </div>
     </div>
 </div>
 
     `    
     }
    }

customElements.define("footer-component", Footer);