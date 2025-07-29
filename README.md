# 🧪 Nix + TypeScript Boilerplate

This is the boilerplate I use for my TypeScript projects within my Nix environment.

---

## 📦 Requirements

- [Nix](https://nixos.org/download/) installed and working

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone git@github.com:Kennidyy/nix-typescript-boilerplate
cd nix-typescript-boilerplate/base
```

---

### 2. Enter the Nix Shell

```bash
nix-shell
```

This shell provides:

- Node.js  
- Yarn  
- TypeScript  
*(Imported from `common-packages.nix`)*

---

### 3. Initialize the project

```bash
yarn init -y
```

> The `package.json` and dependencies are already set.

---

### 4. Run the project

```bash
make build   # Compiles the TypeScript project  
make start   # Runs the app using ts-node
```

---

## 🛠️ Extra Commands

More personalized commands are available in the `Makefile` inside the `base` directory.

---

## 📝 Git Setup

Only the `base` folder is versioned. All other folders are ignored by the root `.gitignore`.

```gitignore
*
!base/
!base/**
!common-packages.nix
```

Inside `base`, another `.gitignore` ensures `node_modules` and other unnecessary files stay out of version control.

---

## 🔍 License

MIT — do whatever you want
