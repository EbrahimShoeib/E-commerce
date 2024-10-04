import React from 'react';
import image from "../../../public/login-image.jpeg"
const Auth = () => {
	return (
		
<div > 
	
<div
				style={{
					backgroundImage:
						' url(../../../public/login-image.jpeg)'
          }}
				class="  bg-no-repeat bg-cover bg-center relative  "
			>
				<div className='flex sm:justify-start sm:items-center pt-12 pl-16'>
					 <h3 className=' flex text-6xl text-sky-400'> Codex </h3>
					 
				<nav  class="sm:flex sm:justify-end sm:items-center pt-12 pr-16">
                <div class="flex flex-col sm:flex-row ">
                    <a class="mt-10 text-sky-400 hover:underline sm:mx-3 sm:mt-0" href="#">Home</a>
                    <a class="mt-10 text-sky-400 hover:underline sm:mx-3 sm:mt-0" href="#">Shop</a>
                    <a class="mt-10 text-sky-400 hover:underline sm:mx-3 sm:mt-0" href="#">Categories</a>
                    <a class="mt-10 text-sky-400 hover:underline sm:mx-3 sm:mt-0" href="#">Contact</a>
                    <a class="mt-10 text-sky-400 hover:underline sm:mx-3 sm:mt-0" href="#">About</a>
                </div>
            </nav>
			</div>
			{/* bg-gradient-to-b from-slate-800 to-black opacity-75 inset-0 z-0 */}
				<div class=" absolute " />
				<div class="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
					<div class="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
						<div class="self-start hidden lg:flex flex-col  text-white">
							{/* <img src={{image}} class="mb-3" alt='logo '/> */}
							<h1 class="mb-3 font-bold text-5xl">Hi ? Welcome Back  </h1>
							<p class="pr-3">
							Your online store for selling all your supplies
							</p>
						</div>
					</div>

					
					<div class="flex justify-center self-center  z-10">
						<div class="p-12 bg-slate-300 mx-auto rounded-2xl w-100 opacity-75 ">
							<div class="mb-4">
								<h3 class="font-semibold text-2xl text-gray-800">Sign In </h3>
								<p class="text-gray-500">Please sign in to your account.</p>
							</div>
							<div class="space-y-5">
								<div class="space-y-2">
									<label class="text-sm font-medium text-gray-700 tracking-wide">Email</label>
									<input
										class=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-sky-400"
										type=""
										placeholder="mail@gmail.com"
									/>
								</div>
								<div class="space-y-2">
									<label class="mb-5 text-sm font-medium text-gray-700 tracking-wide">Password</label>
									<input
										class="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-sky-400"
										type=""
										placeholder="Enter your password"
									/>
								</div>
								<div class="flex items-center justify-between">
									<div class="flex items-center">
										<input
											id="remember_me"
											name="remember_me"
											type="checkbox"
											class="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded"
										/>
										<label for="remember_me" class="ml-2 block text-sm text-gray-800">
											Remember me
										</label>
									</div>
									<div class="text-sm">
										<a href="#" class=" text-slate-700 hover:text-slate-500">
											Forgot your password?
										</a>
									</div>
								</div>
								<div>
									<button
										type="submit"
										class="w-full flex justify-center bg-slate-800  hover:bg-slate-700 text-white p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
									>
										Sign in
									</button>
								</div>
							</div>
							<div class="pt-5 text-center text-gray-400 text-xs">
								<span>
									Copyright © 2024-2025
									<a
										href="https://codepen.io/uidesignhub"
										rel=""
										target="_blank"
										title="Ajimon"
										class="text-green hover:text-green-500 "
									>
										- AJI
									</a>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>

</div>
			
	
	);
};

export default Auth;
