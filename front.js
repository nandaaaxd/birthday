document.addEventListener("DOMContentLoaded", function () {
  const title = document.querySelector(".title");
  const paragraph = document.querySelector(".emphasis");
  const button = document.querySelector(".button1");
  const message = document.querySelector(".onbutton");
  const message1 = document.querySelector(".message1");
  const message2 = document.querySelector(".message2");
  const button2 = document.querySelector(".buttonnext");
  const button3 = document.querySelector (".buttonnext2");
  const button4 = document.querySelector (".buttonnext3");
  const buttonContainer = document.querySelector(".button-container");
  const img = document.createElement("img");
img.src = "img/Cat Love Robbery.jpeg";
img.alt = "Kucing lucu";
img.classList.add("center-img");
img.style.display = "none";


document.querySelector(".wrapper").appendChild(img);



  message.style.display = "none";
  message1.style.display = "none";
  message2.style.display = "none";
  button2.style.display = "none";
  button3.style.display = "none";
  button4.style.display = "none";
  
  
 

  button.addEventListener("click", function () {
    alert("readdyyyyyyyy??❤️");
    title.style.display = "none";
    paragraph.style.display = "none";
    button.style.display = "none";
    message.style.display = "block";
    message1.style.display = "none";
    message2.style.display = "none";
    button2.style.display = "block";
    button3.style.display = "none";

    const text = "Selamat ulang tahun sayangnya akuuu!!𐙚 ˚🍰 ⋆｡˚ ᡣ𐭩";
    let index = 0;
    message.innerHTML = "";

    function typeWriter() {
      if (index < text.length) {
        message.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 70);
      }
    }

    typeWriter();
    

  });

  button2.addEventListener("click", function () {
    alert("Silahkan dibaca ya");
    title.style.display = "none";
    paragraph.style.display = "none";
    button.style.display = "none";
    message.style.display = "none";
    message1.style.display = "none";
    message2.style.display = "none";
    button2.style.display = "none";
    message1.style.display = "block";
    
    const text1 = `Sayang, pertama aku mau ucapin terimakasih sudah terlahir ke dunia. Terimakasih sudah menjadi bagian dari hidup akuuu. 
    Aku bahagia karena aku dipertemukan sama kamu dan aku sangat-sangat bersyukur punya kamu. Semoga tahun ini dapat membawa lebih banyak kebahagiaan dan kesuksessan buat kamu.
    Semoga kamu selalu sehat, dan panjang umur.`;
    
    let index1 = 0;
    message1.innerHTML = "";
    
    function typeWriter1() {
      if (index1 < text1.length) {
        message1.innerHTML += text1.charAt(index1);
        index1++;
        setTimeout(typeWriter1, 50);
      }
    }
    
    typeWriter1();
    button3.style.display ="block";
  });


  button3.addEventListener("click", function () {
    alert("𓇼 ⋆.˚ 𓆉 𓆝 𓆡⋆.˚ 𓇼")
    title.style.display = "none";
    paragraph.style.display = "none";
    button.style.display = "none";
    message1.style.display = "none";
    button2.style.display = "none";
    button3.style.display = "none";
    button4.style.display = "block";
    buttonContainer.style.display = "flex";
    message2.style.display = "block";
    const text2 = `Sayang, harapan dan doa-doa aku buat kamu tuh banyak banget jadi aku gak bisa sebutin satu-satu. Jadi biarlah harapan dan doa-doa aku buat kamu aku sampain ke langit aja. Aku cuman mau banyak-banyak berterimakasih ke kamu. Terimakasih ya sudah selalu temenin aku. Terimakasih sudah jadi teman baik aku, sudah selalu mendukung dan mengerti aku.
        Aku sangat dan selalu menghargai moment-moment yang aku habiskan bersama kamu. Sayang, mulai dari tahun ini dan tahun-tahun kamu berikutnya, izinin aku buat nemenin kamu ya. Di seluruh proses kamu, di setiap langkah kamu. Izinkan aku buat hadir di setiap sedih dan senang kamu ya, izinin aku buat iringin perjalanan kamu. Aku bakal selalu bilang ke kamu kalo kamu itu gak pernah sendirian. Aku selalu percaya kamu.
        Percaya sama semua langkah-langkah yang kamu ambil. Terimakasih ya sayang, sudah selalu jadi lelaki yang kuat. Sudah selalu bisa tersenyum dibalik kerasanya hidup. Tapi kamu harus selalu inget, di depan aku kamu bisa tunjukin seberapa hancurnya kamu. dan di depan aku kamu gak perlu jadi orang yang selalu kuat. Aku sayang kamu, semoga kamu bisa selalu rasain seberapa sayang aku ke kamu ya.(づ> v <)づ♡`;
    
    let index2 = 0;
    message2.innerHTML = "";
    
    function typeWriter2() {
      if (index2 < text2.length) {
        message2.innerHTML += text2.charAt(index2);
        index2++;
        setTimeout(typeWriter2, 50);
      }
    }
    
    typeWriter2();
  });

  button4.addEventListener("click", function () {
    alert ("Sayang maaf ya aku kasih hadiahnya gak sekaligus");
    alert ("Semoga kamu suka ya sama apa yang aku kasih ke kamu");
    alert ("Mungkin cuman segitu yang bisa aku kasih ke kamu, nanti ada sih satu lagi, pas kamu ke sini")
    alert ("⸜(｡˃ ᵕ ˂ )⸝♡")
    img.style.display = "block";
    title.style.display = "none";
    paragraph.style.display = "none";
    button.style.display = "none";
    message1.style.display = "none";
    message2.style.display = "none";
    button2.style.display = "none";
    button3.style.display = "none";
    button4.style.display = "none";

  });
  

});

