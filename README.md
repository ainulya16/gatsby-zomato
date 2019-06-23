# Zomato using [GatsbyJS](https://www.gatsbyjs.org/)


## Table of Contents
- [Jawaban](#jawaban)
- [Instalasi](#instalasi)
- [Scripts](#available-scripts)
- [Styling](#styling)

## Fitur:
- [React](https://facebook.github.io/react/)
- [GatsbyJS](https://www.gatsbyjs.org/)
- [Ant Design](https://ant.design/)
- [Redux](http://redux.js.org/)
- [Redux Form](https://redux-form.com/)
- [Redux Saga](https://redux-saga.github.io/redux-saga/)
- [Reselect](https://github.com/reactjs/reselect)
- [ImmutableJS](https://facebook.github.io/immutable-js/)
- [Styled Components](https://www.styled-components.com/)


## Jawaban
1. Teknik slicing dapat menggunakan Zeplin. Dengan zeplin, developer dapat mengetahui secara langsung hex dari warna, ukuran dalam pixel dan lain-lain. Pada PSD sendiri terdapat fitur convert to html, sehingga developer dapat menggunakan script hasil dari konversi tersebut.
2. State management terdapat beberapa bagian, yaitu action, reducer, store. "action" digunakan untuk menjalankan fungsi, semisal meminta data ke server. Daata dari server kemudian di simpan ke store yang di jembatani oleh reducer yaitu sebagai pengolah state itu sendiri.
3. Untuk menilai kualitas frontend dapat dibagi berdasarkan kebutuhan sistem itu sendiri. Yang paling umum adalah pada segi performa dan desain User Interface dan Experience. 2 hal ini sangat penting karena user merasa nyaman dengan performa yang dihasilkan sehingga dapat menemukan apa yang dibutuhkan oleh user itu sendiri. Kemudian dari segi desain dan tatap muka, beberapa faktor psikologis sangat berpengaruh, misalkan warna tombol dan tata letak nya.
4. tantangan terbesar menurut saya adalah slicing dengan desain yang unik tetapi memiliki kerumitan yang tinggi.
5. Aturan penggunaan git, penggunaan branch master sebagai 'production', sedangkan develop hanya untuk fase test dan pengembangan. Jika ingin menambahkan fitu baru, cukup membuat branch baru dengan prefix 'feat/nama_fitur' dari sumber develop. Untuk bug fixing dengan prefix 'fix/bug_name' atau 'hotfix/crititcal_bug_name', sedangkan untuk test cukup 'test/test_name'.  Semua branch kecuali develop, tidak diperbolehkan merge ke branch 'master'. Hanya dari 'develop' yang bisa merge ke master. 
6. Saya bersedia onsite di Malang.

## Instalasi
Please make sure that `gatsby-cli` is installed before start. You can run `npm install -g gatsby-cli`. After install dependencies by running `npm install`, you can start by running `npm start` before open `localhost:8080` on your browser.

## Available Scripts

In the project directory, you can run:

### `gatsby develop` or `npm start`

Gatsby will start a hot-reloading development environment accessible by default at localhost:8000.

Try editing the JavaScript pages in src/pages. Saved changes will live reload in the browser.

### `gatsby build` or `npm run build`

Gatsby will perform an optimized production build for your site, generating static HTML and per-route JavaScript code bundles.

### `gatsby serve` or `npm run serve`

Gatsby starts a local HTML server for testing your built site. Remember to build your site using gatsby build before using this command.

## Styling

For styling this project use styled-components.
