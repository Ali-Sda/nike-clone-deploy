class navbar extends HTMLElement{
    constructor() {
        super();
    }

    connectedCallback() {
        
        this.classList.add("w-full")
        this.innerHTML =` 
        <header>
        <section> 
            <nav class="bg-[#eeeeee] shadow-lg">
                <div class="m-0 mx-auto px-16 hidden md:block ">
                    <div class="flex w-full justify-between h-16">
                        <!-- Left side of navbar -->
                        <div class="flex-shrink-0 flex items-center">
                            <!-- First logo -->
                            <a href="#" class="mr-4">
                                <img src="/assets/image/Jordan-logo-removebg-preview.png" alt="Logo 1" class="h-8">
                            </a>
                            <!-- Second logo -->
                            <a href="#">
                                <img src="/assets/image/canvers-logo-removebg-preview.png" alt="Logo 2" class="h-8">
                            </a>
                        </div>
                        <!-- Right side of navbar -->
                        <div class="flex  ">
                            
                            <!-- Navbar links -->
                            <div class="ml-4 flex items-center space-x-4 ">
                                <a href="#" class="text-black hover:text-gray-300">Find a Store 
                                    <a href="#">|</a></a>
                                <a href="/pages/Get help-page/gethelp.html" class="text-black hover:text-gray-300">Help 
                                    <a href="#">|</a></a>
                                <a href="#" class="text-black hover:text-gray-300">Join Us 
                                    <a href="#">|</a></a>
                                <a href="/pages/Sign in-page/signin.html" class="text-black hover:text-gray-300">Sign In </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <nav class="w-screen bg-white shadow-lg hidden md:block  ">
                <div class="w-screen flex h-16 item-center justify-around mt-4 ">
                    <!-- Left side of navbar -->
            
                    <!-- Logo -->
                    <a href="/index.html" class="mr-80">
                        <img src="/assets/image/nike.png" alt="Logo 1" class="h-8">
                    </a>
                        
                    <div class="flex mr-20  ">   
                        <div class="relative mr-2   ">
                            <button class="text-black font-bold px-8 py-2 rounded-md">New & Feature</button>
                        </div>
                        
                        <div class="relative mr-2">
                        <a href="/pages/Men-page/Men-page.html" class="text-black font-bold px-4 py-2 rounded-md">
                            <button  class="text-black font-bold px-4 py-2 rounded-md">Men</button>
                        </a>
                            
                        </div>
                        
                        <div class="relative mr-2">
                        <a href="#" class="text-black font-bold px-4 py-2 rounded-md">
                        <button  class="text-black font-bold px-4 py-2 rounded-md">Women</button>
                    </a>    
                        
                        </div>
                        
                        <div class="relative mr-2">
                        <a href="/pages/Kids-page/kids.html" class="text-black font-bold px-4 py-2 rounded-md">
                        <button  class="text-black font-bold px-4 py-2 rounded-md">Kid</button>
                    </a>                              
                            
                        </div>
                        
                        <div class="relative mr-2">
                            <button class="text-black font-bold px-4 py-2 rounded-md">Sale</button>
                        </div>
                        
                        
                    </div>
                    <!-- Right side of navbar -->
                    <div class="flex item-center justify-center">
                        <!-- Search button -->
                        <div>
                            <input type="text" placeholder="Search" class="w-full px-3 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-black">
                        </div>
                        <!-- First logo -->
                        <button>
                            <img  src="/assets/image/heart.png" alt="Logo 1" class="px-2 mb-8 h-8 mr-2">
                        </button>
                        <!-- Second logo -->
                        <button>
                            <img src="/assets/image/shopping-bag.png" alt="Logo 2" class="h-8 mb-8">
                        </button>
                    </div>
                </div>
            </nav>
        </section>
    </header>
    `
    }
}
customElements.define("navbar-component", navbar);