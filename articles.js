const articlesData = [
    {
      style: 'flex: 0',
      classes: 'article-style',
      href: 'articles\\Project+-Stream-Tool.html',
      imgSrc: './images/Article-images/Stream Tool/StreamTool.png',
      imgAlt: '',
      h1Style: 'flex: 100',
      h1Class: 'article-head',
      h1AnchorHref: 'articles\\Project+-Stream-Tool.html',
      h1AnchorClass: '',
      h1AnchorText: 'A Guide to the Newest Project+ Stream Tool Update',
      p1Style: 'display: block',
      p1Class: 'article-date',
      p1Text: 'Written by : ilikepizza107',
      p2Style: 'display: block',
      p2Class: 'article-date',
      p2Text: '3/25/24',
      p3Class: 'article-body',
      p3Text: `If you’ve tried to get into streaming Project+ in the last two years or so, you’ve probably seen or heard of my stream tool. While this old version of the tool was a great starting point for people, I had always wanted to go back and improve on it. Recently, this became a reality - and with this update, a whole slew of features were introduced. That said, I wanted to take some time to go over the changes introduced in the newest version of the tool here.`,
      readMoreHref: 'articles\\Project+-Stream-Tool.html',
      readMoreClass: 'article-read',
      readMoreText: 'Read More'
    },
    {
        style: 'flex: 0',
        classes: 'article-style',
        href: 'articles\\HDRTop50-5-1.html',
        imgSrc: 'https://github.com/pkzstar/plus-side/blob/main/images/Article-images/HDR%20Top%2050%202024/hdrankintro_11.png?raw=true',
        imgAlt: '',
        h1Style: 'flex: 100',
        h1Class: 'article-head',
        h1AnchorHref: 'articles\\HDRTop50-5-1.html',
        h1AnchorClass: '',
        h1AnchorText: 'HDRank 2023: 5-1',
        p1Style: 'display: block',
        p1Class: 'article-date',
        p1Text: 'Written by : <a href="https://twitter.com/getrektangles" target="_blank">getrektangles</a>, <a href="https://twitter.com/BigSoo22" target="_blank">BigSoo22</a>, <a href="https://twitter.com/TopHatSTL" target="_blank">TopHatSTL</a>, <a href="https://twitter.com/AnchorNJ" target="_blank">AnchorNJ</a>, <a href="https://twitter.com/MrWasTaken" target="_blank">MrWasTaken</a>, Mangachu',
        p2Style: 'display: block',
        p2Class: 'article-date',
        p2Text: '3/15/24',
        p3Class: 'article-body',
        p3Text: 'Announcing a special project: the HDRank North American 2023 Top 25 List! We\'ll be revealing the results of the first ever HDRank ballot to celebrate those who have put their all into competing in NA HewDraw Remix throughout 2023.',
        readMoreHref: 'articles\\HDRTop50-5-1.html',
        readMoreClass: 'article-read',
        readMoreText: 'Read More'
      },
      {
        style: 'flex: 0',
        classes: 'article-style',
        href: 'articles\\HDRTop50-15-6.html',
        imgSrc: 'https://github.com/pkzstar/plus-side/blob/main/images/Article-images/HDR%20Top%2050%202024/hdrankintro_11.png?raw=true',
        imgAlt: '',
        h1Style: 'flex: 100',
        h1Class: 'article-head',
        h1AnchorHref: 'articles\\HDRTop50-15-6.html',
        h1AnchorClass: '',
        h1AnchorText: 'HDRank 2023: 15-6',
        p1Style: 'display: block',
        p1Class: 'article-date',
        p1Text: 'Written by : <a href="https://twitter.com/getrektangles" target="_blank">@getrektangles</a>, <a href="https://twitter.com/BigSoo22" target="_blank">@BigSoo22</a>, <a href="https://twitter.com/TopHatSTL" target="_blank">@TopHatSTL</a>, <a href="https://twitter.com/AnchorNJ" target="_blank">@AnchorNJ</a>, <a href="https://twitter.com/MrWasTaken" target="_blank">@MrWasTaken</a>, Mangachu',
        p2Style: 'display: block',
        p2Class: 'article-date',
        p2Text: '3/14/24',
        p3Class: 'article-body',
        p3Text: 'Announcing a special project: the HDRank North American 2023 Top 25 List! We\'ll be revealing the results of the first ever HDRank ballot to celebrate those who have put their all into competing in NA HewDraw Remix throughout 2023.',
        readMoreHref: 'articles\\HDRTop50-15-6.html',
        readMoreClass: 'article-read',
        readMoreText: 'Read More'
      },
      {
        style: 'flex: 0',
        classes: 'article-style',
        href: 'articles\\HDRTop50-25-16.html',
        imgSrc: 'https://github.com/pkzstar/plus-side/blob/main/images/Article-images/HDR%20Top%2050%202024/hdrankintro_11.png?raw=true',
        imgAlt: '',
        h1Style: 'flex: 100',
        h1Class: 'article-head',
        h1AnchorHref: 'articles\\HDRTop50-25-16.html',
        h1AnchorClass: '',
        h1AnchorText: 'HDRank 2023: 25-16',
        p1Style: 'display: block',
        p1Class: 'article-date',
        p1Text: 'Written by : <a href="https://twitter.com/getrektangles" target="_blank">@getrektangles</a>, <a href="https://twitter.com/BigSoo22" target="_blank">@BigSoo22</a>, <a href="https://twitter.com/TopHatSTL" target="_blank">@TopHatSTL</a>, <a href="https://twitter.com/AnchorNJ" target="_blank">@AnchorNJ</a>, <a href="https://twitter.com/MrWasTaken" target="_blank">@MrWasTaken</a>',
        p2Style: 'display: block',
        p2Class: 'article-date',
        p2Text: '3/13/24',
        p3Class: 'article-body',
        p3Text: 'Announcing a special project: the HDRank North American 2023 Top 25 List! We\'ll be revealing the results of the first ever HDRank ballot to celebrate those who have put their all into competing in NA HewDraw Remix throughout 2023.',
        readMoreHref: 'articles\\HDRTop50-25-16.html',
        readMoreClass: 'article-read',
        readMoreText: 'Read More'
      },
    // Add more objects for additional list items if needed
  ];
  
  // Create ul element
  const ulElement = document.createElement('ul');
    
  // Iterate through the articles data array
  articlesData.forEach(article => {
    // Create li element
    const liElement = document.createElement('li');
    liElement.style.cssText = article.style;
    liElement.className = article.classes;
  
    // Create anchor element inside li
    const anchorElement1 = document.createElement('a');
    anchorElement1.href = article.href;
  
    // Create img element inside anchor
    const imgElement = document.createElement('img');
    imgElement.className = 'article-banner';
    imgElement.src = article.imgSrc;
    imgElement.alt = article.imgAlt;
    anchorElement1.appendChild(imgElement);
  
    // Create div element inside li
    const divElement = document.createElement('div');
  
    // Create h1 element inside div
    const h1Element = document.createElement('h1');
    h1Element.style.flex = article.h1Style;
    h1Element.className = article.h1Class;
  
    // Create anchor element inside h1
    const anchorElement2 = document.createElement('a');
    anchorElement2.href = article.h1AnchorHref;
    anchorElement2.className = article.h1AnchorClass;
    anchorElement2.textContent = article.h1AnchorText;
    h1Element.appendChild(anchorElement2);
  
    // Create paragraph elements inside h1
    const pElement1 = document.createElement('p');
    pElement1.style.cssText = article.p1Style;
    pElement1.className = article.p1Class;
    pElement1.textContent = article.p1Text;
    h1Element.appendChild(pElement1);
  
    const pElement2 = document.createElement('p');
    pElement2.style.cssText = article.p2Style;
    pElement2.className = article.p2Class;
    pElement2.textContent = article.p2Text;
    h1Element.appendChild(pElement2);
  
    // Append h1 to div
    divElement.appendChild(h1Element);
  
    // Create paragraph element inside div
    const pElement3 = document.createElement('p');
    pElement3.className = article.p3Class;
    pElement3.textContent = article.p3Text;
    divElement.appendChild(pElement3);
  
    // Create anchor element inside div
    const anchorElement3 = document.createElement('a');
    anchorElement3.className = article.readMoreClass;
    anchorElement3.href = article.readMoreHref;
    anchorElement3.textContent = article.readMoreText;
    divElement.appendChild(anchorElement3);
  
    // Append div to li
    liElement.appendChild(anchorElement1);
    liElement.appendChild(divElement);
  
    // Append li to ul
    ulElement.appendChild(liElement);
  });
  
  // Append ulElement to the element with id 'articlejs'
  const parentElement = document.getElementById('articlejs');
  parentElement.appendChild(ulElement);
  