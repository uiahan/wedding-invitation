const htmlContent = `
  <nav
            class="navbar kiri1 navbar-expand-lg bg-body-tertiary fixed-top px-3 fw-lighter">
            <div class="container-fluid">
                <a class="navbar-brand text-white"
                    style="font-family: 'Merriweather', serif;"
                    href="#">Pure<span style="color: #FF9EAA;">Love</span></a>
                <button class="navbar-toggler" type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse"
                    id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <hr class="hr" style="color: white;">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page"
                                style="color: white;"
                                href="#home">Beranda</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page"
                                style="color: white;"
                                href="#about">Ucapan Doa</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page"
                                style="color: white;"
                                href="#pengantin">Pengantin</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page"
                                style="color: white;"
                                href="#tanggal">Tempat dan Tanggal</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page"
                                style="color: white;"
                                href="#story">Love Story</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page"
                                style="color: white;"
                                href="#galeri">Gallery</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page"
                                style="color: white;"
                                href="#gift">Wedding Gift</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page"
                                style="color: white;"
                                href="#pesan">Kirim Pesan</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div class="home d-flex align-items-center" id="home">
            <div class="container">
                <div data-aos="fade-up" data-aos-duration="1500">
                    <h2 class="text-center text-white mb-4 bawah1"
                        style="font-family: 'Merriweather', serif;">The
                        Wedding Of</h2>
                    <h1 class="text-center text-white bawah2"
                        style="font-size: 3rem; font-family: 'Dancing Script', cursive;">Faras
                        & Irfan</h1>

                </div>
                <div class="d-flex justify-content-center" data-aos="fade-up" data-aos-duration="1500">
                    <div class="mt-2 mb-3"
                        style="width: 90%; height: 2.3px; background-color: white;"></div>
                </div>
                <div data-aos="fade-up" data-aos-duration="2000">
                    <h5 class="text-center text-white"
                        style="font-size: 2rem; font-family: 'Dancing Script', cursive;">TO
                        : Bapak/Ibu.Saudara/i</h5>
                </div>
                <div class="d-flex justify-content-center mt-4" data-aos="fade-up" data-aos-duration="2000">
                    <a href="#about"
                        class="btn bawah4 btn-invite px-4 rounded-5 text-white fw-semibold fs-6"
                        style="background-color: #FF9EAA; font-family: 'Merriweather', serif;"
                        id="playButton">
                        <i class="fa-regular fa-envelope me-1"></i>Buka Undangan
                    </a>

                    <!-- Audio yang akan diputar -->
                    <audio id="music" loop>
                        <source
                            src="music/y2mate.com - Kahitna  Menikahimu Official Lyric Video.mp3"
                            type="audio/mp3">
                        Your browser does not support the audio element.
                    </audio>
                </div>
            </div>
        </div>

        <div class="about" id="about"
            style=" background-color: #f4f4f4;">
            <div class="d-flex justify-content-end" data-aos="fade-left" data-aos-duration="1500">
                <img src="img/images__10_-removebg-preview.png" class="kanan1"
                    width="240"
                    alt>
            </div>
            <div class="d-flex justify-content-center mt-4">
                <img src="img/DSC_8934.JPG" width="300" data-aos="fade-up" data-aos-duration="1500"
                    class="rounded-circle shadow bawah2" alt>
            </div>
            <div class="container px-4 mt-5 pb-5">
                <div class="card text-center px-4 py-5 border-0">
                    <h3 class="fw-bold bawah1" data-aos="fade-up" data-aos-duration="1500"><i
                            class="fa-solid fa-cake-candles"></i> The
                        Wedding Of</h3>
                    <p class="fw-bold bawah2" style="color: #FF9EAA;" data-aos="fade-up" data-aos-duration="1500">Faras &
                        Irfan</p>
                    <p style="color: #6c757d; font-size: 14px;" class="bawah3" data-aos="fade-up" data-aos-duration="1500">
                        Ya Allah, dengan segala kesucian hati, kami bersujud
                        memohon Ridho-Mu, untuk menuju Sunnah Rasul-Mu,
                        membentuk keluarga yang sakinah, mawaddah, warohmah.
                        Berikanlah kami kekuatan dan kesabaran dalam setiap
                        ujian, serta jadikan rumah tangga kami penuh cinta,
                        kebahagiaan, dan kedamaian. Semoga kami selalu
                        saling menjaga, menghargai, dan mencintai, seperti
                        yang Engkau ajarkan dalam Al-Qur'an dan Sunnah.
                        Aamiin.</p>
                    <div class="d-flex justify-content-center">
                        <div class="mt-2 mb-3 bawah4" data-aos="fade-up" data-aos-duration="1500"
                            style="width: 60%; height: 2.3px; background-color: #FF9EAA;"></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="surat">
            <img src="img/images__3_-removebg-preview (1).png" width="190"
                class="kiri1" data-aos="fade-right" data-aos-duration="1500"
                alt>
            <div class="container px-4 mt-3 pb-3">
                <div class="card px-4 border-0 shadow-sm py-5 text-center">
                    <h3 class="fw-bold bawah1" data-aos="fade-up" data-aos-duration="1500"><i
                            class="fa-solid fa-book-quran"></i> QS
                        Ar-Rum</h3>
                    <p class="fw-bold bawah2" style="color: #FF9EAA;" data-aos="fade-up" data-aos-duration="1500">Ayat
                        21</p>
                    <p style="color: #6c757d;" class="bawah3" data-aos="fade-up" data-aos-duration="1500">
                        وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ
                        أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ
                        بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ
                        لَآيَاتٍ لِقَوْمٍ يَتَفَكَّرُونَ</p>
                    <p style="color: #6c757d; font-size: 14px;" data-aos="fade-up" data-aos-duration="1500"
                        class="bawah4">Dan di
                        antara tanda-tanda kekuasaan-Nya ialah Dia
                        menciptakan untukmu isteri-isteri dari jenismu
                        sendiri, supaya kamu cenderung dan merasa tenteram
                        kepadanya, dan dijadikan-Nya diantaramu rasa kasih
                        dan sayang. Sesungguhnya pada yang demikian itu
                        benar-benar terdapat tanda-tanda bagi kaum yang
                        berfikir.</p>
                    <div class="d-flex justify-content-center">
                        <div class="mt-2 mb-3 bawah4" data-aos="fade-up" data-aos-duration="1500"
                            style="width: 60%; height: 2.3px; background-color: #FF9EAA;"></div>
                    </div>
                </div>
            </div>
            <div class=" d-flex justify-content-end kanan1">
                <img src="img/images__3_-removebg-preview (1) - Copy.png" data-aos="fade-left" data-aos-duration="1500"
                    width="190" alt>
            </div>
        </div>

        <div class="bride" id="pengantin">
            <img src="img/images__3_-removebg-preview.png" class="kiri1" data-aos="fade-right" data-aos-duration="1500"
                width="200" alt>
            <div class="container px-4 pb-5 pt-3">
                <div class="text-center">
                    <h3 class="fw-bold mt-2 bawah1" data-aos="fade-up" data-aos-duration="1500"><i
                            class="fa-solid fa-user"></i> Pengantin</h3>
                    <p class="fw-bold bawah2" data-aos="fade-up" data-aos-duration="1500"
                        style="color: #FF9EAA;">Assalamualaikum
                        Wr. Wb.</p>
                    <p style="color: #6c757d; font-size: 14px;" class="bawah3" data-aos="fade-up" data-aos-duration="1500">
                        Dengan memohon Rahmat & Ridho Allah SWT, kami
                        bermaksud
                        mengundang Bapak/Ibu/Saudara/Saudari untuk
                        menghadiri
                        acara pernikahan :</p>
                    <div class="d-flex justify-content-center" data-aos="fade-up" data-aos-duration="1500">
                        <div class="mt-2 mb-3 bawah4"
                            style="width: 50%; height: 2.3px; background-color: #FF9EAA;"></div>
                    </div>
                </div>
                <div class="row mt-2">
                    <div
                        class="col-6 d-flex flex-column kanan1 justify-content-center">
                        <h3 style="margin-bottom: 1px;" data-aos="fade-right" data-aos-duration="1500" class="text-end">farasdiah_</h3>
                        <p class="text-end" data-aos="fade-right" data-aos-duration="1500"
                            style="color: #6c757d; margin-bottom: 7px;">Instagram</p>

                    </div>
                    <div class="col-6">
                        <a
                            href="https://www.instagram.com/farasdiah_/?hl=en" data-aos="fade-left" data-aos-duration="1500"
                            class="btn shadow-sm fs-1 d-flex align-items-center justify-content-center"
                            style="width: 60px; height: 60px; border: 2px solid #FF9EAA; color: #FF9EAA; background-color: transparent; border-radius: 50%;">
                            <i class="fa-brands fa-instagram" data-aos="fade-left" data-aos-duration="1500"></i>
                        </a>
                    </div>
                </div>
                <div class="mt-3 bawah2">
                    <div class="mt-2 mb-3"
                        style="width: 100%; height: 2.3px; background-color: #FF9EAA;" data-aos="fade-left" data-aos-duration="1500"></div>
                    <h3 style="margin-bottom: 1px;" data-aos="fade-up" data-aos-duration="1500">Faras Diah Utami, S.Pd</h3>
                    <p data-aos="fade-up" data-aos-duration="1500"
                        style="color: #6c757d; margin-bottom: 1px; font-size: 13px;">Putri
                        Pertama dari</p>
                    <p data-aos="fade-up" data-aos-duration="1500"
                        style="color: #6c757d; font-size: 13px; margin-bottom: 0;">Bapak
                        Firmansyah & Ibu Cucu</p>
                </div>
                <div class="d-flex justify-content-center mt-4">
                    <img src="img/images__7_-removebg-preview.png" data-aos="fade-up" data-aos-duration="1500"
                        class="bawah3"
                        width="100" alt>
                </div>
                <div class="row mt-4">
                    <div
                        class="col-6 kiri1 d-flex flex-column justify-content-center align-items-end">
                        <h3 style="margin-bottom: 1px;" data-aos="fade-right" data-aos-duration="1500">irfanhanif_</h3>
                        <p data-aos="fade-right" data-aos-duration="1500"
                            style="color: #6c757d; margin-bottom: 7px;">Instagram</p>

                    </div>
                    <div class="col-6">
                        <a data-aos="fade-up" data-aos-duration="1500"
                            href="https://www.instagram.com/irfan_hanif_99?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                            class="btn shadow-sm fs-1 d-flex align-items-center justify-content-center"
                            style="width: 60px; height: 60px; border: 2px solid #02a8f5; color: #02a8f5; background-color: transparent; border-radius: 50%;">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                    </div>
                </div>
                <div class="mt-3 d-flex flex-column align-items-end bawah2">
                    <div class="mt-2 mb-3" data-aos="fade-up" data-aos-duration="1500"
                        style="width: 100%; height: 2.3px; background-color: #02a8f5;"></div>
                    <h3 data-aos="fade-left" data-aos-duration="1500" style="margin-bottom: 1px;">M. Irfan Abdul 
                        Hanif, S.Pd</h3>
                    <p data-aos="fade-left" data-aos-duration="1500"
                        style="color: #6c757d; margin-bottom: 1px; font-size: 13px;">Putra
                        Pertama dari</p>
                    <p data-aos="fade-left" data-aos-duration="1500"
                        style="color: #6c757d; font-size: 13px; margin-bottom: 0;">Bapak
                        Saepulloh & Ibu Siti Suaebah</p>
                </div>

            </div>
        </div>

        <div class="date" id="tanggal">
            <div class="d-flex justify-content-end">
                <img src="img/images__3_-removebg-preview (2) - Copy.png"
                    class="kanan1" data-aos="fade-left" data-aos-duration="1500"
                    width="190" alt>
            </div>
            <div class="container px-4">
                <div class="text-center">
                    <h3 class="fw-bold mt-2 text-white bawah1" data-aos="fade-up" data-aos-duration="1500"
                        style="font-family: 'Merriweather', serif;"><i
                            class="fa-solid fa-map-location-dot"></i> Tanggal
                        & Tempat</h3>
                    <p class="text-white fw-light bawah1" data-aos="fade-up" data-aos-duration="1500"
                        style="color: #FF9EAA; font-family: 'Merriweather', serif; font-size: 14px;">Acara
                        Insya Allah akan dilaksanakan pada :</p>
                    <div class="pt-3">
                        <h1 data-aos="fade-up" data-aos-duration="1500"
                            style="font-family: 'Dancing Script', cursive; font-size: 2rem;"
                            class="text-white bawah2">Sabtu</h1>
                        <div class="d-flex justify-content-center">
                            <div class="mt-2 mb-3 bawah2" data-aos="fade-up" data-aos-duration="1500"
                                style="width: 80%; height: 2px; background-color: #fff;"></div>
                        </div>
                        <h1 class="text-white bawah2" data-aos="fade-up" data-aos-duration="1500"
                            style="font-family: 'Dancing Script', cursive; font-size: 2rem;">22
                            ⋅ 02 ⋅ 25</h1>
                        <div class="d-flex justify-content-center">
                            <div class="mt-2 mb-3 bawah2" data-aos="fade-up" data-aos-duration="1500"
                                style="width: 80%; height: 2px; background-color: #fff;"></div>
                        </div>
                        <h1 data-aos="fade-up" data-aos-duration="1500"
                            style="font-family: 'Dancing Script', cursive; font-size: 2rem;"
                            class="text-white bawah2">Akad Nikah</h1>
                        <p class="text-white fw-light bawah2" data-aos="fade-up" data-aos-duration="1500"
                            style="color: #FF9EAA; font-family: 'Merriweather', serif; font-size: 14px;">Pukul
                            08.00 - 10.00 WIB</p>
                        <div class="d-flex justify-content-center">
                            <div class="mt-2 mb-3 bawah2" data-aos="fade-up" data-aos-duration="1500"
                                style="height: 4rem; width: 2px; background-color: #fff;"></div>
                        </div>
                        <h1
                            style="font-family: 'Dancing Script', cursive; font-size: 2rem;" data-aos="fade-up" data-aos-duration="1500"
                            class="text-white bawah2">Resepsi</h1>
                        <p class="text-white fw-light bawah2" data-aos="fade-up" data-aos-duration="1500"
                            style="color: #FF9EAA; font-family: 'Merriweather', serif; font-size: 14px;">Pukul
                            10.00 WIB - Selesai</p>
                        <div class="d-flex justify-content-center">
                            <div class="mt-2 mb-3 bawah2" data-aos="fade-up" data-aos-duration="1500"
                                style="width: 80%; height: 2px; background-color: #fff;"></div>
                        </div>
                    </div>
                    <p class="text-white fw-light bawah3" data-aos="fade-up" data-aos-duration="1500"
                        style="color: #FF9EAA; font-family: 'Merriweather', serif; font-size: 18px;"><i
                            class="fa-solid fa-location-dot"></i> Bertempat
                        di :</p>
                    <p class="text-white fw-light bawah3" data-aos="fade-up" data-aos-duration="1500"
                        style="color: #FF9EAA; font-family: 'Merriweather', serif; font-size: 14px;">Jl. Pabuaran No.53, Nyomplong, Kec. Warudoyong, Kota Sukabumi, Jawa Barat 43131</p>
                        <iframe src="https://www.google.com/maps/embed?pb=!4v1738483962420!6m8!1m7!1sdfWrBMtPksYW7KOr5GJnFg!2m2!1d-6.930610154010547!2d106.9209658928277!3f55.65489616438002!4f-4.500985693094449!5f0.7820865974627469" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
        <img src="img/wave (2).svg" alt>

        <div class="story" id="story">
            <div class="container px-4">
                <div class="text-center">
                    <h3 class="fw-bold mt-2 bawah1" data-aos="fade-up" data-aos-duration="1500"><i
                            class="fa-solid fa-heart"></i> Love Story</h3>
                    <p class="fw-bold bawah1" data-aos="fade-up" data-aos-duration="1500"
                        style="color: #FF9EAA;">This is our love story</p>
                    <div class="d-flex justify-content-center">
                        <div class="mt-2 mb-3 bawah1" data-aos="fade-up" data-aos-duration="1500"
                            style="width: 30%; height: 2.3px; background-color: #FF9EAA;"></div>
                    </div>
                    <img src="img/DSC_8892.JPG" class="rounded-3 kiri1" data-aos="fade-up" data-aos-duration="1500"
                        width="100%"
                        height="250" style="object-fit: cover;" alt>
                    <div class="mt-2">
                        <h4 class="fw-bold mt-2 bawah1" data-aos="fade-up" data-aos-duration="1500">A. Awal beretemu</h4>
                        <p class="bawah2" data-aos="fade-up" data-aos-duration="1500"
                            style="color: #6c757d; font-size: 14px;">Tahun
                            2017 kami satu SMK tetapi tidak saling mengenal,
                            hanya Faras yang mengetahui Irfan karena Irfan
                            adalah Demisioner Ketua Remaja Masjid di SMKN 2
                            Sukabumi sedangkan Faras adalah anggota baru
                            remaja masjid SMKN 2 Sukabumi. Disisi lain Irfan
                            tidak mengetahui Faras sama sekali.
                        </p>
                        <div class="d-flex justify-content-center">
                            <div class="mt-2 mb-3 bawah3" data-aos="fade-up" data-aos-duration="1500"
                                style="width: 100%; height: 2.3px; background-color: #FF9EAA;"></div>
                        </div>
                        <img src="img/DSC_8837.JPG" class="rounded-3 kanan1"
                            width="100%" height="250" data-aos="fade-up" data-aos-duration="1500"
                            style="object-fit: cover;" alt>
                        <div class="mt-2">
                            <h4 class="fw-bold mt-2 bawah1" data-aos="fade-up" data-aos-duration="1500">B. Bertemu
                                kembali</h4>
                            <p class="bawah2" data-aos="fade-up" data-aos-duration="1500"
                                style="color: #6c757d; font-size: 14px;">Tahun
                                2020 kami dipertemukan kembali di perguruan
                                tinggi STKIP PGRI Sukabumi, kembali
                                mengikuti organisasi yang sama yaitu LDK
                                Ikro Iman, tetapi kali ini satu periode
                                sehingga kami saling mengenal.

                            </p>
                            <div class="d-flex justify-content-center">
                                <div class="mt-2 mb-3 bawah3" data-aos="fade-up" data-aos-duration="1500"
                                    style="width: 100%; height: 2.3px; background-color: #FF9EAA;"></div>
                            </div>
                            <img
                                src="img/WhatsApp Image 2025-02-10 at 20.42.23_adcd6ae3.jpg"
                                class="rounded-3 kiri1" width="100%"
                                height="250" data-aos="fade-up" data-aos-duration="1500"
                                style="object-fit: cover;" alt>
                            <div class="mt-2">
                                <h4 class="fw-bold mt-2 bawah1" data-aos="fade-up" data-aos-duration="1500">C.
                                    Pendekatan</h4>
                                <p class="bawah2" data-aos="fade-up" data-aos-duration="1500"
                                    style="color: #6c757d; font-size: 14px;">2022
                                    kami mulai mengenal satu sama lain lebih
                                    dekat.
                                </p>
                                <div class="d-flex justify-content-center">
                                    <div class="mt-2 mb-3 bawah3" data-aos="fade-up" data-aos-duration="1500"
                                        style="width: 100%; height: 2.3px; background-color: #FF9EAA;"></div>
                                </div>
                                <img data-aos="fade-up" data-aos-duration="1500"
                                    src="img/DSC_8841.JPG"
                                    class="rounded-3 kanan1" width="100%"
                                    height="250" style="object-fit: cover;"
                                    alt>
                                <div class="mt-2">
                                    <h4 class="fw-bold mt-2 bawah1" data-aos="fade-up" data-aos-duration="1500">D.
                                        Lamaran</h4>
                                    <p class="bawah2" data-aos="fade-up" data-aos-duration="1500"
                                        style="color: #6c757d; font-size: 14px;">20
                                        Oktober 2024 kami melangkah ke tahap
                                        yang serius. Kami melaksanakan
                                        lamaran yang disaksikan oleh kedua
                                        keluarga dan merencanakan pernikahan
                                        kami.

                                    </p>
                                    <div
                                        class="d-flex justify-content-center">
                                        <div class="mt-2 bawah3 mb-3" data-aos="fade-up" data-aos-duration="1500"
                                            style="width: 100%; height: 2.3px; background-color: #FF9EAA;"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <img src="img/wave (3).svg" alt>
        <div class="gallery pb-5" id="galeri">
            <div class="container px-4">
                <div class="text-center">
                    <h2 class="fw-bold text-white bawah1" data-aos="fade-up" data-aos-duration="1500"><i
                            class="fa-solid fa-image"></i> Gallery</h2>
                    <p class="fw-bold bawah2" data-aos="fade-up" data-aos-duration="1500"
                        style="color: #fff;">Faras & Irfan ><</p>
                    <div class="d-flex justify-content-center">
                        <div class="mb-2 bawah3" data-aos="fade-up" data-aos-duration="1500"
                            style="width: 40%; height: 2.3px; background-color: #FFF;"></div>
                    </div>
                    <p class="bawah4" data-aos="fade-up" data-aos-duration="1500"
                        style="color: #fff; font-size: 14px;">Semua kumpulan
                        foto foto kami <br> berdua selama ini</p>
                </div>
                <div>
                    <div class="row g-4 mt-3">
                        <div class="col-md-6 col-12">
                        </div>
                        <div class="col-md-6 col-12">
                            <div class="row g-4">
                                <div class="col-6">
                                    <img
                                        src="img/DSC_8837.JPG" data-aos="fade-up" data-aos-duration="1500"
                                        height="250"
                                        style="object-fit: cover;"
                                        class="rounded-3 kiri1 image-effect-big fade-in3"
                                        width="100%" alt>
                                </div>
                                <div class="col-6">
                                    <img data-aos="fade-up" data-aos-duration="1500"
                                        src="img/DSC_8841.JPG"
                                        height="250"
                                        style="object-fit: cover;"
                                        class="rounded-3 bawah1 image-effect fade-in"
                                        width="100%" alt>
                                </div>
                                <!-- <div class="col-6">
                                    <img data-aos="fade-up" data-aos-duration="1500"
                                        src="img/DSC_8844.JPG"
                                        height="250"
                                        style="object-fit: cover;"
                                        class="rounded-3 bawah2 image-effect fade-in2"
                                        width="100%" alt>
                                </div> -->
                                <!-- <div class="col-6">
                                    <img data-aos="fade-up" data-aos-duration="1500"
                                        src="img/DSC_8874.JPG"
                                        height="250"
                                        style="object-fit: cover;"
                                        class="rounded-3 bawah2 image-effect fade-in"
                                        width="100%" alt>
                                </div>
                                <div class="col-6">
                                    <img data-aos="fade-up" data-aos-duration="1500"
                                        src="img/DSC_8853.JPG"
                                        height="250"
                                        style="object-fit: cover;"
                                        class="rounded-3 bawah1 image-effect fade-in2"
                                        width="100%" alt>
                                </div> -->
                            </div>
                        </div>
                    </div>
                    <div class="row g-4 mt-1">
                        <div class="col-md-6 col-12 d-block d-md-none">
                        </div>
                        <div class="col-md-6 col-12">
                            <div class="row g-4">
                                <div class="col-6">
                                    <img src="img/DSC_8834.JPG" height="250" data-aos="fade-up" data-aos-duration="1500"
                                        style="object-fit: cover;"
                                        class="rounded-3 kanan1 image-effect-big fade-in3"
                                        width="100%" alt>
                                </div>
                                <div class="col-6">
                                    <img data-aos="fade-up" data-aos-duration="1500" src="img/DSC_8859.JPG" height="250"
                                        style="object-fit: cover;"
                                        class="rounded-3 bawah2 image-effect fade-in2"
                                        width="100%" alt>
                                </div>
                                <div class="col-6">
                                    <img src="img/DSC_8856.JPG" height="250" data-aos="fade-up" data-aos-duration="1500"
                                        style="object-fit: cover;"
                                        class="rounded-3 bawah1 image-effect fade-in"
                                        width="100%" alt>
                                </div>
                                <div class="col-6">
                                    <img src="img/DSC_8841.JPG" height="250" data-aos="fade-up" data-aos-duration="1500"
                                        style="object-fit: cover;"
                                        class="rounded-3 bawah1 image-effect fade-in2"
                                        width="100%" alt>
                                </div>
                                <!-- <div class="col-6">
                                    <img src="img/DSC_8875.JPG" height="250" data-aos="fade-up" data-aos-duration="1500"
                                        style="object-fit: cover;"
                                        class="rounded-3 bawah2 image-effect fade-in"
                                        width="100%" alt>
                                </div> -->
                            </div>
                        </div>
                    </div>
                    <div class="row g-4 mt-1">
                        <div class="col-md-6 col-12 d-block d-md-none">
                            <img src="img/DSC_8892.JPG" height="400" data-aos="fade-up" data-aos-duration="1500"
                                style="object-fit: cover;"
                                class="rounded-3 kanan1 image-effect-big fade-in3"
                                width="100%" alt>
                        </div>
                        <div class="col-md-6 col-12">
                            <div class="row g-4">
                                
                                <div class="col-6">
                                    <img src="img/DSC_8934.JPG" height="250" data-aos="fade-up" data-aos-duration="1500"
                                        style="object-fit: cover;"
                                        class="rounded-3 bawah1 image-effect fade-in2"
                                        width="100%" alt>
                                </div>
                                <div class="col-6">
                                    <img src="img/DSC_8936.JPG" height="250" data-aos="fade-up" data-aos-duration="1500"
                                        style="object-fit: cover;"
                                        class="rounded-3 bawah2 image-effect fade-in"
                                        width="100%" alt>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-12 d-none d-md-block">
                            <img data-aos="fade-up" data-aos-duration="1500" src="img/asa6.jpg" height="625"
                                style="object-fit: cover;"
                                class="rounded-3 image-effect-big fade-in3"
                                width="100%" alt>
                        </div>
                    </div>
                    <div class="row g-4 mt-1 pb-5">
                        <div class="col-md-6 col-12 d-block d-md-none">
                            <img src="img/DSC_8922.JPG" height="400" data-aos="fade-up" data-aos-duration="1500"
                                style="object-fit: cover;"
                                class="rounded-3 kanan1 image-effect-big fade-in3"
                                width="100%" alt>
                        </div>
                        <div class="col-md-6 col-12">
                            <div class="row g-4">

                            </div>
                        </div>
                        <div class="col-md-6 col-12 d-none d-md-block">
                            <img src="img/asa6.jpg" height="625" data-aos="fade-up" data-aos-duration="1500"
                                style="object-fit: cover;"
                                class="rounded-3 image-effect-big fade-in3"
                                width="100%" alt>
                        </div>
                    </div>
                </div>
            </div>

            <div class="gift" style="background-color: #f4f4f4;" id="gift">
                <div class="container px-4 py-5">
                    <div class="text-center">
                        <h3 class="fw-bold mt-2 bawah1" data-aos="fade-up" data-aos-duration="1500"><i
                                class="fa-solid fa-gift"></i> Wedding Gift</h3>
                        <p class="fw-bold bawah2 " data-aos="fade-up" data-aos-duration="1500"
                            style="color: #FF9EAA;">Kirim hadiah cashless</p>
                        <p style="color: #6c757d; font-size: 14px;"
                            class="bawah3" data-aos="fade-up" data-aos-duration="1500">
                            Doa restu Anda merupakan karunia yang sangat berarti
                            bagi kami. Dan jika memberi adalah ungkapan
                            terimakasih Anda, Anda dapat memberi kado secara
                            cashless</p>
                        <div class="d-flex justify-content-center">
                            <div class="mt-2 mb-4 bawah3 "data-aos="fade-up" data-aos-duration="1500"
                                style="width: 50%; height: 2.3px; background-color: #FF9EAA;"></div>
                        </div>
                        <div class="card p-3">
                            <h1 style="font-size: 6rem;" data-aos="fade-up" data-aos-duration="1500"><i
                                    class="fa-solid fa-money-check" style="color: #FF9EAA;"></i></h1>
                            <hr data-aos="fade-up" data-aos-duration="1500">
                            <h4 class="fw-bold" data-aos="fade-up" data-aos-duration="1500">No rek :</h4>
                            <h4 class="fw-bold" id="noRek" data-aos="fade-up" data-aos-duration="1500">7291373725</h4>

                            <!-- Tombol untuk menyalin -->
                            <button onclick="copyToClipboard()" class="btn text-white" data-aos="fade-up" data-aos-duration="1500" style="background-color: #FF9EAA;"><i class="fa-regular fa-clipboard me-2"></i>Salin Nomor
                                Rekening</button>
                            <hr>
                            <h4 class="text-secondary" data-aos="fade-up" data-aos-duration="1500">M. Irfan Abdul
                                Hanif</h4>
                            <h4 class="text-secondary" data-aos="fade-up" data-aos-duration="1500">Bank BSI</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div class="pesan" id="pesan">
                <div class="container px-4 pt-5">
                    <div class="text-center">
                        <h3 class="fw-bold mt-2 bawah1 text-white" data-aos="fade-up" data-aos-duration="1500"><i
                                class="fa-solid fa-comment"></i> Pesan
                            Kesan</h3>
                        <p class="fw-bold bawah2 btn" data-aos="fade-up" data-aos-duration="1500"
                            style="color: #FF9EAA; background-color: #fff;">Kirim pesan anda</p>
                        <p style="color: #6c757d; font-size: 14px;" data-aos="fade-up" data-aos-duration="1500"
                            class="bawah2 text-white">
                            Merupakan suatu kehormatan dan kebahagiaan bagi kami
                            apabila Anda berkenan hadir dan memberikan do'a
                            restunya untuk pernikahan kami</p>
                        <div class="d-flex justify-content-center">
                            <div class="mt-2 mb-4 bawah2"
                                style="width: 50%; height: 2.3px; background-color: #FF9EAA;"></div>
                        </div>
                        <div class="pt-2 d-flex justify-content-center">
                            <form action="#" class="form-group">
                                <div class="row gx-4">
                                    <div class="col-md-6 col-12">
                                        <div class="fade-in2">
                                            <input type="text"
                                                class="form-control bawah1 p-4 border-0"
                                                id="name" placeholder="Nama"
                                                style="background-color: #ededed;">
                                        </div>
                                        <div class="mt-4 fade-in2">
                                            <input type="text"
                                                class="form-control bawah2 p-4 border-0"
                                                id="email" placeholder="Email"
                                                style="background-color: #ededed;">
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-12 mt-4 mt-md-0">
                                        <div class="fade-in" id="pesan">
                                            <textarea
                                                class="form-control bawah3 p-4 border-0"
                                                id="message"
                                                style="height: 265px; resize: none; background-color: #ededed"
                                                placeholder="Pesan"></textarea>
                                        </div>
                                    </div>
                                    <div
                                        class="d-flex justify-content-center fade-in">
                                        <a href="https://wa.me/6289519094253"
                                            class="btn bawah4 mt-4 py-2 px-5"
                                            style="background-color: #FF9EAA; color: white;">Kirim
                                            Pesan</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="mt-3">
                            <p style="color: #6c757d; font-size: 14px;"
                                class="bawah4 text-white">
                                Atas kehadiran dan do'a restunya, kami <br>
                                ucapkan terima kasih.</p>
                            <hr class="bawah4 text-white">
                            <p style="color: #6c757d; font-size: 14px;"
                                class="bawah4 text-white">
                                Faras & Irfan</p>
                        </div>
                    </div>
                </div>
            </div>

            <img src="img/wave (3).svg" alt>
            <footer>
                <div class="container px-4 pt-md-0 pt-5">
                    <div class="row">
                        <div class="col-md-6 col-12 pe-5 fade-in3 bawah1">
                            <a class="navbar-brand fs-2 text-white"
                                href="#"
                                style="font-weight: 600;">Farhan Dika</a>
                            <div>
                                <p class="fw-semibold bawah2">Nama saya Farhan
                                    Dika
                                    Alsani, saya seorang Fullstack Web
                                    Developer, Website ini dibuat oleh saya,
                                    dibuat dengan setulus hati yg dalam dan
                                    penuh cinta </p>
                            </div>
                        </div>
                        <div class="col-md-2 col-12 mt-md-0 mt-5 fade-in">
                            <h3 class="fw-semibold bawah1">Contact</h3>
                            <ul class="gy-5 fw-semibold bawah2">
                                <li class><a
                                        href="https://wa.me/6289519094253"><i
                                            class="fa-brands fa-whatsapp"></i>
                                        WhatsApp</a></li>
                                <li class><a
                                        href="https://www.instagram.com/faaraai_/?hl=en"><i
                                            class="fa-brands fa-instagram"></i>
                                        Instagram</a></li>
                                <li class><a href="https://github.com/uiahan"><i
                                            class="fa-brands fa-github"></i>
                                        Github</a></li>
                                <li class><a
                                        href="https://l.instagram.com/?u=https%3A%2F%2Fbit.ly%2F40qVmkz%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAaYKbDfzD1LpdDgUaRzxsv_lsxhMNUsl5Blg40oxP5PiCXSQXoTMMthVDd8_aem_05g-twq5GNVIctkGhlprWQ&e=AT0M2rQ7oY_88ldp5dcgzVH1E0xaF66_1WOUwhcQxNMAlKiQvKDstCq0lx3aKsdCTd1wbWSgAeFx6N-yq__JPbnIoyotLZR1Ff3t-A"><i
                                            class="fa-brands fa-spotify"></i>
                                        Spotify</a></li>
                                <li class><a
                                        href="mailto:uiahansani@email.com"><i
                                            class="fa-solid fa-envelope"></i>
                                        Gmail</a></li>
                            </ul>
                        </div>
                        <div class="col-md-2 col-12 fade-in2 mt-md-0 mt-5">
                            <h3 class="fw-semibold bawah1">My Skills</h3>
                            <ul class="gy-5 fw-semibold bawah2">
                                <li class><a href="https://laravel.com/"><i
                                            class="fa-brands fa-laravel"></i>
                                        Laravel</a></li>
                                <li class><a href="https://flutter.dev/"><i
                                            class="fa-brands fa-flutter"></i>
                                        Flutter</a></li>
                                <li class><a href="https://tailwindcss.com/"><i
                                            class="fa-solid fa-wind"></i>
                                        Tailwind</a></li>
                                <li class><a href="https://getbootstrap.com/"><i
                                            class="fa-brands fa-bootstrap"></i>
                                        Bootstrap</a></li>
                                <li class><a href="https://wordpress.com/"><i
                                            class="fa-solid fa-wind"></i>
                                        Wordpress</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="mt-4 mb-4 fade-in bawah1"
                        style="width: 100%; height: 2px; background-color: #f5f5f5;"></div>
                    <div class="fade-in bawah2">
                        <p style="color: #f5f5f5;" class="text-center">AhanDika
                            | MadeWithLove💝 |
                            AsaMitaka</p>
                        <p style="color: #f5f5f5;" class="text-center">Copyright
                            © 2024 by
                            AhanDika</p>
                    </div>
                </div>
            </footer>
`;

document.body.innerHTML = htmlContent;


window.onscroll = function() {
    let navbar = document.querySelector('.navbar');
    let navbarBrand = document.querySelector('.navbar-brand');
    let navbarToggler = document.querySelector('.navbar-toggler-icon');
    let hr = document.querySelector('.hr');
    let navbarLinks = document.querySelectorAll('.nav-link'); // Pilih semua elemen dengan kelas 'nav-link'

    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        navbarBrand.classList.add('scrolled');
        navbarToggler.classList.add('scrolled');
        hr.classList.add('scrolled');
        navbarLinks.forEach(link => {
            link.classList.add('scrolled'); // Tambahkan kelas ke masing-masing 'nav-link'
        });
    } else {
        navbar.classList.remove('scrolled');
        navbarBrand.classList.remove('scrolled');
        navbarToggler.classList.remove('scrolled');
        hr.classList.remove('scrolled');
        navbarLinks.forEach(link => {
            link.classList.remove('scrolled'); // Hapus kelas dari masing-masing 'nav-link'
        });
    }
};

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        // Hapus kelas 'active' dari semua tautan
        document.querySelectorAll('.nav-link').forEach(nav => nav.classList.remove('active'));
        
        // Tambahkan kelas 'active' ke tautan yang diklik
        this.classList.add('active');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("div[id]"); // Pilih semua div dengan ID
    const navLinks = document.querySelectorAll(".nav-link");

    // Fungsi untuk mengatur kelas 'active' pada tautan
    function setActiveLink(id) {
        navLinks.forEach(link => {
            if (link.getAttribute("href") === `#${id}`) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    }

    // Intersection Observer
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveLink(entry.target.id);
                }
            });
        },
        {
            root: null, // viewport sebagai root
            threshold: 0.5, // 50% elemen harus terlihat
        }
    );

    // Pantau setiap div yang memiliki ID
    sections.forEach(section => {
        observer.observe(section);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.bawah1, .bawah2, .bawah3, .bawah4, .kiri1, .kanan1');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
});

const playButton = document.getElementById('playButton');
const music = document.getElementById('music');

// Tambahkan event listener pada tombol
playButton.addEventListener('click', function(event) {
    event.preventDefault();  // Mencegah link berpindah halaman (jika perlu)
    
    // Mainkan audio saat tombol diklik
    music.play().catch(error => {
        console.log('Autoplay gagal:', error);
    });
    
    // Jika ingin lanjutkan ke section tertentu setelah klik
    window.location.href = "#about";  // Ganti dengan navigasi halaman jika diperlukan
});

