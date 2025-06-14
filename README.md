# T4 Preview Link Auditor add-on for Firefox

<img src="icon128.png" alt="xls" width="128">


## Description

This tool audits all links within the

* `<main id="content-begin">` (T4 New) or
* `<div id="mainwrapper">` (T4 Old)

sections of T4 preview (or live) pages. It categorises, highlights and logs them in the browser console when you click the extension button.


## How to install in Firefox (permanently) 🛡️ Recommended

1. **Download**: Save the signed Firefox add-on file <a href="t4-preview-links-audit-1.13.3.xpi">t4-preview-links-audit-1.13.3.xpi</a>.
2. **Open Add-ons Manager**: In Firefox, go to `about:addons` or press `Ctrl + Shift + A`.
3. **Click the gear icon** ⚙️ near the top right and choose Install Add-on From File….
4. **Select the .xpi file** you downloaded and confirm the installation when prompted.
5. The **T4 Preview Link Auditor button** <img src="icon48.png" alt="xls" width="24"> will appear in your Firefox toolbar.

Tip: You only need to do this once. Unlike temporary installations, this version will remain installed after restarting Firefox.


## How to install in Firefox (temporarily)

1. **Download**: Click the green `Code` button and from the dropdown select Download ZIP.
2. **Unzip**: Extract the contents of the zip file to a folder on your computer.
3. **Open Add-ons Manager**: In Firefox, go to about:addons (or press Ctrl + Shift + A).
4. **Click the gear icon** ⚙️ near the top right and choose Debug Add-ons (or go directly to about:debugging#/runtime/this-firefox).
5. **Load Temporary Add-on**: Click Load Temporary Add-on and select the manifest.json file inside the folder you unzipped.
6. **The T4 Preview Link Auditor icon** <img src="icon48.png" alt="xls" width="24"> should now appear in your Firefox toolbar.

Note: This extension will disappear when you close Firefox. To use it again, repeat the steps above to load it temporarily.


## How to Use

1. Navigate to a preview page in T4. (It also works with live pages.)
2. Click the T4 Preview Link Auditor icon in the Firefox toolbar <img src="icon48.png" alt="icon" width="24">
3. All links within the main content will be highlighted using the colour categories below.
4. Open the Developer Console (F12 → Console tab) to view the audit results.
5. To reset the page and remove colour highlights, simply refresh the current page.

## Link categories and highlight colours

The extension highlights links using coloured backgrounds and optional icons. These colours help you quickly identify the type and destination of each link.

### 🟦 Blue – St Andrews links

* **Links** to `*.st-andrews.ac.uk` (excluding `t4live.st-andrews.ac.uk`)
* **Email addresses** ending in `@st-andrews.ac.uk`

### 🟥 Red – T4 links

* **Links** to `https://t4live.st-andrews.ac.uk/...`

### 🟨 Yellow – External links

* **Links** to domains outside `st-andrews.ac.uk`
* **Email addresses** at any **other domain** (for example `mailto:name@example.com`)
* **Valid telephone links** (for example `tel:+441234567890`) – adds a telephone icon <img src="icons/tel.png" alt="telephone" width="24">

### ⬛ Black – Internal page anchors and relative paths

* **Anchor links** starting with `#` (for example `#section2`)
* **Relative links** using `/` paths (for example `/students/`)

### 🟧 Orange – Malformed telephone links

* **`tel:` links** containing spaces or `%20` (for example `tel:+44 1234 567890`) – adds a telephone icon <img src="icons/tel.png" alt="telephone" width="24">


## Supported file types

The extension automatically adds a filetype icon after links ending with these extensions:

* <img src="icons/doc.png" alt="doc" width="24"> Microsoft Word `.doc`
* <img src="icons/doc.png" alt="doc" width="24"> Microsoft Word `.docx`
* <img src="icons/pdf.png" alt="pdf" width="24"> Portable Document Format `.pdf`
* <img src="icons/xls.png" alt="xls" width="24"> Microsoft Excel `.xls`
* <img src="icons/xls.png" alt="xlsx" width="24"> Microsoft Excel `.xlsx`
* <img src="icons/ppt.png" alt="ppt" width="24"> Microsoft PowerPoint `.ppt`
* <img src="icons/ppt.png" alt="ppt" width="24"> Microsoft PowerPoint `.pptx`
* <img src="icons/zip.png" alt="zip" width="24"> Zip file `.zip`

Links to these file types are styled according to their domain: St Andrews 🟦 (blue) or external 🟨 (yellow).


## Console output

After you click the extension button, links are listed in the browser’s Developer Console, grouped by category and in the order they appear on the page. Each entry includes the link text and its full URL.

1. Press `F12` or `Ctrl + Shift + I` (Windows/Linux) or `Cmd + Option + I` (Mac).
2. Click the Console tab in the Developer Tools panel.
3. You’ll see a grouped list of links.