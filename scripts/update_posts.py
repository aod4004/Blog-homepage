#!/usr/bin/env python3
"""네이버 블로그 RSS에서 새 글을 가져와 js/posts.js에 추가합니다.

사용법:  python3 scripts/update_posts.py
- 이미 있는 글(직접 고친 요약 포함)은 그대로 두고, 새 글만 앞에 덧붙입니다.
- 글 표지 그림은 images/posts/ 폴더에 내려받습니다.
"""
import json, re, urllib.request, html
import xml.etree.ElementTree as ET
from email.utils import parsedate_to_datetime
from pathlib import Path

BLOG_ID = "hanabee114"
ROOT = Path(__file__).resolve().parent.parent
POSTS_JS = ROOT / "js" / "posts.js"
IMG_DIR = ROOT / "images" / "posts"
PREFIX = "// 이 파일은 scripts/update_posts.py가 고칩니다. summary(요약)는 직접 고쳐도 됩니다.\nconst POSTS = "


def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.read()


def load_posts():
    if not POSTS_JS.exists():
        return []
    text = POSTS_JS.read_text(encoding="utf-8")
    return json.loads(text[text.index("["): text.rindex("]") + 1])


def excerpt(desc):
    # <img>, <br> 같은 HTML 태그만 지우고, <책 제목> 같은 꺾쇠는 살립니다.
    text = re.sub(r"</?[a-zA-Z][^>]*>", " ", desc)
    text = re.sub(r"\s+", " ", html.unescape(text)).strip()
    return text[:90].rstrip() + ("…" if len(text) > 90 else "")


def main():
    posts = load_posts()
    known = {p["id"] for p in posts}
    root = ET.fromstring(fetch(f"https://rss.blog.naver.com/{BLOG_ID}.xml"))
    IMG_DIR.mkdir(parents=True, exist_ok=True)
    added = []
    for item in root.iter("item"):
        link = item.findtext("guid").strip()
        pid = link.rstrip("/").split("/")[-1]
        if pid in known:
            continue
        desc = item.findtext("description") or ""
        thumb = ""
        m = re.search(r'<img[^>]+src="([^"]+)"', desc)
        if m:
            try:
                (IMG_DIR / f"{pid}.png").write_bytes(fetch(m.group(1)))
                thumb = f"images/posts/{pid}.png"
            except Exception as e:  # 그림을 못 받아도 글은 추가합니다.
                print("표지 그림을 받지 못했습니다:", pid, e)
        added.append({
            "id": pid,
            "title": html.unescape(item.findtext("title").strip()),
            "category": item.findtext("category").strip(),
            "date": parsedate_to_datetime(item.findtext("pubDate")).strftime("%Y-%m-%d"),
            "summary": excerpt(desc),
            "thumb": thumb,
            "link": link,
        })
    posts = added + posts
    posts.sort(key=lambda p: p["date"], reverse=True)
    POSTS_JS.write_text(PREFIX + json.dumps(posts, ensure_ascii=False, indent=2) + ";\n", encoding="utf-8")
    print(f"새 글 {len(added)}편을 추가했습니다. (전체 {len(posts)}편)")


if __name__ == "__main__":
    main()
