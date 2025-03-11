async function analyzeText() {
  const url = document.getElementById("inputText").value.trim();
  const resultDiv = document.getElementById("resultArea");

  if (!url.startsWith("http")) {
    resultDiv.innerHTML = "<p style='color:orange'>⚠️ Please enter a valid full URL (e.g., https://example.com)</p>";
    return;
  }

  resultDiv.innerHTML = "<p>Fetching website content using proxy...</p>";

  try {
    let text = await fetchWithProxies(url);
    if (!text) throw new Error("Failed to fetch content");

    text = text.toLowerCase();

    let foundKeywords = [];
    let foundUrlKeywords = [];
    let suspiciousLinks = [];
    let suspiciousScripts = [];

    judiKeywords.forEach(keyword => {
      if (text.includes(keyword.toLowerCase())) foundKeywords.push(keyword);
      if (url.toLowerCase().includes(keyword.toLowerCase())) foundUrlKeywords.push(keyword);
    });

    const aHrefRegex = /<a[^>]*href=["']([^"']+)["']/g;
    let match;
    while ((match = aHrefRegex.exec(text)) !== null) {
      const href = match[1];
      judiKeywords.forEach(keyword => {
        if (href.includes(keyword)) suspiciousLinks.push(href);
      });
    }

    const scriptSrcRegex = /<script[^>]*src=["']([^"']+)["']/g;
    while ((match = scriptSrcRegex.exec(text)) !== null) {
      const src = match[1];
      judiKeywords.forEach(keyword => {
        if (src.includes(keyword)) suspiciousScripts.push(src);
      });
    }

    const windowOpenRegex = /window\.open\s*\(\s*["']([^"']+)["']/g;
    while ((match = windowOpenRegex.exec(text)) !== null) {
      const openUrl = match[1];
      judiKeywords.forEach(keyword => {
        if (openUrl.includes(keyword)) suspiciousScripts.push(openUrl);
      });
    }

    const totalIndicators =
      foundKeywords.length + foundUrlKeywords.length + suspiciousLinks.length + suspiciousScripts.length;

    let html = "";

    if (totalIndicators > 0) {
      html += `<p style="color:red"><strong>⚠️ Gambling Detected</strong></p>`;
      html += `<table style="width:100%; border-collapse: collapse; margin-top: 10px">
        <thead>
          <tr style="background-color:#f2f2f2">
            <th style="padding:8px; border:1px solid #ccc">Type</th>
            <th style="padding:8px; border:1px solid #ccc">Details</th>
          </tr>
        </thead>
        <tbody>`;

      if (foundKeywords.length > 0) {
        html += `<tr>
          <td style="padding:8px; border:1px solid #ccc">Content Keywords</td>
          <td style="padding:8px; border:1px solid #ccc">${foundKeywords.join(", ")}</td>
        </tr>`;
      }

      if (foundUrlKeywords.length > 0) {
        html += `<tr>
          <td style="padding:8px; border:1px solid #ccc">URL Keywords</td>
          <td style="padding:8px; border:1px solid #ccc">${foundUrlKeywords.join(", ")}</td>
        </tr>`;
      }

      if (suspiciousLinks.length > 0) {
        html += `<tr>
          <td style="padding:8px; border:1px solid #ccc">Suspicious Links</td>
          <td style="padding:8px; border:1px solid #ccc">
            <ul style="padding-left: 16px; margin:0">${suspiciousLinks.map(link => `<li>${link}</li>`).join("")}</ul>
          </td>
        </tr>`;
      }

      if (suspiciousScripts.length > 0) {
        html += `<tr>
          <td style="padding:8px; border:1px solid #ccc">Suspicious Scripts</td>
          <td style="padding:8px; border:1px solid #ccc">
            <ul style="padding-left: 16px; margin:0">${suspiciousScripts.map(script => `<li>${script}</li>`).join("")}</ul>
          </td>
        </tr>`;
      }

      html += `<tr>
        <td style="padding:8px; border:1px solid #ccc"><strong>Total Indicators</strong></td>
        <td style="padding:8px; border:1px solid #ccc"><strong>${totalIndicators}</strong></td>
      </tr></tbody></table>`;
    } else {
      html = `<p style="color:green"><strong>✅ No gambling content detected</strong></p>`;
    }

    resultDiv.innerHTML = html;

  } catch (err) {
    resultDiv.innerHTML = `<p style='color:red'>❌ Failed to fetch content from the URL. The website may block scraping.</p>
    <p><strong>Suggestion:</strong> You can manually copy the HTML and analyze it.</p>`;
  }
}

async function fetchWithProxies(url) {
  try {
    const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`);
    const data = await response.json();
    return data.contents;
  } catch (e1) {
    try {
      const response2 = await fetch(`https://corsproxy.io/?${encodeURIComponent(url)}`);
      const data2 = await response2.text();
      return data2;
    } catch (e2) {
      return null;
    }
  }
}
