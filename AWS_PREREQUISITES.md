# AWS Deployment Prerequisites

This guide outlines the requirements and prerequisites for deploying the Snehal Sukhadeve Portfolio (Next.js Application) to Amazon Web Services (AWS).

## 1. AWS Account
*   **Active AWS Account:** You must have an active AWS account. [Sign up here](https://portal.aws.amazon.com/billing/signup).
*   **Permissions:** If you are not the root user, ensure your IAM user has permissions for **AWS Amplify** (AdministratorAccess-Amplify).

## 2. Source Code Repository
The recommended deployment method (AWS Amplify) connects directly to your version control system.
*   **Git Provider:** Your code should be hosted on **GitHub**, **GitLab**, **Bitbucket**, or **AWS CodeCommit**.
*   **Branch:** Decide which branch you want to deploy (usually `main` or `master`).

## 3. Environment Variables
The application relies on external services (Google Gemini AI) and requires environment variables to be set in the AWS console during deployment.

| Variable Name | Description | Required? | Source |
| :--- | :--- | :--- | :--- |
| `NEXT_PUBLIC_GEMINI_API_KEY` | API Key for Google Gemini AI. | **Yes** | [Google AI Studio](https://aistudio.google.com/) |

> **Important:** Since this variable is prefixed with `NEXT_PUBLIC_`, it will be embedded in the browser bundle. Ensure you have configured appropriate usage quotas/limits in your Google Cloud Console to prevent abuse.

## 4. Recommended Deployment Service: AWS Amplify
For Next.js applications, **AWS Amplify** is the preferred hosting solution on AWS.

### Why Amplify?
*   **Zero Config:** Automatically detects Next.js settings.
*   **CI/CD:** Deploys automatically whenever you push to Git.
*   **Global CDN:** Serves your site fast from edge locations.
*   **Free SSL:** Automatically provisions HTTPS certificates.

## 5. Local Build Verification
Before attempting to deploy to AWS, verify that the application builds successfully on your local machine.

**Requirements:**
*   **Node.js:** v18.17.0 or later (Next.js 14+ requirement).
*   **NPM:** Installed with Node.js.

**Verification Steps:**
1.  Open your terminal.
2.  Run the build command:
    ```bash
    npm run build
    ```
3.  **Success:** You should see a summary of the build output (e.g., `Route (app) Size First Load JS`).
4.  **Failure:** If the build fails locally, fix the errors before connecting to AWS.

## 6. (Optional) Custom Domain
If you wish to use a custom domain (e.g., `www.yourname.com`):
*   You need access to your domain registrar (GoDaddy, Namecheap, etc.) or AWS Route53.
*   AWS Amplify will provide DNS records (CNAME) that you must add to your domain's DNS settings.
