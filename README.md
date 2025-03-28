![Test Status](https://github.com/skravco/count-on-me/actions/workflows/ci.yml/badge.svg)

---

# **Responsive Calculator with CI/CD & Automated Testing**

## **Overview**
This is a fully responsive, **calculator application** built with **HTML, CSS, and JavaScript**, designed to work on any device. The app supports **basic arithmetic** and **scientific functions** (sin, cos, log, sqrt). It is deployed as a **static site on Render**, with **GitHub Actions-powered CI/CD** to ensure high-quality code through automated **unit testing (Jest)** before deployment.

## **Features**
### **Core Functionality**
- **Basic Arithmetic**: Addition, subtraction, multiplication, division.
- **Scientific Functions**: Sine (`sin`), Cosine (`cos`), Logarithm (`log`), Square Root (`sqrt`).
- **Error Handling**: Prevents division by zero and invalid operations.

### **User Interface**
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices.
- **Dark Mode Support** (optional extension).
- **History Tracking**: Stores calculation history using `localStorage`.

### **CI/CD Pipeline**
- **Automated Testing with Jest**: Ensures all calculations function correctly.
- **GitHub Actions Workflow**: Runs tests automatically before deployment.
- **Deployment Hooks**: The app is **only deployed if all tests pass**.

### **Tech Stack**
| Technology  | Purpose  |
|-------------|---------|
| HTML, CSS, JavaScript | Frontend UI & Functionality |
| Jest | Unit Testing |
| GitHub Actions | CI/CD & Deployment Automation |
| Render | Hosting & Deployment |

---

## **Live Demo**
**[Try the Live App](https://count-on-me-e727.onrender.com/)**

---

## **Installation & Setup**
If you want to **run the project locally**, follow these steps:

### **Clone the Repository**
```bash
git clone https://github.com/skravco/count-on-me.git 
cd count-on-me
```

### **️Install Dependencies**
```bash
npm install
```
---
## **Automated Testing**
This project uses **Jest** to test all mathematical operations, including edge cases.

#### **Run Tests Manually**
```bash
npm test
```
---

## **CI/CD & Deployment**
### **Automated Deployment Process**
1. **Developer Pushes Code** → GitHub Actions **runs Jest tests**.
2. **If Tests Pass** → GitHub Actions **triggers a deployment** via **Render API**.
3. **Render Deploys the New Version** → Available live **without downtime**.

### **GitHub Actions Workflow**
```yaml
name: Run Tests & Deploy to Render

on: push

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Install Dependencies
        run: npm install
      - name: Run Jest Tests
        run: npm test

  deploy:
    needs: test  # Deploy only if tests pass
    runs-on: ubuntu-latest
    steps:
      - name: Trigger Render Deployment
        env:
          RENDER_API_KEY: ${{ secrets.RENDER_API_KEY }}
        run: |
          curl -X POST \
            -H "Authorization: Bearer $RENDER_API_KEY" \
            -H "Content-Type: application/json" \
            -d '{"serviceId": "srv-cvgkkodumphs73dj0vh0", "branch": "master"}' \
            https://api.render.com/v1/services/srv-cvgkkodumphs73dj0vh0/deploys
```

---

## **Why This Project Stands Out**
- ✅ **Industry-Standard CI/CD Practices**: GitHub Actions ensures **automated testing** before deployment.
- ✅ **Clean, Maintainable Code**: Designed for **scalability** and **ease of extension**.
- ✅ **Professional-Grade Deployment**: Fully automated, **zero-downtime deployment** on **Render**.
- ✅ **Test-Driven Development (TDD)**: All functions are **unit tested with Jest** before release.

---

## **Contact & Links**
 **Portfolio**: [skravco.github.io](https://skravco.github.io/)
 **LinkedIn**: [skravco](https://www.linkedin.com/in/skravco)

---

### **If you find this project insightful, please give it a star on GitHub!**
