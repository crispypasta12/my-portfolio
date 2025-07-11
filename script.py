import json
import requests
from datetime import datetime

API_KEY = "99b3546be0bf72919db53542eb0597c09ddfbef6c5b543239296e697f906bab0"
AUTHOR_ID = "tQTSPM0AAAAJ"

def fetch_citations():
    url = f"https://serpapi.com/search.json?engine=google_scholar_author&author_id={AUTHOR_ID}&api_key={API_KEY}&hl=en"
    response = requests.get(url)
    data = response.json()

    publications = data.get("articles", [])

    # Calculate total citations manually
    total_citations = sum(p.get("cited_by", {}).get("value", 0) or 0 for p in publications)

    papers = []
    for pub in publications:
        papers.append({
            "title": pub.get("title"),
            "citations": pub.get("cited_by", {}).get("value", 0) or 0
        })

    result = {
        "last_updated": datetime.utcnow().isoformat(),
        "totalCitations": total_citations,
        "papers": papers
    }

    with open("citations.json", "w") as f:
        json.dump(result, f, indent=2)

    print(f"✅ Saved citation data with {total_citations} total citations")

if __name__ == "__main__":
    fetch_citations()
