(function () {
    console.log("window.location.href",window.location.href)
    if (!window.location.href.startsWith("https://news.google.com/home")) {
        return;
    }

  const style = document.createElement('style');
  style.innerText = `
    main {
      display: flex !important;
      flex-wrap: wrap !important;
      gap: 16px !important;
      margin-left: 0 !important;
      margin-right: 0 !important;
      width: 2545px !important;
      max-width: 100% !important;
    }

    main > :nth-child(2) {
      min-width: 850px !important;
      max-width: 850px;
      flex: 0 0 850px !important;
    }

    main > :nth-child(3) {
      min-width: 500px !important;
      width: 500px !important;
      flex: 0 0 500px !important;
    }

    main > :nth-child(4) {
        flex: 1 1 auto !important;
        min-width: 600px !important;
        max-width: 1163px !important;
        width: 100% !important;
    }

    main > :nth-child(5) {
      flex-basis: 100% !important;
    }

    .UJdj6, .ijmiec, .RAl1cf, .Pe8HEe, .Pk0wJc, .h3MDgc, .GZSHf {
      display: none !important;
    }

    .ryo59b {
      grid-template-columns: 800px;
    }

    .FvGFv {
      width: 458px !important;
    }

    .dm7YTc .UduD5b {
      background: none !important;
    }
  `;
  document.head.appendChild(style);
})();