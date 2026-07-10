# ورقة الغش — Git & GitHub Cheat Sheet

---

## إنشاء ونسخ

| الأمر | النتيجة |
|-------|---------|
| `git init` | إنشاء مستودع جديد |
| `git clone <url>` | نسخ مستودع موجود |
| `git clone <url> <name>` | نسخ مع تسمية المجلد |

---

## التعديلات الأساسية

```
git add <file>          # إضافة ملف لمرحلة التجهيز
git add .               # إضافة كل الملفات
git commit -m "رسالة"   # حفظ التغييرات
git commit -am "رسالة"  # add + commit للملفات المتعقبة
git restore <file>      # إلغاء التعديلات في ملف
git restore --staged <file>  # إزالة ملف من التجهيز
```

---

## الاستعلام

| الأمر | الوظيفة |
|-------|---------|
| `git status` | حالة الملفات |
| `git log` | سجل الـ commits |
| `git log --oneline` | سجل مختصر commit واحد بسطر |
| `git log --graph` | سجل بشكل شجري |
| `git diff` | فروقات غير مضافة |
| `git diff --staged` | فروقات في التجهيز |
| `git blame <file>` | من عدّل كل سطر ومتى |
| `git show <hash>` | تفاصيل commit معين |

---

## الفروع

```
git branch                  # عرض الفروع
git branch <name>           # إنشاء فرع
git switch <name>           # تبديل الفرع
git switch -c <name>        # إنشاء وتبديل مباشر
git checkout <name>         # الطريقة القديمة للتبديل
git checkout -b <name>      # الطريقة القديمة للإنشاء والتبديل
git merge <name>            # دمج فرع في الفرع الحالي
git branch -d <name>        # حذف فرع (آمن)
git branch -D <name>        # حذف فرع (قسري)
```

---

## المستودع البعيد

```
git remote -v                       # عرض الـ remotes
git remote add origin <url>         # إضافة remote
git push origin main                # دفع للفرع الرئيسي
git push -u origin <branch>         # دفع مع تعيين upstream
git push origin --delete <branch>   # حذف فرع بعيد
git pull origin main                # سحب ودمج
git fetch origin                    # جلب بدون دمج
```

---

## التراجع

```
git reset HEAD~1                # تراجع آخر commit مع الاحتفاظ بالتغييرات
git reset --hard HEAD~1         # تراجع آخر commit وحذف التغييرات
git revert <hash>               # إنشاء commit يعكس commit معين (آمن)
git restore <file>              # إلغاء التعديلات غير المضافة
```

---

## التخزين المؤقت

```
git stash               # حفظ التغييرات مؤقتاً
git stash list          # عرض المخازن المؤقتة
git stash pop           # استعادة وحذف آخر stash
git stash apply         # استعادة بدون حذف
git stash drop          # حذف آخر stash
git stash clear         # حذف كل الـ stashes
```

---

## الوسوم (Tags)

```
git tag                     # عرض الوسوم
git tag v1.0.0              # إنشاء وسم
git tag -a v1.0.0 -m "v1"  # وسم مع رسالة
git push origin v1.0.0      # دفع وسم محدد
git push origin --tags      # دفع كل الوسوم
git tag -d v1.0.0           # حذف وسم محلي
```

---

## متقدم

```
git rebase main                     # إعادة تطبيق commits فوق main
git rebase -i HEAD~3                # دمج تفاعلي لآخر 3
git cherry-pick <hash>              # تطبيق commit محدد
git reflog                          # سجل كل شيء (للتعافي)
git bisect start                    # بحث ثنائي عن commit يسبب خطأ
```

---

## إعدادات

```
git config --global user.name "Name"
git config --global user.email "email"
git config --global core.editor "code --wait"
git config --global alias.co checkout
git config --list
```

---

## ملف .gitignore — الأنماط الشائعة

```
# التبعيات
node_modules/
vendor/
__pycache__/

# البناء
dist/
build/
*.bundle.js

# البيئة
.env
.env.local

# نظام التشغيل
.DS_Store
Thumbs.db

# IDEs
.idea/
.vscode/
*.swp
*.swo
```

---

## GitHub Flow (سير العمل اليومي)

```
# 1. سحب آخر تحديث
git checkout main
git pull origin main

# 2. إنشاء فرع للمهمة
git switch -c feature/اسم-الميزة

# 3. العمل والتعديل
git add .
git commit -m "إضافة كذا"

# 4. الدفع
git push -u origin feature/اسم-الميزة

# 5. فتح Pull Request على GitHub
# 6. المراجعة والدمج
```

---

## قالب Pull Request

```markdown
## Description
What does this PR do?

## Changes
- [x] Feature
- [ ] Bug fix
- [ ] Refactor

## Testing
Steps to verify:
1. Go to...
2. Click...
3. See...

## Screenshots
<!-- If applicable -->
```

---

## قالب Issue (Bug Report)

```markdown
**Describe the bug**
A clear description.

**To Reproduce**
1. Go to '...'
2. Click on '...'

**Expected behavior**
What should happen.

**Screenshots**
If applicable.
```

---

© 2026 AEL Digital Studio — Ayman Elmasry
