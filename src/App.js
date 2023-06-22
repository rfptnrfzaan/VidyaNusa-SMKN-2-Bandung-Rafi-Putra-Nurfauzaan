import Navigation from "./components/navbar";
import Footer from "./components/footer";
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import product from "./assets/Laptop_widya.png";

function App() {
  AOS.init();
  return (
    <>
      <Navigation/>
      <section id="jumbotron" className=" h-full flex flex-col bg-gradient-to-tl from-blue-400/60 to-emerald-400/60">
          <div  className="flex flex-row">
          <div className=" w-screen justify-center pt-6 items-start flex-col flex space-y-4 mx-20">
              <h1 data-aos="fade-down" data-aos-delay="400" data-aos-duration="3000" className="text-8xl  judul">VidyaNusa</h1>
              <h2 data-aos="fade-down" data-aos-delay="400" data-aos-duration="3000" className=" text-lg ">framework pembelajaran berbasis kurikulum tematik multidisiplin.</h2>
              <button data-aos="fade-down" data-aos-delay="400" data-aos-duration="3000" className=" py-2 px-4 mr-4 bg-transparent text-black font-semibold border border-white/100 rounded hover:bg-white/70 hover:text-black hover:border-transparent">
                    Selengkapnya
                </button>
          </div>
          <img data-aos="fade-left" data-aos-delay="400" data-aos-duration="3000" src={product} className="h-[25%] w-[40%] mr-10 pt-6" alt="mindmap"/>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1440 320">
        <path fill="#FFFFFF" fill-opacity="1" d="M0,224L48,208C96,192,192,160,288,128C384,96,480,64,576,74.7C672,85,768,139,864,176C960,213,1056,235,1152,213.3C1248,192,1344,128,1392,96L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
      </section>

      <div  class="container mx-auto md:px-6">
      <section class="mb-32 text-center">
        <div class="flex justify-center">
          <div class="max-w-[700px] text-center">
            <h2 data-aos="fade-down" data-aos-delay="200" data-aos-duration="2000" class="mb-6 text-center text-3xl font-bold">
              Why is it so<u class="text-primary dark:text-primary-400">
                great?</u>
            </h2>
            <p data-aos="fade-down" data-aos-delay="200" data-aos-duration="2000" class="mb-16 text-black dark:text-black">
              Minus fuga aliquid vero facere ducimus quos, quisquam nemo?
              Molestias ullam provident vitae error aliquam dolorum temporibus?
              Doloremque, quasi
            </p>
          </div>
        </div>

        <div class="grid gap-x-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-12">
          <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="2000" class="mb-12 lg:mb-0">
            <div class="mb-6 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" class="h-6 w-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
              </svg>
            </div>
            <h5 class="mb-4 text-lg font-bold">Support 24/7</h5>
            <p class="text-black dark:text-black">
              Laudantium totam quas cumque pariatur at doloremque hic quos quia
              eius. Reiciendis optio minus mollitia rerum labore
            </p>
          </div>

          <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="2000" class="mb-12 lg:mb-0">
            <div class="mb-6 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" class="h-6 w-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
              </svg>
            </div>
            <h5 class="mb-4 text-lg font-bold">Safe and solid</h5>
            <p class="text-black dark:text-black">
              Eum nostrum fugit numquam, voluptates veniam neque quibusdam ullam
              aspernatur odio soluta, quisquam dolore animi
            </p>
          </div>

          <div data-aos="fade-left" data-aos-delay="200" data-aos-duration="2000" class="mb-12 md:mb-0">
            <div class="mb-6 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" class="h-6 w-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
              </svg>
            </div>
            <h5 class="mb-4 text-lg font-bold">Extremely fast</h5>
            <p class="text-black dark:text-black">
              Enim cupiditate, minus nulla dolor cumque iure eveniet facere
              ullam beatae hic voluptatibus dolores exercitationem
            </p>
          </div>

          <div data-aos="fade-left" data-aos-delay="200" data-aos-duration="2000" class="mb-12 md:mb-0">
            <div class="mb-6 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" class="h-6 w-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
              </svg>
            </div>
            <h5 class="mb-4 text-lg font-bold">Live analytics</h5>
            <p class="text-black dark:text-black">
              Illum doloremque ea, blanditiis sed dolor laborum praesentium
              maxime sint, consectetur atque ipsum ab adipisci
            </p>
          </div>
        </div>
      </section>
      </div>

      <div class="container mx-auto md:px-6 mb-10">
        <section class="mb-32 text-center">
          <h2 data-aos="fade-up" data-aos-delay="300" data-aos-duration="2000" class="mb-12 text-3xl font-bold">Testimonials</h2>

          <div class="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
            <div data-aos="fade-right" data-aos-delay="300" data-aos-duration="2000" class="mb-12 md:mb-0">
              <div class="mb-6 flex justify-center">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg"
                  class="w-32 rounded-full shadow-lg dark:shadow-black/20" />
              </div>
              <h5 class="mb-2 text-lg font-bold">Maria Smantha</h5>
              <h6 class="mb-4 font-medium text-primary dark:text-primary-400">
                Web Developer
              </h6>
              <p class="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
                id officiis hic tenetur quae quaerat ad velit ab hic.
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="inline-block w-6">
                  <path fill="currentColor"
                    d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z" />
                </svg>
              </p>
              <ul class="mb-0 flex justify-center">
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                    <path fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                  </svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                    <path fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                  </svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                    <path fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                  </svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                    <path fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                  </svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                    <path fill="currentColor"
                      d="m480 757 157 95-42-178 138-120-182-16-71-168v387ZM233 976l65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                  </svg>
                </li>
              </ul>
            </div>
            <div data-aos="fade-down" data-aos-delay="300" data-aos-duration="2000" class="mb-12 md:mb-0">
              <div class="mb-6 flex justify-center">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg"
                  class="w-32 rounded-full shadow-lg dark:shadow-black/20" />
              </div>
              <h5 class="mb-2 text-lg font-bold">Lisa Cudrow</h5>
              <h6 class="mb-4 font-medium text-primary dark:text-primary-400">
                Graphic Designer
              </h6>
              <p class="mb-4">
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid commodi.
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="inline-block w-6">
                  <path fill="currentColor"
                    d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z" />
                </svg>
              </p>
              <ul class="mb-0 flex justify-center">
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                    <path fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                  </svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                    <path fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                  </svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                    <path fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                  </svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                    <path fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                  </svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                    <path fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                  </svg>
                </li>
              </ul>
            </div>
            <div data-aos="fade-left" data-aos-delay="300" data-aos-duration="2000" class="mb-0">
              <div class="mb-6 flex justify-center">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg"
                  class="w-32 rounded-full shadow-lg dark:shadow-black/20" />
              </div>
              <h5 class="mb-2 text-lg font-bold">John Smith</h5>
              <h6 class="mb-4 font-medium text-primary dark:text-primary-400">
                Marketing Specialist
              </h6>
              <p class="mb-4">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti.
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="inline-block w-6">
                  <path fill="currentColor"
                    d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z" />
                </svg>
              </p>
              <ul class="mb-0 flex justify-center">
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                    <path fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                  </svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                    <path fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                  </svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                    <path fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                  </svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                    <path fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                  </svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                    <path fill="currentColor"
                      d="m323 851 157-94 157 95-42-178 138-120-182-16-71-168-71 167-182 16 138 120-42 178Zm-90 125 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-355Z" />
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <Footer/>
    </>
  );
}

export default App;
