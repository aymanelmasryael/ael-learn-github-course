# شرح الدورة — Learn GitHub

دليل شامل لكل المفاهيم والأوامر في دورة GitHub من الصفر إلى الاحتراف (23 وحدة).

---

## المستوى الأول: Git Foundation

### 1. Git Basics

**Git** هو نظام تحكم في الإصدارات (Version Control System) موزع ومفتوح المصدر، أنشأه Linus Torvalds عام 2005.

**المفاهيم الأساسية:**
- **Repository**: مستودع يحفظ المشروع وتاريخه الكامل
- **Commit**: لقطة حفظ للتغييرات في المستودع المحلي
- **Branch**: فرع مستقل للعمل على ميزة دون التأثير على main
- **Staging Area**: منطقة التجهيز قبل الحفظ (git add)
- **Working Directory**: المجلد المحلي الذي تعمل فيه

**الأوامر الأساسية:**
- `git init` — إنشاء مستودع Git جديد
- `git clone <url>` — نسخ مستودع موجود
- `git add <file>` — إضافة ملف إلى منطقة التجهيز
- `git commit -m "message"` — حفظ التغييرات
- `git status` — عرض حالة الملفات
- `git log` — عرض سجل الـ commits

### 2. Config & Setup

**إعداد الهوية:**
```
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

**SSH Keys:**
```
ssh-keygen -t ed25519 -C "your@email.com"
cat ~/.ssh/id_ed25519.pub
```
انسخ المفتاح وأضفه في GitHub > Settings > SSH and GPG keys.

**اختبار الاتصال:**
```
ssh -T git@github.com
```

### 3. Your First Repository

**سير العمل الأساسي:**
```
mkdir my-project && cd my-project
git init
echo "# My Project" > README.md
git add README.md
git commit -m "first commit"
```

**الربط مع GitHub:**
1. أنشئ مستودعاً فارغاً على GitHub (بدون README أو .gitignore)
2. اربط المستودع المحلي بالبعيد:
```
git remote add origin https://github.com/user/repo.git
git branch -M main
git push -u origin main
```

### 4. Branching & Merging

**إنشاء وتبديل الفروع:**
```
git branch feature-x          # إنشاء فرع
git checkout feature-x        # التبديل لفرع
git switch -c feature-x       # إنشاء وتبديل مباشر (اختصار)
```

**الدمج:**
```
git checkout main
git merge feature-x
```

**أنواع الدمج:**
- **Fast-forward**: عندما لا توجد commits جديدة على main
- **3-way merge**: عندما تباعدت الفروع ويحتاج commit دمج
- **Squash merge**: دمج كل commits في commit واحد

### 5. Working with Remotes

- `origin` — الاسم الافتراضي للمستودع البعيد
- `upstream` — المستودع الأصلي (في حالة Fork)
- `git push origin main` — دفع التغييرات للفرع الرئيسي
- `git pull origin main` — سحب التغييرات ودمجها
- `git fetch origin` — جلب التغييرات دون دمج

### 6. Pull Requests

Pull Request هي طلب دمج تغييرات من فرع إلى آخر على GitHub.

**خطوات PR:**
1. ادفع فرعك إلى GitHub
2. اذهب إلى Pull Requests > New Pull Request
3. اختر المصدر والهدف
4. اكتب وصفاً
5. اطلب مراجعة
6. بعد الموافقة، ادمج

**أنواع دمج PR:**
- **Merge commit**: يحافظ على التاريخ كاملاً
- **Squash and merge**: يدمج كل commits في commit واحد
- **Rebase and merge**: يعيد تطبيق commits بدون commit دمج

---

## المستوى الثاني: GitHub Ecosystem

### 7. Issues & Project Management

- **Issue**: تقرير خطأ أو طلب ميزة
- **Label**: وسم لتصنيف المشكلات
- **Milestone**: معلم يجمع Issues نحو هدف
- **Project Board**: لوحة كانبان لإدارة سير العمل
- **Issue Templates**: قوالب جاهزة للإبلاغ عن الأخطاء وطلب الميزات

### 8. GitHub Pages

استضافة مجانية للمواقع الثابتة. أنواع المواقع:
- **شخصي**: `username.github.io`
- **مشروع**: `username.github.io/repo`
- **منظمة**: `orgname.github.io`

**تفعيل:** Settings > Pages > اختيار الفرع والمجلد

**Jekyll:** إطار عمل للمواقع الثابتة مدعوم تلقائياً من GitHub Pages.

### 9. GitHub Actions

CI/CD مدمج في GitHub. ملفات الـ Workflow تكتب بصيغة YAML.

**هيكل Workflow:**
```yaml
name: CI
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm test
```

**المكونات:**
- **Event**: الحدث الذي يشغل الـ Workflow (push, pull_request)
- **Job**: مجموعة خطوات على نفس الـ Runner
- **Step**: أمر واحد أو Action
- **Runner**: الخادم الذي ينفذ (ubuntu-latest, windows-latest, macOS-latest)
- **Action**: وظيفة جاهزة من Marketplace

### 10. GitHub Projects

نظام إدارة مشاريع حديث بثلاث طرق عرض:
- **Table**: جدول بيانات مخصص
- **Board**: لوحة كانبان
- **Roadmap**: خريطة زمنية

### 11. Releases & Tags

**Semantic Versioning (SemVer):** `MAJOR.MINOR.PATCH`
- **MAJOR**: تغييرات غير متوافقة مع الإصدار السابق
- **MINOR**: إضافة ميزات مع بقاء التوافق
- **PATCH**: إصلاح أخطاء

```
git tag v1.0.0
git push origin v1.0.0
```

### 12. Security & Dependabot

- **Dependabot Alerts**: تنبيهات أمنية للتبعيات
- **Dependabot Updates**: تحديثات آلية للتبعيات
- **Code Scanning**: فحص أمني للكود
- **Secret Scanning**: كشف الأسرار المكشوفة
- **GPG Keys**: توقيع الـ commits
- **SSH Keys**: اتصال آمن بدون كلمة مرور

### 13. Discussions & Wikis

- **Discussions**: منتدى للنقاشات والأفكار والأسئلة (بدون استخدام Issues)
- **Categories**: Announcements, Ideas, Q&A, Show and Tell
- **Wiki**: وثائق المشروع — مستودع منفصل يمكن تحريره من GitHub أو محلياً
- **Wiki CLI**: `git clone https://github.com/user/repo.wiki.git`

### 14. GitHub Copilot

**ما هو Copilot؟** مساعد ذكاء اصطناعي للبرمجة من GitHub و OpenAI.

**الإعداد:**
- VS Code: تثبيت إضافة GitHub Copilot
- تسجيل الدخول بحساب GitHub
- `Tab` لقبول الاقتراح، `Ctrl+Enter` لعرض بدائل

**الاستخدام:**
- اكتب تعليقاً وصِف ما تريد — Copilot يُنشئ الكود
- اكتب دالة واسم — يقترح التنفيذ
- Copilot Chat: أسئلة باللغة الطبيعية

### 15. GitHub Codespaces

**ما هي Codespaces؟** بيئة تطوير سحابية كاملة (VS Code في المتصفح).

**المميزات:**
- تشغيل فوري بدون إعداد محلي
- إعدادات مخصصة عبر `.devcontainer/devcontainer.json`
- يتصل مباشرة بمستودعات GitHub

**الأمر:**
- زر Code > Codespaces > Create codespace
- أو استمرار العمل من أي جهاز

### 16. GitHub Desktop & Products

**GitHub Desktop:** واجهة رسومية لـ Git — commit, branch, sync, diff بدون CLI.

**GitHub Mobile:** تطبيق جوال لمراجعة PRs، إدارة Issues، دمج، رد على الإشعارات.

**الخطط:**
- **Free**: مستودعات غير محدودة، Actions (2000 د/شهر)، Pages
- **Team**: حماية الفروع، Code Owners، مراجعين إجباريين
- **Enterprise**: SAML/SSO، تقارير Compliance، دعم 24/7

---

## المستوى الثالث: Professional Mastery

### 17. Organizations & Teams

**إنشاء منظمة:** GitHub.com > + > New organization

**إدارة الفرق:** أنشئ فرقاً مثل Engineering, Design, DevOps وأعطهم صلاحيات للمستودعات.

**مستويات الصلاحية:**
- **Read**: قراءة فقط
- **Triage**: إدارة Issues و PRs
- **Write**: دفع للمستودع
- **Maintain**: إدارة الإعدادات
- **Admin**: تحكم كامل

**Organization Profile:** README خاص بالمنظمة يظهر في صفحتها الرئيسية.

### 18. Open Source Contributions

**الخطوات:**
1. اختر مشروعاً (ابحث عن `good-first-issue`)
2. Fork المستودع
3. Clone النسخة المنسوخة
4. أضف upstream
5. أنشئ فرعاً للميزة
6. عدّل وادفع
7. أنشئ Pull Request

**آداب المساهمة:**
- اقرأ CONTRIBUTING.md و CODE_OF_CONDUCT.md
- كن محترماً في التعليقات
- اشرح تغييراتك بوضوح في الـ PR
- استجب للمراجعات بصدر رحب

### 19. Advanced Git Workflows

**Git Flow:** فروع متعددة (main, develop, feature/*, release/*, hotfix/*).

**GitHub Flow:** فرع main واحد + فروع ميزات + PRs.

**أوامر متقدمة:**
```
git rebase -i HEAD~3    # دمج تفاعلي لآخر 3 commits
git cherry-pick <hash>  # تطبيق commit من فرع آخر
git stash               # حفظ مؤقت للتغييرات
git stash pop           # استعادة التغييرات المؤقتة
git reflog              # سجل كل العمليات (للتعافي من الأخطاء)
```

### 20. Professional Portfolio

**Profile README:** أنشئ مستودعاً باسم `username/username` وأضف README.md.

**المحتوى المقترح:**
```
# Hello 👋

مطور ويب متخصص في بناء تطبيقات الويب.

🔭 أعمل حالياً على Project X
🌱 أتعلم Rust
👯 أبحث عن تعاون في مشاريع مفتوحة المصدر
```

**Pinned Repositories:** اختر 6 مستودعات لعرضها في الملف الشخصي من Settings > Pinned.

### 21. Repository Management

**Branch Protection Rules:** إعدادات حماية للفروع المهمة:
- منع الدفع المباشر
- طلب مراجعات قبل الدمج
- طلب نجاح الـ Checks
- طلب تحديث الفرع

**CODEOWNERS:** ملف `.github/CODEOWNERS` لتعيين مراجعين تلقائياً:
```
*       @team-lead
/src/   @frontend-team
/api/   @backend-team
```

**Repository Templates:** أنشئ مستودعاً كنموذج لبدء مشاريع جديدة ببنية موحدة.

### 22. CI/CD Pipelines

**بناء Pipeline كامل:**
```yaml
name: CI/CD Pipeline
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 18
      - run: npm ci
      - run: npm test
  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v4
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

**البيئات:** development → staging → production. أضف Secrets لكل بيئة.

### 23. Professional Workflow

**الروتين اليومي:**
```
git checkout main
git pull origin main
git switch -c feature/task-name
# العمل على المهمة
git add .
git commit -m "add feature"
git push -u origin feature/task-name
# إنشاء PR على GitHub
```

**أفضل الممارسات:**
1. commit بشكل متكرر
2. اكتب رسائل commit واضحة
3. استخدم أسماء فروع وصفية
4. راجع كودك قبل PR
5. حافظ على تاريخ نظيف باستخدام rebase

**Git Hygiene:** لا تدفع ملفات غير ضرورية. استخدم `.gitignore`. نظف الـ commits المكررة بـ `git rebase -i`.

---

## Cheat Sheet (أوامر سريعة)

### الأوامر الأساسية

| الأمر | الوظيفة |
|-------|---------|
| `git init` | إنشاء مستودع |
| `git clone <url>` | نسخ مستودع |
| `git add .` | إضافة كل الملفات |
| `git commit -m "msg"` | حفظ التغييرات |
| `git status` | عرض الحالة |
| `git log --oneline` | سبل مختصر |
| `git diff` | عرض الفروقات |

### الفروع

| الأمر | الوظيفة |
|-------|---------|
| `git branch` | عرض الفروع |
| `git branch <name>` | إنشاء فرع |
| `git switch <name>` | تبديل فرع |
| `git switch -c <name>` | إنشاء وتبديل |
| `git merge <name>` | دمج فرع |
| `git branch -d <name>` | حذف فرع |

### البعيد

| الأمر | الوظيفة |
|-------|---------|
| `git remote -v` | عرض المستودعات البعيدة |
| `git push origin main` | دفع |
| `git pull origin main` | سحب ودمج |
| `git fetch origin` | جلب فقط |
| `git remote add origin <url>` | إضافة remote |

### متقدم

| الأمر | الوظيفة |
|-------|---------|
| `git rebase main` | إعادة تطبيق الـ commits |
| `git rebase -i HEAD~3` | دمج تفاعلي |
| `git stash` | حفظ مؤقت |
| `git stash pop` | استعادة مؤقت |
| `git cherry-pick <hash>` | تطبيق commit محدد |
| `git reflog` | سجل العمليات |
| `git tag v1.0.0` | إنشاء وسم |
| `git blame <file>` | من عدّل كل سطر |

---

© 2026 AEL Digital Studio — Ayman Elmasry
