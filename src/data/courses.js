const courses = [
  {
    name: 'Introduction React',
    id: 'introduction-react',
    learnedPoints: [
      {
        title: 'React',
        description: 'Library javascript untuk membuat user interface (UI) yang interaktif dan cepat pada web maupun mobile. Alasan menggunakan react: Declarative : berfokus pada hal yang ingin kita capai, Component Based : tiap komponen punya tugas nya masing - masing, Learn Once, Write Anywhere : belajar sekali, tulis dimana saja',
      },
      {
        title: 'DOM',
        description: 'DOM manipulation adalah kunci dari web yang modern dan interaktif.',
      },
      {
        title: 'Kekurangan DOM Manipulatif',
        description: '1. DOM manipulation secara manual membuat code berantakan, Sulit mengingat DOM state sebelumnya, Jauh lebih lambat dari pada operasi javascript pada umumnya',
      },
      {
        title: 'Virtual DOM',
        description: 'Representasi dari UI berbentuk javascript object yang disimpan pada memori.',
      },
      {
        title: 'Tools dalam React',
        description: 'Yang perlu disiapkan dalam membuat React yaitu ; Browser, disini temen2 bebas memilih browser favorit masing - masing. Tapi pada course ini, aku akan menggunakan Google Chrome, Text Editor / IDE: Digunakan untuk membuat serta mengubah code pada aplikasi yang kita kembangkan. VS code, Command Line Shell: Sangat membantu bila kamu familiar dengan command-line shell. Pada windows, kita dapat menggunakan cmd & power shell. Kamu dapat menggunakan terminal window jika kamu menggunakan macOS atau linux.',
      },
    ],
    tasks: [
      {
        title: 'Tampilan Home',
        description: 'Dalam task ini, membuat tampilan home dengan react.',
      },
      {
        title: 'Tampilan Contact',
        description: 'Dalam task ini, membuat tampilan Contact dengan react.',
      },
      {
        title: 'Tampilan About',
        description: 'Dalam task ini, membuat tampilan About dengan react.',
      },
    ],
    links: [
      {
        url: 'https://github.com/anitadewi09',
        name: 'Github',
      },
    ],
    screenshots: [
      '/images/home.png',
      '/images/contact.png',
      '/images/about.png',
    ],
  },
  {
    name: 'React Fundamental',
    id: 'react-fundamental',
    learnedPoints: [
      {
        title: 'Apa itu JSX',
        description: 'JSX atau javascript to XML adalah sebuah extensi sintaks pada javascript yang sering digunakan di react karena lebih menggambarkan apa yang akan tampil Di user interface JSX akan menghasilkan react element. JSX dibuat berdasarkan fakta kalau logika rendering sangat terikat dengan logic UI adapun spesifikasi jenis dalam element react adalah kapitalisasi untuk komponen yang ada pada react dan lowercase untuk komponen bawaan. dalam react kita dapat menaruh ekspresi JS yang valid pada JSX dengan menggunakan kurung kurawal. setelah dikompilasi, JSX akan menjadi panggilan fungsi pada javascript biasa dan menjadi objek. Tanda tanda yang menentukan atribut dengan JSX: tanda kutip untuk menentukan string literal, kurung kurawal untuk menyematkan ekspresi javascript menggunakan camel case untuk konvensi penamaan.',
      },
      {
        title: 'React lifecycle',
        description: 'pada penggunaan react terdapat beberapa lifecycle metode yang umum digunakan yaitu; render = tahapan render ini adalah tahapan yang paling sering dipakai. sesuai dengan namanya, render dipakai untuk memunculkan component yang dibuat ke tampilan web, componentDidMount = tahapan ini biasanya dipanggil ketika componen sudah di render untuk pertama kalinya. didalam tahapan ini adalah tempat yang tepat untuk pemanggilan API dan diperbolehkan ada setstate, componentDidUpdate = tahapan ini dipanggil pada saat komponen mengalami update seperti state atau prop yang berubah, componentWillUnmount = tahapan ini dipanggil saat komponen yang kita render tadi sudah selesai dipakai dan akan dihancurkan. command ini cocok untuk clean up action.',
      },
      {
        title: 'Direktori Structure',
        description: 'React sendiri tidak pernah memberikan statement resmi perihal bagaimana pengelompokan file pada project. namun ada pendekatan umum yang cukup populer yang dapat kita gunakan seperti pengelompokan berdasarkan fitur atau rute, pengelompokan berdasarkan jenis file. saran untuk mendirektori strucuture adalah hindari terlalu banyak nesting jika memungkinkan batas maksimum adalah 3 sampai 4 nesting folder dalam satu project.',
      },
    ],
    tasks: [
      {
        title: 'todolist',
        description: 'Pada task ini, membuat sebuah aplikasi daftar tugas (todo list). Daftar barang itu memiliki 3 field yakni id (number), name (string), dan completed (boolean).',
      },
    ],
    links: [
      {
        url: 'https://github.com/anitadewi09',
        name: 'Github',
      },
    ],
    screenshots: [
      '/images/todolist.png',
    ],
  },
  {
    name: 'React Routing',
    id: 'react-routing',
    learnedPoints: [
      {
        title: 'Routing',
        description: 'React routing adalah sebuah modul dalam react yang berfungsi untuk melakukan proses navigasi pada SPA atau single page application. single page application merupakan salah satu jeni aplikasi website dimana hanya ada 1 halaman yang menangani semua aktivitas yang terjadi dalam aplikasi tersebut. MPA atau multi page application yang sering disebut dengan traditional web app adalah jenis aplikasi website dimana memerlukan halaman web lain saat membuat permintaan baru. Keunggulan single page application adalah Waktu loading website jauh lebih cepat, Tidak ada query tambahan ke server, Front-end yang cepat dan responsif, Meningkatkan pengalaman pengguna (user experience) sedangkan keunggulan dari multi page application adalah SEO website akan lebih mudah dioptimasi, Memudahkanmu untuk mengubah halaman tertentu untuk setiap kebutuhan yang berbeda, Menggunakan tools analisis seperti Google Analytics yang dapat terintegrasi langsung dengan website. Lalu kekurangan yang dimiliki dari SPA adalah  Tidak bagus dalam hal SEO, Berat saat di-load/buka pertama kali, Kurang aman dibanding dengan Website biasa, Masalah kompatibilitas browser. lalu kekurangan dari MPA adalah  Kecepatan download website jauh lebih lama jika dibandingkan dengan single page application, Kamu perlu mengintegrasikan antara front-end dan back-end, Lebih sering membutuhkan maintenance dan update, Mungkin akan lebih sering menemukan masalah performa pada website',
      },
      {
        title: 'URL Parameter',
        description: 'Parameter URL adalah suatu parameter yang nilainya ditetapkan secara dinamis di URL halaman. Hal ini memungkinkan rute untuk merender komponen yang sama saat meneruskan komponen tersebut ke bagian dinamis dari URL, sehingga dapat mengubah datanya berdasarkan parameter. adapun kegunaan url parameter adalah untuk mengatur paginasi, penyortiran dan penyaringan, pencarian, menggambarkan.',
      },
      {
        title: 'Hook routing',
        description: 'Dalam hook routing react terdapat bagian bagian yang didalamnya berisi (useHistory, useLocation, useParams, useRouteMatch). useHistory digunakan untuk memberi kita akses ke instance riwayat yang dapat Anda gunakan untuk bernavigasi. Contoh: length, go, goBack, goForward, Push useParams digunakan untuk mengembalikan objek pasangan kunci/nilai parameter URL. Gunakan untuk mengakses match.params dari <Route> saat ini. Sedangkan useRouteMatch digunakan untuk mencoba mencocokkan URL saat ini dengan cara yang sama seperti <Route>. Ini sebagian besar berguna untuk mendapatkan akses ke data kecocokan tanpa benar-benar merender <Route>.',
      },
    ],
    tasks: [
      {
        title: 'Tampilan Routing',
        description: 'Dalam task ini, membuat halaman routing dengan react.',
      },
    ],
    links: [
      {
        url: 'https://github.com/anitadewi09',
        name: 'Github',
      },
    ],
    screenshots: [
      '/images/tampilanrouting.JPG',
      '/images/halaman about routing.JPG',
    ],
  },
  {
    name: 'Event Handling',
    id: 'event-handling',
    learnedPoints: [
      {
        title: 'State',
        description: 'State adalah data private sebuah component. Data ini hanya tersedia untuk component tersebut dan tidak bisa diakses dari component lain. Pada state, data yang bisa dimodifikasi menggunakan setState, setiap terjadi modifikasi akan terjadi render ulang, bersifat Asynchronous, dipakai dalam class. ',
      },
      {
        title: 'Props vs State',
        description: 'Props bisa di function dan classs, read only, kegunaan seperti variable turunan dari component parent. Sedangkan State hanya bisa di class, bisa di modifikasi, variable dari component tersebut.',
      },
      {
        title: 'Stateful dan Stateless Component ',
        description: 'Stateful component adalah memiliki state. Component ini dibuat dengan class. Kelebihan dari class component adalah memiliki lifecycle. Sedangkan stateless Component adalah tidak memiliki state hanya prop. Umumnya component ini diuat dengan function karena codenya lebih ringkas.',
      },
      {
        title: 'Event Handling',
        description: 'Handling Event adalah suatu metode untuk menangani sebuah event atau aksi yang diberikan pengguna kepada suatu komponen. Event adalah suatu peristiwa yang dipicu oleh pengguna pada suatu komponen misalnya tombol ditekan. ',
      },
    ],
    tasks: [
      {
        title: 'Membuat daftar kegiatan dengan Event Handling',
        description: 'Dalam task ini, membuat daftar kegiatan yang dapat ditambahkan menggunakan inputan, Kemudian terdapat checklist pada setiap kegiatan pekerjaan, dapat mencentang checklist dan tombol hapus',
      },
    ],
    links: [
      {
        url: 'https://github.com/anitadewi09',
        name: 'Github',
      },
    ],
    screenshots: [
      '/images/even handling.png',
    ],
  },
  {
    name: 'React Hook',
    id: 'react-hook',
    learnedPoints: [
      {
        title: 'React Hooks',
        description: 'Hooks merupakan fitur baru di Reacct 16.8. Hooks dapat menggunakan state dan fitur React yang lain tanpa perlu menulis sebuah kelas.',
      },
      {
        title: 'Motivasi',
        description: 'Kesulitan untuk menggunakan kembali stateful logic antar komponen, Komponen kompleks menjadi sulit untuk dimengerti, Kelas membingungkan manusia dan mesin',
      },
      {
        title: 'Implementasi useState & useEffect di Component ',
        description: 'useState = Di dalam sebuah function component, kita tidak memiliki this, jadi kita tidak bisa menulis atau membaca this.state. Sebagai gantinya, kita dapat memanggil Hook useState secara langsung di dalam komponen kita. Sedangkan useEffect = Effect Hook memungkinkan Anda melakukan efek samping (side effects) didalam function component: Pengambilan data, pengaturan berlangganan (subscription) , dan perubahan manual DOM di dalam komponen React adalah beberapa contoh dari efek samping. Apakah Anda terbiasa menyebut memanggil operasi ini dengan sebutan efek samping (atau hanya “efek (effects)”) atau tidak, Anda mungkin pernah melakukannya di dalam komponen Anda sebelumnya. Jika Anda familiar dengan React class lifecycle methods, Anda dapat menganggap Hook useEffect sebagai componentDidMount, componentDidUpdate, dan componentWillUnmount yang disatukan.',
      },
      {
        title: 'Custom Hooks',
        description: 'Custom hooks memungkinkan kita mengekstrak komponen logika ke fungsi yang dapat digunakan lagi.',
      },
    ],
    tasks: [
      {
        title: 'Membuat React Hooks',
        description: 'Dalam task ini, mengubah class component pada assignment sebelumnya menjadi Function Component',
      },
    ],
    links: [
      {
        url: 'https://github.com/anitadewi09',
        name: 'Github',
      },
    ],
    screenshots: [
      '/images/react hook.png',
    ],
  },
  {
    name: 'React Form',
    id: 'react-form',
    learnedPoints: [
      {
        title: 'Form',
        description: 'Form merupakan salah satu hal krusial dalam pengembangan aplikasi website. Form dapat digunakan untuk menghandle inputan dari user. Form banyak kita jumpai saat login, mendaftarkan sesuatu, memberikan feedback, mengisi data dan masih banyak lainnya. Macam- macam form yang ada seperti Elemen input, Elemen textarea, Elemen select , dan masih banyak lagi.',
      },
      {
        title: 'Uncontrolled vs Controlled Component',
        description: 'Form controlled dan uncontrolled memiliki kelebihannya sendiri. Kita perlu mengevaluasi situasi kita secara spesifik dan memilih pendekatan apa yang cocok untuk kondisi kita. Jika formulir sangat sederhana dalam hal umpan balik UI, uncontrolled dengan refs sepenuhnya baik-baik saja. Kita tidak perlu mendengarkan apa yang dikatakan berbagai artikel bahwa uncontrolled itu "buruk". Lagipula kita selalu dapat bermigrasi ke controlled input.',
      },
      {
        title: 'Validation',
        description: 'Pada dasarnya, ada 3 alasan mengapa validasi form diperlukan yaitu: Mencari input data yang benar dan sesuai format. Sebuah web/aplikasi tidak dapat berjalan dengan benar, jika data yang diolah tidak sesuai dengan kebutuhan aplikasi, Melindungi akun pengguna. Misalnya, membuat pengguna untuk memasukkan data password yang aman, Melindungi sistem/aplikasi. Validasi form yang kuat dapat meminimalisir perilaku pengguna yang ingin meretas sistem/aplikasi.',
      },
    ],
    tasks: [
      {
        title: 'Membuat Halaman Form Sesuai dengan Soal',
        description: 'Dalam task ini, Membuat Halaman Form dengan react.',
      },
    ],
    links: [
      {
        url: 'https://github.com/anitadewi09',
        name: 'Github',
      },
    ],
    screenshots: [
      '/images/react form.png',
    ],
  },
  {
    name: 'Global State Management and Data fetching',
    id: 'global-state-and-data-fetching',
    learnedPoints: [
      {
        title: 'Global State Management',
        description: 'Redux adalah library untuk manajemen state global, Redux menggunakan struktur "one-way data flow", Redux menggunakan beberapa tipe code ',
      },
      {
        title: 'Redux Thunk',
        description: 'Thunk Middleware untuk redux yang memungkinkan kita untuk membuat action creator yang mengembalikan function bukan action. Digunakan untuk menghandle side effect logic seperti logic synchronous kompleks yang perlu mengakses store dan juga logic async seperti request data',
      },
      {
        title: 'Data Fetching',
        description: 'Cara fetching data pada react yaitu; Fetch API, Axios,dan React Query Library',
      },
    ],
    tasks: [
      {
        title: 'Membuat tampilan react redux-persist',
        description: 'Dalam task ini, penggunaan react react redux-persist.',
      },
      {
        title: 'Hasil kode penggunaan react react redux-persist',
      },
    ],
    links: [
      {
        url: 'https://github.com/anitadewi09',
        name: 'Github',
      },
    ],
    screenshots: [
      '/images/tampilan redux dengan store.png',
      '/images/code penggunaan redux persist.png',
    ],
  },
  {
    name: 'Testing',
    id: 'testing',
    learnedPoints: [
      {
        title: 'Testing',
        description: 'Testing adalah proses memverifikasi bahwa test assertions kita benar dan bahwa code kita tetap benar sepanjang masa aplikasi. Test assertion ini adalah ekspresi boolean yang mengembalikan nilai true kecuali ada bug di kode kita.',
      },
      {
        title: 'Manfaat Testing',
        description: 'Manfaat dari testing ini adalah sebagai berikut: 1. Untuk mengurangi bug dalam sebuah aplikasi (lebih untuk mencegah beberapa hal yang berpotensi menjadi bug), 2. Ketika aplikasi kita mempunyai coverage yang baik (mayoritas codebase tercover oleh test).',
      },
      {
        title: 'Kategori Testing',
        description: '1. Rendering component tress: Di dalam environment tes yang sudah disederhanakan dan tegaskan pada keluarannya, 2. Menjalankan aplikasi lengkap: Di dalam environment peramban (browser) asli. Ini dikenal sebagai tes "end-to-end". ',
      },
    ],
    tasks: [
      {
        title: 'Membuat file Testing',
        description: 'Dalam task ini, disediakan kode yang digunakan dalam pembuatan Testing.',
      },
    ],
    links: [
      {
        url: 'https://github.com/anitadewi09',
        name: 'Github',
      },
    ],
    screenshots: [
      '/images/testing.png',
    ],
  },
];

export default courses;
