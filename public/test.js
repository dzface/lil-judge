const textBox = document.querySelector(".text-box");
const text =
  `떠나는 길에 네가 내게 말했지.
너는 바라는 게 너무나 많아.
잠깐이라도 널 안 바라보면.
머리에 불이 나버린다니까.
나는 흐르려는 눈물을 참고.
하려던 얘길 어렵게 누르고.
그래, 미안해라는 한 마디로.
너랑 나눈 날들 마무리했었지.
달디달고, 달디달고, 달디단, 밤양갱, 밤양갱.
내가 먹고 싶었던 건, 달디단, 밤양갱, 밤양갱이야.
`;
const content = "Hi im back";
console.log(text.length);


function typingAnimation(text, index = 0) {
  if (index < text.length) {
    textBox.innerHTML += text.charAt(index)=="." ? text.charAt(index)+"<br>" : text.charAt(index);
    setTimeout(() => typingAnimation(text, ++index), 20);
  };
};
typingAnimation(text);