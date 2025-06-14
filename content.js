(function () {
  const main = document.querySelector("main#content-begin") || document.querySelector("div#mainwrapper");
  if (!main) {
    console.warn("No <main id=\"content-begin\"> or <div id=\"mainwrapper\"> found.");
    return;
  }

  const links = main.querySelectorAll("a[href]");
  const categories = {
    "St Andrews links": [],
    "T4 links": [],
    "External links": [],
    "Relative links": [],
    "Anchor links": [],
    "Email – St Andrews": [],
    "Email – External": [],
    "Telephone links": []
  };

  const fileIconExtensions = ["doc", "docx", "pdf", "xls", "xlsx", "ppt", "pptx", "zip"];

  links.forEach(link => {
    const href = link.getAttribute("href");
    const text = link.textContent.trim() || "[no text]";
    const isAnchorLink = href.startsWith("#");
    const fullUrl = isAnchorLink ? href : new URL(href, window.location.href).href;

    let category = null;
    let style = {};

    const isStAndrews = fullUrl.includes("st-andrews.ac.uk") && !fullUrl.includes("t4live.st-andrews.ac.uk");

    if (fullUrl.startsWith("mailto:")) {
      if (fullUrl.includes("@st-andrews.ac.uk")) {
        category = "Email – St Andrews";
        style = { background: "#00539b", color: "white" };
      } else {
        category = "Email – External";
        style = { background: "#ffdf00", color: "#202024" };
      }
    } else if (fullUrl.startsWith("tel:")) {
      category = "Telephone links";
      if (href.includes(" ") || href.includes("%20")) {
        style = { background: "#bf5909", color: "white" }; // malformed tel link
      } else {
        style = { background: "#ffdf00", color: "#202024" }; // valid tel link
      }
    } else if (isAnchorLink) {
      category = "Anchor links";
      style = { background: "#111", color: "white" };
    } else if (fullUrl.includes("t4live.st-andrews.ac.uk/terminalfour/preview/")) {
      category = "T4 links";
      style = { background: "#c60c46", color: "white" };
    } else if (isStAndrews) {
      category = "St Andrews links";
      style = { background: "#00539b", color: "white" };
    } else if (href.startsWith("http")) {
      category = "External links";
      style = { background: "#ffdf00", color: "#202024" };
    } else {
      category = "Relative links";
      style = { background: "#111", color: "white" };
    }

    Object.assign(link.style, style);

    const ext = fullUrl.split(".").pop().toLowerCase().split(/[#?]/)[0];
    if (fileIconExtensions.includes(ext)) {
      const icon = document.createElement("img");
      icon.src = chrome.runtime.getURL(`icons/${ext}.png`);
      icon.alt = `${ext} icon`;
      icon.style.marginLeft = "4px";
      icon.style.verticalAlign = "middle";
      icon.style.height = "1em";
      icon.style.width = "1em";
      link.appendChild(icon);
    }

    if (fullUrl.startsWith("tel:")) {
      const icon = document.createElement("img");
      icon.src = chrome.runtime.getURL("icons/tel.png");
      icon.alt = "telephone icon";
      icon.style.marginLeft = "4px";
      icon.style.verticalAlign = "middle";
      icon.style.height = "1em";
      icon.style.width = "1em";
      link.appendChild(icon);
    }

    if (categories[category]) {
      categories[category].push({ text, url: fullUrl });
    }
  });

  console.group("T4 Preview Link Auditor – %s", window.location.href);
  for (const [cat, links] of Object.entries(categories)) {
    if (links.length) {
      console.group(cat);
      links.forEach(l => console.log("%s\n%s", l.text, l.url));
      console.groupEnd();
    }
  }
  console.groupEnd();
})();