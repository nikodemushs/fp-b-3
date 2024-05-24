import {
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaArrowRight,
} from "react-icons/fa";

function Footer() {
  return (
    <footer class="bg-white dark:bg-gray-900">
      <div class="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div class="flex justify-center text-teal-600 sm:justify-start dark:text-teal-300">
              <svg
                width="246"
                height="35"
                viewBox="0 0 246 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M114.815 7.90323C113.623 7.90323 112.66 7.51643 111.925 6.74283C111.191 5.95878 110.919 5.02837 111.111 3.95161C111.302 2.85394 111.888 1.92354 112.867 1.16039C113.846 0.386798 114.932 0 116.124 0C117.327 0 118.285 0.386798 118.998 1.16039C119.711 1.92354 119.977 2.85394 119.796 3.95161C119.626 5.02837 119.051 5.95878 118.072 6.74283C117.103 7.51643 116.018 7.90323 114.815 7.90323Z"
                  fill="white"
                />
                <path
                  d="M110.025 10.4122H118.838L114.751 34.4982H105.938L110.025 10.4122Z"
                  fill="white"
                />
                <path
                  d="M61.0834 10.4122L59.9978 16.6846H55.5244L52.4941 34.4982H43.6812L46.7116 16.6846H43.5854L44.6711 10.4122H47.7787L47.8961 9.72222C48.226 7.73596 48.8593 6.08946 49.7959 4.78271C50.7432 3.47596 51.93 2.49851 53.3562 1.85036C54.7931 1.20221 56.4003 0.878134 58.1777 0.878134C59.306 0.878134 60.3863 0.961767 61.4187 1.12903C62.4511 1.2963 63.2015 1.44265 63.6698 1.5681L61.3708 7.77778C61.0622 7.68369 60.7056 7.61051 60.3011 7.55824C59.8967 7.49552 59.5295 7.46416 59.1995 7.46416C58.38 7.46416 57.7946 7.63665 57.4433 7.98163C57.1027 8.32661 56.8792 8.78136 56.7728 9.34588L56.5914 10.4122H61.0834Z"
                  fill="white"
                />
                <path
                  d="M14.305 2.38351L8.87674 34.4982H0L5.42822 2.38351H14.305Z"
                  fill="white"
                />
                <path
                  d="M13.3785 34.4982L13.347 34.4706C16.9522 34.3747 24.6605 32.7132 25.1914 25.774C24.224 25.8237 22.9199 25.9218 21.6068 26.0207C18.9459 26.2211 16.2479 26.4242 16.2395 26.2322C16.2387 26.213 16.2368 26.1921 16.2348 26.1695C16.1989 25.768 16.1141 24.8204 20.9018 23.4953C24.5305 22.491 25.9789 21.8921 25.9088 21.5727L26.6787 17.2864C27.0342 16.4059 28.0578 14.7203 29.3083 15.0215C30.8716 15.3979 30.9883 17.4372 31.0087 17.9059C31.0248 18.277 30.5288 21.224 30.2946 22.6157L30.2872 22.6598C31.5672 23.6375 34.566 25.8561 36.2095 26.9142C38.2638 28.2369 38.1577 29.6777 37.9063 29.7159C37.7051 29.7465 32.3309 27.6201 29.6689 26.5531C28.727 29.4672 29.1107 34.9958 38.073 34.0086L40.6079 19.1308C40.9165 17.3746 40.8314 15.8169 40.3524 14.4579C39.8735 13.0989 39.0592 12.0326 37.9097 11.259C36.7602 10.4854 35.318 10.0986 33.5831 10.0986C31.7737 10.0986 30.1186 10.5324 28.6179 11.4001C27.1278 12.2573 25.9943 13.4543 25.2173 14.991H24.9618L25.7282 10.4122H17.3623L13.2752 34.4982H13.3785Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M71.3691 34.9373C68.7082 34.9373 66.5156 34.4198 64.7914 33.3849C63.0778 32.3395 61.8751 30.8864 61.1832 29.0255C60.4914 27.1543 60.353 24.9851 60.7681 22.5179C61.1832 20.0508 62.0507 17.8868 63.3705 16.026C64.6903 14.1547 66.3879 12.7016 68.4634 11.6667C70.5389 10.6213 72.9124 10.0986 75.584 10.0986C78.2342 10.0986 80.4162 10.6213 82.1298 11.6667C83.854 12.7016 85.0621 14.1547 85.7539 16.026C86.4564 17.8868 86.6001 20.0508 86.185 22.5179C85.7699 24.9851 84.8971 27.1543 83.5667 29.0255C82.2362 30.8864 80.5332 32.3395 78.4577 33.3849C76.3929 34.4198 74.03 34.9373 71.3691 34.9373ZM72.4548 28.5394C73.2211 28.5394 73.9183 28.2938 74.5462 27.8024C75.1848 27.3111 75.7277 26.6107 76.1747 25.7012C76.6324 24.7917 76.9676 23.7097 77.1805 22.4552C77.3934 21.1903 77.4253 20.1083 77.2763 19.2092C77.1273 18.2997 76.8186 17.5993 76.3503 17.108C75.882 16.6166 75.2647 16.371 74.4983 16.371C73.732 16.371 73.0295 16.6166 72.3909 17.108C71.7523 17.5993 71.2095 18.2997 70.7624 19.2092C70.3154 20.1083 69.9855 21.1903 69.7726 22.4552C69.5597 23.7097 69.5225 24.7917 69.6608 25.7012C69.8098 26.6107 70.1185 27.3111 70.5868 27.8024C71.0658 28.2938 71.6884 28.5394 72.4548 28.5394Z"
                  fill="white"
                />
                <path
                  d="M106.429 10.4122L105.343 16.6846H101.137L99.4362 26.7518C99.383 27.0863 99.3936 27.3686 99.4681 27.5986C99.5426 27.8181 99.6917 27.9854 99.9152 28.1004C100.149 28.2049 100.458 28.2572 100.841 28.2572C101.097 28.2572 101.411 28.2258 101.783 28.1631C102.156 28.0899 102.438 28.0376 102.629 28.0063L102.885 34.0905C102.438 34.216 101.836 34.3571 101.081 34.5139C100.336 34.6812 99.4681 34.7909 98.4783 34.8432C96.4134 34.9373 94.7318 34.723 93.4332 34.2003C92.1454 33.6776 91.2513 32.8622 90.7511 31.754C90.2615 30.6355 90.1763 29.2398 90.4956 27.5672L92.3297 16.6846H89.1865L90.2721 10.4122H93.3867L94.3592 4.64158H103.172L102.197 10.4122H106.429Z"
                  fill="white"
                />
                <path
                  d="M129.208 27.671L128.054 34.4982H119.241L124.669 2.38351H133.482L130.758 18.5036H131.056L138.4 10.4122H148.298L138.187 20.9734L144.466 34.4982H134.376L130.804 26.0323L129.208 27.671Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M150.669 33.4633C152.393 34.4459 154.565 34.9373 157.183 34.9373C159.461 34.9373 161.499 34.6028 163.298 33.9337C165.107 33.2542 166.629 32.3029 167.864 31.0798C169.109 29.8462 170.019 28.3931 170.594 26.7204H162.547C162.292 27.1804 161.951 27.5724 161.525 27.8965C161.11 28.2101 160.631 28.4506 160.089 28.6178C159.556 28.7746 158.992 28.8531 158.396 28.8531C157.523 28.8531 156.81 28.6806 156.257 28.3356C155.703 27.9906 155.315 27.5149 155.091 26.9086C154.868 26.3023 154.82 25.6123 154.948 24.8387L155.02 24.4624H170.977L171.296 22.4552C171.616 20.5421 171.616 18.8277 171.296 17.3118C170.988 15.7855 170.392 14.484 169.508 13.4073C168.625 12.3305 167.481 11.5099 166.076 10.9453C164.681 10.3808 163.058 10.0986 161.206 10.0986C158.673 10.0986 156.385 10.616 154.341 11.651C152.308 12.6859 150.621 14.1338 149.28 15.9946C147.95 17.8554 147.071 20.0299 146.646 22.5179C146.199 25.1105 146.326 27.3372 147.029 29.198C147.731 31.0484 148.945 32.4701 150.669 33.4633ZM155.933 19.6953H163.633C163.739 19.0054 163.67 18.399 163.425 17.8763C163.191 17.3432 162.813 16.9303 162.292 16.6375C161.781 16.3344 161.164 16.1828 160.44 16.1828C159.716 16.1828 159.035 16.3344 158.396 16.6375C157.768 16.9407 157.231 17.3641 156.784 17.9077C156.372 18.42 156.089 19.0159 155.933 19.6953Z"
                  fill="white"
                />
                <path
                  d="M190.475 16.6846L191.56 10.4122H187.328L188.303 4.64158H179.49L178.518 10.4122H175.403L174.318 16.6846H177.461L175.627 27.5672C175.308 29.2398 175.393 30.6355 175.882 31.754C176.383 32.8622 177.277 33.6776 178.564 34.2003C179.863 34.723 181.545 34.9373 183.61 34.8432C184.599 34.7909 185.467 34.6812 186.212 34.5139C186.968 34.3571 187.569 34.216 188.016 34.0905L187.761 28.0063C187.569 28.0376 187.287 28.0899 186.914 28.1631C186.542 28.2258 186.228 28.2572 185.972 28.2572C185.589 28.2572 185.281 28.2049 185.046 28.1004C184.823 27.9854 184.674 27.8181 184.599 27.5986C184.525 27.3686 184.514 27.0863 184.567 26.7518L186.268 16.6846H190.475Z"
                  fill="white"
                />
                <path
                  d="M193.001 33.7298C193.789 34.5766 194.805 35 196.051 35C196.817 35 197.557 34.8066 198.27 34.4198C198.993 34.0226 199.6 33.4946 200.09 32.836C200.59 32.167 200.883 31.4247 200.968 30.6093C201.096 29.4176 200.76 28.3983 199.962 27.5515C199.174 26.7048 198.19 26.2814 197.008 26.2814C195.763 26.2814 194.651 26.7048 193.672 27.5515C192.703 28.3983 192.155 29.4176 192.027 30.6093C191.9 31.8324 192.224 32.8726 193.001 33.7298Z"
                  fill="white"
                />
                <path
                  d="M218.019 10.4122H209.206L205.119 34.4982H213.932L218.019 10.4122Z"
                  fill="white"
                />
                <path
                  d="M213.996 7.90323C212.804 7.90323 211.84 7.51643 211.106 6.74283C210.371 5.95878 210.1 5.02837 210.292 3.95161C210.483 2.85394 211.069 1.92354 212.048 1.16039C213.027 0.386798 214.113 0 215.305 0C216.507 0 217.465 0.386798 218.179 1.16039C218.892 1.92354 219.158 2.85394 218.977 3.95161C218.807 5.02837 218.232 5.95878 217.253 6.74283C216.284 7.51643 215.198 7.90323 213.996 7.90323Z"
                  fill="white"
                />
                <path
                  d="M229.598 20.9498L227.299 34.4982H218.486L222.573 10.4122H230.939L230.173 14.991H230.428C231.205 13.4543 232.338 12.2573 233.829 11.4001C235.329 10.5324 236.984 10.0986 238.794 10.0986C240.529 10.0986 241.971 10.4854 243.12 11.259C244.27 12.0326 245.084 13.0989 245.563 14.4579C246.042 15.8169 246.127 17.3746 245.819 19.1308L243.2 34.4982H234.387L236.686 20.9498C236.889 19.7581 236.74 18.8224 236.239 18.1429C235.75 17.4634 234.941 17.1237 233.813 17.1237C233.099 17.1237 232.445 17.2805 231.849 17.5941C231.263 17.8973 230.774 18.3363 230.38 18.9113C229.997 19.4758 229.736 20.1553 229.598 20.9498Z"
                  fill="white"
                />
              </svg>
            </div>

            <p class="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left dark:text-gray-400">
              Hello, we are Lift Media. Our goal is to translate the positive
              effects from revolutionizing how companies engage with their
              clients & their team.
            </p>

            <ul class="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              <li className="border rounded-full">
                <a
                  href="#"
                  className="linkedInIcon"
                  style={{
                    padding: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FaLinkedinIn size={20} color={"white"} />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </li>
              <li className="border rounded-full">
                <a
                  href="#"
                  className="facebookIcon"
                  style={{
                    padding: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FaFacebookF size={20} color={"white"} />
                  <span className="sr-only">Facebook</span>
                </a>
              </li>
              <li className="border rounded-full">
                <a
                  href="#"
                  className="twitterIcon"
                  style={{
                    padding: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FaTwitter size={20} color={"white"} />
                  <span className="sr-only">Twitter</span>
                </a>
              </li>
            </ul>
          </div>

          <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            <div class="text-center sm:text-left">
              <p class="text-lg font-medium text-gray-900 dark:text-white">
                Product{" "}
              </p>

              <ul class="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    class="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    class="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    Career
                  </a>
                </li>

                <li>
                  <a
                    class="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    Blog
                  </a>
                </li>

                <li>
                  <a
                    class="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    Special Offers
                  </a>
                </li>
              </ul>
            </div>

            <div class="text-center sm:text-left">
              <p class="text-lg font-medium text-gray-900 dark:text-white">
                Help
              </p>

              <ul class="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    class="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    FAQ
                  </a>
                </li>

                <li>
                  <a
                    class="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    Help Center
                  </a>
                </li>

                <li>
                  <a
                    class="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div class="text-center sm:text-left">
              <p class="text-lg font-medium text-gray-900 dark:text-white">
                Partner
              </p>

              <ul class="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    class="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    Partner Hub
                  </a>
                </li>

                <li>
                  <a
                    class="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    Affiliates
                  </a>
                </li>

                <li>
                  <a
                    class="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    Advertise
                  </a>
                </li>
              </ul>
            </div>

            <div class="text-center sm:text-left ">
              <p class="text-lg font-medium text-gray-900 dark:text-white">
                Subscribe
              </p>

              <div class="mx-auto mt-8 max-w-md sm:ms-0">
                <form class="mt-4">
                  <div className="relative">
                    <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-start">
                      <label htmlFor="email" className="sr-only">
                        Email
                      </label>
                      <div className="flex rounded-lg border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
                        <input
                          className="flex-grow rounded-l-lg bg-transparent px-6 py-3 text-gray-900 dark:text-white"
                          type="email"
                          placeholder="Enter your email"
                          id="email"
                        />
                        <button
                          className="rounded-r-lg bg-sky-500 px-6 py-3 font-medium text-white transition hover:bg-indigo-600"
                          type="submit"
                        >
                          <FaArrowRight />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <p class="leading-relaxed text-gray-500 ltr:sm:text-left rtl:sm:text-right dark:text-gray-400 mt-4">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Earum id, iure consectetur et error hic!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-8 border-t border-gray-600 pt-8">
          <ul class="flex flex-wrap justify-center gap-4 text-xs">
            <li>
              <a href="#" class="text-white transition hover:opacity-75">
                {" "}
                Terms & Conditions{" "}
              </a>
            </li>

            <li>
              <a href="#" class="text-white transition hover:opacity-75">
                {" "}
                Privacy Policy{" "}
              </a>
            </li>

            <li>
              <a href="#" class="text-white transition hover:opacity-75">
                {" "}
                Cookies{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
