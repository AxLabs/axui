# Contributing to AxUI

Thank you for considering contributing to AxUI! We welcome all contributions, whether it's fixing bugs, adding features, improving documentation, or providing feedback.

## 🚀 How to Contribute

1. **Fork the Repository** – Click the "Fork" button on GitHub and clone your copy locally:

   ```sh
   git clone https://github.com/axlabs/axui.git
   cd axui
   ```

2. **Create a Branch** – Use a descriptive name for your branch:

   ```sh
   git checkout -b feature-new-component
   ```

3. **Install Dependencies** – Ensure you have all required dependencies installed:

   ```sh
   npm install
   ```

4. **Make Changes** – Implement your feature or fix and commit your changes:

   ```sh
   git add .
   git commit -m "Added new component: Card"
   git push origin feature-new-component
   ```

5. **Submit a Pull Request (PR)** – Open a PR to the `main` branch and follow the PR template.

## 📜 Guidelines

- Follow the existing **code style** (ESLint + Prettier are enforced).
- Write **unit tests** for new components using Jest and React Testing Library.
- Ensure your changes do not introduce **breaking changes** unless necessary.
- Update **documentation** in Storybook and README if needed.
- Keep PRs **small and focused** – one feature or fix per PR.

## 🔍 Running Tests

Before submitting your PR, make sure all tests pass:

```sh
npm run test
```

Run Storybook locally to verify UI changes:

```sh
npm run storybook
```

## 🛠️ Reporting Issues

If you find a bug or have a feature request, please open an issue with:

- A clear description of the problem
- Steps to reproduce (if applicable)
- Expected behavior vs actual behavior

## 🏆 Recognizing Contributions

We appreciate all contributions! Your name will be added to the **Contributors** list in the repository.

---

Made with ❤️ by the AxUI Team.
