const modalWindows = `    <div class="modal">
        <form class="modal-reg" action="#">
            <div class="modal-reg__body">
                <div class="modal-block__close">
                    <button class="modal-btn__close">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.3" clip-path="url(#clip0_102_11643)">
                        <path d="M12.0002 10.5862L16.9502 5.63623L18.3642 7.05023L13.4142 12.0002L18.3642 16.9502L16.9502 18.3642L12.0002 13.4142L7.05023 18.3642L5.63623 16.9502L10.5862 12.0002L5.63623 7.05023L7.05023 5.63623L12.0002 10.5862Z" fill="#282828"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_102_11643">
                        <rect width="24" height="24" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>

                    </button>
                </div>

                <div class="form-title">
                    <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_102_11605)">
                        <path d="M28.5 28.504V32.684C26.6898 32.044 24.7526 31.8477 22.8508 32.1116C20.9491 32.3754 19.1384 33.0918 17.5709 34.2004C16.0033 35.3091 14.7247 36.7776 13.8423 38.4828C12.96 40.188 12.4996 42.08 12.5 44L8.5 43.998C8.49938 41.5558 9.05784 39.1458 10.1326 36.9528C11.2074 34.7598 12.7699 32.8419 14.7004 31.3461C16.631 29.8503 18.8784 28.8163 21.2703 28.3233C23.6623 27.8303 26.1353 27.8914 28.5 28.502V28.504ZM24.5 26C17.87 26 12.5 20.63 12.5 14C12.5 7.37 17.87 2 24.5 2C31.13 2 36.5 7.37 36.5 14C36.5 20.63 31.13 26 24.5 26ZM24.5 22C28.92 22 32.5 18.42 32.5 14C32.5 9.58 28.92 6 24.5 6C20.08 6 16.5 9.58 16.5 14C16.5 18.42 20.08 22 24.5 22ZM36.5 34V28H40.5V34H46.5V38H40.5V44H36.5V38H30.5V34H36.5Z" fill="url(#paint0_linear_102_11605)"/>
                        </g>
                        <defs>
                        <linearGradient id="paint0_linear_102_11605" x1="27.5" y1="2" x2="27.5" y2="44" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#4A9AFF"/>
                        <stop offset="1" stop-color="#FBEB11"/>
                        </linearGradient>
                        <clipPath id="clip0_102_11605">
                        <rect width="48" height="48" fill="white" transform="translate(0.5)"/>
                        </clipPath>
                        </defs>
                        </svg>
                    <div class="item-title">Registration</div>
                </div>

                <div class="form-names">
                    <div class="form-names__name">
                        <label for="modal_name">First Name</label>
                        <input class="input-name"  type="text" id="modal_name" name="modal_name" placeholder="Name">
                        <div class="input-error__text">Please, enter your first name</div>
                    </div>

                    <div class="form-names__name">
                        <label for="modal_last_name">Last Name</label>
                        <input class="input-name"  type="text" name="modal_last_name" id="modal_last_name" placeholder="Last Name">
                        <div class="input-error__text">Please, enter your last name</div>
                    </div>
                </div>

                <div class="form-contacts mb-16">
                    <label for="modal_email">Email Address</label>
                    <input class="input-email" type="email" id="modal_email" name="modal_email" placeholder="example@gmail.com">
                    <div class="input-error__text">Please, enter a valid email address</div>
                </div>

                <div class="form-contacts mb-16">
                    <label for="modal_tel">Phone number</label>
                    <input class="input-tel" type="tel" name="modal_tel" id="modal_tel" placeholder="+000 000 0000">
                    <div class="input-error__text">Please, enter a valid phone number</div>
                </div>

                <div class="form-contacts mb-16">
                    <label for="modal_creativity">What is your creativity?</label>
                    <input type="text" id="modal_creativity" name="modal_creativity" placeholder="Ex.: English Teacher">
                    <div class="input-error__text">Please, enter your creativity</div>
                </div>

                <div class="modal-block__checkbox mb-32">
                    <label class="custom-checkbox">
                        <input type="checkbox" class="hidden-checkbox" id="modal_checkbox">
                        <span class="checkmark"></span>
                    </label>
                    <p class="modal-checkbox__text">"I AGREE" that my personal data submitted as part of the membership entry process will be stored and processed on behalf of the UCCI as data controller in accordance with applicable data protection laws.</p>
                    <div class="input-error__text">Error</div>
                </div>

                <div>
                    <button type="button" class="btn-fullorange width-100 submit-btn">Confirm</button>
                </div>
            </div>
        </form>
    </div>

    <div class="modal-textarea__hidden">
        <div class="modal-textarea">
            <div class="modal-textarea__body" style="display: inline-block;" >

                <div class="form-title">
                    <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Group">
                    <path id="Vector" d="M10.5 17.9999C11.0304 17.9999 11.5391 18.2106 11.9142 18.5857C12.2893 18.9608 12.5 19.4695 12.5 19.9999C15.6423 19.9953 18.694 21.0524 21.16 22.9999H25.5C28.164 22.9999 30.56 24.1579 32.206 25.9979L38.5 25.9999C40.3905 25.9994 42.2425 26.5348 43.8411 27.544C45.4397 28.5532 46.7195 29.9949 47.532 31.7019C42.802 37.9439 35.144 41.9999 26.5 41.9999C20.92 41.9999 16.2 40.7939 12.38 38.6839C12.2401 39.07 11.9845 39.4036 11.648 39.6391C11.3116 39.8746 10.9107 40.0006 10.5 39.9999H4.5C3.96957 39.9999 3.46086 39.7892 3.08579 39.4141C2.71071 39.0391 2.5 38.5303 2.5 37.9999V19.9999C2.5 19.4695 2.71071 18.9608 3.08579 18.5857C3.46086 18.2106 3.96957 17.9999 4.5 17.9999H10.5ZM12.502 23.9999L12.5 34.0419L12.59 34.1079C16.18 36.6279 20.856 37.9999 26.5 37.9999C32.508 37.9999 38.098 35.6879 42.17 31.7399L42.436 31.4739L42.196 31.2739C41.2516 30.5343 40.1068 30.0953 38.91 30.0139L38.5 29.9999L34.276 29.9979C34.422 30.6419 34.5 31.3119 34.5 31.9999V33.9999H16.5V29.9999L30.08 29.9979L30.012 29.8419C29.6287 29.041 29.0391 28.3565 28.3038 27.8588C27.5685 27.3611 26.714 27.0681 25.828 27.0099L25.5 26.9999H19.64C18.7106 26.0494 17.6005 25.2943 16.375 24.7791C15.1495 24.2639 13.8334 23.999 12.504 23.9999H12.502ZM8.5 21.9999H6.5V35.9999H8.5V21.9999ZM27.792 7.14991L28.5 7.85991L29.208 7.15191C29.6716 6.68435 30.223 6.31296 30.8306 6.05907C31.4381 5.80519 32.0898 5.6738 32.7482 5.67245C33.4067 5.6711 34.0589 5.79982 34.6675 6.05122C35.2761 6.30262 35.829 6.67174 36.2945 7.1374C36.76 7.60307 37.129 8.15609 37.3802 8.76473C37.6315 9.37337 37.76 10.0256 37.7585 10.6841C37.7569 11.3425 37.6254 11.9942 37.3713 12.6017C37.1172 13.2091 36.7457 13.7604 36.278 14.2239L28.5 21.9999L20.72 14.2199C20.2524 13.7563 19.8811 13.2049 19.6272 12.5974C19.3733 11.9898 19.2419 11.3381 19.2405 10.6797C19.2392 10.0212 19.3679 9.36899 19.6193 8.76042C19.8707 8.15185 20.2398 7.59893 20.7055 7.1334C21.1712 6.66787 21.7242 6.2989 22.3328 6.04767C22.9415 5.79645 23.5937 5.66791 24.2522 5.66945C24.9106 5.67098 25.5623 5.80256 26.1698 6.05662C26.7772 6.31068 27.3285 6.68222 27.792 7.14991ZM23.552 9.97991C23.3862 10.1448 23.2835 10.3625 23.2615 10.5952C23.2396 10.8279 23.2999 11.061 23.432 11.2539L23.548 11.3919L28.5 16.3399L33.452 11.3919C33.6177 11.2264 33.72 11.0081 33.7412 10.7749C33.7624 10.5418 33.7011 10.3085 33.568 10.1159L33.452 9.97591C33.2863 9.81056 33.0678 9.70859 32.8347 9.68776C32.6015 9.66692 32.3684 9.72856 32.176 9.86191L32.036 9.97791L28.498 13.5139L24.964 9.97391L24.828 9.86191C24.6354 9.72881 24.4022 9.66752 24.169 9.68871C23.9358 9.70991 23.7175 9.81226 23.552 9.97791V9.97991Z" fill="url(#paint0_linear_366_152)"/>
                    </g>
                    <defs>
                    <linearGradient id="paint0_linear_366_152" x1="25.016" y1="5.66943" x2="25.016" y2="41.9999" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#4A9AFF"/>
                    <stop offset="1" stop-color="#FBEB11"/>
                    </linearGradient>
                    </defs>
                    </svg>
                    <div class="item-title">Чудово ! Останній крок</div>
                </div>

                <div class="mb-24">
                    <label class="modal-textarea__label" for="modal-textarea">Please write what and on what days of the week you can help. </label>
                    <textarea name="modal-textarea" id="modal-textarea" placeholder="Example: I can help with transport. Free on Saturday & Sunday" ></textarea>
                </div>

                <div>
                    <button class="btn-fullorange modal-btn__textarea">Відправити заявку</button>
                </div>
            </div>
        </div>
    </div>`;

export default modalWindows;