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

## Link categories and highlight colours

* 🟦 BLUE: St Andrews links – Links to `*.st-andrews.ac.uk` (excluding t4live).
* 🟥 RED: T4 links – Links to other pages in T4 preview (e.g. https://t4live.st-andrews.ac.uk/...).
* 🟨 YELLOW: External links – Links to domains outside st-andrews.ac.uk, including valid mailto: and tel: addresses.
* ⬛ BLACK: Relative links – Links using relative paths (e.g. /students/).
* ⬛ BLACK: Anchor links – Links starting with # that point to on-page IDs.
* 🟧 ORANGE: Malformed tel: links – Telephone links containing spaces or %20.

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

## Extra highlighting

* 🟦 Email: `mailto:{anything}@st-andrews.ac.uk` @st-andrews.ac.uk → St Andrews (blue)
* 🟨 Email: `mailto:{anything}@any_other_domain.tld` → External (yellow)
* 🟨 Phone: `tel:` links → External (yellow) with telephone icon
* 🟧 Phone: `tel:` malformed links with spaces or `%20` → Highlighted in orange with telephone icon

## Console output

After activation, links are listed in the Console grouped by category and in order of appearance. Each link includes its text and full URL.
