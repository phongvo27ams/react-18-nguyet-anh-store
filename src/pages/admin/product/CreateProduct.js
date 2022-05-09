import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

import Header from '../../../components/admin/Header';
import PrimaryNavigation from '../../../components/admin/PrimaryNavigation';
import MobileNavigation from '../../../components/admin/MobileNavigation';

const CreateProduct = () => {
	

	return(
		<div className="container mx-auto">
			<div className="grid grid-cols-[40%_60%] lg:grid-cols-[24%_76%] xl:grid-cols-[20%_80%]">
				<PrimaryNavigation/>
				<MobileNavigation/>

				<section className="col-span-2 lg:col-span-1 grid-rows-2">
					<Header/>

					<section class="relative min-h-screen p-[36px] bg-[#f5f6fe]">
						<div class="mb-[16px]">
							<span class="text-[24px] font-[600] mr-[8px]">Products</span>
						</div>
							
						<section class="w-[100%] bg-white p-[20px] rounded-md shadow-md">
							<div class="flex justify-between items-center mb-[10px]">
								<p className="uppercase text-[20px] font-[600]">Create</p>
								{/* Close Button */}
								<Link to="/admin/product">
									<button className="text-[20px] p-[10px] duration-[500ms] hover:text-red-500">
										<i className="fa-solid fa-xmark"></i>
									</button>
								</Link>
							</div>
							<form class="flex flex-wrap gap-[10px]" id="store" encType="multipart/form-data">
								<label class="group relative basis-[60%]">
									<span class="absolute top-[12px] left-[10px] text-[#5d6778] bg-white duration-[500ms]">Name</span>
									<input type="text" class="w-[100%] p-[12px] mb-[12px] rounded border outline-none duration-[100ms] focus:border-[#15a362]" id="name" name="name"/>
									<p class="hidden text-red-600 text-[12px]" id="nameError"></p>
								</label>

								<label class="group relative basis-[36%]">
									<select class="w-[100%] p-[12px] mb-[12px] rounded border outline-none duration-[100ms] focus:border-[#15a362]" id="subCategory" name="subCategory">
										<option value="">Select a sub-category...</option>
									</select>
									<p class="hidden text-red-600 text-[12px]" id="subCategoryError"></p>
								</label>

								<label class="group relative basis-[30%]">
									<span class="absolute top-[12px] left-[10px] text-[#5d6778] bg-white duration-[500ms]">Unit Price</span>
									<input type="number" class="w-[100%] p-[12px] mb-[12px] rounded border outline-none duration-[100ms] focus:border-[#15a362]" id="unitPrice" name="unitPrice"/>
									<p class="hidden text-red-600 text-[12px]" id="unitPriceError"></p>
								</label>

								<label class="group relative basis-[30%]">
									<span class="absolute top-[12px] left-[10px] text-[#5d6778] bg-white duration-[500ms]">Sale Price</span>
									<input type="number" class="w-[100%] p-[12px] mb-[12px] rounded border outline-none duration-[100ms] focus:border-[#15a362]" id="salePrice" name="salePrice"/>
									<p class="hidden text-red-600 text-[12px]" id="salePriceError"></p>
								</label>

								<label class="group relative basis-[30%]">
									<span class="absolute top-[12px] left-[10px] text-[#5d6778] bg-white duration-[500ms]">Rate</span>
									<input type="number" min="1" max="5" class="w-[100%] p-[12px] mb-[12px] rounded border outline-none duration-[100ms] focus:border-[#15a362]" id="rate" name="rate"/>
									<p class="hidden text-red-600 text-[12px]" id="rateError"></p>
								</label>

								<label class="group relative basis-[30%]">
									<span class="absolute top-[12px] left-[10px] text-[#5d6778] bg-white duration-[500ms]">Vendor</span>
									<input type="text" class="w-[100%] p-[12px] mb-[12px] rounded border outline-none duration-[100ms] focus:border-[#15a362]" id="vendor" name="vendor"/>
									<p class="hidden text-red-600 text-[12px]" id="vendorError"></p>
								</label>

								<label class="group relative basis-[30%]">
									<span class="absolute top-[12px] left-[10px] text-[#5d6778] bg-white duration-[500ms]">SKU</span>
									<input type="text" class="w-[100%] p-[12px] mb-[12px] rounded border outline-none duration-[100ms] focus:border-[#15a362]" id="sku" name="sku"/>
									<p class="hidden text-red-600 text-[12px]" id="skuError"></p>
								</label>

								<label class="group relative basis-[30%]">
									<select class="w-[100%] p-[12px] mb-[12px] rounded border outline-none duration-[100ms] focus:border-[#15a362]" id="availability" name="availability">
										<option value="">Select availability...</option>
										<option value="In stock">In stock</option>
										<option value="Out of stock">Out of stock</option>
									</select>
									<p class="hidden text-red-600 text-[12px]" id="availabilityError"></p>
								</label>

								<label class="group relative basis-[100%]">
									<textarea type="text" class="w-[100%] p-[12px] mb-[12px] rounded border outline-none duration-[100ms] focus:border-[#15a362]" id="description" name="description" placeholder="Description..."></textarea>
									<p class="hidden text-red-600 text-[12px]" id="descriptionError"></p>
								</label>

								<label class="group relative basis-[45%]">
									<span class="absolute top-[12px] left-[10px] text-[#5d6778] bg-white duration-[500ms]">Color</span>
									<input type="text" class="w-[100%] p-[12px] mb-[12px] rounded border outline-none duration-[100ms] focus:border-[#15a362]" id="color" name="color"/>
									<p class="hidden text-red-600 text-[12px]" id="colorError"></p>
								</label>

								<label class="group relative basis-[45%]">
									<span class="absolute top-[12px] left-[10px] text-[#5d6778] bg-white duration-[500ms]">Size</span>
									<input type="text" class="w-[100%] p-[12px] mb-[12px] rounded border outline-none duration-[100ms] focus:border-[#15a362]" id="size" name="size"/>
									<p class="hidden text-red-600 text-[12px]" id="sizeError"></p>
								</label>

								<input type="file" class="w-[100%] py-[12px] mb-[6px] rounded outline-none duration-[100ms] focus:border-[#15a362]" id="image" name="image"/>
								<p class="hidden w-[100%] text-red-600 text-[12px]" id="imageError"></p>

								<button type="submit" class="basis-fit uppercase font-[600] py-[12px] px-[24px] border-[#15a362] rounded border cursor-pointer duration-[500ms] hover:text-white hover:bg-[#15a362]">Create</button>
							</form>
						</section>
					</section>
				</section>
			</div>
		</div>
	)
}

export default CreateProduct;